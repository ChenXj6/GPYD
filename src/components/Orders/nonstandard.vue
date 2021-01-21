<template>
	<div class="gc_content">
		<el-form id="pageForm">
			<div class="list_header">
				<div class="left-title">我的非标</div>
				<div class="list_search">
					<div class="so_form">
						<el-input v-model='searchItem' placeholder="请输入商品信息，关键字用空格隔开" class="input-with-select">
							<el-button slot="append" @click="search" icon="el-icon-search">搜索</el-button>
						</el-input>
					</div>
				</div>
			</div>
			<!-- <div class="category_search">     -->
			<div class="list_nav">
				<el-table  :data="tableData" style="width: 100%">
					<el-table-column prop="name" label="商品信息" width='200'>
					</el-table-column>
					<el-table-column prop="name" label="规格">
					</el-table-column>
					<el-table-column prop="name" label="条码">
					</el-table-column>
					<el-table-column prop="name" label="品牌">
					</el-table-column>
					<el-table-column prop="name" label="仓库">
					</el-table-column>
					<el-table-column label="操作">
					</el-table-column>
				</el-table>
			</div>
		</el-form>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				tableData: [],
				searchItem: '',
			}
		},
		methods: {
      search(){
        let data = this.searchItem;
        if(data != ''){
          console.log(1)
        }
      }
		},
	}
</script>


<style scope>
	.list_header {
		width: 100%;
		overflow: hidden;
		margin-bottom: 20px;
	}

	.left-title {
		font-size: 14px;
		font-weight: 600;
		float: left;
		color: #525252;
	}

	.list_search {
		width: 307px;
	}

	.list_search {
		float: right;
		width: 400px;
	}

	.list_search .so_form {
		width: 305px;
	}

	.list_search .so_form {
		border: 1px solid #ccc;
		width: 355px;
		float: left;
	}

	.list_search .so_txt {
		width: 230px;
		height: 28px;
	}

	.list_search .so_txt {
		width: 280px;
		height: 19px;
		padding: 4.5px 0 4.5px 6px;
		border: none;
		float: left;
	}

	.list_search .so_btn {
		border-left: 1px solid #ccc;
		width: 69px;
		height: 37px;
		display: inline-block;
	}

	.list_search .so_btn {
		width: 69px;
		height: 28px;
		border: none;
		display: block;
		background: #f5f5f5;
	}

	.category_search {
		overflow: hidden;
	}

	.category_search div,
	.condition_search div {
		float: left;
	}

	.s_title {
		margin-right: 15px;
		line-height: 26px;
		font-size: 12px;
		color: #737373;
	}

	.category_search .s_content_h {
		height: 26px;
	}

	.category_search .s_content {
		width: 900px;
	}

	.category_search div,
	.condition_search div {
		float: left;
	}

	.category_search div,
	.condition_search div {
		float: left;
	}

	.s_item_selected {
		background: #2583d8;
		color: #fff !important;
	}

	.s_item {
		padding: 5px 10px;
		margin-right: 10px;
		margin-bottom: 10px;
		cursor: pointer;
		color: #737373;
	}
</style>
