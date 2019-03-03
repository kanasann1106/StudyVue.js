<template>
	<div>
		<p>
			<button @click="start">start</button>
		</p>
		<div v-if="answer > 0">
			<input
				type="number"
				v-model.number="num"
				@keyup.enter="guess"
			/>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				answer: 0, //答え
				num: 0, //予想した数
				tryCountLeft: 10 //残りの予想回数
			}
		},
		methods: {
			start(){
				// それぞれのデータを初期化する
				this.answer = Math.floor(Math.random() * (100 - 1) + 1)
				this.num = 0
				this.tryCountLeft = 10
				// startイベント発行
				this.$emit('start', this.tryCountLeft)
			},
			guess(){
				this.tryCountLeft -= 1

				if(this.answer === this.num){
					// collectイベント発行
					// 正解したことを通知する
					this.$emit('collect', this.tryCountLeft)
					return
				}
				if(this.tryCountLeft === 0){
					// loseイベント発行
					// 負けたことを通知する
					this.$emit('lose', this.tryCountLeft)
				}else if(this.answer < this.num){
					// lowerイベント発行
					// 正解はより小さい数であることを通知する
					this.$emit('lower', this.tryCountLeft)
				}else{
					// higherイベント発行
					// 正解はより小さい数であることを通知する
					this.$emit('higher', this.tryCountLeft)
				}
			}
		}
	}
</script>