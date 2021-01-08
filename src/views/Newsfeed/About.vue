<template>
    <div>
        <h2>
            This is Newsfedd About Page.
        </h2>
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