$(function(){
	"use strict";
	$('#file-name').on('change',function(e){
		$.ajax({
			url:'assets/files/'+$(this).val(),
			'type': 'GET',
			'success': ajaxSuccess,
			'error': ajaxFailure
		})
	})
	function ajaxSuccess(data) {
		$('#output').val(data);
	}

	function ajaxFailure(xhr, status, exception) {
	  console.log(xhr, status, exception);
	}
	$.get('https://www.google.com/images/branding/product/ico/googleg_lodp.ico');
})