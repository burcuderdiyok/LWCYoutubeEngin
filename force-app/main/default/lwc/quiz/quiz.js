import { LightningElement } from 'lwc';

export default class Quiz extends LightningElement {
    correct=0;
    incorrect=0;
    question=4;
    progres;
    answer1;
    answer2;
    answer3;
    answer4;
    handleChange(event){
        const fieldName=event.target.name;
        if(fieldName === 'answer1'){
            this.answer1=event.target.value;
        }else if (fieldName === 'answer2'){
            this.answer2=event.target.value;
        }else if (fieldName === 'answer3'){
            this.answer3=event.target.value;
        }else if (fieldName === 'answer4'){
            this.answer4=event.target.value;
        }
        this.totalcorrect();
    }
    totalcorrect(){
        var totalcorrect=0;
        var totalIncorrect=0;

        if(this.answer1 !=null){
            if(this.answer1==5){
                totalcorrect=totalcorrect+1;

            }else{
            totalIncorrect=totalIncorrect+1;
            }
        }
        if(this.answer2 !=null){
            if(this.answer2==9){
                totalcorrect=totalcorrect+1;

            }else{
            totalIncorrect=totalIncorrect+1;
            }
        }
        if(this.answer3 !=null){
            if(this.answer3==18){
                totalcorrect=totalcorrect+1;

            }else{
            totalIncorrect=totalIncorrect+1;
            }
        }
        if(this.answer4 !=null){
            if(this.answer4==2){
                totalcorrect=totalcorrect+1;

            }else{
            totalIncorrect=totalIncorrect+1;
            }
        }
        this.correct=totalcorrect;
        this.incorrect=totalIncorrect;
        this.progres=(totalcorrect+totalIncorrect)/this.question*100;
        
    }

}