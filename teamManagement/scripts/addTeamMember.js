var listOfTeamMember = new Firebase("https://rhs-team.firebaseio.com/currentTeam");

$(document).ready(function() {
    $("#addTeamMember").click(function() {
        var firstName = $("#firstName").val().toLowerCase().replace(" ", "");
        var lastName = $("#lastName").val().toLowerCase().replace(" ", "");
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
        
        window.location.reload();
    });
});
