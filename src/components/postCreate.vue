<script>
	import axios from 'axios';
	import BalloonEditor from '@ckeditor/ckeditor5-build-balloon';

	var postCreate = {
		data() {
			return {
				showLoader : false,
				user_id : null,
				editor: BalloonEditor,
        editorData: 'the',
        editorConfig: {
          // The configuration of the rich-text editor.
        }
			}
		},
		created() {
		},
		methods: {
      showLoading() {
      	this.showLoader = true;
      },
      hideLoading() {
      	setTimeout(()=>{
				  this.showLoader = false;
				},1000);
      },
      login( ){

      }
    }
	}

	export default postCreate;
</script>