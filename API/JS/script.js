let btn = document.querySelector(".btn");
btn.addEventListener("click", fetchPics );

function fetchPics(){
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json())
    .then((data)=>{
        let imgGatoUrl = data[0].url

        let imgGatoEl = document.createElement("img")
        imgGatoEl.setAttribute('src',`${imgGatoUrl}`)
        imgGatoEl.classList.add("elemento")
        let imgGatoDiv = document.querySelector(".imgGatoDiv")
        imgGatoDiv.append(imgGatoEl)
    })
    .catch(err => console.log(err))
}
