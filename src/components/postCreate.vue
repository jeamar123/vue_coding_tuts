<script>
	import axios from 'axios';

	var postCreate = {
		data() {
			return {
				showLoader : false,
				user_id : null,
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