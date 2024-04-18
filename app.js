let api="https://www.omdbapi.com/?apikey=4b38e2b8&t="
let director=document.getElementById('director')
let actor=document.getElementById('actor')
let desc=document.getElementById('desc')
let date=document.getElementById('date')
let awards=document.getElementById('awards')
let collections=document.getElementById('collections')
let rating=document.getElementById('rating')
let writer=document.getElementById('writer')
let genre=document.getElementById('genre')
let runtime=document.getElementById('runtime')
let poster=document.getElementById('poster')

function search()
{
    let moviename=document.getElementById('moviename')
    let api="https://www.omdbapi.com/?apikey=4b38e2b8&t="
    let query=api+moviename.value
    fetch(query).then((data)=>
{
return data.json();
}).then((data)=>
{
    tittle.innerText=data.Title;
    director.innerText=data.Director;
    actor.innerText=data.Actors;
    desc.innerText=data.Plot;
    date.innerText=data.Released;
    awards.innerText=data.Awards;
    collections.innerText=data.BoxOffice;
    rating.innerText=data.imdbRating
    writer.innerText=data.Writer
    genre.innerText=data.Genre
    runtime.innerText=data.Runtime
    poster.src=data.Poster
    
})
}