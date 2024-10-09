window.onload = function () {
    var top = document.getElementById('top')
    top.innerHTML = "Welcome to the Forum";
};

function clearFunction() {
    document.getElementById('topic').innerText = '';
    document.getElementById('reply1').innerText = ''; 
    document.getElementById('reply2').innerText = '';
    document.getElementById('message').value = '';
    postCount = 0;
}
let postCount = 0;
function postFunction() {
    const message = document.getElementById('message').value;

    if (postCount === 0) {
        document.getElementById('topic').innerText = message;
        document.getElementById('message').value = '';
    } else if (postCount === 1) {
        document.getElementById('reply1').innerText = message;
        document.getElementById('message').value = '';
    } else if (postCount === 2) {
        document.getElementById('reply2').innerText = message;
        document.getElementById('message').value = '';
    }
    postCount++;
}