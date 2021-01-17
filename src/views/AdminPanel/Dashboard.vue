<template>
    <div>

        <Header/>
        <router-view></router-view>
        <Footer/>

    </div>
</template>

<script>
import Header from "@/components/AdminPanel/Header";
import Footer from "@/components/AdminPanel/Footer";
export default {
    name: 'Dashboard',
    components: {
         Footer, Header,
    },
    mounted() {
        this.userInfo();
    },
    data(){
        return{
            pageTitle: this.$route.name,
        }
    },
    methods:{
        userInfo(){
            axios.post('http://currier.api/api/auth/me').then((data)=>{
                this.$store.dispatch('getUserInfo', data.data.user_type);
                //console.log(data.data.user_type)
            })
        }
    }
}
</script>
<style scoped>

</style>