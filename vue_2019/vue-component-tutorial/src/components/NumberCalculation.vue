<template>
	<div>
		<div v-if="answer > 0">
			<span>{{ leftnum }} + {{ rightnum }} =</span>
			<input
				type="number"
				v-model.number="num"
				@keyup.enter="calculation"
			/>
		</div>
		<p v-else>
			<button @click="start">start</button>
		</p>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				leftnum: 0,
				rightnum: 0,
				answer: 0, //答え
				num: 0, //入力した数字
				questionsNum: 5 //問題数
			}
		},
		methods: {
			start(){
				this.createQuestion()
				this.num = 0
				this.questionsNum = 1
			},
			createQuestion(){
				this.leftnum = Math.floor(Math.random() * (100 - 1) + 1)
				this.rightnum = Math.floor(Math.random() * (100 - 1) + 1)
				this.answer = this.leftnum + this.rightnum
			},
			calculation(){
				if(this.num === this.answer){
					// collectイベント発行
					this.questionsNum -= 1
					this.num = 0
					this.$emit('collect', this.questionsNum)
					this.createQuestion()
				}else{
					// wrongイベント発行
					this.$emit('wrong')
				}
				if(this.questionsNum === 0){
					// finishイベント発行
					this.$emit('finish')
					this.answer = 0
				}
			}
		}
	}
</script>

<style>
	input{
		height: 24px
	}
</style>