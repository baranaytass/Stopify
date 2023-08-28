// services/spotifyApi.js
import axios from 'axios';
import store from '../store';

const BASE_URL = 'https://api.spotify.com/v1';

const spotifyApi = axios.create({
  baseURL: BASE_URL,
});

export async function loginWithSpotify() {
  const scopes = [
    'user-read-private',        // Kullanıcının özel bilgilerini görüntüleme (giriş yaptıktan sonra ad, e-posta vb.)
    'playlist-read-private',    // Kullanıcının özel çalma listelerini görüntüleme
    'playlist-modify-public',   // Kullanıcının herkese açık çalma listelerini değiştirme
    'playlist-modify-private',  // Kullanıcının özel çalma listelerini değiştirme
    'user-library-read',        // Kullanıcının kütüphanesini görüntüleme
    'user-library-modify',      // Kullanıcının kütüphanesini değiştirme (ekleme, kaldırma)
  ];

  const authUrl = `https://accounts.spotify.com/authorize?client_id=${import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${import.meta.env.VITE_APP_REDIRECT_URI}&response_type=token&scope=${encodeURIComponent(scopes.join(' '))}`;

  // Kullanıcıyı Spotify kullanıcı girişi ekranına yönlendirme
  window.location.href = authUrl;
}

// Axios instance'a access token'ı eklemek için bir interceptor
spotifyApi.interceptors.request.use((config) => {
  const accessToken = store.getters.accessToken;
  if (accessToken) {
    config.headers['Authorization'] = `Bearer ${accessToken}`;
  }
  return config;
});

// Kullanıcının detaylı bilgilerini getiren fonksiyon
export async function getUserProfile() {
  try {
    const response = await spotifyApi.get('/me');
    return response.data;
  } catch (error) {
    console.error('Error getting user profile:', error);
    throw error;
  }
}

// Kullanıcının çalma listelerini getiren fonksiyon
export async function getUserPlaylists() {
  try {
    const response = await spotifyApi.get('/me/playlists');
    return response.data.items;
  } catch (error) {
    console.error('Error getting user playlists:', error);
    throw error;
  }
}

// Kullanıcının bütün kütüphanesini getiren fonksiyon
export async function getUserLibrary() {
  try {
    const response = await spotifyApi.get('/me/tracks', { params: { limit: 50 } });
    let tracks = response.data.items;

    // 50 şarkıyı aldıktan sonra, sayfalama için devam edelim
    while (response.data.next) {
      const nextPage = await spotifyApi.get(response.data.next);
      tracks = tracks.concat(nextPage.data.items);
      response.data.next = nextPage.data.next;
    }

    return tracks;
  } catch (error) {
    console.error('Error getting user library:', error);
    throw error;
  }
}

// Get playlist content
export async function getPlaylistContent(playlistId) {
  try {
    const response = await spotifyApi.get(`/playlists/${playlistId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching playlist tracks:', error);
    throw error;
  }
}