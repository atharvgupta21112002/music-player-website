console.log("Welcome To Spotify");
let songIndex = 0;

let masterPlay=document.getElementById('masterPlay');
let forward=document.getElementById('forward');
let myprogressbar = document.getElementById('myprogressbar');
let namey=document.getElementById('namey');
myprogressbar.value = 0;
let gif = document.getElementById('gif');
let songitems= Array.from(document.getElementsByClassName('name'));
gif.style.opacity=0;
let songs=[
    {songName:"chand baaliyan",filepath:"songs/chand.mp3",coverpath:"covers/chand.jpg"},
    {songName:"ek ladki ko dekha",filepath:"songs/ek ladki.circ",coverpath:"covers/ek ladki.jpg"},
    {songName:"garmi",filepath:"songs/garmi.circ",coverpath:"covers/garmi.jpg"},
    {songName:"o saki saki",filepath:"songs/o saki saki.circ",coverpath:"covers/o saki saki.jpg"},
    {songName:"pal pal",filepath:"songs/pal pal.circ",coverpath:"covers/pal pal.jpg"},
    {songName:"slow motion",filepath:"songs/slow motion.circ",coverpath:"covers/slow motion.jpg"},
    {songName:"teri mitti",filepath:"songs/teri mitti.circ",coverpath:"covers/teri mitti.jpg"},
    {songName:"total dhamaal",filepath:"songs/total dhamaal.circ",coverpath:"covers/total dhamaal.jpg"},
    {songName:"ve maahi",filepath:"songs/ve maahi.circ",coverpath:"covers/ve maahi.jpg"},


]

var i=0;
let audioElement = new Audio(songs[i].filepath);
namey.innerHTML='chand baaliyan';
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else if(audioElement.currentTime>0){
        audioElement.pause();
        
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
    
})

forward.addEventListener('click',()=>{
     audioElement.pause();

     if(songIndex<8)
     songIndex++;
     else
     songIndex=0;

     audioElement = new Audio(songs[songIndex].filepath);
     if(audioElement.paused || audioElement.currentTime<=0){
        
        audioElement.play();
        audioElement.currentTime=0;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
        namey.innerHTML=songs[songIndex].songName;
        audioElement.addEventListener('timeupdate',()=>{
            console.log('timeupdate');
        
            progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
            console.log(progress);
            myprogressbar.value=progress;
            if(progress == 100){
                masterPlay.classList.remove('fa-pause-circle');
                masterPlay.classList.add('fa-play-circle');
                gif.style.opacity=0;
                myprogressbar.value=0;
            }
        })
    }
 })

 backward.addEventListener('click',()=>{
    audioElement.pause();
    if(i>0)
    i--;
    else
    i=8;
    audioElement = new Audio(songs[i].filepath);
    if(audioElement.paused || audioElement.currentTime<=0){
       
       audioElement.play();
       audioElement.currentTime=0;
       masterPlay.classList.remove('fa-play-circle');
       masterPlay.classList.add('fa-pause-circle');
       gif.style.opacity=1;
       namey.innerHTML=songs[i].songName;
       audioElement.addEventListener('timeupdate',()=>{
           console.log('timeupdate');
       
           progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
           console.log(progress);
           myprogressbar.value=progress;
           if(progress == 100){
               masterPlay.classList.remove('fa-pause-circle');
               masterPlay.classList.add('fa-play-circle');
               gif.style.opacity=0;
               myprogressbar.value=0;
           }
       })
   }
})

 audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myprogressbar.value=progress;
    if(progress == 100){
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
        myprogressbar.value=0;
    }
})


myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime = ((myprogressbar.value * audioElement.duration)/100);
})
count=0;
const makeallplays = ()=>{
    Array.from(document.getElementsByClassName('songpp')).forEach((element)=>{
        element.classList.add('fa-play');
        gif.style.opacity=0;
        
    })

}

Array.from(document.getElementsByClassName('songpp')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
    makeallplays();
    count++;
    console.log(count);
    console.log(e.target);
    songIndex = parseInt(e.target.id);
    gif.style.opacity=0;
    if(count%2 != 0 ){
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause-circle');
        audioElement.pause();
    audioElement = new Audio(songs[songIndex-1].filepath);
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    progress = 0;
    myprogressbar.value=progress;
    audioElement.addEventListener('timeupdate',()=>{
        console.log('timeupdate');
    
        progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
        console.log(progress);
        gif.style.opacity=1;
        namey.innerHTML=songs[songIndex-1].songName;
        myprogressbar.value=progress;
        if(progress == 100){
            masterPlay.classList.remove('fa-pause-circle');
            masterPlay.classList.add('fa-play-circle');
            gif.style.opacity=0;
            myprogressbar.value=0;
        }
    })
    }
    else{
        gif.style.opacity=0;
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        audioElement.pause();
        e.target.classList.add('fa-play');
        e.target.classList.remove('fa-pause-circle');

    }  
   
    })
})