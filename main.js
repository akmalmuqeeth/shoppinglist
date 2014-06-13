$(document).ready(function(){

 //$(".list li:odd").css("background-color","#B74040");

//add list item when button is clicked
$(".addButton").on('click',function() {
	addListItem();
});

//make all list items respond to click and dblclick
$(".list li").each(function() {
	makeListable($(this))
})

$("#inputTextBox").keypress(function(key) {
	if(key.which == 13) {
		addListItem();
	}
});
});

function addListItem(){
	var inputVal = $("#inputTextBox").val();
	$("#inputTextBox").val('');
	var $list = $('.list');
	var listItem = $("<li>" +inputVal+ "</li>");
	makeListable(listItem); 
	$list.append(listItem)
	 
}

function makeListable(node) {
	node.on('click',function() {
        // $(this).hide();
        $(this).toggleClass('striked');
    })

	node.dblclick(function(){
		// $(this).fadeOut('fast');
		var removedText = $(this).text();
		var listItem = $("<li>" +removedText+ "</li>");
		$(".historyList").append(listItem)

		$(this).remove();
		// $(".list li:odd").css("background-color","#B74040");
		// $(".completedList").append($(this));


	})

}

