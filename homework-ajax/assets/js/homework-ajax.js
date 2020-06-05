$(function(){
	"use strict";
	var request_url = 'file:///Users/samsherrana/Documents/Study%20Courses/5.%20WAP/wap-assignments/homework-ajax';
	$('#file-name').on('change',function(e){
		$.ajax({
			url:request_url+'/assets/files/'+$(this).val(),
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