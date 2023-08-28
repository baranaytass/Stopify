<template>
    <img src="./spotify.svg" :height="size" :width="size" alt="Icon" />
  </template>
  
  <script>
  export default {
    props: {
      size: {
        type: [Number],
        required: true
      }
    }
  };
  </script>
  
  <style>
  /* İstediğiniz ek stilleri buraya ekleyebilirsiniz */
  </style>
  