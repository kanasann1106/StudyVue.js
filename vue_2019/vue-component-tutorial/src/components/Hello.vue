<template>
	<h1>Hello. {{ name }}</h1>
</template>

<style scoped>
	h1{
		color: teal;
	}
</style>

<script>
	export default{
		data(){
			return{
				name: 'kana'
			}
		}
	}
</script>