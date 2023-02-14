import { LightningElement } from 'lwc';

export default class FullName extends LightningElement {
    firstName='';
    lastName='';
    
    NameHandler(event){
        const field=event.target.name;
    
    if(field === 'firstName'){
        this.firstName=event.target.value;
    }
    else if(field ==='lastName'){
        this.lastName=event.target.value;
    }
    else if(field==='title'){
        this.title=event.target.value;
    }
}
    
}