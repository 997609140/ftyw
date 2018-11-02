<template>
<div>
    <hea-der></hea-der>
	<div class="mymusic-bg">
		<div class="mymusic-ph"></div>
		<div class="mymusic-name">
			<h1>lala</h1>
			<li></li>
		</div>	
		<div class="mymusic-fs">
			<li class="mymusic-fs1"> 
				<p>0</p>
				<p>关注</p>
			</li>
			<li>
				<p>0</p>
				<p>粉丝</p>
			</li>
		</div>
	</div>
	<div class="mymusic-like">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="我喜欢" name="first">
                 <el-tabs type="border-card">
                    <el-tab-pane label="歌曲0"></el-tab-pane>
                    <el-tab-pane label="歌单0">角色管理</el-tab-pane>
                    <el-tab-pane label="专辑0">定时任务补偿</el-tab-pane>
                    <el-tab-pane label="视频0">定时任务补偿</el-tab-pane>                  
                 </el-tabs>
            </el-tab-pane>
            
            <el-tab-pane label="我创建的歌单" name="second">配置管理</el-tab-pane>
            <el-tab-pane label="关注" name="third">角色管理</el-tab-pane>
            <el-tab-pane label="粉丝" name="fourth">定时任务补偿</el-tab-pane>
            <el-tab-pane label="我上传的视频" name="fifth">定时任务补偿</el-tab-pane>
        </el-tabs>
	</div>

	<foo-ter></foo-ter>
</div>
</template>

<script>
import HeaDer from './header'
import FooTer from './FooTer'
export default {
	name:'MyMusic',
	data() {
	  return {	
	  	activeName: 'second'
	  }
	},
	components:{
	HeaDer,
  	FooTer 	
 },
     methods: {
        handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style scoped>
.mymusic-bg {
	width: 1356px;
	height: 380px;
	background-image: url(../assets/bg_profile.jpg);
	position: relative;
}
.mymusic-ph  {
	width: 110px;
	height: 110px;
	position: relative;
	margin: 0 auto;
	background-image: url(../assets/m1.jpg);
	border: 3px solid lightgoldenrodyellow;
	border-radius: 50%;
	top: 20px;
}
.mymusic-name {
	width: 1200px;
	height: 64px;
	position: relative;
	top: 58px;
	margin: 0 auto;	
}
h1 {
	width: 100px;
	position: relative;
	left: -50px;
	display: inline-block;
}
.mymusic-name li {
	display: inline-block;
	width: 36px;
	height: 36px;
	background-image: url(../assets/logo.png);
}
.mymusic-fs {
	width: 1200px;
	height: 40px;
	position: relative;
	top: 78px;
	margin: 0 auto;	
}
.mymusic-fs {
	color: white;
}
.mymusic-fs li {
	width: 79px;
	height: 44px;
	display: inline-block;
}
.mymusic-fs1 {
	border-right: 1px solid gainsboro;
}
.mymusic-like {
	width: 1200px;
	height: 562px;
	position: relative;
	margin: 0 auto;
	top: -38px;
}

</style>

<style>
.el-tabs__item {
	color: white;
	font-size: 16px;
}
.el-tabs__nav-scroll {
    text-align: left;
}
.el-tabs__item:hover {
	color: #31c27c;
}
.mymusic-like .el-tabs__item{
    color: white;
}
.el-tabs__item.is-active {
    color: #31c27c;
}	
.el-tab-pane {
	text-align: left;
}



.el-tabs--border-card {
	border: none;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item {
	color: #000000;
}
</style>