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
    },
    data(){
        return{
            pageTitle: this.$route.name,
        }
    },
    methods:{

    }
}
</script>
<style scoped>

</style>