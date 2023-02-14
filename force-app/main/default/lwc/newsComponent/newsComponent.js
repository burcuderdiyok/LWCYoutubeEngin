import { LightningElement } from 'lwc';
import retrieveNews from "@salesforce/apex/newsController.retrieveNews"; 

export default class NewsComponent extends LightningElement {
    connectedCallback(){
        this.fetchNews();
    }
    fetchNews(){
        retrieveNews().then(Response=>{
            console.log(response);
        }).catch(error=>{
            console.error(error);
        })
    }
}