const url="https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.getElementById("result");

const btn = document.getElementById("btn");

btn.addEventListener("click", ()=>{
    let inpword= document.getElementById("inpword").value;
    fetch(`${url}${inpword}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        result.innerHTML = `
       
        
       <p id="result">
       <i style="font-size:small">meaning is :</i>
         ${data[0].meanings[0].definitions[0].definition}
       </p>  
        `;
    });
});