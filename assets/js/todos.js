//check off to-dos. We add an event listener to the ul and specify li as a param, because we are creating li dynamically. if we dont do
//it this way then we wont be able to add the event listener to each now li we create
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Deal with deleting to-do list items
$("ul").on("click", "span", function(e){
	//removes the entire li, not just the span
	//without the remove fadeOut will just hide, rather than remove
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	//fire on the span but dont bubble up 
	e.stopPropagation();
});

//add a to-do list item
$('input[type = "text"]').keypress(function(e){
	//if it is the enter key that is pressed
	if(e.which === 13){
		//extract the text, add new li, clear input
		var someText = $(this).val();
		$('ul').append("<li><span><i class='fas fa-trash'></i></span> " + someText + "</li>");
		$(this).val("");
	}
});


$(".fa-pencil-alt").click(function(){
	$('input[type = "text"]').fadeToggle();
})
