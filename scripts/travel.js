jQuery(function($) {
  $("#travel_agreement").hide();

  $("#travel-0, #travel-1").change(function() {
    var selection = this.id;

    if (selection == "travel-0") {
      $("#travel_agreement").hide();
    } else if (selection == "travel-1") {
      $("#travel_agreement").show();
    }
  });
});
