<template>
	<div>
		<el-card class="catalog">
			<div class="header" slot="header"><span>博客目录</span></div>
			<div class="catalogArea" v-html="catalog"></div>
		</el-card>
	</div>
</template>

<script>
require('../viewstyle/catalog.scss');
//引入marked
import marked from 'marked';

export default {
	props: ['blogToc'],
	data() {
		return {
			catalog: ''
		};
	},
	created() {
		this.catalog = marked(this.blogToc);
	}
};
</script>
