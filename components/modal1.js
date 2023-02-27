const ModalComp1 = {
	template : `<div>
	<div class="modal fade show" id="exampleModalLive" tabindex="-1" aria-labelledby="exampleModalLiveLabel" style="display: block;" aria-modal="true" role="dialog">
	<div class="modal-dialog" style="top:40px">
	<div class="modal-content">
	<div class="modal-header">
	<h1 class="modal-title fs-5" id="exampleModalLabel">Modal 1</h1>
	<router-link to="/" class="btn-close" ></router-link>
	</div>
	<div class="modal-body">
	<div>Test 1331</div>
	<router-link class="btn btn-primary" to="/modal2">launch model2</router-link>
	</div>
	<div class="modal-footer">
	<router-link to="/" class="btn btn-secondary" >Close</router-link>
	<button type="button" class="btn btn-primary">Save changes</button>
	</div>
	</div>
	</div>
	</div>
	</div>`
}