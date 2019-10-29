<template>
	<div id="main-content" >

		<div class="navbar-container">
			<div class="navbar-line"></div>
		  <div class="navbar">
		  	<div class="nav-logo">
		  		<!-- <img :src="'../assets/img/J-black.png'"> -->
		  		<router-link tag="a" :to="{ name : 'Home' }"><i class="fa fa-home"></i></router-link>
		  	</div>
		  	<div class="nav-items">
		  		<ul class="nav-ul">
		  			<li><a href=""><i class="fa fa-search"></i></a></li>
		  			<li><router-link tag="a" :to="{ name : 'PostCreate' }"><i class="fa fa-pencil"></i></router-link></li>
		  			<!-- <li><a href=""><span class="oi" data-glyph="magnifying-glass"></span></a></li> -->
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
	  			<li><router-link tag="a" :to="{ name : 'Home' }">Contact Us</router-link></li>
	  		</ul>
		  </div>
	  </div>

	  <div class="child-content">
	  	<router-view></router-view>
	  </div>

	  <div class="footer-container">
	  	<div class="footer">
	  		<div class="top-box">
	  			<div class="row-items">
	  				<p class="title">Lorem Ipsum</p>
	  				<p class="desc">Lorem Ipsum dolor sit amet. si wa net ka no we lorem ipsum dolor sit men ma was nim kan el ka ba num.</p>
	  			</div>
	  			<div class="row-items">
	  				<p class="title">Lorem Ipsum</p>
	  				<p class="desc">Lorem Ipsum dolor sit amet. si wa net ka no we lorem ipsum dolor sit men ma was nim kan el ka ba num.</p>
	  			</div>
	  			<div class="row-items">
	  				<p class="title">Lorem Ipsum</p>
	  				<p class="desc">Lorem Ipsum dolor sit amet. si wa net ka no we lorem ipsum dolor sit men ma was nim kan el ka ba num.</p>
	  			</div>
	  		</div>
	  	</div>
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
