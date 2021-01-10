<template>
    <div class="content-header bg-light">
        <div class="container-fluid">
            <div class="row mb-2">
                <div class="col-sm-6">
                    <h1 class="m-0 text-dark">{{pageTitle}}</h1>
                </div>
                <div class="col-sm-6">
                    <ol class="breadcrumb float-sm-right">
                        <li class="breadcrumb-item"><a href="#">Admin</a></li>
                        <li class="breadcrumb-item active">{{pageTitle}}</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
name: "ContentHeader",
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