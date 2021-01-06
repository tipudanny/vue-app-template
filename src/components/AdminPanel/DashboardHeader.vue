<template>
    <div>
        <li @click="$emit('dashboard','deactive'),isDashboardActive()">
            <router-link class="nav-link" to="/">Go Back to News Feed</router-link>
        </li>

    </div>
</template>

<script>
export default {
    name: "Header",
    mounted() {

    },
    data() {
        return {
            isDashboard:'',
            mainProps: { blank: true, blankColor: '#777', width: 55, height: 55, }
        }
    },
    methods:{
        isDashboardActive(){
            this.isDashboard = 'deactive';
            localStorage.isDashboard = 'deactive';
        }
    }
}
</script>

<style scoped>

</style>