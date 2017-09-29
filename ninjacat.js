$( document ).ready(function() {
    $("img").click(function () {
        
        var oldimage = $(this).attr("src");
        var newimage = $(this).attr("data-alt-src");
        console.log(oldimage);
        $(this).attr("src", newimage);
        $(this).attr("data-alt-src", oldimage);
    });
});