<template>
	<div class="post-create-container">
		<ckeditor :editor="editor" v-model="editorData" :config="editorConfig"></ckeditor>
  </div>
</template>

<script>
	import postCreate from '@/components/postCreate'
	export default postCreate
</script>
