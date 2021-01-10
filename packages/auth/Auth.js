export default function (Vue) {
	Vue.auth = {

		// Get token
		getToken() {
			var token = localStorage.token
			var expiration = localStorage.expiration

			var expired_in = new Date().getTime();
			var expired_out = new Date().getTime()+expiration*1000;

			if (!token || !expiration ) {
				return null
			}

			if (expired_in > expired_out) {
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