<template>
    <div>
        <router-link to="/admin/about">About</router-link>
        <router-link to="/">News Feed</router-link>
        <h2>
            this is Admin Dashboard.
        </h2>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    components: {
        name: 'Dashboard',
    },
    mounted() {
        if ( localStorage.token !=''){
            this.isLogin = true
        }
    },
    data(){
        return{
            isLogin:false,
        }
    },
    methods:{

    }
}
</script>
<style scoped></style>