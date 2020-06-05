$(function(){
	"use strict";
	$('#file-name').on('change',function(e){
		$.ajax({
			url:'assets/files/'+$(this).val(),
			'type': 'GET'
		}).done(ajaxSuccess)
		  .fail(ajaxFailure);
	});

	function ajaxSuccess(data) {
		$('#output').val(data);
	}

	function ajaxFailure(xhr, status, exception) {
	  console.log(xhr, status, exception);
	  $('#output').val('');
	}
})