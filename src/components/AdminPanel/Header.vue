<template>
    <div>
        <template>
            <div>
                <nav class="main-header navbar navbar-expand navbar-white navbar-light">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" data-widget="pushmenu" href="#" role="button"><i class="fas fa-bars"></i></a>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <router-link to="/" class="nav-link">
                                Home
                            </router-link>
                        </li>
                        <li class="nav-item d-none d-sm-inline-block">
                            <router-link to="contuct-us" class="nav-link">
                                contuct-us
                            </router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ml-auto">

                        <!--   Profile Section   -->
                        <li class="nav-item dropdown">
                            <a class="nav-link d-flex" data-toggle="dropdown" href="#">
                                <img src="https://mk0trickyphotos51tq5.kinstacdn.com/wp-content/uploads/2017/08/6.jpg"
                                     alt="User" class="img-size-50 img-circle mr-3">
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    <div class="media">
                                        <img src="https://mk0trickyphotos51tq5.kinstacdn.com/wp-content/uploads/2017/08/6.jpg"
                                             alt="User Avatar" class="img-size-50 img-circle mr-3">
                                        <div class="media-body">
                                            <h3 class="dropdown-item-title">
                                                John Pierce
                                                <span class="float-right text-sm text-muted"></span>
                                            </h3>
                                        </div>
                                    </div>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item dropdown-footer">Profile</a>
                                <div class="dropdown-divider"></div>
                                <a href="#" @click="logout()" class="dropdown-item dropdown-footer">Logout</a>
                            </div>
                        </li>
                        <!-- Notifications Dropdown Menu -->
                        <li class="nav-item dropdown">
                            <a class="nav-link" data-toggle="dropdown" href="#">
                                <i class="far fa-bell"></i>
                                <span class="badge badge-warning navbar-badge">1</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                                <span class="dropdown-header">1 Notifications</span>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item">
                                    <i class="fas fa-envelope mr-2"></i> 4 new messages
                                    <span class="float-right text-muted text-sm">3 mins</span>
                                </a>
                                <div class="dropdown-divider"></div>
                                <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
                            </div>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-widget="fullscreen" href="#" role="button">
                                <i class="fas fa-expand-arrows-alt"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
                <aside class="main-sidebar sidebar-dark-secondary elevation-4">
                    <a href="#" class="brand-link">
                        <!-- <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3" style="opacity: .8">-->
                        <span class="brand-text font-weight-light">Superman BD</span>
                    </a>
                    <div class="sidebar">
                        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
                            <div class="image">
                                <!-- <img src="dist/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">-->
                            </div>
                            <div class="info">
                                <a href="#" class="d-block">John Pierce</a>
                            </div>
                        </div>

                        <!-- Sidebar Menu -->
                        <nav class="mt-2">
                            <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                                <li class="nav-item">
                                    <router-link to="/admin/dashboard" class="nav-link">
                                        <i class="nav-icon fas fa-tachometer-alt"></i>
                                        <p>
                                            Dashboard
                                        </p>
                                    </router-link>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-tasks"></i>
                                        <p>
                                            Orders
                                            <i class="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview ml-2">
                                        <li class="nav-item">
                                            <router-link to="/admin/active-orders" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Active Order</p>
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/admin/pending-orders" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Pending Order</p>
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                            <router-link to="/admin/cancel-orders" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Cancel Order</p>
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link">
                                        <i class="nav-icon fas fa-users"></i>
                                        <p>
                                            Users
                                            <i class="right fas fa-angle-left"></i>
                                        </p>
                                    </a>
                                    <ul class="nav nav-treeview ml-2">
                                        <li class="nav-item">
                                            <router-link to="/admin/user/managers" class="nav-link">
                                                <i class="far fa-circle nav-icon"></i>
                                                <p>Managers</p>
                                            </router-link>
                                        </li>
                                        <li class="nav-item">
                                          <router-link to="/admin/user/riders" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Riders</p>
                                          </router-link>
                                        </li>
                                        <li class="nav-item">
                                          <router-link to="/admin/user/customers" class="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Customers</p>
                                          </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li class="nav-item" v-if="role.user_info == 'super-admin'">
                                    <router-link to="/admin/balance/management" class="nav-link">
                                        <i class="fas fa-hand-holding-usd nav-icon"></i>
                                        <p>
                                            Balance Manager
                                        </p>
                                    </router-link>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
        </template>

    </div>
</template>

<script>
import store from "@/store";
export default {
    name: "Header",
    mounted() {
        if ( localStorage.token !='' && localStorage.token){
            this.isLogin = true
            this.token = localStorage.token
        }
        this.role = store.state;
    },
    data() {
        return {
            role: '',
            isLogin:false,
            token:'',
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
                    this.$router.push('/')
                }
            }).catch(error => {});
        }
    },
}
</script>

<style scoped>

</style>