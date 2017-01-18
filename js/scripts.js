$(document).ready(function(){
  $("#workResponses").hide();
  $("#activityResponses").hide();
  $("form#transportationSurvey").submit(function(event){
    event.preventDefault();

    $("input:checkbox[name=workTransportation]:checked").each(function(){
      var workTransportationMode = $(this).val();
      $("#workResponses").append(workTransportationMode + "<br>");
    });

    $("input:checkbox[name=activityTransportation]:checked").each(function(){
      var activityTransportationMode = $(this).val();
      $("#activityResponses").append(activityTransportationMode + "<br>");
    });

    $("#transportationSurvey").hide();
    $("#workResponses").show();
    $("#activityResponses").show();

  });
});
