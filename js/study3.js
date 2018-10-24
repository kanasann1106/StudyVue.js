const APP1 = new Vue({
	el: '#app1',
	data: {
		message: 'おはようこんにちは',
	},
	methods: {
		handleClick: function(){
			alert('さくらだよ')
		},
		handleInput: function(event){
			this.message = event.target.value
			console.log(this.message);
		}
	}
})