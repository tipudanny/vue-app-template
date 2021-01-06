<template>
    <div>
        <nav class="desktop-menu navbar navbar-light navbar-expand-lg sticky-top">
            <div class="container">
                <a class="navbar-brand custom-nav"  href="index.html">
                    <img src="../../assets/demo.jpg" alt="logo" height="50px">
                </a>
                <button class="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#myNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="myNav">
                    <ul class="navbar-nav custom-hover ml-auto">
                        <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Services</a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" href="home-delivery.html">Home Delivery</a>
                                <a class="dropdown-item" href="pick-and-drop.html">Pick and Drop</a>
                                <a class="dropdown-item" href="warehousing.html">Warehousing</a>
                                <a class="dropdown-item" href="packaging.html">Packaging</a>
                            </div>
                        </li>
                        <li class="nav-item"><a class="nav-link" href="index.html#services-area">Services Area</a></li>
                        <li class="nav-item"><a class="nav-link" href="index.html#pricing">Pricing</a></li>
                        <li class="nav-item"><a class="nav-link" href="contact.html">Contact Us</a></li>
                        <li class="nav-item"><a class="nav-link" href="register.html">Register</a></li>
                        <li class="nav-item"><a class="nav-link" href="login.html">Login</a></li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/admin/dashboard">Dashboard</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
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

    }
}
</script>

<style scoped>

</style>