

const options={
    method:'GET',
    headers:{
         accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTAzNTNhNmIyZmU1NWI4ZTYzZWY5NTAwNmVkM2QxMyIsIm5iZiI6MTc0NjE4MzIyNS4xNjMsInN1YiI6IjY4MTRhNDM5MDliZTgzNjVmOGY0MDZhNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.k84MufP7CvsFgQe4y66LwZzGJm386Y1AdVbkvqYOotY'
    }
}

async function getmovielist(content='now_playing'){
    let movielist=await fetch(`https://api.themoviedb.org/3/movie/${content}?language=en-US&page=1`,options)
    try{
        let list= await movielist.json();
        let bigArrayList=list.results;
        // console.log(bigArrayList)
        displaydata(bigArrayList);

    }
    catch(error){
        console.error('Error is :',error)

    }
}

getmovielist()




'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'



//mar7la creating el elements
function displaydata(arraylist)
{
    let container= document.getElementById('container');
    container.innerHTML='';
    for(let i=0;i<arraylist.length;i++)
    {
        //mar7la creating el elements
       let div= document.createElement('div');
       div.classList.add('card');

       let title=document.createElement('h3');
       title.innerHTML=arraylist[i].original_title; 
       div.appendChild(title);

       let image=document.createElement('img');
       image.src="https://image.tmdb.org/t/p/w500/"+arraylist[i].poster_path;
       div.appendChild(image);


       let overView=document.createElement('p');
       overView.innerHTML=arraylist[i].overview;
       div.appendChild(overView);

       let popularity=document.createElement('p');
       popularity.innerHTML='Number of watches: '+arraylist[i].popularity;
       div.appendChild(popularity);

       let releaseDate=document.createElement('p');
       releaseDate.innerHTML='Release Date: '+arraylist[i].release_date;
       div.appendChild(releaseDate);

     container.appendChild(div);

    }


}




let listbtns=document.getElementById('listbtns')
console.log(listbtns);
listbtns.addEventListener('click',function(e)
{
    console.log(e);
    if (e.target && e.target.nodeName === 'LI') {
        var text = e.target.textContent;
        if(text=='Now playing'){
            getmovielist(content='now_playing')
        }
        else if(text=='Popular'){
            getmovielist(content='popular')

        }
        else if(text=='Top rated'){
            getmovielist(content='top_rated')

        }
        else if(text=='Upcoming'){
            getmovielist(content='upcoming')

        }
        
    }
              
});