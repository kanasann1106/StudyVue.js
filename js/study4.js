Vue.component('comp-child', {
	template: `
		<li>{{ name }} HP.{{ hp }}
			<button v-on:click="handleClick">攻撃する</button>
		</li>
	`,
	props: ['name', 'hp'],
	methods: {
		handleClick: function(){
			this.$emit('childs-event')
		}
	}
})

new Vue({
	el:'#app',
	data: {
		list: [
			{id: 1, name: 'パンダ', hp: 100},
			{id: 2, name: 'さる', hp: 300},
			{id: 3, name: 'ライオン', hp: 500}
		]
	},
	methods: {
		parentsMethod: function(){
			alert('testttt')
		}
	}
})