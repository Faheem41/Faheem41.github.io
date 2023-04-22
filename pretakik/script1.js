
let n = 0;
let pt = 5;
let isWin = false;

const king = "k.png";
const queen = "q.png";

const u = ["u.png", "ud.png", 1];
const w = ["w.png", "wd.png", 2];
const o = ["o1.png", "blank.png", 5];
const d = ["d.png", "blank.png", 0];
console.log(d[2]);

let seq = [u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, u, w, w, w, w, w, w, w, d, o, w, u];

const point = document.getElementById("point"); //point = seq[i][0]
const user = document.getElementById("user");
const comp = document.getElementById("comp");
const winner = document.getElementById("winner");
const map = document.getElementsByClassName("map");
const ptHtml = document.getElementById("pt");
const progress = document.getElementsByTagName("progress");


function tButton() {
    alert("Transparency Data:\n'A lot of free materials have been used in this site. Provided that this site is not used for any business purpose, still if the owner of any of the materials have any objection then please contact faheem2941@outlook.com .'\n......\n\nHow the computer's move is calculated:\nIt's not something random. The epoch from the moment of the user making his/her move to 1 January, 1970 is immediately calculated in milliseconds. Then it is divided by three. If the remainder is 0, then that will be a rock, paper if 1, otherwise scissor. Cool, Right!!!");
}

function iButton() {
    alert("How to play?\nClick the play button and enjoy the game. Press the Rock, Paper, Scissor button to declare your move. You win once you reach the castle. And loose if your point turns 0, or you are killed by Death, the skeleton.\n\nPretakik\nপ্রেপ টাইমে কী করি\n\nযদিও পরীক্ষা সামনে ছিল, পড়তে ভালো লাগছিল না। তাই এক ইভনিং প্রেপে গল্পের ফাঁকে তৈরি হয় খেলাটি। আমি, নবীন, মিনহাজ আর অঙ্কন। একজন খাতায় ম্যাপ মার্কিন, একজন ক্যালকুলেটরে পয়েন্ট গণনা ও অপর দুজন রক-পেপার-সিজার খেলা, এভাবেই শুরু। তারপর ছুটিতে একটু একটু করে কোড লেখার মধ্য দিয়েই খাতার পাতাটি স্ক্রিনে প্রকাশ পায়।\nকেমন হয়েছে তা বলতে পারবো না, তবে আপনাদের যদি কোনো মতামত থেকে থাকে তাহলে অবশ্যই জানাবেন। এবং আমার জন্য দোয়া করবেন, যাতে করে ইনশআল্লাহ শীঘ্রই আমি যেন কোনো ভালো অবস্থানে যেয়ে কাজের ফাঁকে এই প্রজেক্ট নিয়ে বিস্তারিত কাজ করতে পারি। ধন্যবাদ।");
}


function initialize (newStart) {

    n = 0;
    pt = 5;
    ptHtml.innerHTML = pt;
    progress[0].value = pt;

    if (newStart) {
        // from pure start
        for (var i=29; i>0; i--) {
            var j = Math.floor(Math.random()*(i+1)) || 1;
            [seq[i], seq[j]] = [seq[j], seq[i]];
        }
        document.getElementById("mainHtml").style.backgroundColor = '#EEEEFF';
    }

    for (i in seq) {
        let text = "<img src=" + seq[i][0] +"></img>"
        map[i].innerHTML = text;
    }

    map[0].innerHTML = "<img src='k.png'></img>";
    map[31].innerHTML = "<img src='castle.png'></img>";
}


function compute(userin) {

    const x = ['rock', 'paper', 'scissor'];
    let d = new Date();
    let compin = ((d.getTime())%10)%3;

    user.innerHTML = x[userin];
    comp.innerHTML = x[compin];

    if (userin == compin) {
        winner.innerHTML = "No";
        return 1;
    }
    else if (userin == ((compin+1) % 3)) {
        winner.innerHTML = "You";
        return 2;
    }
    else {
        winner.innerHTML = "Computer";
        return 0;
    }
}


function main(user) {

    let isUser = compute(user);

    if (isWin) {return;}

    if (isUser==2) {
        // user wins
        pt += seq[n+1][2];
        ptHtml.innerHTML = pt;
        progress[0].value = pt;
        if (n==29) {
            // game ends
            isWin = true;
            document.getElementById("mainHtml").style.backgroundColor = 'rgba(0,0,0,0)';
            map[31].innerHTML = "<img src='q.png'></img>";
            alert("You win with point " + pt + ". Congrats! You have saved the queen. Click the Play button to restart.");
            return;
        }
        map[n+1].innerHTML = map[n].innerHTML;
        map[n].innerHTML = "<img src=" + seq[n][1] +"></img>";
        n += 1;
        point.innerHTML = seq[n+1][2];
    }

    else if(isUser==1){/*no win*/}

    else {
        // comp wins
        if((pt-seq[n+1][2] <= 0) || seq[n+1]==d) {
            isWin = false;
            map[n].innerHTML = "<img src='blank.png'></img>";
            alert("You are killed. You lost the game :( The game will restart automatically.");
            initialize(false);
            return;
        }
        pt -= seq[n+1][2];
        ptHtml.innerHTML = pt;
        progress[0].value = pt;
    }
}


if ((screen.orientation.type == "portrait-primary") ||
    (screen.orientation.type == "portrait-primary")) {
        document.body.style.display = 'none';
        alert("Please rotate your screen to landscape and then reload :)");
}

initialize(true);