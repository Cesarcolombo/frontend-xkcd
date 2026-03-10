const XKCD = "https://xkcd.now.sh/?comic="

// write your code here
const statusbar = document.getElementById("num");
const resetBtn = document.getElementById("reset");
const imgxkcd = document.getElementById("imgxkcd");
const nextBtn = document.getElementById("next");
const previousBtn = document.getElementById("previous");
let number = "latest"

const fetchIssue = (num) => {
    let url = XKCD + num;
    console.log(`request to ${url}`);

    let promesse = fetch(url);

    promesse.then((reponse) =>{
        return reponse.json();
    })

    .then((json) => {
        number = json.num;
        console.log(`num = ${number}`);
        imgxkcd.src = json.img;
        statusbar.innerText = `Current number ${number}`
    })
}
function previous(number){
    fetchIssue(number-1);
}

function next(number){
    fetchIssue(number+1);
}



resetBtn.addEventListener("click", ()=> fetchIssue("latest"));
nextBtn.addEventListener("click", () => next(number));
previousBtn.addEventListener("click", () => previous(number));