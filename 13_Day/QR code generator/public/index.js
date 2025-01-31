let link = document.getElementById("link");
let btn = document.getElementById("btn");
let toDisplay = document.getElementById("qrcode");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(link.value) {
        getQRCode();
    } else {
        alert("Please enter a link");
    }
    
});

// async function getQRCode() {
//     let response = await fetch("http://localhost:3000/qr", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({data: link.value})
//     })
//     response = await response.json();
//     console.log(response);
//     let img = document.createElement("img");
//     img.src = response;
//     toDisplay.innerHTML = null;
//     toDisplay.append(img);

// }

async function getQRCode() {
    let response = await fetch(`http://localhost:3000/qr?link=${link.value}`)
    response = await response.json();
    console.log(response);
    let img = document.createElement("img");
    img.src = response;
    toDisplay.innerHTML = null;
    toDisplay.append(img);

}