var listOfAlumni = new Firebase("https://rhs-team.firebaseio.com/alumni");

$(document).ready(function() {
    listOfAlumni.on("child_added", function(snapshot) {
        alumn = snapshot.val();
        alumnName = alumn.name;
        $("#" + alumn.gradYear).append("<button class='btn btn-default'>" + alumnName + "</button>");
    });
});
