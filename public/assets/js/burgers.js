$(function() {
	$(".devour").on("click", function(event) {
		console.log("boom");
		var id = $(this).data("id");

		var devoured = {
			devoured: true
		}

		$.ajax("/api/burgers/" + id, {
			type: "PUT",
			data: devoured
		}).then(function(){
			console.log("burger devoured");
			location.reload();
		})
	});

	$(".create-form").on("submit", function(event) {
		event.preventDefault();

		var newBurger = {
			burger_name: $("#name").val().trim()
		};

		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(function(){
			location.reload();
		});
	})
});