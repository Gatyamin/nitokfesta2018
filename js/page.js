// Navbarのリンクをクリックすると、自動でメニューを閉じる
/*$(function navClick() {
	$('.navbar-nav>li>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});
});
*/

// トップページを見ているときは、ハンバーガーメニューを消す
function hamburger() {
	if ($('article.main_article').css('display') == 'none'){
		$('#nav-open').show();
	}
	else {
		$('#nav-open').hide();
	}
}

$(document).ready(function() {
	hamburger();
	$(this).on("click", ".top-menu-button, .see-more-pc, .see-more-pc-small, .header-img > img, .nav-content-link, .nav-content-title-logo",  function() {
		$("article#main_content").empty().html("<p id='loading'>Loading...</p>");
		$("html, body").scrollTop(0);
		//menu style change
		/*
		$("li.side_menu a").removeClass("nav_a_active");
		$(this).addClass("nav_a_active");
		*/
		//ページ遷移 ajax
		var pagenum = $(this).data('linkName');
		switch (pagenum) {
		  case "page1":
			pagenum = "event";
			break;

		  case "page2":
			pagenum = "timetable";
			break;

		  case "page3":
			pagenum = "poster";
			break;

		  case "page4":
			pagenum = "sponsor";
			break;

		  case "page5":
			pagenum = "staff";
			break;
		
		  case "page6":
			pagenum = "access"
			break;

		  case "page7":
			pagenum = "backnumber"
			break;
		
		  default:
			pagenum = "index";
			break;
		}
		if (pagenum != "index") {
			$("main article.main_article").css("display", "none");
			$("main article#main_content").css("display", "block");

			$.ajax({
				type: "GET",
				url: "./" + pagenum + ".html",
				dataType: "html"
			})
			.done(function(data) {
				$('#main_content').html(data);
			})
			.fail(function(data) {
				alert("読み込みエラーが発生しました。しばらくした後、再度お試しください。");
			});
		}
		else {
			$("main article.main_article").css("display", "block");
			$("main article#main_content").css("display", "none");
		}
		hamburger();
	});
	//event
	/*
	$(this).on("click", "p#event_selector span", function() {
		var menu = $(this).attr("id").substr(9);
		//class change
		$("p#event_selector span").removeClass("event_active");
		$(this).addClass("event_active");
		if (menu == "classes") {
			$("div#event_classes").css("display", "block");
			$("div#event_other").css("display", "none");
		}
		else {
			$("div#event_classes").css("display", "none");
			$("div#event_other").css("display", "block");
		}
	});
	*/

	//picture, modal
	/*
	$(this).on("click", ".modal-open", function() {
		if ($("#modal-overlay")[0]) {
			$("#modal-overlay").remove();
		}
		modalAppend($(this).children("figure").children("img").attr("src"));
		$("body").append("<div id='modal-overlay'></div>");
		$("#modal-overlay").fadeIn("fast");
		$("#modal-content").fadeIn("fast");
	});
	$(this).on("click", "#modal-overlay, .modal-close, #modal-content", function() {
		$("#modal-content").fadeOut("fast");
		$("#modal-overlay").fadeOut("fast", function() {
			$("#modal-overlay").remove();
		});
	});
	$(this).on("mouseenter", "div.picture_lists", function() {
		$(this).children("figure").children("img").css("transform", "scale(1.5)");
		$(this).children("div.gallery_explain").fadeIn();
	});
	$(this).on("mouseleave", "div.picture_lists", function() {
		$(this).children("figure").children("img").css("transform", "scale(1.0)");
		$(this).children("div.gallery_explain").fadeOut();
	});
	*/

	//mobile
	/*
	$(function() {
		var w = $(window).width();
		if (w <= 470) {
			$("<img src='./image/poster.jpg' alt='隨ｬ11蝗樊ｲ也ｸ�ｫ伜ｰら･ｭ繝昴せ繧ｿ繝ｼ'/>").appendTo("aside.main_mobile");
		}
	});
	$(window).on("resize", function() {
		var w = $(window).width();
		if (w >= 471) {
			$("aside.main_mobile").empty();
		}
	});
	*/
});