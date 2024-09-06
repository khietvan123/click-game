function main()
{
    /*Score start here*/
    let click = 0;
    const score = document.createElement("h2");
    score.className = "Score";
    score.innerText = `${click}`;

    function changeScore(){
        click++;
        score.innerHTML = `<h2 class = "Score">${click}</h2>`;
    }

    /*Cat picture start here*/
    const container = document.querySelector('.Container');
    const catOpenPic = document.createElement("img");
    const catClosePic = document.createElement("img");

    catOpenPic.src = "./picture/open-mouth.png";
    catOpenPic.className = "KittyUwU";
    catClosePic.src = "./picture/closed-mouth.png";
    catClosePic.className = "KittyUwU";

    const button = document.createElement("button");
    button.type = "button";
    button.className = "KittyUwU";
    button.appendChild(catClosePic);

    button.addEventListener("mousedown",function(){
        button.innerHTML = `<img src="./picture/open-mouth.png" class ="KittyUwU">`;
        changeScore();
    });

    button.addEventListener("mouseup",function(){
        button.innerHTML = `<img src="./picture/closed-mouth.png" class ="KittyUwU">`;
    });

    /*Add to container*/
    container.appendChild(score);
    container.appendChild(button);
}

addEventListener("DOMContentLoaded",main);