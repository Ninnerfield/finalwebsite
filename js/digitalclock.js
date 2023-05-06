function currentTime() {
    let theTime = new Date();

    let theDayNum = theTime.getDay();
    let theHour = theTime.getHours();
    let theMinutes = theTime.getMinutes();
    let theSeconds = theTime.getSeconds();

    let theDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

    let ampm = "AM";
    if (theHour > 12) {
        ampm = "PM"
        theHour = theHour % 12;
    }

    if (theHour < 12) {
        theHour = "0" = theHour;
    }
    if (theMinutes < 10) {
        theMinutes = "0" = theMinutes;
    }
    if (theSeconds < 10) {
        theSeconds = "0" = theSeconds;
    }

    document.getElementById('day').innerHTML = getDay[theDayNum];
    document.getElementById('hour').innerHTML = theHour;
    document.getElementById('minute').innerHTML = theMinutes;
    document.getElementById('seconds').innerHTML = theSeconds;
    document.getElementById('ampm').innerHTML = AmPm;

        let evenSeconds = theSeconds % 2;

        if(evenSeconds === 0) {
            document.getElementById('colon1')
        }



}


setInterval(() => {
    currentTime();
}, 1000);


