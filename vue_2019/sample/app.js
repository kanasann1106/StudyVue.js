var app = new Vue({
	el: '#app',
	data: {
		message: 'v-forでネスト',
		categorys:[
			{name:'哺乳類', animals:['人', 'ねこ', 'さる', 'パンダ']},
			{name:'鳥類', animals: ['ニワトリ', 'アヒル', 'カラス', 'すずめ']},
			{name:'爬虫類', animals: ['わに', 'トカゲ', 'へび', 'かめ']},
		]
	}
})

var sample2 = new Vue({
	el: '#sample2',
	data: {
		message: 'v-onで画像表示',
		show: false
	},
	methods: {
		imgShow: function(){
			this.show = !this.show
		}
	}
})

var sample3 = new Vue({
	el: '#sample3',
	data: {
		message: 'カウントアップする',
		count: 0,
		alert:'5回以上押したよ'
	},
	methods: {
		countUp: function(){
			this.count++
		}
	}
})
