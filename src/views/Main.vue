
<template>
  <div class="home">
    <!-- <GetFriends/> -->
    <router-view/>
  </div>
</template>

<script>
import GetFriends from '../components/get-friends.vue'

export default {
  components:{
    GetFriends
  }
}
</script>
