<template>
	<div class="nw-m">   
		<ul class="nw-mx">
			<img src="../assets/m1.jpg"/>		
		<div class="nw-mz" >
			<li>{{list.username}}</li>
			<li>{{list.zjname}}</li>
		</div>		
		<p>{{list.time}}</p>
		</ul>	
	</div>
</template>

<script>export default {
	name: 'NewMusicm',
	props: ['list'],
	data() {
		return {

		}
	}
}</script>

<style scoped>.nw-m {
	width: 410px;
	height: 111px;
	display: inline-block;
	border-bottom: 1px solid gainsboro;
}

.nw-mx {
	width: 380px;
	height: 99px;
	position: relative;
}

.nw-mz {
	position: relative;
	top: -8px;
	left: -102px;
	display: inline-block;
}

.nw-mz li {
	margin: 10px;
}

li {
	list-style-type: none;
}

img {
	width: 86px;
	height: 86px;
	position: relative;
	left: -100px;
	top: 14px;
}

p {
	height: 21px;
	display: inline-block;
	position: relative;
	right: -96px;
	top: -24px;
}</style>