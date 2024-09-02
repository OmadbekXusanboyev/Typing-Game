const text1 = document.querySelector(".text1");
const input = document.querySelector("input");
const gameTime = document.querySelector(".gameTime");
const modal = document.querySelector(".modal");
const nowResult = document.querySelector(".nowResult")
const input1 = document.querySelector(".input1")
const score = document.querySelector(".score")
const HightScore = document.querySelector(".HightScore")
const select = document.querySelector(".select")



const words = [ "abreact", "abreacted", "abreacting", "abreaction", "abreactions", "paltrier", "paltriest", "paltrily", "paltriness", "paltrinesses", "paltry", "paludal", "paludism", "shiv", "shiva", "shivah", "shivahs", "shivaree", "shivareed", "shivareeing","ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "Debitis", "eaque", "nesciunt", "vitae", "illo", "tempore", "modi", "facere", "non", "natus", "sit", "laudantium", "officiis", "Doloremque", "asperiores", "quibusdam", "nesciunt", "aliquam", "natus", "illum", "iure", "deserunt", "laboriosam", "vitae", "magnam", "reprehenderit", "consequatur", "rerum", "provident", "vero", "blanditiis", "voluptate", "neque", "Eum", "eveniet", "consequuntur", "nobis", "esse", "atque", "nisi","animi","porro",  "harum",  "repudiandae", "ratione", "minima","quidem","iure", "unde", "minus", "harum",  "fugit", "quaerat", "hic" 
];

let time = 10;
let scoreNum = 0;

let level = localStorage.getItem("level") ? localStorage.getItem("level") : "Easy";

select.value = level

// localStorage    .setItem & .getItem


let hightScore = localStorage.getItem("hScore") ? localStorage.getItem("hScore") : 0;

HightScore.innerHTML = hightScore


select.addEventListener("change", ()=>{
     level = select.value
     localStorage.setItem("level", level)
})




const writeText = () => {
  let index = Math.floor(Math.random() * words.length);

  text1.textContent = words[index];
};

writeText();




input.addEventListener("input", ()=>{
     if(input.value == text1.textContent){
          writeText()
          input.value = ""

          if (level == "Easy") {
                time+=5
                gameTime.textContent += "+4"
          }else if (level == "Medium") {
                time+=3
          gameTime.textContent += "+3"
          }else if (level == "Hard") {
                time+=2
                gameTime.textContent += "+2"
          }

          scoreNum++
          score.innerHTML = scoreNum
          nowResult.innerHTML = scoreNum
     }
})

input1.addEventListener("input", ()=>{
     if (input1.value.includes(text1.textContent) || text1.textContent.includes(input1.value)) {          
          input1.classList.remove("error")
     }else{
          input1.classList.add("error")
          
     }
})



const interval = setInterval(()=>{
     gameTime.innerHTML = --time
     if(time == 0){
          clearInterval(interval)
          modal.classList.add("active")
          if (scoreNum > hightScore) {
               localStorage.setItem("hScore", scoreNum)
          }
     }
}, 1000)



