jQuery(function($) {
  $("#ContinueToPage2").click(function () {
    $("#page1").removeClass("current")
     $("#page1 .content").slideUp();
     $("#page2").addClass("current")
    $("#page2 .content").slideDown();
  });
  $("#ContinueToPage3").click(function () {
    $("#page2").removeClass("current")
     $("#page2 .content").slideUp();
    $("#page3").addClass("current")
    $("#page3 .content").slideDown();
  });
  $("#ContinueToPage4").click(function () {
    $("#page3").removeClass("current")
     $("#page3 .content").slideUp();
     $("#page4").addClass("current")
    $("#page4 .content").slideDown();
  });
  $("#ContinueToPage5").click(function () {
    $("#page4").removeClass("current")
     $("#page4 .content").slideUp();
     $("#page5").addClass("current")
    $("#page5 .content").slideDown();
  });
  $("#ContinueToPage6").click(function () {
    $("#page5").removeClass("current")
     $("#page5 .content").slideUp();
     $("#page6").addClass("current")
    $("#page6 .content").slideDown();
  });
  $("#ContinueToPage7").click(function () {
    $("#page6").removeClass("current")
     $("#page6 .content").slideUp();
     $("#page7").addClass("current")
    $("#page7 .content").slideDown();
  });
});
