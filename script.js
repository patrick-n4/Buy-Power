setInterval(function getSecond() {
    let second = (new Date().getSeconds());
    if (second < 10) {
        document.querySelector('.seconds ').innerHTML = "0" + second;
    } else {
        document.querySelector('.seconds ').innerHTML =
            second;
    }
}, 0)

setInterval(function getMinute() {
    let minute = (new Date().getMinutes())
    if (minute < 10) {
        document.querySelector('.minutes ').innerHTML = ("0" + minute + " :");
    } else {
        document.querySelector('.minutes ').innerHTML = minute + " :";
    }
}, 0)

setInterval(function getHour() {
    let hour = (new Date()).getHours();
    document.querySelector('.hours').innerHTML = hour + " :";
}, 0);
document.querySelector('#register').addEventListener('click', () => {
    alert("Registered successfully");
})
document.querySelector('#buy').addEventListener('click', () => {
    alert("Thank you for using our services\n Check you the message on your email or Phone.");
})