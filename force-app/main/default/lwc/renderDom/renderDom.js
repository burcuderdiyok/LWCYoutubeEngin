import { LightningElement } from 'lwc';

export default class RenderDom extends LightningElement {
    display=true;
    firstName;
    lastName;
    userName;

    firstNameHandler(event){
        this.firstName=event.target.value;
    }
    lastNameHandler(event){
        this.lastName=event.target.value;
    }
    userNameHandler(event){
        this.userName=event.target.value;
    }
    saveButtonHandler(){
        this.display=false;
    }
}