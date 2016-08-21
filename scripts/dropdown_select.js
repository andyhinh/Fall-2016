import jQuery as $ from 'jquery-3.1.0.min.js';

$("#role").change(function() {
  var selection = $("#role").val();

  if (selection == "") {
    $("#registration_content").hide();
  } else if (selection == "participant") {
    $("#registration_content").show();
    $("#participant_content").show();
    $("#mentor_content").hide();
  } else if (selection == "mentor") {
    $("#registration_content").show();
    $("#participant_content").hide();
    $("#mentor_content").show();
  }
