var listOfTeamMembers = new Firebase("https://rhs-team.firebaseio.com/currentTeam");

$(document).ready(function() {
    var listOfEvents = ["hi", "di", "dec", "congress", "duo", "expos", "extemp", "impromptu", "info", "kiddyLit", "noviceLD", "novicePF", "oo", "poetry", "poi", "prose", "varsityLD", "varsityPF"];
    for (i = 0; i < listOfEvents.length; i++) {
        $("#sortedStudents").append("<div class='col-md-4 droppableSection' id='" + listOfEvents[i] + "' style='background-color: grey; border: 1px solid black;'><h4 class='text-center'>" + listOfEvents[i] + "</h4></div>");
    };
    listOfTeamMembers.on("child_added", function(snapshot) {
        var teamMember = snapshot.val();
        if (teamMember.events.mainEvent == "") {
            $("#studentsToSort").append("<h3 class='draggable' id='" + teamMember.name + "-A' title='" + snapshot.key() + "'>" + teamMember.name + " A</h3>");
            $("#studentsToSort").append("<h3 class='draggable' id='" + teamMember.name + "-B' title='" + snapshot.key() + "'>" + teamMember.name + " B</h3>");
            $("#studentsToSort").append("<h3 class='draggable' id='" + teamMember.name + "-C' title='" + snapshot.key() + "'>" + teamMember.name + " C</h3>");
        } else {
            if (teamMember.events.secondEvent == "") {
                $("#sortedStudents #" + teamMember.events.mainEvent).append("<h3 class='draggable' id='" + teamMember.name + "-A' title='" + snapshot.key() + "'>" + teamMember.name + " A</h3>");
                $("#studentsToSort").append("<h3 class='draggable' id='" + teamMember.name + "-B' title='" + snapshot.key() + "'>" + teamMember.name + " B</h3>");
                $("#studentsToSort").append("<h3 class='draggable' id='" + teamMember.name + "-C' title='" + snapshot.key() + "'>" + teamMember.name + " C</h3>");
            } else {
                if (teamMember.events.thirdEvent == "") {
                    $("#sortedStudents #" + teamMember.events.mainEvent).append("<h3 class='draggable' id='" + teamMember.name + "-A' title='" + snapshot.key() + "'>" + teamMember.name + " A</h3>");
                    $("#sortedStudents #" + teamMember.events.secondEvent).append("<h3 class='draggable' id='" + teamMember.name + "-B' title='" + snapshot.key() + "'>" + teamMember.name + " B</h3>");
                    $("#studentsToSort").append("<h3 class='draggable' id='" + teamMember.name + "-C' title='" + snapshot.key() + "'>" + teamMember.name + " C</h3>");
                } else {
                    $("#sortedStudents #" + teamMember.events.mainEvent).append("<h3 class='draggable' id='" + teamMember.name + "-A' title='" + snapshot.key() + "'>" + teamMember.name + " A</h3>");
                    $("#sortedStudents #" + teamMember.events.secondEvent).append("<h3 class='draggable' id='" + teamMember.name + "-B' title='" + snapshot.key() + "'>" + teamMember.name + " B</h3>");
                    $("#sortedStudents #" + teamMember.events.thirdEvent).append("<h3 class='draggable' id='" + teamMember.name + "-C' title='" + snapshot.key() + "'>" + teamMember.name + " C</h3>");
                };
            };
        };
    });
});
