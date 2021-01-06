<template>
    <div>

    </div>
</template>
<script>


export default {
    components: {
        name: 'About',
    },
    mounted() {
        if (localStorage.token) {
            this.token = localStorage.token;
        }
    },
    data(){
        return{
            token:'',
        }
    },
}
</script>