var currentTeam = new Firebase("https://rhs-team.firebaseio.com/currentTeam");

var practiceSchedule = new Firebase("https://rhs-team.firebaseio.com/practiceSchedule");

$(document).ready(function() {
    currentTeam.on("child_added", function(snapshot) {
        var student = snapshot.val();
        $("#studentName").append("<option>" + student.name + "</option>");
    });

    $("#submit").click(function() {
        var studentName = $("#studentName").val();
        var practiceDate = $("#practiceDate").val();
        practiceSchedule.push({
            name: studentName,
            title: studentName,
            practiceDate: practiceDate,
            coach: "",
            start: practiceDate,
            end: practiceDate,
        });

        alert(studentName + " just signed up for practice");
        window.location.reload();
    });
});
