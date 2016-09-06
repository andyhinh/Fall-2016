jQuery(function($) {

  $("#registration_content").hide();

  $("#participant, #mentor").change(function() {
    // var selection = $("#role").val();
    var selection = this.id;
    console.log($(this).parent().parent().children(".btn-radio"));
    $(this).parent().parent().children(".btn-radio").removeClass("selected");
    $(this).addClass("selected");

    console.log(this);

    // $("#registration_content").hide();

    if (selection == "participant") {
      $("#registration_content").show();
      $("#participant_content").show();
      $("#mentor_content").hide();
    } else if (selection == "mentor") {
      $("#registration_content").show();
      $("#participant_content").hide();
      $("#mentor_content").show();
    }
  });
});
