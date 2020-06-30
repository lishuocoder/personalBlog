<template>
  <div>
    <header>
      <menuList></menuList>
    </header>
    <section style="background: #f0f0f0;height: 100%">
      <div class="container">
        <div class="contentArea">
			<!-- 博客列表 -->
          <blogList
          :page="page"
            @showBlogContent="showBlogContent"
            v-show="!showCatalog"
            class="blogList"
          ></blogList>
			<!-- 内容 -->
          <blogContent
            :blogItem="blogItem"
            @showBlogItem="showBlogItem"
            class="blogContent"
            v-if="showCatalog"
          ></blogContent>
        </div>
        <div class="right">
			<!-- 个人信息 -->
          <personalInfo class="personalCard"></personalInfo>
			<!-- 博客目录 -->
          <catalog
            :blogToc="blogToc"
            v-if="showCatalog"
            class="catalogCard"
          ></catalog>
        </div>
      </div>
		<!-- 分页栏 -->
      <el-pagination
        @current-change="getCurrentPage"
        v-if="!showCatalog"
        class="page"
        background
        layout="prev, pager, next"
        :total="1000"
      >
      </el-pagination>
    </section>
    <footer>
		<div class="content">
			<p>Copyright © 1998- 2019 LiShuo. All Rights Reserved.</p>
			<p>LiShuo 个人博客</p>
		</div>
	</footer>
  </div>
</template>

<script>
import menuList from "./menu";
import blogList from "./blogList";
import personalInfo from "./PersonalInfo";
import catalog from "./blogCatalog";
import blogContent from "./blogContent";
require("../viewstyle/blog.scss");
export default {
  components: {
    menuList,
    blogList,
    personalInfo,
    catalog,
    blogContent
  },
  data() {
    return {
      showCatalog: false,
      blogItem: {},
      blogToc: "",
      page: 1,
    };
  },
  methods: {
    // 显示博客内容和目录
    showBlogContent(item) {
      this.showCatalog = true;
      this.blogItem = item;
      this.blogToc = this.blogItem.blogToc;
    },
    showBlogItem() {
      this.showCatalog = false;
    },
    // 获得当前页
    getCurrentPage(currentPage) {
      this.page = currentPage
    }
  }
};
</script>
