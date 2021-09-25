// All NFTs 페이지
"use strict";
console.log("use script");

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

let artList = [];

<<<<<<< HEAD
=======
let artSelectList = "";
>>>>>>> 218ee0cc35851e8dde0665298b0f16e2dcec371e
function getArtList() {
    console.log("getArtList");
    axios({
        method: "post",
        url: "/getArtList",
    })
        .catch((e) => {
            console.log("catch");
            console.log(e);
            // s;
        })
        .then(function (res) {
            console.log("res");
            artList = res.data;
            console.table(artList);
<<<<<<< HEAD
        });
}

var nfts = document.getElementsByClassName("nft");

Array.from(nfts).forEach((nft) => {
    console.log(nft);
    nft.addEventListener("click", function (event) {
        console.log("click");
        // console.log(event);
        location.href = "artInfo";
    });
});

// donate Platform 버튼 누르면 paymentPlatform.html로 이동
function donatePlatform() {
    location.href = "paymentPlatform";
}

// NFT Card 버튼 누르면 artInfo.html로 이동
function NFTs() {
    location.href = "artInfo";
}

// var data = [
//     {
//         artist_id: "0",
//         artist_name: "eunkyung",
//         artist_image: "./img/artist.jpg",
//         art_num: "10",
//         art_image: "./img/NFT13.jpg",
//         art_name: "smile",
//         art_info: "first eunkyung art",
//         art_update: "2021-09-14",
//         art_price: "10eth",
//     },
//     {
//         artist_id: "1",
//         artist_name: "heekyung",
//         artist_image: "./img/artist.jpg",
//         art_num: "11",
//         art_image: "./img/NFT1.jpg",
//         art_name: "happy",
//         art_info: "first heekyung art",
//         art_update: "2021-09-15",
//         art_price: "10eth",
//     },
//     {
//         artist_id: "2",
//         artist_name: "jangyeon",
//         artist_image: "./img/artist.jpg",
//         art_num: "12",
//         art_image: "./img/NFT2.jpg",
//         art_name: "good",
//         art_info: "first jangyeon art",
//         art_update: "2021-09-16",
//         art_price: "10eth",
//     },
//     {
//         artist_id: "3",
//         artist_name: "jeongseup",
//         artist_image: "./img/artist.jpg",
//         art_num: "13",
//         art_image: "./img/NFT3.jpg",
//         art_name: "nice",
//         art_info: "first jeongseup art",
//         art_update: "2021-09-17",
//         art_price: "10eth",
//     },
// ];

// let nftList = "";
// for (let i = 0; i < data.length; i++) {
//     artistId = data[i].artist_id;
//     artistName = data[i].artist_name;
//     artistImage = data[i].artist_image;
//     nftNum = data[i].art_num;
//     artImg = data[i].art_image;
//     artName = data[i].art_name;
//     artInfo = data[i].art_info;
//     artDate = data[i].art_update;
//     artPrice = data[i].art_price;

//     nftList += `
//  <article id="article1" onclick="NFTs()">
//  <img class="nftImgs" src="${artImg}" />
//  <div class="text">
//    <h3 class="nftText nftText__title" id="nftName">${artName}</h3>
//    <h3 class="nftText nftText__price" id="nftPrice">${artPrice}</h3>
//    <p class="nftText__description" id="nftDescribe">
//    ${artInfo}
//    </p>
//  </div>
//    <div class="container__profile">
//      <img class="artist__img"
//       src="${artistImage}"
//      />
//      <div class="container__profile__text">
//       <p class="nftText nftText__id" id="nftCreatedBy">Created By ${artistName}</p>
//       <h2 class="nftText nftText__date" id="nftDate">${artDate}</h2>
//      </div>
//  </div>
// </article>`;
// }

// document.querySelector(".grid").innerHTML = nftList;
=======

            for (let i = 0; i < artList.length; i++) {
                let art_id = artList[i].art_id;
                let account_id = artList[i].account_id;
                let art_name = artList[i].art_name;
                let art_created_at = artList[i].art_created_at;
                let art_price = artList[i].art_price;
                let art_image_path = artList[i].art_image_path;
                let art_description = artList[i].art_description;
                let artist_img = artList[i].artist_img;

                artSelectList += `
                     <article id="article1" onclick="NFTs()">
                     <img class="nftImgs" src="/images/${art_image_path}"} />
                     <div class="text">
                       <h3 class="nftText nftText__title" id="nftName">${art_name}</h3>
                       <h3 class="nftText nftText__price" id="nftPrice">${art_price}</h3>
                       <p class="nftText__description" id="nftDescribe">
                       ${art_description}
                       </p>
                     </div>
                       <div class="container__profile">
                         <img class="artist__img"
                          src="${artist_img}"
                         />
                         <div class="container__profile__text">
                          <p class="nftText nftText__id" id="nftCreatedBy">Created By ${account_id}</p>
                          <h2 class="nftText nftText__date" id="nftDate">${art_created_at}</h2>
                         </div>
                     </div>
                    </article>`;
            }
            //     <img class="artist__img"
            //     src="/images/profile/4.jpg"
            //    />
            document.querySelector(".grid").innerHTML = artSelectList;
        });
    // .catch((error) => console.log(" catch 에러!"));
}

//http://localhost:5000/donateNft
//clubList.ejs에 DB에서 조회한 클럽목록을 넘기는 예제소스
// home page
>>>>>>> 218ee0cc35851e8dde0665298b0f16e2dcec371e
