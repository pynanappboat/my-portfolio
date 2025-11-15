//Scrolling
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


// Update current year
const d = new Date();
currentYear = d.getFullYear();
document.getElementById("year").innerHTML = currentYear


// About Me
const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    };
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    };
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
};

// Side Menu
const sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = "0";
}
function closemenu() {
    sidemenu.style.right = "-13rem";
}

// Time and Date in GHANA
const TIMEZONE = 'Africa/Accra';
const elTime = document.getElementById('gh-time');
const elDate = document.getElementById('gh-date');

function updateTimeAndDate() {
  const now = new Date();
  const timeFormatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: TIMEZONE,
    hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false
  });
  const dateFormatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: TIMEZONE,
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric'
  });
  elTime.textContent = timeFormatter.format(now);
  elDate.textContent = dateFormatter.format(now);
}

// Initialize and update every second
updateTimeAndDate();
setInterval(updateTimeAndDate, 1000);
