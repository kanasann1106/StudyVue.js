var app = new Vue({
	el: '#app',
	data: {
		birthday: '1988-01-01',
		left: 0,
		right: 0,
		isComputedCalled: false
	},
	methods: {
		// この関数が呼び出されたタイミングがわかるように
		// メッセージを表示させる
		setMessage: function(){
			this.isComputedCalled = true
			const that = this
			setTimeout(function(){
				that.isComputedCalled = false
			}, 2000)
		}
	},
	computed: {
		age: function(){
			this.setMessage()

			if(!this.birthday){
				return -1
			}
			// 日付の計算にはmoment.jsというライブラリを使う
			moment.locale('ja')
			return moment().diff(this.birthday, 'years')
		},
		total: function(){
			this.setMessage()

			return this.left + this.right
		}
	}
})