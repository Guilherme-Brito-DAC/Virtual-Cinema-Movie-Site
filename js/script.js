const API_KEY = 'a23325d95a96cdd1bb0635b6c83b3693';
const normalurl = 'https://api.themoviedb.org/3/movie/popular?api_key=a23325d95a96cdd1bb0635b6c83b3693&language=pt-BR&page=';
const latest = "https://api.themoviedb.org/3/movie/top_rated?api_key=a23325d95a96cdd1bb0635b6c83b3693&language=pt-BR&page=1"
const url = 'https://api.themoviedb.org/3/search/movie?api_key=a23325d95a96cdd1bb0635b6c83b3693&language=pt-BR';
const image_url ="https://image.tmdb.org/t/p/w500";

const search = document.querySelector("#search")

function main(){
    
    fetch(normalurl)
    .then((res) => res.json())
    .then((data)=>{
        
        let item = "";
        let item2 = "";
        const popular = document.querySelector('.popular')
        const list = document.querySelector('.list')
        for(let i = 1; i < 22 ; i++){
            item = `
            <div>
             <img class="moviepic1" src="${image_url + data.results[i].poster_path}">
             <div class="hoverimg1">
                <div class="">
                    <img src="https://img.icons8.com/ios-glyphs/80/ffffff/like--v1.png" id="heart" onclick="heart" />
                    <img src="https://img.icons8.com/material-rounded/80/ffffff/clock.png" id="clock" onclick="clock"/>
                </div>
                <a href="player.html?${ data.results[i].id}"><img src="https://img.icons8.com/android/100/ffffff/play.png" id="play"/></a>
             </div>
             <p>${data.results[i].title}</p>
             <p style="opacity:0.5;margin-top:-1.5rem">${data.results[i].release_date.slice(0,4)}
            </div>` 
 
        popular.innerHTML += item;
        list.innerHTML += item2;
        } 
    })
    .catch(()=>{
        
    });
    fetch(latest)
    .then((res) => res.json())
    .then((data)=>{
        
        let item = "";
        const rated = document.querySelector('#rated')
        for(let i = 1; i < 22 ; i++){
            item = `
            <div>
             <img class="moviepic1" src="${image_url + data.results[i].poster_path}">
             <div class="hoverimg1">
                <div>
                    <img src="https://img.icons8.com/ios-glyphs/80/ffffff/like--v1.png" id="heart" onclick="heart" />
                    <img src="https://img.icons8.com/material-rounded/80/ffffff/clock.png" id="clock" onclick="clock"/>
                </div>
                <a href="player.html?${ data.results[i].id}"><img src="https://img.icons8.com/android/100/ffffff/play.png" id="play" "/></a>
             </div>
             <p>${data.results[i].title}</p>
             <p style="opacity:0.5;margin-top:-1.5rem">${data.results[i].release_date.slice(0,4)}
            </div>`   
        
        rated.innerHTML += item;
        } 
    })
    .catch(()=>{
        
    });        
}

function search1(){
    const value = search.value;
    const newurl = url + '&query=' + value;
    const list = document.querySelector('.list')
    list.innerHTML = ""
    fetch(newurl)
    .then((res) => res.json())
    .then((data)=>{
        let item = "";
        search.value = "";
        for(let i = 1; i < 30 ; i++){
            item = `
            <div class="movies" id="movie">
             <img class="moviepic" src="${image_url + data.results[i].poster_path}">
             <div class="hoverimg">
                <div>
                    <img src="https://img.icons8.com/ios-glyphs/80/ffffff/like--v1.png" id="heart" onclick="heart" />
                    <img src="https://img.icons8.com/material-rounded/80/ffffff/clock.png" id="clock" onclick="clock"/>
                </div>
             <a href="player.html?${ data.results[i].id}"><img src="https://img.icons8.com/android/100/ffffff/play.png" id="play"/></a>
             </div>
             <p style="opacity:0.5">${data.results[i].title}</p>
            </div>
            `   
        list.innerHTML += item;

        } 
    })
    .catch(()=>{
        
    });    
}

function sort(x){
    fetch(normalurl+x)
    .then((res) => res.json())
    .then((data)=>{
        let item = "";
        const list = document.querySelector('.list')
        list.innerHTML = "";
        let page = data.page; 
          
        for(let i = 1; i < 22 ; i++){
            item =`<div class="movies" id="movie">
            <img class="moviepic" src="${image_url + data.results[i].poster_path}">
            <div class="hoverimg">
               <div>
                   <img src="https://img.icons8.com/ios-glyphs/80/ffffff/like--v1.png" id="heart" onclick="heart" />
                   <img src="https://img.icons8.com/material-rounded/80/ffffff/clock.png" id="clock" onclick="clock"/>
               </div>
               <a href="player.html?${ data.results[i].id}"><img src="https://img.icons8.com/android/100/ffffff/play.png" id="play" /></a>
            </div>
            <p>${data.results[i].title}</p>
            <p style="opacity:0.5;margin-top:-0.5rem">${data.results[i].release_date.slice(0,4)}
           </div>`  
        list.innerHTML += item;
        }
    })
    .catch(()=>{
        
    });
}


search.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      search1()
    }
});

    let btnpage1 = document.querySelector("#btnpage1");
    let btnpage2 = document.querySelector("#btnpage2");
    let btnpage3 = document.querySelector("#btnpage3");
    let btnpage4 = document.querySelector("#btnpage4");
    let btnpage5 = document.querySelector("#btnpage5");

function pagination(x){
     if(x == 0){
        btnpage1.value -= 5;
        btnpage2.value -= 5;
        btnpage3.value -= 5;
        btnpage4.value -= 5;
        btnpage5.value -= 5;
    }else{
        btnpage1.value = parseFloat(btnpage1.value) + 5;
        btnpage2.value = parseFloat(btnpage2.value) + 5;
        btnpage3.value = parseFloat(btnpage3.value) + 5;
        btnpage4.value = parseFloat(btnpage4.value) + 5;
        btnpage5.value = parseFloat(btnpage5.value) + 5;
    }    
    btnpage1.innerHTML = btnpage1.value;
    btnpage2.innerHTML = btnpage2.value;
    btnpage3.innerHTML = btnpage3.value;
    btnpage4.innerHTML = btnpage4.value;
    btnpage5.innerHTML = btnpage5.value;   
}

window.onload = sort();
window.onload = main();
