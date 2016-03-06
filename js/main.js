$(document).ready(function() {
$(".slideShow img").click(function(event){
    var smlImg = $(this).attr("src");
    var  lrgImg = $(".lrgImg").attr("src");
      $(".lrgImg").attr("src",smlImg);
});
});

