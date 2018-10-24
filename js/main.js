let state ={count: 0}
const APP = new Vue({
	el: '#app',
	data: {
		message: {
			value: 'Happy!!Vue!!'
		},
		list: ['sakura','himawari','momiji'],
		num: 2
	}
})
state.count++

const FRUIT = new Vue({
	el: '#fruit',
	data: {
		list: ['リンゴ','ミカン','ブドウ']
	}
})

const CLICK = new Vue({
	el: '#click',
	methods: {
		handleClick: function(event){
			alert(event.target)
		}
	}
})

const SHOW = new Vue({
	el: '#show',
	data: {
		show: true
	}
})

const APP2 = new Vue({
	el: '#app2',
	data: {
		show: true,
		message: 'ピアノの音色癒しや〜',
		scroll: 0
	},
	mounted: function(){
		this.scroll = 100
	}
})

const COUNT_UP = new Vue({
	el: '#count-up',
	data:{
		count: 0
	},
	methods: {
		increment: function(){
			let vm = this
			setTimeout(function() {vm.count++}, 5)
		}
	}
})

// const APP3 = new Vue({
// 	el: '#app3',
// 	data: {
// 		radius: 50
// 	}
// })










