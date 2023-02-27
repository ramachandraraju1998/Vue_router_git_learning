const ModalComp3 = {
	template:`<div class="modal fade show" id="exampleModalLive" tabindex="-1" aria-labelledby="exampleModalLiveLabel" style="display: block;" aria-modal="true" role="dialog">
	<div class="modal-dialog">
	<div class="modal-content">
	<div class="modal-header">
	<h1 class="modal-title fs-5" id="exampleModalLabel">Modal 3</h1>
	<router-link to="/modal2" class="btn-close" aria-label="Close"></router-link>
	</div>
	<div class="modal-body">
	modal3
	</div>
	<div class="modal-footer">
	<router-link to="/modal2" class="btn btn-secondary">Close</router-link>
	<button type="button" class="btn btn-primary">Save changes</button>
	</div>
	</div>
	</div>
	</div>`
}