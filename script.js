let chose_id = 0;
let quest_id = "";

questions = {
    ques1: ["un", "deux", "trois", "quatre"],
    ques2: ["html", "css", "c#", "python"],
    ques3: ["yaounde", "marseile", "everton", "douala"],
    ques4: ["dev ins", "iut", "polytech", "ens"]
}

reponses = {
    ques1: "deux",
    ques2: "html",
    ques3: "paris",
    ques4: "dev ins"
}

function return_index(event) {
    chose_id = event.target.id;
    quest_id = event.target.parentElement.id;
}

function Verify_Answer() {

    if (questions[quest_id][chose_id] === reponses[quest_id]) {
        console.log("true answer");
    } else {
        console.log("false Answer");
    }
}

