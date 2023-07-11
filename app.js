const worktime = document.querySelector(".work-time");
const previouswork = document.querySelector(".previous-work")
const playtime = document.querySelector(".play-time");
const previousplay = document.querySelector(".previous-play")
const studytime = document.querySelector(".study-time");
const previousstudy = document.querySelector(".previous-study")
const exercisetime = document.querySelector(".exercise-time");
const previousexercise = document.querySelector(".previous-exercise")
const socialtime = document.querySelector(".social-time");
const previoussocial = document.querySelector(".previous-social")
const selfcaretime = document.querySelector(".selfcare-time");
const previousselfcare = document.querySelector(".previous-selfcare");
const monthly = document.querySelector(".monthly");
const daily = document.querySelector(".daily")
const weekly = document.querySelector(".weekly")

daily.addEventListener("click", function () {
    daily.style.opacity = "1";
    weekly.style.opacity = "0.6";
    monthly.style.opacity = "0.6";
    worktime.innerHTML = "5hrs";
    previouswork.innerHTML = "Last Day - 7hrs";
    playtime.innerHTML = "1hrs";
    previousplay.innerHTML = "Last Day - 2hrs";
    studytime.innerHTML = "0hrs";
    previousstudy.innerHTML = "Last Day - 1hrs";
    exercisetime.innerHTML = "1hrs";
    previousexercise.innerHTML = "Last Day - 1hrs";
    socialtime.innerHTML = "1hrs"
    previoussocial.innerHTML = "Last Day - 3hrs";
    selfcaretime.innerHTML = "0hrs";
    previousselfcare.innerHTML = "Last Day - 1hrs";
    
});
weekly.addEventListener("click", function () {
    weekly.style.opacity = "1";
    daily.style.opacity = "0.6";
    monthly.style.opacity = "0.6";
    worktime.innerHTML = "32hrs";
    previouswork.innerHTML = "Last Week - 36hrs";
    playtime.innerHTML = "10hrs";
    previousplay.innerHTML = "Last Week - 8hrs";
    studytime.innerHTML = "4hrs";
    previousstudy.innerHTML = "Last Week - 7hrs";
    exercisetime.innerHTML = "4hrs";
    previousexercise.innerHTML = "Last Week - 5hrs";
    socialtime.innerHTML = "5hrs"
    previoussocial.innerHTML = "Last Week - 10hrs";
    selfcaretime.innerHTML = "2hrs";
    previousselfcare.innerHTML = "Last Week - 2hrs";
    
});
monthly.addEventListener("click", function () {
    monthly.style.opacity = "1";
    daily.style.opacity = "0.6";
    weekly.style.opacity = "0.6";
    worktime.innerHTML = "103hrs";
    previouswork.innerHTML = "Last Month - 128hrs";
    playtime.innerHTML = "23hrs";
    previousplay.innerHTML = "Last Month - 29hrs";
    studytime.innerHTML = "13hrs";
    previousstudy.innerHTML = "Last Month - 19hrs";
    exercisetime.innerHTML = "11hrs";
    previousexercise.innerHTML = "Last Month - 18hrs";
    socialtime.innerHTML = "21hrs"
    previoussocial.innerHTML = "Last Month - 23hrs";
    selfcaretime.innerHTML = "7hrs";
    previousselfcare.innerHTML = "Last Month - 11hrs";
    
});
