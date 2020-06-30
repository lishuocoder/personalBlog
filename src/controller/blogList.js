//引入假数据
import blogListData from '../data/blogListData.js'
require("../viewstyle/blogList.scss");
export default {
    props: ['page'],
    data() {
        return {
            tableData: []
        };
    },
    watch: {
        page() {
            this.currentChange()
        }
    },
    methods: {
        // 显示博客内容
        showBlogContent(item) {
            this.$emit("showBlogContent", item);
			console.log("点击了"+item)
        },
        // 展示博客列表信息
        showBlogList() {
            this.tableData = blogListData.indexList;
        },
        // 当前页的改变
        currentChange() {
            let obj = {
                methods: "listblog",
                page: this.page,
                pageSize: 5
            }
            currentPage(obj).then((response) => {

            }).catch((error) => {
                this.$notify.error({
                    title: "错误",
                    message: error
                });
            })
        }
    },
    mounted() {
        this.showBlogList();
    }
};