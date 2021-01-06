<template>
    <div>
        <Header v-on:dashboard="$emit('dashboard','active')"/>
        <router-view/>
        <Footer />
    </div>
</template>

<script>
import Header from "@/components/HomeLayout/Header";
import Footer from "@/components/HomeLayout/Footer";
export default {
    components: {
        name: 'Newsfeed',
        Header: Header,
        Footer: Footer,
    },
    mounted() {

    },
    data(){
        return{

        }
    },
    methods:{

    }
}
</script>
<style scoped></style>