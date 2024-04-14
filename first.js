let src ;
let inp =document.querySelector("input");
let dlt = document.querySelector("#card");


const tracks = async()=>{
    // window.location.reload();
    let data = await fetch(`https://v1.nocodeapi.com/tarush/spotify/ErcPzpuzgqDpQerL/search?q=${inp.value}&type=track`);
    let cnvrtData= await data.json();


    for(let i=0 ;i<20 ;i++){

        // console.log(cnvrtData.tracks.items[i]);

        src=cnvrtData.tracks.items[i].album.images[1].url;

        let card = document.createElement("div");

        card.setAttribute('id','card');

        let img =document.createElement("img");

        let song = document.createElement("p");

        let audio = document.createElement("audio");

        audio.src = cnvrtData.tracks.items[i].preview_url;

        audio.controls=true;

        song.innerHTML=`<b>${cnvrtData.tracks.items[i].album.name} <b/><br> artist : ${cnvrtData.tracks.items[i].artists[0].name} <br> release date: ${cnvrtData.tracks.items[i].album.release_date}`;

        img.src = src ;

        body.append(card);
        card.appendChild(img);
        card.appendChild(song);
        card.appendChild(audio);
    }
    
}

let body = document.querySelector("body");

