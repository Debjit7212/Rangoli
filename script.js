
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
    {songname:"romantic-song-tera-roothna-by-ashir- ",filepath:"0.mp3",coverpath:"sb.jpg"},
    {songname:"kaise-bhula-dun-ashir-acoustic",filepath:"1.mp3",coverpath:"b.webp"},
    {songname:"adhuri-kahani-jo-na-hosaki-puri",filepath:"2.mp3",coverpath:"c.webp"},
    {songname:"romantic-",filepath:"3.mp3",coverpath:"c.webp"},
    {songname:"tere-sang-with-you--",filepath:"4.mp3",coverpath:"sb.jpg"},
    {songname:"Tujh-Mein-Rab-Dikhta-Hai-Remix",filepath:"5.mp3",coverpath:"sb.jpg"},
    {songname:"Phir-Aur-Kya-Chahiye-Deep-House-Remix",filepath:"6.mp3",coverpath:"sb.jpg"},
    {songname:"Bheega-Bheega-Hai-Sama-Remix",filepath:"7.mp3",coverpath:"sb.jpg"},
    {songname:"Shree-Krishna-Mashup",filepath:"8.mp3",coverpath:"sb.jpg"},
      {songname:"Rajar-Raja.",filepath:"9.mp3",coverpath:"sb.jpg"},
    {songname:"Tera-Kasoor",filepath:"10.mp3",coverpath:"sb.jpg"},
    {songname:"Hero-Honda.",filepath:"11.mp3",coverpath:"sb.jpg"},
    {songname:"Dil-Tujhko-Chahe-Abhi-Dutt",filepath:"12.mp3",coverpath:"sb.jpg"},
     {songname:"Peg-Marke",filepath:"13.mp3",coverpath:"sb.jpg"},
    {songname:"Maadi",filepath:"14.mp3",coverpath:"sb.jpg"},
    {songname:"Kishori-Antara-Mitra-Rathijit-Bhattacharjee.",filepath:"15.mp3",coverpath:"sb.jpg"},
    {songname:"Kissik - Pushpa 2 The Rule ",filepath:"17.mp3",coverpath:"sb.jpg"},
    {songname:"Bhool Bhulaiyaa 3 - Title Track (Feat. Pitbull)",filepath:"17.mp3",coverpath:"sb.jpg"}   
   
]

songItem.forEach((element,i)=>{
    console.log(element.i);
   
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
    audeoelement.src =(`${songindex}.mp3`);
    mastersongname.innerHTML=proformusic[songindex].songname;
    audeoelement.currentTime=0;
    audeoelement.play();
    gif.style.opacity=1;
    masterplay.classList.remove('fa-circle-play');
    masterplay.classList.add('fa-circle-pause');
})
})
document.getElementById('next').addEventListener('click',()=>{
    if(songindex>=proformusic.length){
        songindex=0
    }
    else{
        songindex +=1;
    }
    audeoelement.src =(`${songindex}.mp3`);
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
    audeoelement.src =(`${songindex}.mp3`);
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


 // audeoelement.src = proformusic[songindex];
  audeoelement.src =(`${songindex}.mp3`);
  audeoelement.load();


audeoelement.addEventListener("ended", () => {
    
    songindex++;
    if (songindex >= proformusic.length) {
        songindex = 0; 
    }

    
    audeoelement.src =(`${songindex}.mp3`);
    mastersongname.innerHTML=proformusic[songindex].songname;
    audeoelement.play();
});
//console.log(filteredproformusic.length);
//audioPlayer.play();
//console.log(proformusic.length);


    