"use strict";
axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

<<<<<<< HEAD
let account;
// web3 version : 1.3.6
const web3 = new Web3(Web3.givenProvider || "http://localhost:5000");
console.log("insert web3", web3.version);

function getArt() {
    axios({
        method: "post",
        url: "/getArt",
        data: {
            // 2번이 NFT1.jpg
            param: [2],
        },
    })
        .catch((e) => {
            console.log(e);
        })
        .then(function (res) {
            let art = res.data[0];
            let imagePath = art.art_image_path;
            getImage(imagePath);
        });
}

function getImage(imagePath) {
    const cardImgDiv = document.getElementsByClassName("artInfo__cardImg")[0];

    let imageHTML = `<img class="artInfo__img" src="/images/${imagePath}"} />`;

    cardImgDiv.innerHTML = imageHTML;
}

// NFT 결제 페이지 이동
function artInfo__donateBtn() {
    console.log(account);

    if(account == undefined) {
 console.log("connect wallet first!";)
    } else {

    }
}

// 사용자 지갑에 연결합니다.
function connectWallet() {
    console.log("Use connectWallet function!");
    web3.eth.requestAccounts().then((accounts) => {
        console.log(accounts);

        account = accounts[0];
        console.log("Login Address is :", account);
    });
=======
function getArt() {
    axios({
        method: "post",
        url: "/getArt",
        data: {
            // 2번이 NFT1.jpg
            param: [4],
        },
    })
        .catch((e) => {
            console.log("catch");
            console.log(e);
        })
        .then(function (res) {
            console.log(res);
            let art = res.data[0];
            let imagePath = art.art_image_path;
            console.log(imagePath);
            getImage(imagePath);
        });
}

function getImage(imagePath) {
    const cardImgDiv = document.getElementsByClassName("artInfo__cardImg")[0];

    let imageHTML = `<img class="artInfo__img" src="/images/${imagePath}"} />`;

    cardImgDiv.innerHTML = imageHTML;
>>>>>>> 218ee0cc35851e8dde0665298b0f16e2dcec371e
}
