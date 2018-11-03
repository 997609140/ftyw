<template>
<div class="login-bg">
	<div class="login-header">
		<h3>登录FTYW.Music</h3>
	</div>
	<div class="login">
    <from>
    	<div class="user">
    	<li></li>	
    	<input type="text" value="" />
    	</div>
    	<div class="pad">
    	<li></li>	
    	<input type="password" value=""/>
    	</div>

    	<button type="button">登录</button>
    	<button type="button">注册</button>
    </from> 
    </div>   
</div>
</template>

<script>
export default {
	name:'LoGin',
	data() {
      return {

        }
      }
    }
  
</script>

<style  scoped>
.login-bg {
	color: lightseagreen;
	width: 1366px;
	height: 655px;
    background-image: url(../assets/xinkong.jpg);
    background-size: 1366px 655px;
    position: relative;
}
.login-header {
	font-size: 26px;	
	width: 400px;
	position: relative;
	top: 100px;
	left: 400px;
}
.login {
	background-color: rgba(0,0,0,0.3);
	width: 500px;
	height: 300px;
	margin: 0 auto;
	position: relative;
	top: 150px;
	position: relative;
	text-align: center;
}	
.login div {
	width: 400px;
	height: 50px;
	margin: 0 auto;
	position: relative;
	top: 10px;
}
li {
	display: inline-block;
	width: 37px;
	height: 38px;
	position: relative;
	top: 14px;
	left: 6px;
    background-position: -2px -4px;	
    border-color:rgba(0,0,0,0.4) 
}
.user li {
    background-image: url(../assets/zhanghao.jpg);

}
.pad li {
    background-image: url(../assets/mima.jpg);
}
input {
	font-size: 16px;
	width: 240px;
	height: 35px;
	margin-top: 30px;
	background-color: rgba(0,0,0,0.3);
	border-color: rgba(250,250,250,0.4);
	color: firebrick;
}
button {
	width: 100px;
	height: 30px;
	background-color: lightseagreen;
	border: none;
	margin-top: 92px;
	position: relative;
	margin-left: 10px;
	border-radius: 3px;
}
h3 {
	width: 400px;
}
</style>