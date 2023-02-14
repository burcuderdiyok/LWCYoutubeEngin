import { LightningElement } from 'lwc';

export default class ViewMessage extends LightningElement {
    message='this is a message';
    messageHandler(event){
        this.message=event.target.value;
    }
}