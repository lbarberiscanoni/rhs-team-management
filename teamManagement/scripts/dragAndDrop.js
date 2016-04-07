var listOfTeamMembers = new Firebase("https://rhs-team.firebaseio.com/currentTeam");

$("#change").click(function() {
    var status = $(this).text()
    if (status == "Change") {
        $(this).text("submit change")
        alert("ready to change team events");
        $(".draggable").addClass("btn btn-default");

        $(".draggable").click(function() {
            $(this).draggable({
                cursor: "move",
                stack: ".droppableSection",
                revert: false,
            });

            $(".droppableSection").droppable({
                drop: function(event, ui) {
                    var lol = ui.draggable[0].id;
                    $("#" + lol).appendTo($(this)).removeAttr("style");
                },
            });
        });
    } else {
        $(".draggable").removeClass("btn btn-default");
        //trying to get everyone on this
        for (i = 1; i < $(".draggable").parent().length; i++) {
            var thisFilledEventSection = $(".draggable").parent()[i];
            console.log(thisFilledEventSection);
            var thisEvent = thisFilledEventSection.id;
            for (j = 1; j < thisFilledEventSection.childElementCount; j++) {
                var thisStudent = thisFilledEventSection.children[j].id;
                var thisStudentID = thisFilledEventSection.children[j].title;
                console.log(thisStudent);
                console.log(thisStudentID);
                var eventPriority = thisStudent.split("-")[2]
                console.log(eventPriority);
                switch (eventPriority) {
                    case "A":
                        listOfTeamMembers.child(thisStudentID).child("events").update({ mainEvent: thisEvent, });
                        break;
                    case "B":
                        listOfTeamMembers.child(thisStudentID).child("events").update({ secondEvent: thisEvent, });
                        break;
                    case "C":
                        listOfTeamMembers.child(thisStudentID).child("events").update({ thirdEvent: thisEvent, });
                        break;
                };
            };
        };
        window.location.reload();
    };
});
