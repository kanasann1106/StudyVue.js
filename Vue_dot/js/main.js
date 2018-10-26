(() =>{
	'use strict';

	let vm = new Vue({
		el: '#app',
		data: {
			newItem: '',
			memos: []
		},
		watch: {
			memos: {
				handler: function(){
				localStorage.setItem('memos',JSON.stringify(this.memos));
				},
				deep: true
			}
		},
		mounted: function(){
			this.memos = JSON.parse(localStorage.getItem('memos')) || [];
		},
		methods: {
			// addItem: function(e) {
      //   e.preventDefault();	//リロードさせない
      //   this.todos.push(this.newItem);
      // }
			addItem: function(){
				let item = {
					title: this.newItem,
					isDone: false
				};
				if(this.newItem != ''){
					this.memos.push(item);
				}
				this.newItem = '';
			},
			deleteItem: function(index){
				if(confirm('削除してもいいですか？')){
					this.memos.splice(index,1);
				}
			},
			purge: function(){
				if(!confirm('完了メモを削除しますか？')){
					return;
				}
				this.memos = this.remaining;
			}
		},
		computed: {
			remaining: function(){
				return this.memos.filter(function(memo){
					return !memo.isDone;
				});
			}
		}
	})
})();