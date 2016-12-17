
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed")
});
$('ul').on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove()
    });
    
    event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if (event.which === 13) {
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ todoText + "</li>")
	}
 
// $("li").on("mouseover", function(){
//   $("span").fadeIn();

// });

});


$(".fa-plus").click(function() {
	$("input[type='text'").fadeToggle();


})

// $('input').keypress(function() {
//     var dInput = this.value;
//     console.log(dInput);
//     $(".input('" + dInput + "')").css("display","block");
// });
// // .append("<li>Appended item</li>");