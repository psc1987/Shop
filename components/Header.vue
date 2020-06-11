<template>
    <div class="header">
        <nuxt-link to="/">메인 페이지</nuxt-link>
         <nuxt-link to="/signup" v-if="!isLogin">회원가입</nuxt-link>
         <nuxt-link to="/signin" v-if="!isLogin">로그인</nuxt-link>
        <nuxt-link to="/mypage" v-if="isLogin">마이페이지</nuxt-link>
        </div >


</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex'


export default {
    computed : mapGetters({
        isLogin:'users/isLogin'
    }),

    async mounted () {
        let url = 'http://localhost:3000/api/v1.0/users/session-check'
        let data = await axios.get(url)
    
        if(data.data){
            this.isLogin= true
        }else{
            this.isLogin= false
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300&display=swap');


    .header{
        padding-top: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
        padding-right: 30px;
        font-family: 'Noto Sans KR', sans-serif;
      
        text-align: right;
    }
    a{
        padding : 10px;
    }

</style>
