$("ul").on("click","li",function(){
    $(this).toggleClass("selected");
})

$("ul").on("click","span",function(e){
    $(this).parent().remove();
    e.stopPropagation();
})

$("input[type='text']").keypress(function(e){
    if(e.which==13)
    {
        var valuee=$(this).val();
        $(this).val("");
     $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i> </span> "+valuee+"</li>");
    }
})
$(".ss").click(function(){
   $("input[type='text']").fadeToggle();
})