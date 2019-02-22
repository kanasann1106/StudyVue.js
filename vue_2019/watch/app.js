var app = new Vue({
	el: '#app',
	data: {
		email: '',
		username: '',
		error: {}
	},
	watch: {
		email: function(value){
			if(value === ''){
				this.error.email = 'メールアドレスは必須です'
			}else{
				this.error.email = ''
			}
		},
		username: function(value){
			if(value === ''){
				this.error.username = 'ユーザー名は必須です'
			}else if(!/[a-zA-Z0-9]+/.test(value)){
				this.error.username = 'ユーザーは半角英数字のみです'
			}else{
				this.error.username = ''
			}
		}
	}
})
