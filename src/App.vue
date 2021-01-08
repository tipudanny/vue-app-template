<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>

export default {
    components: {
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
