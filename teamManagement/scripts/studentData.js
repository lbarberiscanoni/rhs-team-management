var listOfStudents = new Firebase("https://rhs-team.firebaseio.com/currentTeam");

$(document).ready(function() {
    listOfStudents.on("child_added", function(snapshot) {
        var student = snapshot.val();
        $("#studentName").append("<option>" + student.name + "</option>");
    });

    var listOfEvents = ["hi", "di", "dec", "congress", "duo", "expos", "extemp", "impromptu", "info", "kiddyLit", "noviceLD", "novicePF", "oo", "poetry", "poi", "prose", "varsityLD", "varsityPF"];
    for (i = 0; i < listOfEvents.length; i++) {
        $("#event").append("<option>" + listOfEvents[i] + "</option>");
    };

    $("#submit").click(function() {
        var tournament = $("#tournament").val();
        var studentName = $("#studentName").val();
        var event = $("#event").val();
        var placing = $("#placing").val();
        alert(studentName + " placed " + placing + " in " + event + " at " + tournament);
        window.location.reload();
    });
});
