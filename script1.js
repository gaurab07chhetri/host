function myFunction(){
    const element = document.body;
    element.classList.toggle("dark-mode");
    const button = document.querySelector("button");
    if(element.classList.contains("dark-mode")){
        button.textContent="Light-Mode";
    }else{
        button.textContent="Dark-Mode";
    }
}

const text = document.querySelector("#change");
const values = ["a fullstack developer", "a teacher", "a designer"];
let counter = 0;
setInterval(()=>{
    text.textContent = values[counter];
    counter = (counter+1) % values.length;
},3000);