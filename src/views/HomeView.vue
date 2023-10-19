
<template>
  <div class="home">
    <a :href="vkAuthUrl">VK</a>
    <button @click="getFriend">click</button>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  methods:{
    getFriend(){
      const headers = { 'Authorization': this.accessToken }; 
      axios.get(`https://api.vk.com/method/friends.get?fields=photo_200_orig,first_name,last_name&access_token=${this.accessToken}&v=5.131`)
      .then(response => console.log(response))
      .catch(error=>{console.log(error);})
    }

  },
  // methods:{
  //   async vk(){
  //     await this.VK.init({
  //       apiId: this.AppID
  //     });
  //     this.VK.Api.call("groups.getMembers",{
  //       group_id:"club161429516",
  //       v: this.v,
  //       language:"ru"
  //     }, r=>{console.log(r);})
  //   }
  // },
  // methods:{
  //   getFriends(){
  //     VK.init({
  //       apiId: this.AppID
  //     });
  //     VK.Api.call("groups.getMembers",{
  //       group_id:"club161429516",
  //       v: this.v,
  //       language:"ru"
  //     }, r=>{console.log(r);})
  //   },
  // },
  mounted(){
    // axios.get(`https://oauth.vk.com/authorize?client_id=51773846&display=page&redirect_uri=http://http://localhost/callback&scope=friends&response_type=token&v=5.131&state=123456`)
    //   .then(response => {
    //     console.log(response);
    //   })
    //   .catch(function (error) { 
    //     console.log(error);
    //   });
  },
  // beforeMount(){
  //   this.vk
  //   VK.init({
  //       apiId: this.AppID
  //     });
  //   VK.Api.call("groups.getMembers",{
  //     group_id:"club161429516",
  //     v: this.v,
  //     language:"ru"
  //   }, r=>{console.log(r);})
  // },
  setup(){
    const fragment = window.location.hash.substring(1);
    const params = new URLSearchParams(fragment);
    const accessToken = params.get('access_token');
    const redirectUri = 'https://jolly-cendol-1d3a96.netlify.app';
    const AppID = '	51773806'; 
    const v = '5.154'
    const vkAuthUrl = `https://oauth.vk.com/authorize?client_id=51773846&display=page&redirect_uri=https://jolly-cendol-1d3a96.netlify.app&scope=friends&response_type=token&v=5.131&state=123456`;
    return{
      v,
      accessToken,
      AppID,
      vkAuthUrl
    }
  },

}
</script>
