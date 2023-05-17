let music = new Audio('audio/2.mp3');
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

Array.from(document.getElementsByClassName('songlistPlay')).forEach((e) => {
    e.addEventListener('click',(e1) => {
        index = e1.target.id;
        console.log(index);
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
})
