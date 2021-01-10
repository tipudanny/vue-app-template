<template>
    <div>
        <Carousel />
        <Card />
        <OurService />
        <AreaOfService />
        <CalculateCharge />
    </div>
</template>

<script>
import Carousel from "@/components/HomeLayout/Carousel";
import Card from "@/components/HomeLayout/Card";
import OurService from "@/components/HomeLayout/OurService";
import AreaOfService from "@/components/HomeLayout/AreaOfService";
import CalculateCharge from "@/components/HomeLayout/CalculateCharge";
export default {
    components: {
        name: 'Home',
        Carousel: Carousel,
        Card: Card,
        OurService: OurService,
        AreaOfService: AreaOfService,
        CalculateCharge: CalculateCharge,
    },
    mounted() {
        if (localStorage.token !=''  && localStorage.token){
            this.isLogin = true
            this.token = localStorage.token
        }
    },
    data(){
        return{
            isLogin:false,
            token:'',
        }
    },
    methods:{
        logout(){
            axios.post('http://currier.api/api/auth/logout').then((data)=>{
                if (data.data.code == 'logout') {
                    localStorage.token = '';
                    localStorage.expiration = '';
                    this.token = '';
                    this.isLogin = false;
                }
            }).catch(error => {});
        }
    }
}
</script>
<style scoped> </style>
