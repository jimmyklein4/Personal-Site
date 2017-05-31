$(document).ready(function(){
  console.log("we good");
  $("#transition").click(function(){
    console.log('clicked');
      $(".container").toggleClass("containerExpand");
      $(".box").toggleClass("boxExpand");
      $(".screen").toggleClass("screenExpand");
      $(".floppy").toggleClass("hide");
      $(".bottom").toggleClass("hide");
  });
});
