
let songindex= 0;
let audeoelement =new Audio('0.mp3');
//audeoelement.play();
let masterplay=document.getElementById('masterplay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
//let search=document.getElementById('search');
let mastersongname =document.getElementById('mastersongname');
let songItem= Array.from(document.getElementsByClassName('songItem'));
let proformusic=[
    {songname:"1 ",filepath:"0.mp3",coverpath:"sb.jpg"},
    {songname:"2",filepath:"1.mp3",coverpath:"b.webp"},
    {songname:"3",filepath:"2.mp3",coverpath:"c.webp"},
    {songname:"4",filepath:"3.mp3",coverpath:"c.webp"},
    {songname:"5",filepath:"4.mp3",coverpath:"sb.jpg"},
    {songname:"6",filepath:"6.mp3",coverpath:"sb.jpg"},
    {songname:"7",filepath:"7.mp3",coverpath:"sb.jpg"},
    {songname:"8",filepath:"8.mp3",coverpath:"sb.jpg"},
    {songname:"9",filepath:"9.mp3",coverpath:"sb.jpg"},
    {songname:"10",filepath:"10.mp3",coverpath:"sb.jpg"},
    {songname:"11",filepath:"11.mp3",coverpath:"sb.jpg"},
    {songname:"12",filepath:"12.mp3",coverpath:"sb.jpg"},
    {songname:"13",filepath:"13.mp3",coverpath:"sb.jpg"},
    {songname:"14",filepath:"14.mp3",coverpath:"sb.jpg"},
    {songname:"15",filepath:"15.mp3",coverpath:"sb.jpg"},
    {songname:"16",filepath:"16.mp3",coverpath:"sb.jpg"}
    
]
songItem.forEach((element,i)=>{
    console.log(element.i);
   // element.getElementsByTagName("img")[0].src=proformusic[i].filepath;
    element.getElementsByTagName("img")[0].src=proformusic[i].coverpath;
    element.getElementsByClassName("songname")[0].innerText=proformusic[i].songname;
})

//audeoelement.play();
//lision to event
//handle playorpause click
masterplay.addEventListener('click',()=>{
     if (audeoelement.paused||audeoelement.currentTime<=0) {
        
        audeoelement.play();
        masterplay.classList.remove('fa-circle-play');
        masterplay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
   }
   else{
    audeoelement.pause();
        masterplay.classList.remove('fa-circle-pause');
        masterplay.classList.add('fa-circle-play');
        gif.style.opacity=0;
   }
})
audeoelement.addEventListener('timeupdate',()=>{
    
    progress=parseInt((audeoelement.currentTime/audeoelement.duration)*100);
    
    myProgressBar.value=progress;
    
})
myProgressBar.addEventListener('change',()=>{
    audeoelement.currentTime=myProgressBar.value*audeoelement.duration/100;
   
    
})

const  makeallplay=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}
 Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
element.addEventListener('click',(e)=>{
    makeallplay();
    songindex=parseInt(e.target.id);
    e.target.classList.remove('fa-circle-play');
    e.target.classList.add('fa-circle-pause');
    audeoelement.src =(`${songindex+1}.mp3`);
    mastersongname.innerHTML=proformusic[songindex].songname;
    audeoelement.currentTime=0;
    audeoelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=15){
        songindex=0
    }
    else{
        songindex +=1;
    }
    audeoelement.src =(`${songindex+1}.mp3`);
    mastersongname.innerHTML=proformusic[songindex].songname;
    audeoelement.currentTime=0;
    audeoelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
    if(songindex<=0){
        songindex=0
    }
    else{
        songindex -=1;
    }
    audeoelement.src =(`${songindex+1}.mp3`);
    mastersongname.innerHTML=proformusic[songindex].songname;
    audeoelement.currentTime=0;
    audeoelement.play();
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
const clock=document.querySelector('#clock');
setInterval(function(){
    let date=new Date();
   clock.innerHTML=date.toLocaleTimeString();
    //clock.innerHTML=date.toLocaleDateString();
},1000);

function performSearch() {
    const query = document.getElementById('search').value;
    if (query) {
       
      alert(`You searched for: ${query}`);
      // You can redirect to a search page or perform other actions here.
      // Example: window.location.href = https://www.google.com/search?q=${query};
    } else {
      alert('Please enter a search term.');
    }
  }



  