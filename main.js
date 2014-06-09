$(document).ready(function(){
//add list item when button is clicked
$(".addButton").on('click',function() {
	var inputVal = $("#inputTextBox").val();
	$("#inputTextBox").val('');
	var $list = $('.list');
	var listItem = $("<li>" +inputVal+ "</li>");
	makeListable(listItem); 
	$list.append(listItem)
});

//make all list items respond to click and dblclick
$(".list li").each(function() {
	makeListable($(this))
})



});

function makeListable(node) {
	node.on('click',function() {
        // $(this).hide();
         $(this).addClass('striked');
	})

	node.dblclick(function(){
        $(this).fadeOut('fast');
    }) 
}

