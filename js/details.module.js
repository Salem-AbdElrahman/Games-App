import {Ui} from './ui.module.js'


export class Details{
constructor(id){
    this.ui=new Ui();

    document.querySelector('#btnClose').addEventListener('click',()=>{
        document.querySelector('.games').classList.remove('d-none');
        document.querySelector('.details').classList.remove('d-none');
    })
    this.getDetailsGmae(id);
}


    async getDetailsGmae(id){
        const loader = document.querySelector('.loader');
        loader.classList.remove('d-none')
        //get data from Api by id to use in display
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '9f4b36dadfmsh26ba6c6da132b36p1295a2jsn2dcc83383453',
                'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
            }
        };
    const data=await  fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`, options)
    const detailsGame= await data.json();
    this.ui.displayDetailsGame(detailsGame);      
    loader.classList.add('d-none');
    }
}