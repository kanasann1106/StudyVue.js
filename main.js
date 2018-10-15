const app = new Vue({
	el: '#app',
	data: {
		message: 'Happy!!Vue!!'
	}
})

const fruit = new Vue({
	el: '#fruit',
	data: {
		list: ['リンゴ','ミカン','ブドウ']
	}
})

const click = new Vue({
	el: '#click',
	methods: {
		handleClick: function(event){
			alert(event.target)
		}
	}
})

const show = new Vue({
	el: '#show',
	data: {
		show: true
	}
})

const app2 = new Vue({
	el: '#app2',
	data: {
		show:true
	}
})
