let music = new Audio('audio/1.mp3');
//music.play();

const songs = [
    {
        id: '1',
        title: 'Angana Morey<br><div class="subtitle">Shreya Ghoshal</div>',
        poster: 'img/1.jpg'
    },
    {
        id: '2',
        title: 'KKR Anthem- Korbo Lorbo Jeetbo<br><div class="subtitle">Vishal-Sekhar</div>',

        poster: 'img/2.jpg'
    },
    {
        id: '3',
        title: 'Harry Potter Theme<br><div class="subtitle">Instrumental</div>',
        poster: "img/3.jpg"
    },
    {
        id: '4',
        title: 'Taare Zamin par Title Track<br><div class="subtitle">Shankar Mahadevan</div>',
        poster: "img/4.jpg"
    },
    {
        id: '5',
        title: 'Apni Maati<br><div class="subtitle">Shreya Ghoshal</div>',
        poster: 'img/5.jpg'
    }
]


const makeAllPlays=()=>{

    Array.from(document.getElementsByTagName('songlistPlay')).forEach((el)=>{
        el.style.background = 'rgba(101, 102, 102, .1)';

    })
}

let playSong = document.getElementById('playSong');

playSong.addEventListener('click', () => {
    if (music.paused || music.currentTime <= 0) {
        music.play();
        playSong.classList.remove('bi-play-circle');
        playSong.classList.add('bi-pause-circle');
    } else {
        music.pause();
        playSong.classList.add('bi-play-circle');
        playSong.classList.remove('bi-pause-circle');
    }
});

let index = 0;
let posterPlay= document.getElementById("posterPlay");
let titlePlay= document.getElementById("titlePlay");

Array.from(document.getElementsByClassName('song')).forEach((e) => {
    e.addEventListener('click',(e1) => {
        index = e1.target.id;
        console.log(index);
        music.src= `audio/${index}.mp3`;
        posterPlay.src=`img/${index}.jpg`;
        music.play();
        playSong.classList.remove('bi-play-circle');
        playSong.classList.add('bi-pause-circle');

        let songTitles= songs.filter((elm)=>{
        return elm.id==index;
        });

        songTitles.forEach(elm1=>{
            let {title} = elm1;
            titlePlay.innerHTML=title;
        
        })
      
    })
})

let start=document.getElementById('start');
let end=document.getElementById('end');
let bar=document.getElementById('bar');

music.addEventListener('timeupdate',()=>{
    let music_curr=music.currentTime;
    let music_duration=music.duration;

    let min1= Math.floor(music_duration/60);
    let sec1=Math.floor(music_duration%60);

    if(sec1<10){
        sec1=`0${sec1}`;
    }
    end.innerText=`${min1}:${sec1}`;

    let min2 = Math.floor(music_curr/60);
    let sec2 = Math.floor(music_curr%60);

    if(sec2<10){
        sec2=`0${sec2}`;
    }

    start.innerText=`${min2}:${sec2}`;

    let progress=parseInt((music_curr/music_duration)*100);
    bar.value=progress;

})
bar.addEventListener('change',()=>{
    music.currentTime =bar.value * music.duration/100;
})

let back= document.getElementById('back');
let next= document.getElementById('next');


back.addEventListener('click',()=>{
    index-=1;
    if(index<1){
        index=Array.from(document.getElementsByClassName('song')).length/2;
    }
     music.src = `audio/${index}.mp3`;
        posterPlay.src=`img/${index}.jpg`;
        music.play();
       playSong.classList.remove('bi-play-circle');
        playSong.classList.add('bi-pause-circle');

        let songTitles= songs.filter((elm)=>{
        return elm.id==index;
        });

        songTitles.forEach(elm1=>{
            let {title} = elm1;
            titlePlay.innerHTML=title;
        
        })
})

next.addEventListener('click',()=>{
    index+=1;
     if(index> Array.from(document.getElementsByClassName('song')).length/2){
        index=1;
    }
     music.src = `audio/${index}.mp3`;
        posterPlay.src=`img/${index}.jpg`;
        music.play();
       playSong.classList.remove('bi-play-circle');
        playSong.classList.add('bi-pause-circle');

        let songTitles= songs.filter((elm)=>{
        return elm.id==index;
        });

        songTitles.forEach(elm1=>{
            let {title} = elm1;
            titlePlay.innerHTML=title;
        
        })
})