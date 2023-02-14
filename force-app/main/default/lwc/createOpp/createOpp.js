import { LightningElement } from 'lwc';

export default class CreateOpp extends LightningElement {
    successMessage;

    successHandler(event){
        this.successMessage='a new opp with related acc has been created. id: '+event.detail.id;
    }
}