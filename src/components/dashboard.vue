<script>
	import axios from 'axios'

	var dashboard = {
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
    }
	}

	export default dashboard
</script>