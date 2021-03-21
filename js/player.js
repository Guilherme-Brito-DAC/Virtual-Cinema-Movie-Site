const API_KEY = 'a23325d95a96cdd1bb0635b6c83b3693'
const url = "https://api.themoviedb.org/3/movie/"
const novaurl = "?api_key=a23325d95a96cdd1bb0635b6c83b3693&language=pt-br"
const similar = "/similar?api_key=a23325d95a96cdd1bb0635b6c83b3693&language=pt-br&page=1"
const image_url ="https://image.tmdb.org/t/p/w500"

const video = "/videos?api_key=a23325d95a96cdd1bb0635b6c83b3693&language=pt-br"


function player(){
    var id = location.search.substring(1)
    const details = url + id + novaurl;
    const getsimilar = url + id + similar;
    const video1 = url + id + video
    const name = document.querySelector("#name")
    const sinopse = document.querySelector("#sinopse")
    const parecido = document.querySelector("#similar")
    const img = document.querySelector("#images")
    const year = document.querySelector("#year")
    const genres = document.querySelector("#genres")
    const vote = document.querySelector("#vote")

    fetch(details)
    .then((res) => res.json())
    .then((data)=>{
        name.innerHTML = data.title
        sinopse.innerHTML = data.overview
        item = `<img src="${image_url + data.poster_path}" class="poster"/>`
        img.innerHTML += item;
        let roda = data.genres.length;
        year.innerHTML = data.release_date.slice(0,4)
        let star = data.vote_average
        vote.innerHTML = star
        

        for(let z = 0;z < roda; z++){
            genres.innerHTML += "  "+data.genres[z].name
        };


        if(star == 0){
            vote.innerHTML = "Esse Filme ainda não tem votos da crítica"
        }else{
        if(star <= 2){
            document.querySelector("#star-1").checked = true
            
            }else if(star <= 4){
            document.querySelector("#star-2").checked = true
            
            }else if(star <= 6){
            document.querySelector("#star-3").checked = true
            
            }else if(star <= 8){
            document.querySelector("#star-4").checked = true
            
            }else{
            document.querySelector("#star-5").checked = true
            
            }    
        }
        
      document.querySelector("#star-1").disabled = true  
      document.querySelector("#star-2").disabled = true
      document.querySelector("#star-3").disabled = true
      document.querySelector("#star-4").disabled = true
      document.querySelector("#star-5").disabled = true
    })
    .catch(()=>{
       
    });
    let item = "";
    fetch(getsimilar)
    .then((res) => res.json())
    .then((data)=>{
        for(let i = 1; i < 5 ; i++){
        item = `
        <a href="player.html?${ data.results[i].id}"><img src="${image_url + data.results[i].poster_path}" class="similar"/></a>

        `
        parecido.innerHTML += item;    
        }
        
    })
    .catch(()=>{
       
    });


    const trailer = document.querySelector("#trailer")
    const error = document.querySelector("#error")
    const errorspan = document.querySelector(".error")

    fetch(video1)
    .then((res) => res.json())
    .then((data)=>{
        if(data.results.length == 0){
            errorspan.style.display = "grid";
            console.log(data)
            error.innerHTML = "Parece que esse filme não tem um trailer ou nós não conseguimos achá-lo "
        }else{
            const key = data.results[0].key
            trailer.src = `https://www.youtube.com/embed/${key}?autoplay=0&mute=1&controls=2`   
        }
        
        

    })
    .catch(()=>{
       
    });

}

window.onload = player();