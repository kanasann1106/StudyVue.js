import Vue from 'vue'

import Hello from './components/Hello.vue'
import AnchorLink from './components/AnchorLink.vue'
import EventButtons from './components/EventButtons.vue'

import NumberGuess from './components/NumberGuess.vue'

import NumberCalculation from './components/NumberCalculation.vue'

const app = new Vue({
	el: '#app',
	data: {
		arguments: []
	},
	components: {
		hello: Hello,
		AnchorLink,
		EventButtons,
	},
	methods: {
		onEventOne(){
			alert('Event1')
		},
		onEventTwo(argument){
			this.arguments = []
			this.arguments.push(argument)
		},
		onEventThree(arg1, arg2){
			this.arguments = []
			this.arguments.push(arg1)
			this.arguments.push(arg2)
		}
	}
})

const app2 = new Vue({
	el: '#app2',
	data: {
		message: 'スタートボタンを押してください',
		tryCountLeft: 0
	},
	components: {
		NumberGuess
	},
	methods: {
		onStart(tryCountLeft){
			this.message = 'スタート！🚀'
			this.tryCountLeft = tryCountLeft
		},
		onCollect(tryCountLeft){
			this.message = '当たり！🎉'
			this.tryCountLeft = tryCountLeft
		},
		onLower(tryCountLeft){
			this.message = 'もっと小さいです 👇'
			this.tryCountLeft = tryCountLeft
		},
		onHigher(tryCountLeft){
			this.message = 'もっと大きいです️ ️👆'
			this.tryCountLeft = tryCountLeft
		},
		onLose(tryCountLeft){
			this.message = 'ゲームオーバー 👻'
			this.tryCountLeft = tryCountLeft
		}
	}
})

const app3 = new Vue({
	el: '#app3',
	data: {
		show: true,
		message: '計算してみよう',
		questionNum: 5
	},
	components: {
		NumberCalculation
	},
	methods: {
		onCollect(questionNum){
			this.message = '正解です！✨'
			this.questionNum = questionNum
		},
		onWrong(){
			this.message = '不正解です！😭'
		},
		onFinish(){
			this.message = '計算してみよう'
			this.show = false
		}
	}
})

 









