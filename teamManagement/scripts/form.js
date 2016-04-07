var listOfAlumni = new Firebase("https://rhs-team.firebaseio.com/alumni");

$(document).ready(function() {
    $("#submit").click(function() {
        var name = $("#name").val();
        var degree = $("#degree").val();
        var meritDate = $("#meritDate").val();
        var points = $("#points").val();
        var gradYear = $("#gradYear").val();

        listOfAlumni.push({
            name: name,
            degree: degree,
            meritDate: meritDate,
            points: points,
            gradYear: gradYear,
        });

        window.location.reload()
    });
});
