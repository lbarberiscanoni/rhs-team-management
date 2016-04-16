var practiceSchedule = new Firebase("https://rhs-team.firebaseio.com/practiceSchedule");

var listOfCoaches = new Firebase("https://rhs-team.firebaseio.com/coaches");

$(document).ready(function() {
    var today = new Date()
    practiceSchedule.on("child_added", function(snapshot) {
        var student = snapshot.val();
        var studentID = snapshot.key();
        var practiceDate = new Date(student.practiceDate);
        console.log(student.name + " " + student.practiceDate);
        console.log(practiceDate.getDate());
        console.log(today.getDate());
        if (practiceDate.getDate() >= today.getDate()) {
            if (student.coach == "") {
                $("#toSort").append("<div class='row' id='" + snapshot.key() + "'><label>" + student.name + "</label><select id='coachName' class='form-control'><option>Select a Coach</option></select></div>");
                listOfCoaches.on("child_added", function(snapshot) {
                    var coach = snapshot.val();
                    $("#" + studentID + " #coachName").append("<option>" + coach.name + "</option>");
                });

                $("#" + snapshot.key() + " #coachName").change(function() {
                    $("#" + snapshot.key()).append("<button class='btn btn-success' id='assignCoach'>Assign Coach</button>");
                    $("#assignCoach").click(function() {
                        var assignedCoach = $("#" + snapshot.key() + " #coachName").val();
                        practiceSchedule.child(snapshot.key()).update({
                            coach: assignedCoach,
                        });
                        window.location.reload();
                    });
                });
            } else {
                $("#sorted").append("<h4 class='text-center'>" + student.name + " [" + student.coach + "]</h4>");
            };
        };
    });
});
