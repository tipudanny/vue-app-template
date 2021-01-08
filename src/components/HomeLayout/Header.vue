
<nav class="desktop-menu navbar navbar-light navbar-expand-lg sticky-top">
    <div class="container">
        <a class="navbar-brand custom-nav"  href="index.html">
            <img src="../../assets/images/logo/logo2.png" alt="logo" height="50px">
        </a>
        <button class="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#myNav">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="myNav">
            <ul class="navbar-nav custom-hover ml-auto">
                <li class="nav-item">
                    <router-link class="nav-link" to="/home">Home</router-link>
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
                <li v-if="islogged != true " class="nav-item">
                    <router-link class="nav-link" to="/registration">Register
                    </router-link>
                </li>
                <li v-if="islogged != true " class="nav-item">
                    <router-link class="nav-link" to="/login">Login
                    </router-link>
                </li>
                <li class="nav-item" @click="$emit('dashboard','active'),isDashboardActive()">
                    <router-link class="nav-link" to="/admin">Dashboard</router-link>
                </li>
                <li v-if="islogged == true " class="nav-item">
                    <a class="nav-link" href="#" @click="logout()">Logout
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>