<script setup>
import { RouterLink } from 'vue-router'
import UserProfile from './UserProfile.vue'
</script>

<template>
    <nav>
        <div class="navbar-inner">
            <div class="logo">Stopify</div>
            <div class="nav-buttons">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </div>
            <UserProfile></UserProfile>
        </div>
    </nav>
</template>
  
<script>
export default {
    name: 'NavigationBar',
};
</script>
  
<style scoped>
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background-color: #333;
    color: white;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    FONT-FAMILY: monospace;
    align-self: center;
    justify-self: center;
    margin-right: 124px;
}

.nav-buttons {
    display: flex;
    gap: 1rem;
}

/* NAVBAR GRID */
.navbar-inner {
display: grid;
grid-template-columns: 1fr 3fr 1fr;
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.logo { grid-area: 1 / 1 / 2 / 2; }
.nav-buttons { grid-area: 1 / 2 / 2 / 3; }
.user-profile { grid-area: 1 / 3 / 2 / 4; }

/* NAVBAR LINK DESIGN */

.nav-buttons {
  margin: 0;
  padding: 0;
  margin-bottom: 0;
}

.nav-buttons .active {
  color: #eb4d55 !important;
}

.nav-buttons a {
  text-decoration: none !important;
  display: inline-block;
}

.nav-buttons {
  display: inline-block;
}

.nav-buttons>a {
  margin-left: 15px;
  margin-right: 15px;
  padding: 20px 0px;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.7) !important;
  display: inline-block;
  text-decoration: none !important;
  position: relative;
}

.nav-buttons>a:before {
  content: "";
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  height: 1px;
  -webkit-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  -webkit-transition: .3s transform ease;
  -o-transition: .3s transform ease;
  transition: .3s transform ease;
  background: #fff;
}

.nav-buttons>a:hover {
  color: #fff !important;
}

.nav-buttons>a:hover:before {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

.nav-buttons>a.router-link-active {
  color: #fff !important;
}

.nav-buttons>a.router-link-active:before {
  -webkit-transform: scale(1);
  -ms-transform: scale(1);
  transform: scale(1);
}

</style>
  