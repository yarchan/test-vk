<template>
  <div class="">
    <div class="">
      13244
    </div>
    <button @click="getFriend">click</button>
    {{ accessToken }}
  </div>
</template>

<script>
import axios from 'axios';

export default{
  setup(){
    const fragment = window.location.hash.substring(1);
    const params = new URLSearchParams(fragment);
    const accessToken = params.get('access_token');
    return{
      accessToken
    }
  },
  methods:{
    getFriend(){
      const headers = { 'Authorization': this.accessToken }; 
      axios.get(`https://api.vk.com/method/friends.get?fields=photo_200_orig,first_name,last_name&access_token=${this.accessToken}&v=5.131`)
      .then(response => console.log(response))
      .catch(error=>{console.log(error);})
    }

  }
}
</script>