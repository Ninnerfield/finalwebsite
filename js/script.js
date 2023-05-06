// Slide Show
function currentYear() {
    let d = new Date();
    document.getElementById('copyright').innerHTML = d.getFullYear();

}



// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


// Slide Show
let intIndex = 0;

function showImage(i) {
    intIndex += i;

    let images = document.getElementsByClassName('image');
    let dots = document.getElementsByClassName('dot');

    for(n = 0; n< images.length; n++) {
        images[n].style.display = "none";
        dots[n].className = dots[n].className.replace(" active", "");
    }

    if(intIndex > images.length - 1) {
        intIndex = 0;
    }

    if(intIndex < 0) {
        intIndex = images.length - 1;
    }

    images[intIndex].style.display = "block";
    dots[intIndex].className += " active";

}

function currentTime() {
  let theTime = new Date();

  let theDayNum = theTime.getDay();
  let theHour = theTime.getHours();
  let theMinutes = theTime.getMinutes();
  let theSeconds = theTime.getSeconds();

  let theDay = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  let AmPm = "AM";

  if(theHour >= 12) {
      AmPm = "PM";
  }

  if(theHour > 12) {
      theHour = theHour % 12;

  }

  if(theHour < 10) {
      theHour = "0" + theHour;

  }

  if(theMinutes < 10) {
      theMinutes = "0" + theMinutes
  }

  if(theSeconds < 10) {
      theSeconds = "0" + theSeconds
  }

  document.getElementById('day').innerHTML = theDay[theDayNum];
  document.getElementById('hour').innerHTML = theHour;
  document.getElementById('minute').innerHTML = theMinutes;
  document.getElementById('second').innerHTML = theSeconds;
  document.getElementById('ampm').innerHTML = AmPm

  let evenSeconds = theSeconds % 2;

  if(evenSeconds === 0) {
      document.getElementById('colon1').style.color = "red";
      document.getElementById('colon2').style.color = "red";
  }
  else {
      document.getElementById('colon1').style.color = "black";
      document.getElementById('colon2').style.color = "black";
  }
}

setInterval(() => {
  currentTime()
}, 1000);



window.onload = function() {
    currentYear();
    showImage(intIndex);

}