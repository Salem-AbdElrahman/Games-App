
import { Details } from './details.module.js';
import {Ui} from './ui.module.js'


 export class Games{
constructor(){
    this.getGames("mmorpg");
    document.querySelectorAll('.nav-item .nav-link').forEach(element => {
        element.addEventListener('click',(a)=>{
            document.querySelector('.nav-item .nav-link.active').classList.remove('active')
            a.target.classList.add("active");
    this.getGames(a.target.dataset.category);// call getGames to get data with cat of clicked element
        })
    });
    this.ui=new Ui();
}
//get data from api by category
async getGames(category){
const loader = document.querySelector('.loader');
loader.classList.remove('d-none')
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '9f4b36dadfmsh26ba6c6da132b36p1295a2jsn2dcc83383453',
            'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
const api=await  fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`, options)
const games= await api.json();
// console.log(games);
this.ui.displayGames(games);
this.saveEvent();
loader.classList.add('d-none');



}


//save id of each card in variable to use in getDetailsGame()


saveEvent(){
    document.querySelectorAll('.card').forEach(ele=>{
        ele.addEventListener('click',()=>{
            const id = ele.dataset.id; // save id in varible to use again
            this.displayDetails(id);
            
        })
    })
}

displayDetails(id){
    const detailsGame = new Details(id);// send id to Details class
    document.querySelector('.games').classList.add('d-none');
    document.querySelector('.details').classList.remove('d-none');
}

}
