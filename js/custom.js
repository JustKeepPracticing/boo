var countDownDate = new Date("Aug 24, 2019 22:55:25").getTime();

var timer = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    var dayText = days > 1 ? "Days" : "Day";

    var daysContent = days >= 1 ? "<div class='days-count'><div>" + days + "</div><div>" + dayText + "</div></div>" : "";

    var timerContent = '<div class="timer">' +
        daysContent +
        "</div>";
    document.getElementById("countdown").innerHTML = timerContent;

    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);

// timer end
