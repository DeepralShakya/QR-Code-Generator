let urlInput = document.getElementById("url");
let qrCodeImage = document.getElementById("image");

function generate() {
    let inputValue = urlInput.value;
    if(inputValue != ""){
        let qrCodeURL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputValue;
        qrCodeImage.src = qrCodeURL;
        qrCodeImage.style.display = "inline";
    }else{
        alert("Please enter a URL or text")
    }
}
