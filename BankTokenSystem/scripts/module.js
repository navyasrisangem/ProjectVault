import { Queue } from "./queue.js";

var tokens = new Queue();
var tokenNumber = 1;
var speech = new SpeechSynthesisUtterance();
let username;

let generateToken = document.getElementById("generateToken");
generateToken.addEventListener("click", () => {
    username = prompt("Enter Username");
    if (!username) {
        alert("Enter proper Username");
    } else {
        tokens.enqueue(`${tokenNumber} [${username}]`);
        console.log(tokens);
        Loadtokens();
        alert("Token generated successfully!");
        tokenNumber++;
    }
})
function Loadtokens() {
    document.getElementById("lst-tokens").innerHTML = "";
    for (let item of tokens.collection) {
        let opt = document.createElement("option");
        opt.text = item;
        document.getElementById("lst-tokens").appendChild(opt);
    }
}

function callCustomer(switchEle, counterNo) {
    if (tokens.size() === 0) {
        speech.text = "Please generate token";
        window.speechSynthesis.speak(speech);
        alert("Please generate token");
        return;
    }
    if (switchEle.checked) {
        let token = tokens.dequeue();
        let option = document.createElement("option");
        option.text = token;
        let tokenNumber = token.split(" ")[0];

        let selectList = document.getElementById(`lst-counter-${counterNo}`)
        if (selectList.options.length >= 3) {
            selectList.removeChild(selectList.options[0]);   //removes first option
        }
        speech.text = `Token number ${tokenNumber} go to counter-${counterNo}`;
        window.speechSynthesis.speak(speech);
        selectList.appendChild(option);
        Loadtokens();
    } else {
        speech.text = "Please switch on the counter to call token";
        window.speechSynthesis.speak(speech);
        alert("Please switch on the counter to call token");
        return;
    }
}

document.getElementById("btnCall1").addEventListener("click", () => {
    let switchEle = document.getElementById("switch1");
    callCustomer(switchEle, 1);
})

document.getElementById("btnCall2").addEventListener("click", () => {
    let switchEle = document.getElementById("switch2");
    callCustomer(switchEle, 2);
})

document.getElementById("btnCall3").addEventListener("click", () => {
    let switchEle = document.getElementById("switch3");
    callCustomer(switchEle, 3);
})

function counterStatus(counterNo) {
    const switchEle = document.getElementById(`switch${counterNo}`);
    const status = document.getElementById(`status${counterNo}`);
    const isOpen = switchEle.checked;
    status.innerHTML = isOpen ? "Open" : "Closed";
    status.style.color = isOpen ? "green" : "red";
    status.style.fontWeight = "bold";
    status.style.fontSize = "16px";

}

document.getElementById("switch1").addEventListener("change", () => counterStatus(1));
document.getElementById("switch2").addEventListener("change", () => counterStatus(2));
document.getElementById("switch3").addEventListener("change", () => counterStatus(3));
window.addEventListener("DOMContentLoaded", () => {
    counterStatus(1);
    counterStatus(2);
    counterStatus(3);
});