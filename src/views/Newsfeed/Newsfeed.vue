<template>
    <div>
        <div>
            <nav class="desktop-menu navbar navbar-light navbar-expand-lg sticky-top">
                <div class="container">
                    <a class="navbar-brand custom-nav"  href="#">
                        <img src="../../assets/images/logo/logo2.png" alt="logo">
                    </a>
                    <button class="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#myNav">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="myNav">
                        <ul class="navbar-nav custom-hover ml-auto">
                            <li class="nav-item">
                                <router-link class="nav-link" to="/">Home</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/service-area">Services Area
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/pricing">Pricing
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link class="nav-link" to="/contuct-us">Contact us</router-link>
                            </li>
                            <li class="nav-item" v-if="isLogin != true">
                                <router-link class="nav-link" to="/registration">Register
                                </router-link>
                            </li>
                            <li class="nav-item" v-if="isLogin != true">
                                <router-link class="nav-link" to="/login">Login
                                </router-link>
                            </li>
                            <li class="nav-item" v-if="isLogin == true">
                                <router-link class="nav-link" to="/admin">Dashboard</router-link>
                            </li>
                            <li  class="nav-item" v-if="isLogin == true">
                                <a class="nav-link" href="#" @click="logout()">Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        <router-view></router-view>

        <div class="">
            <footer class="footer-section mt-5 section-padding clearfix">
                <!--start newsletter section -->
                <div class="newsletter-section mb-5  clearfix">
                    <div class="container">
                        <div class="newsletter-content">
                            <div class="newletter-content-area">
                                <div class="row justify-content-center">
                                    <div class="col-xl-8 col-lg-8 col-md-10 col-sm-10">
                                        <div class="footer-column-newlatter">
                                            <!-- <h5 class="footer-column-title">NEWSLETTER</h5>
                                            <p>Don’t miss any updates of our Offer</p> -->
                                            <div class="newsletter mt-3">
                                                <form action="#" method="POST">
                                                    <div class="input-group">
                                                        <input type="search" placeholder="Email Address" class="form-control">
                                                        <div class="input-group-append">
                                                            <input type="submit"  value="Subscirbe" class="btn btn-light search-button">
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end newsletter section -->
                <!-- footer-top -->
                <div class="footer-top">
                    <div class="container">
                        <div class="row border-bottom pb-5">
                            <div class="col-xl-4 col-lg-4 col-md-6 mt-5 mt-lg-0 col-sm-12 text-center text-sm-left">
                                <div class="footer-bottom-first-column">
                                    <img src="../../assets/images/logo/logo2.png" alt="">
                                    <ul class="mt-3">
                                        <li>5/1-B, Moneshwar Road, Zigatola, Dhaka-1209</li>
                                        <li><a href="mailto:info@suppermanbd.com">E-mail: info@suppermanbd.com</a></li>
                                        <li><a href="tel:09611-989898">Hotline: 09611-989898</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 text-center text-sm-left">
                                <div class="footer-column">
                                    <h5 class="footer-column-title">services</h5>
                                    <ul>
                                        <li><a href="#">Home Delivery</a></li>
                                        <li><a href="#">Warehousing</a></li>
                                        <li><a href="#">Pick and Drop</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-3 col-lg-3 col-md-6 col-sm-6 mt-5 mt-sm-0 text-center text-sm-left">
                                <div class="footer-column">
                                    <h5 class="footer-column-title">EARN</h5>
                                    <ul>
                                        <li><a href="#">Become Marchent</a></li>
                                        <li><a href="#">Become Rider</a></li>
                                        <li><a href="#">Become Delivery Man</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-xl-2 col-lg-2 col-md-6 mt-5 mt-lg-0 col-sm-6 text-center text-sm-left">
                                <div class="footer-column">
                                    <h5 class="footer-column-title">COMPANY</h5>
                                    <ul>
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Our Goal</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- footer bottom -->
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row mt-5">
                            <div class="col-xl-8 col-lg-8 col-md-8 col-sm-12 mt-5 mt-md-0">
                                <div class="footer-bottom-second-column">
                                    <p>&copy; 2016 - 2019 SuppermanBD Courier. All right reserved.</p>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12 text-center text-md-right text-right mt-5 mt-md-0">
                                <div class="footer-bottom-third-column">
                                    <div class="footer-social-icon">
                                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                                        <a href="#"><i class="fab fa-instagram"></i></a>
                                        <a href="#"><i class="fab fa-twitter margin-right"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
export default {
    components: {
        name: 'Newsfeed',
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
        logout(){
            axios.post('http://currier.api/api/auth/logout').then((data)=>{
                if (data.data.code == 'logout') {
                    localStorage.token = '';
                    localStorage.expiration = '';
                    this.token = '';
                    this.isLogin = false;
                }
            }).catch(error => {});
        }
    }
}
</script>
<style scoped> </style>
