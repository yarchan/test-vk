<template>
  <div class="home">
    <a :href="vkAuthUrl">VK</a>
  </div>
</template>

<script>

export default {
  setup(){
    const redirectUri = 'https://jolly-cendol-1d3a96.netlify.app/callback';
    const clientId = '51773806'; 

    const vkAuthUrl = `https://oauth.vk.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=friends&response_type=token&v=5.131`;
    return{
      vkAuthUrl
    }
  },

}
</script>
