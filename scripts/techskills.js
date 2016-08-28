jQuery(function($) {
  $("#mentorship").hide();
  $(".technical-skills").select2(
    {tags:["Java", "Javascript", "C++","SQL"]}
  );
  $("#first-0, #first-1").change(function() {
    var selection = this.id;

    if (selection == "first-0") {
      $("#mentorship").hide();
    } else if (selection == "first-1") {
      $("#mentorship").show();
    }
  });
});
