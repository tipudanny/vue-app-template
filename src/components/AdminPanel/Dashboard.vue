<template>
    <div>
        <div class="wrapper">
            <div class="content-wrapper">
                <ContentHeader/>
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <p>This is Admin Dashboard</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>


import ContentHeader from "@/components/AdminPanel/ContentHeader";
export default {
    components: {
        name: 'About', ContentHeader,
    },
    mounted() {
        if (localStorage.token !=''  && localStorage.token) {
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
<style scoped>

</style>