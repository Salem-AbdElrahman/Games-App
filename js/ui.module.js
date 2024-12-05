export class Ui{


    displayGames(data){
        let gamesCard=``;
        for(let i=0;i<data.length;i++){
            gamesCard+=`    <div class="col-md-6 col-lg-4 col-xl-3">
                <div class="card h-100 bg-transparent" data-id="${data[i].id}">
                   <div class="card-body">
                    <div class="card-img mb-2">
                        <img src="${data[i].thumbnail}" class="w-100 h-100 object-fit-cover border-0 rounded card-img-top" alt="">
                    </div>
                    <div class="card-caption">
                        <div class="card-title d-flex justify-content-between align-items-center">
                        <h3 class="h6 small">${data[i].title}</h3>
                        <span class="badge p-2 bg-primary">Free</span>
                    </div>
                    <p class="text-center opacity-50 card-text small">${data[i].short_description.split(" ",6).join(' ')}</p>
                    <footer class="card-footer small d-flex justify-content-between align-items-center">
                        <span class="badge badge-color">${data[i].genre}</span>
                        <span class="badge badge-color">${data[i].platform}</span>
                    </footer>
                    </div>
                   </div>
                </div>
            </div>` 
        }
        document.querySelector('#dataOfGmaes').innerHTML=gamesCard;
        
    }


    displayDetailsGame(data){
      const cartona=`  <div class="col-md-4">
            <img src="${data.thumbnail}" alt="details photo">
        </div>
        <div class="col-md-8">
            <h3>Title: ${data.title}</h3>
            <p>Category:
                <span class="badge bg-info">${data.genre}</span>
            </p>
            <p>Platform:
                <span class="badge bg-info">${data.platform}</span></p>
            <p>Status:
                <span class="badge bg-info">${data.status}</span></p>
                <p class="small">
                ${data.description}
                </p>
                <a class="btn btn-outline-warning" href="${data.game_url}" target="_blank">Show game</a>
        </div>`
        document.querySelector('#detailsGame').innerHTML=cartona;
    }
    
}