import axios from 'axios';
const link = "https://api.tvmaze.com/search/shows?q=robin%20hood"; 

export default class Helper {
GetData(){ 
    return fetch(link).then((res)=>res.json());
}

}

