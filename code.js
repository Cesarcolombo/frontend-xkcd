const XKCD = "https://xkcd.now.sh/?comic="

// write your code here
const statusbar = document.getElementById("num");
const resetBtn = document.getElementById("reset");
const imgxkcd = document.getElementById("imgxkcd");


const fetchIssue = (num) => {
    let url = XKCD +num;
    console.log(`request to ${url}`);

    let promesse = fetch(url);

    promesse.then((reponse) =>{
        return reponse.json();
    })
    
    .then((json) => {
        let num = json.num;
        console.log(`num = ${num}`);
        imgxkcd.src = json.img
        statusbar.innerText = `Current number ${num}`
    })
}


resetBtn.addEventListener("click", ()=> fetchIssue("latest"));

