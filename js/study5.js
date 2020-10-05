Vue.component('comp-child', {
	template: `
	<div>
		<li>{{ name }} HP.{{ hp }}
			<button v-on:click="handleClick">攻撃する</button>
		</li>
		</div>
	`,
	props: ['name', 'hp'],
	methods: {
		handleClick: function () {
			this.$emit('childs-event', this.name)
		}
	}
})

new Vue({
	el: '#app',
	data: {
		list: [
			{ id: 1, name: 'パンダ', hp: 100 },
			{ id: 2, name: 'さる', hp: 300 },
			{ id: 3, name: 'ライオン', hp: 500 }
		],
		message: ''
	},
	methods: {
		parentsMethod: function (name) {
			return this.message = `${ name }を攻撃した`;
		}
	}
})
