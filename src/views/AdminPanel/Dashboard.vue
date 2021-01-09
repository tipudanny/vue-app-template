<template>
    <div>
        <Header/>
        <div class="wrapper">
            <div class="content-wrapper">
                <div class="content-header bg-light">
                    <div class="container-fluid">
                        <div class="row mb-2">
                            <div class="col-sm-6">
                                <h1 class="m-0 text-dark">Starter Page</h1>
                            </div>
                            <div class="col-sm-6">
                                <ol class="breadcrumb float-sm-right">
                                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                                    <li class="breadcrumb-item active">Starter Page</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
            <aside class="control-sidebar control-sidebar-dark">
                <div class="p-3">
                    <h5>Title</h5>
                    <p>Sidebar content</p>
                </div>
            </aside>
        </div>

        <Footer/>
    </div>
</template>

<script>
import Header from "@/components/AdminPanel/Header";
import Footer from "@/components/AdminPanel/Footer";
export default {
    components: {
        name: 'Dashboard', Footer, Header,
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
<style scoped>

</style>