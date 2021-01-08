<template>
    <div>
        <nav class="desktop-menu navbar navbar-light navbar-expand-lg sticky-top">
            <div class="container">
                <a class="navbar-brand custom-nav"  href="#">
                    <img src="../assets/images/logo/logo2.png" alt="logo">
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
        <section class="registration-form-section pt-4 clearfix">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-xl-10 col-lg-11 col-md-12 ">
                        <div class="registration-form">
                            <div class="row">
                                <div class="col-xl-6 col-lg-6 col-md-12 d-none d-lg-block">
                                    <!-- registration form left -->
                                    <div class="registration-form-left">
                                        <!-- title -->
                                        <div class="registration-form-left-title">
                                            <h6>Welcome to<br> SupperDelivery</h6>
                                        </div>
                                        <!-- image -->
                                        <div class="registration-form-left-image">
                                            <img src="../assets/images/login/rl-img.png" alt="">
                                        </div>
                                    </div>
                                </div>
                                <!-- registration form right -->
                                <div class="col-xl-6 col-lg-6 col-md-12 text-md-center text-lg-left">
                                    <div class="registration-form-right px-lg-5 px-xl-5">
                                        <div class="registration-form-right-title">
                                            <h6>Become a Merchant</h6>
                                        </div>
                                        <form action="#" method="">
                                            <div class="row">
                                                <!-- business nam -->
                                                <div class="col-xl-12">
                                                    <div class="form-group">
                                                        <input type="text" name="business-name" class="form-control form-control-lg" placeholder="Name of Business">
                                                    </div>
                                                </div>
                                                <!-- fname -->
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <input type="text" placeholder="First Name" class="form-control form-control-lg" name="fname">
                                                    </div>
                                                </div>
                                                <!-- lname -->
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <input type="text" placeholder="Last Name" class="form-control form-control-lg" name="lname">
                                                    </div>
                                                </div>
                                                <!-- address -->
                                                <div class="col-xl-12">
                                                    <div class="form-group">
                                                        <textarea class="form-control form-control-lg" placeholder="Address your Pick up Location"  name="pickUpAddress" id="" cols="30" ></textarea>
                                                    </div>
                                                </div>
                                                <!-- phone number -->
                                                <div class="col-xl-12">
                                                    <div class="form-group">
                                                        <input type="tel" name="phone" class="form-control form-control-lg" placeholder="Phone Number">
                                                    </div>
                                                </div>
                                                <!-- Email -->
                                                <div class="col-xl-12">
                                                    <div class="form-group">
                                                        <input type="email" name="email" class="form-control form-control-lg" placeholder="Email">
                                                    </div>
                                                </div>
                                                <!-- Password -->
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <input type="password" placeholder="Password" class="form-control form-control-lg" name="password">
                                                    </div>
                                                </div>
                                                <!-- confirm password -->
                                                <div class="col-xl-6 col-lg-6 col-md-6">
                                                    <div class="form-group">
                                                        <input type="password" placeholder="Confirm Password" class="form-control form-control-lg" name="password">
                                                    </div>
                                                </div>
                                                <!-- lgin button -->
                                                <div class="col-xl-12">
                                                    <div class="mb-24">
                                                        <button type="button" class="btn btn-info btn-block btn-lg text-uppercase">Login</button>
                                                    </div>
                                                </div>
                                                <div class="col-xl-12">
                                                    <div class="dont-have-account d-flex">
                                                        <p class="mr-2">Don't have an account?</p>
                                                        <a href="#">Register</a>
                                                    </div>
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
        </section>
    </div>
</template>

<script>
export default {
    components: {
        name: 'Registration',
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
}
</script>

<style scoped>

</style>