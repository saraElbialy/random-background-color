
let hexArray=[0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
let color=[]
for(let i=0;i<6;i++){
    let randomColorhex=hexArray[Math.floor(Math.random()*hexArray.length)]
    color.push(randomColorhex)
    

}
console.log(color)
let newColor=color.join("")
console.log(newColor)
let body=document.querySelector("body")
body.style.backgroundColor=`#${newColor}`
