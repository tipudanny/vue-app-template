<template>
    <div id="app">

        <div  v-if="isDashboard != 'active' ">
            <NewsfeddHeader @dashboard="dashboard"/>
        </div>
        <div  v-if="isDashboard == 'active' ">
            <DashboardHeader @dashboard="dashboard"/>
        </div>

        <router-view></router-view>

        <div  v-if="isDashboard != 'active' ">
            <NewsfeddFooter />
        </div>
        <div  v-if="isDashboard == 'active' ">
            <DashboardFooter/>
        </div>

    </div>
</template>
<script>
import NewsfeddHeader from "@/components/HomeLayout/NewsfeddHeader";
import NewsfeddFooter from "@/components/HomeLayout/NewsfeddFooter";
import DashboardHeader from "@/components/AdminPanel/DashboardHeader";
import DashboardFooter from "@/components/AdminPanel/DashboardFooter";

export default {
    components: {
        NewsfeddHeader: NewsfeddHeader,
        NewsfeddFooter: NewsfeddFooter,
        DashboardHeader: DashboardHeader,
        DashboardFooter: DashboardFooter,
    },
    mounted() {
        if (localStorage.isDashboard) {
            this.isDashboard = localStorage.isDashboard;
        }
    },
    data(){
        return{
            isDashboard:'',
        }
    },
    methods:{
        dashboard(e){
            console.log(e);
            this.isDashboard = e;
        }
    }
}
</script>

<style scoped>
/*@import'~bootstrap/dist/css/bootstrap.css';*/
@import "assets/css/style.css";

</style>
