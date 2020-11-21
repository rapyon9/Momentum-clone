const bgBody = document.querySelector("body");


const IMG_NUM = 9;

function genRanNum(){
    const number = Math.floor(Math.random() * IMG_NUM) + 1;   // 1 <= 난수 <= IMG_NUM
    
    return number;
}

function paintBody(ranNum){
    const img = new Image();
    img.src = `photo/${ranNum}.jpg `;
    img.classList.add("background-img");
    bgBody.appendChild(img);
}

function init() {
    const ranNum = genRanNum();

    paintBody(ranNum);
}

init();