var listOfAlumni = new Firebase("https://rhs-team.firebaseio.com/alumni");

$(document).ready(function() {
    listOfAlumni.on("child_added", function(snapshot) {
        alumn = snapshot.val();
        alumnName = alumn.name;
        console.log(alumnName.split(" ").length);
        if (alumnName.split(" ").indexOf("Premier") == -1) {
            $("#listofAlumni").append("<button>" + alumnName + "</button>");
        } else {
            $("#listofAlumni").append("<button style='background-color: red;' class='toFix'>" + alumnName + "</button>");
            $(".toFix:last").click(function() {
                partToMove = $(this).text().split(" ")[2]
                newName = $(this).text().split(" ")[0] + " " + $(this).text().split(" ")[1]; 
                listOfAlumni.child(snapshot.key()).update({
                    degree: partToMove + " Distinction",
                    name: newName,
                });
            });
        };
    });
});
