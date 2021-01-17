export default function (Vue) {
	Vue.auth = {

		// Get token
		getToken() {
			var token = localStorage.token
			var expires_time = new Date().getTime()
			var expired_out = localStorage.expired_out

			if (!token || !expired_out ) {
				return null
			}

			if (expires_time > expired_out) {
				this.destroyToken()
				return null
			}
			else {
				return token
			}
		},

		// destroy token
		destroyToken() {
			localStorage.removeItem('token')
			localStorage.removeItem('expiration')
			localStorage.clear();
		},

		// is autheticated
		isAutheticated() {
			if (this.getToken()) {
				return true;
			} else {
				return false;
			}
		}
	}

	Object.defineProperties(Vue.prototype, {
		$auth: {
			get: () => {
				return Vue.auth;
			}
		}
	})
}