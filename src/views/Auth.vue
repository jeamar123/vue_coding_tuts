<template>
	<div class="auth-container">

		<div class="logo-wrapper">
			<!-- <img :src="'../assets/img/logo_white.png'"> -->
		</div>

		<div class="login-wrapper">
			<form>
				<div class="form-div">
					<label>Email</label>
					<input type="text" class="form-input">
				</div>
				<div class="form-div">
					<label>Password</label>
					<input type="password" class="form-input">
				</div>
				
				<button class="btn login-btn" v-on:click="login()">LOGIN</button>
			</form>
		</div>
  </div>
</template>

<script>
	import auth from '@/components/auth'
	export default auth
</script>
