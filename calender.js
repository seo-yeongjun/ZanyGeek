var today = new Date();
function full() {
    var first = new Date(today.getFullYear(), today.getMonth(), 1);
    var last = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    var td = document.querySelector(".dal");
    var month = document.getElementById("Month");
    if (today.getMonth() == 0) { month.innerText = "January"; document.body.style.backgroundImage = "url('calendar/1.png')"; document.body.style.backgroundSize = "100% 100%" }
    else if (today.getMonth() == 1) { month.innerText = "February"; document.body.style.backgroundImage = "url('calendar/2.png')"; document.body.style.backgroundSize = "100% 100%" }
    else if (today.getMonth() == 2) { month.innerText = "March"; document.body.style.backgroundImage = "url('calendar/3.png')"; document.body.style.backgroundSize = "100% 100%" }
    else if (today.getMonth() == 3) { month.innerText = "April"; document.body.style.backgroundImage = "url('calendar/4.png')"; document.body.style.backgroundSize = "100% 100%" }
    else if (today.getMonth() == 4) { month.innerText = "May"; document.body.style.backgroundImage = "url('calendar/5.png')"; document.body.style.backgroundSize = "100% 100%" }
    else if (today.getMonth() == 5) { month.innerText = "June"; document.body.style.backgroundImage = "url('calendar/6.png')"; document.body.style.backgroundSize = "100% 100%" }
    else if (today.getMonth() == 6) { month.innerText = "July"; document.body.style.backgroundImage = "url('calendar/7.png')"; document.body.style.backgroundSize = "100% 100%" }
    else if (today.getMonth() == 7) { month.innerText = "August"; document.body.style.backgroundImage = "url('calendar/8.png')"; document.body.style.backgroundSize = "100% 100%" }
    else if (today.getMonth() == 8) { month.innerText = "September"; document.body.style.backgroundImage = "url('calendar/9.png')"; document.body.style.backgroundSize = "100% 100%" }
    else if (today.getMonth() == 9) { month.innerText = "October"; document.body.style.backgroundImage = "url('calendar/10.png')"; document.body.style.backgroundSize = "100% 100%" }
    else if (today.getMonth() == 10) { month.innerText = "November"; document.body.style.backgroundImage = "url('calendar/11.png')"; document.body.style.backgroundSize = "100% 100%" }
    else if (today.getMonth() == 11) { month.innerText = "December"; document.body.style.backgroundImage = "url('calendar/12.png')"; document.body.style.backgroundSize = "100% 100%" }
    var row = td.insertRow();
    var day = 0;

    for (i = 0; i < first.getDay(); i++) {
        cell = row.insertCell();
        day += 1;
    } //i가 첫째날의 요일의 값보다 작으면 ++ 반복 (첫째날 칸전까지 cell 만들기)

    for (i = 1; i <= last.getDate(); i++) {
        cell = row.insertCell();
        cell.innerText = i;
        day += 1;
        if (day % 7 == 0) {
            row = td.insertRow();
        }
    }
}