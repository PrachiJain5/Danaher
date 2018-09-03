$( function() {
    $( "#accordion" ).accordion({
		collapsible: true,
        active: false
	});
			$( "#accordion h4" ).click(function (event){
				console.log(event);
				var elements = $("#accordion h4")
				console.log(elements)
				$.each(elements,function (index,element){
					$(element).removeClass("active")
				})
				$(event.target).addClass("active")
				console.log(event.target)
			})
  		} );  



var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}