import { LightningElement } from 'lwc';

export default class Sum extends LightningElement {
    firstNum;
    secondNum;
    result;
    firstHandler(event){
        this.firstNum=event.target.value;
    }
    secondHandler(event2){
        this.secondNum=event2.target.value;
    }
    resultHandler(){
        const s=parseInt(this.firstNum);
        const t=parseInt(this.secondNum);
        this.result=s+t;
    }
}