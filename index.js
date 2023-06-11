window.addEventListener("keydown", highlightButton);
let keyRange = document.querySelectorAll(".key");

function highlightButton(e) {
    let btnPressed = e.key;
    let keys = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
    if (keys.includes(btnPressed)) {
        document.getElementById(btnPressed).classList.toggle("keydown");
        let audio = new Audio('audio/' + btnPressed + '.wav');
        audio.play();
        setTimeout(function () {
            document.getElementById(btnPressed).classList.toggle("keydown");
        }, 200);
    }
    else {
        console.log("press the right key please");
    }
}