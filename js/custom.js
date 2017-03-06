$(function () {
	
	var itemCount = $(".slider-content").length;
	
	$("#btn2").click(function () {
		$(".slider-content").eq(0).fadeOut("slow", next);

		function next() {
			var firstItemContent = $(".slider-content").eq(0).attr("src");
			$(".slider-content").each(function (index) {
				var nextItemContent = $(".slider-content").eq(index + 1).attr("src");
				$(".slider-content").eq(index).attr("src", nextItemContent);
			});
			$(".slider-content").eq(itemCount - 1).attr("src", firstItemContent);
		}
		$(".slider-content").eq(0).fadeIn("fast");
	});
	
	$("#btn1").click(function () {
		$(".slider-content").eq(0).fadeOut("fast", prev);

		function prev() {
			var lastItemContent = $(".slider-content").eq(itemCount - 1).attr("src");
			$(".slider-content").each(function (index) {
				var prevItemContent = $(".slider-content").eq(itemCount - 2 - index).attr("src");
				$(".slider-content").eq(itemCount - 1 - index).attr("src", prevItemContent);
			});
			$(".slider-content").eq(0).attr("src", lastItemContent);
		}
		$(".slider-content").eq(0).fadeIn("slow");
	});
	
});