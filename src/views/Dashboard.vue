<template>
	<div id="main-content" >

		<div class="navbar-container">
			<div class="navbar-line"></div>
		  <div class="navbar">
		  	<div class="nav-logo">
		  		<!-- <img :src="'../assets/img/J-black.png'"> -->
		  	</div>
		  	<div class="nav-items">
		  		<ul class="nav-ul">
		  			<li><a href=""><span class="oi" data-glyph="magnifying-glass"></span></a></li>
		  		</ul>
		  	</div>
		  </div>
		  <div class="navbar-links">
		  	<ul class="nav-ul">
	  			<li class="active"><router-link tag="a" :to="{ name : 'Home' }">Home</router-link></li>
	  			<li><router-link tag="a" :to="{ name : 'Home' }">Topics</router-link></li>
	  			<li><router-link tag="a" :to="{ name : 'Home' }">Blogs</router-link></li>
	  			<li><router-link tag="a" :to="{ name : 'Home' }">Tutorials</router-link></li>
	  			<li><router-link tag="a" :to="{ name : 'Home' }">About Us</router-link></li>
	  			<li><router-link tag="a" :to="{ name : 'Home' }">Contac Us</router-link></li>
	  		</ul>
		  </div>
	  </div>

	  <div class="child-content">
	  	<router-view></router-view>
	  </div>

	  <transition name="fade">		
		  <div v-if="showLoader" class="main-loader">
				<div class="circle-loader">
					<div class="preloader-container">
						<div class="preloader-wrapper big active">
					    <div class="spinner-layer spinner-blue-only">
					      <div class="circle-clipper left">
					        <div class="circle"></div>
					      </div><div class="gap-patch">
					        <div class="circle"></div>
					      </div><div class="circle-clipper right">
					        <div class="circle"></div>
					      </div>
					    </div>
					  </div>
					</div>
				</div>
			</div>
		</transition>
  </div>
  
</template>

<script>
	import dashboard from '@/components/dashboard'
	export default dashboard
</script>
