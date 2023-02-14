import { LightningElement } from 'lwc';

export default class AreaTriangle extends LightningElement {
    height;
    base;
    result;
    heightHandler(event){
        this.height=event.target.value;
    }
    baseHandler(event2){
        this.base=event2.target.value;
    }
    resultHandler(){
        const a=( parseInt( this.base )*parseInt(this.height)) /2;

        this.result= a;
    }
}