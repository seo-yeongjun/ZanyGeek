function Contents() {
    alert('1.자주 이용하는 <사이트>모음\n2.메모장 기능\n3.사진 기능');
}

function checkPswd() {
    var confirmPassword = "1";
    var password = document.getElementById("pswd").value;
    if (password == confirmPassword) {
        window.location.href = 'zanygeek_main.html';
    }
    else {
        alert("비밀번호가 틀렸다네~");
    }
}
function dm() {
    if (document.getElementById('darkmode').value === 'fputs("Bright",stdout);') {
        document.querySelector('body').style.backgroundColor = '#24242B';
        document.querySelector('body').style.color = '#EDEDED';
        document.getElementById('darkmode').value = 'fputs("Dark",stdout);';
    } else {
        document.querySelector('body').style.backgroundColor = '#EDEDED';
        document.querySelector('body').style.color = 'black';
        document.getElementById('darkmode').value = 'fputs("Bright",stdout);';
    }
}
