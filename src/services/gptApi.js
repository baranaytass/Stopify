import axios from 'axios';

const GPT_ENDPOINT = 'https://api.openai.com/v1/engines/davinci/completions';

class GptApi {
  constructor() {
    this.apiKey = process.env.VUE_APP_OPENAI_API_KEY;
  }

  async getSongRecommendation(playlistIds) {
    const prompt = this.generatePrompt(playlistIds);
    debugger // eslint-disable-line
    try {
      const response = await axios.post(
        GPT_ENDPOINT,
        {
          prompt,
          //max_tokens: 100,
          temperature: 0.7,
          //stop: '==="',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${this.apiKey}`,
          },
        }
      );

      const data = response.data;
      const recommendation = data.choices[0]?.text;

      return recommendation;
    } catch (error) {
      console.error('Error fetching song recommendation:', error);
      throw error;
    }
  }

  generatePrompt(playlistIds) {
    const playlistIdsText = playlistIds.map(id => `"${id}"`).join(', ');
    return `Track IDs: ${playlistIdsText}\n`;
  }
}

export default GptApi;
