let chose_id = 0;
let quest_id = "";
let score = 0;

questions = {
    ques1: ["un", "deux", "trois", "quatre"],
    ques2: ["html", "css", "c#", "python"],
    ques3: ["yaounde", "marseile", "everton", "douala"],
    ques4: ["dev ins", "iut", "polytech", "ens"]
}

reponses = {
    ques1: "deux",
    ques2: "html",
    ques3: "yaounde",
    ques4: "dev ins"
}

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("q");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    timer();
    setTimeout(showSlides, 10000); // Change image every 2 seconds
}

function Verify_Answer(event) {

    if (questions[quest_id][chose_id] === reponses[quest_id]) {
        event.target.style.backgroundColor = "green";
        score++;
        document.getElementById("score").innerText = score;
    } else {
        event.target.style.backgroundColor = "red";
    }
}

function return_index(event) {
    chose_id = event.target.id;
    quest_id = event.target.parentElement.id;
    Verify_Answer(event)
}


function timer() {
    var time;
    var timer = setInterval(function () {
        time = document.getElementById("timer").value += 1;
        // if (time == 30) {
        //     clearInterval(timer)
        //     //alert("stop");
        // }
    }, 1000)
}


//setTimeout(clearInterval(myInterval), 30000)





