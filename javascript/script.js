let scrollup = () => {
    let scrollup = document.getElementById("scroll-up");
    this.scrollY >= 350 ? scrollup.classList.add("show-scroll") 
    : scrollup.classList.remove("show-scroll");
};
window.addEventListener('scroll', scrollup);

let scrollupButton =document.getElementById("scroll-up");
scrollupButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0
    });
});

const stats = document.getElementById('stats');
const nums = stats.querySelectorAll('.box .number');
let started = false;
console.log(nums);

const Increasing = (ele) => {
    let goal = ele.dataset.goal;
    let start = setInterval(() => {
        ele.textContent = (parseInt(ele.textContent) + 1).toString();
        if(ele.textContent == goal) {
            clearInterval(start)
        }
    }, 2000 / goal);
}

window.onscroll = function () {
    if(window.scrollY >= stats.offsetTop - 100) {
        if(!started) {
            nums.forEach((num) => Increasing(num));
        }
        started = true;
    }
}

const ourSkills = document.getElementById("our-skills");
const progressSpans = ourSkills.querySelectorAll(".the-progress span");
window.addEventListener("scroll", () => {
    if(window.scrollY >= ourSkills.offsetTop - 100) {
        progressSpans.forEach(span => {
            span.style.width = span.dataset.width;
        });
    }
});






const data = new Date("Dec 31, 2023 23:59:59").getTime();
const countDown = () => {
    let currentData = new Date().getTime();
    let dateDifference = data - currentData;
    if(dateDifference >= 0) {
        const  days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
        const  hours = Math.floor((dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const  minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
        const  seconds = Math.floor(dateDifference % (1000 * 60) / 1000);

        const formattedHours = hours.toString().padStart(2, '0');
        const formattedMinutes = minutes.toString().padStart(2, '0');
        const formattedSeconds = seconds.toString().padStart(2, '0');

        document.querySelector('.days').innerHTML = days;
        document.querySelector('.hours').innerHTML = formattedHours;
        document.querySelector('.minutes').innerHTML = formattedMinutes;
        document.querySelector('.seconds').innerHTML = formattedSeconds;
    } else {
        clearInterval(counter);
    }
}

const counter = setInterval(countDown, 1000);
// calling it initially to avoid one second delay 
countDown();