<template>
  <div>
    <el-card class="personalInfoCard">
      <div class="avatarArea">
        <div class="image">
          <img
            src="http://img4.imgtn.bdimg.com/it/u=4260843381,2011070903&fm=15&gp=0.jpg"
            style="width: 100%;height: 100%;"
          />
        </div>
      </div>
      <div class="name">
        <p>{{ name }}</p>
      </div>
      <div class="motto">
        <p v-html="motto"></p>
      </div>
      <div class="Info">
        <div class="log">
          <div style="font-weight: 700; font-size: 15px;">
            {{ Info.blognum }}
          </div>
          <p style="font-size: 13px;color: gray;">日志</p>
        </div>
        <div class="kind">
          <div style="font-weight: 700; font-size: 15px;">
            {{ Info.kindnum }}
          </div>
          <p style="font-size: 13px;color: gray;">分类</p>
        </div>
        <div class="label">
          <div style="font-weight: 700; font-size: 15px;">
            {{ Info.tagnum }}
          </div>
          <p style="font-size: 13px;color: gray;">标签</p>
        </div>
      </div>
      <div class="logoGroup">
        <Icon type="logo-github" size="18" />
        <Icon type="md-aperture" size="18" />
        <Icon type="logo-facebook" size="18" />
        <Icon type="md-globe" size="18" />
      </div>
    </el-card>
  </div>
</template>

<script>
	require("../viewstyle/personalInfo.scss");
	export default {
	    data() {
	        return {
	            name: "LiShuo",
	            motto: "男&emsp;北京",
	            Info: {}
	        };
	    },
	    methods: {
	        personalInfo() {
				this.Info={
					blognum:"12",
					kindnum:"5",
					tagnum:"3"
				}
	        }
	    },
	    mounted() {
	        this.personalInfo();
	    }
	};
</script>

