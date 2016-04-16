var listOfTeamMember = new Firebase("https://rhs-team.firebaseio.com/currentTeam");

var listOfCoaches = new Firebase("https://rhs-team.firebaseio.com/coaches");

$(document).ready(function() {
    $("#addTeamMember").click(function() {
        var firstName = $("#students #firstName").val().toLowerCase().replace(" ", "");
        var lastName = $("#students #lastName").val().toLowerCase().replace(" ", "");
        var graduationYear = $("#graduationYear").val();
        var studentName = firstName + "-" + lastName
        listOfTeamMember.push({
            name: studentName,
            graduationYear: graduationYear,
            events: {
                mainEvent: "",
                secondEvent: "",
                thirdEvent: "",
            },
            record: {
                hi: {
                    randomTournament: 0,
                },
                di: {
                    randomTournament: 0,
                },
                duo: {
                    randomTournament: 0,
                },
                noviceLD: {
                    randomTournament: 0,
                },
                varsityLD: {
                    randomTournament: 0,
                },
                prose: {
                    randomTournament: 0,
                },
                poetry: {
                    randomTournament: 0,
                },
                novicePF: {
                    randomTournament: 0,
                },
                varsityPF: {
                    randomTournament: 0,
                },
                extemp: {
                    randomTournament: 0,
                },
                oo: {
                    randomTournament: 0,
                },
                poi: {
                    randomTournament: 0,
                },
                kiddyLit: {
                    randomTournament: 0,
                },
                info: {
                    randomTournament: 0,
                },
                impromptu: {
                    randomTournament: 0,
                },
                dec: {
                    randomTournament: 0,
                },
                expos: {
                    randomTournament: 0,
                },
                congress: {
                    randomTournament: 0,
                },
            },
        });
        
        alert(studentName + " was added");
        window.location.reload();
    });

    $("#addCoach").click(function() {
        var firstName = $("#coaches #firstName").val().toLowerCase().replace(" ", "");
        var lastName = $("#coaches #lastName").val().toLowerCase().replace(" ", "");
        var coachName = firstName + "-" + lastName
        listOfCoaches.push({
            name: coachName,
        });
       
        alert(coachName + " was added");
        window.location.reload();
    });
});
