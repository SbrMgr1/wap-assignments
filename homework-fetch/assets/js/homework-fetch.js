$(function(){
	"user strict";
	var host_url = 'https://jsonplaceholder.typicode.com';

	var displayUserInfo = function(userInfo){
		$('#user-info-name').text(userInfo.name);
		$('#user-info-email').text(userInfo.email);
		$('.user-info').slideDown();
	};


	var displayAllPost = function(userPosts){
		$('.post-info').text('');
		for(key in userPosts){
			var post = userPosts[key];
			var postHtml = $(`<div class="post mb-15 pb-5 pt-5" data-key="${post.id}">`);
			var titleHtml = $('<h3>').text(post.title);
			var bodyHtml = $('<p>').text(post.body);
			var commentHtml = $(`<button class="comment-btn">`).text('Comment...');
			var commentContent = $(`<div class="comment-container">`);
			postHtml.append(titleHtml);
			postHtml.append(bodyHtml);
			postHtml.append(commentHtml);
			postHtml.append(commentContent);
			$('.post-info').append(postHtml);
		}
		$('.post-info').slideDown();
	};
	var displayComments = function(commentBtn,comments){
		var commentContainer = $(commentBtn).parents('.post').find('.comment-container');
		for(var key in  comments){
			var singleComment = comments[key];
			var body = $('<p>').text(singleComment.body);
			var commentedBy = $('<p>').text(`By: ${singleComment.name}`);
			commentContainer.append(body)
			commentContainer.append(commentedBy)
		}
	}

	$('#get-user-form [name="userId"]').on('change',function(e){
		$('.user-info').slideUp();
	})
	
	$('#get-user-form').submit(function(e){
		
		var userId = $(this).find('[name="userId"]').val();
		$('.post-info').hide();

		fetch(`${host_url}/users/${userId}`) 
		.then(function(resp) {
			return resp.json();
		}).then(myJson=>displayUserInfo(myJson));
		e.preventDefault();
	})
	$('.user-posts-btn').on('click',function(e){
		var userId = $('#get-user-form [name="userId"]').val();
		fetch(`${host_url}/posts?userId=${userId}`) 
		.then(function(resp) {
			return resp.json();
		}).then(allPosts=>displayAllPost(allPosts));
		e.preventDefault();
	})
	$(document).on('click','.comment-btn',function(e){
		var postId = $(this).parents('.post').attr('data-key');
		var commentBtn = this;

		fetch(`${host_url}/comments?postId=${postId}`) 
		.then(function(resp) {
			return resp.json();
		}).then(comments=>displayComments(commentBtn,comments));
	})
})