var practiceSchedule = new Firebase("https://rhs-team.firebaseio.com/practiceSchedule");

$(document).ready(function() {
    var today = new Date()
    practiceSchedule.on("child_added", function(snapshot) {
        var student = snapshot.val();
        var practiceDate = new Date(student.practiceDate);
        console.log(student.practiceDate);
        if (practiceDate >= today) {
            if (student.coach == "") {
                $("#toSort").append("<div class='row' id='" + snapshot.key() + "'><label>" + student.name + "</label><select id='coachName' class='form-control'><option>Select a Coach</option></select></div>");
                listOfCoaches = ["Dejesa", "Cook", "Pete", "Jeff", "Mel", "Rhett"];
                for (i = 0; i < listOfCoaches.length; i++) {
                    $("#" + snapshot.key() + " #coachName").append("<option>" + listOfCoaches[i] + "</option>");
                };

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
