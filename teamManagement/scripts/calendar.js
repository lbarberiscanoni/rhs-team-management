var allData = new Firebase("https://rhs-team.firebaseio.com/practiceSchedule");

$(document).ready(function() {

    //let's get today's date in order to make it the default
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    if (month < 10) {
        var month = "0".concat(month.toString());
        window.month = month;
    };
    var day = today.getDate();
    if (day < 10) {
        var day = "0".concat(day.toString());
        window.day = day;
    };
    var todaysDate = year.toString() + "-" + month.toString() + "-" + day.toString();

    //rendering the calendar with the appropriate data
    var initCalendar = function(guestList) {
        $("#calendar").remove();
        $("body").append("<div id='calendar'></div>");
        $("#calendar").fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,basicWeek,basicDay'
            },
            defaultDate: todaysDate,
            editable: false,
            eventLimit: 10, // allow "more" link when too many events
            events: guestList,
            dayClick: function(date) {
                var thisDate = date.format();
                var allEvents = $("#calendar").fullCalendar("clientEvents");
                var eventsOnDay = [];
                var loopCount = 0
                for (var i = 0; i < allEvents.length; i++) {
                    var thisEvent = allEvents[i];
                    loopCount = loopCount + 1;

                    if (thisEvent.start._i <= thisDate && thisEvent.end._i > thisDate) {
                        eventsOnDay.push(thisEvent);
                    };
                };
            }
        });
    };

    allData.once("value", function(nameSnapshot) {
        var val = nameSnapshot.val();
        // transform to a regular array
        window.allBookings = Object.keys(val).map(function(key) { return val[key] });
    });

    $("#houseName").change(function() {
        var houseSelected = $("#houseName").val();
        var guestList = window.allBookings.filter(function(a) { return a.coach === houseSelected; });
        console.log(guestList);
        initCalendar(guestList);
    });
});
