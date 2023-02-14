import { LightningElement } from 'lwc';

export default class ForEachLoop extends LightningElement {
    contacts=[
        {
            Id:1,
            Name:'Omer',
            Age:'6'
        },
        {
            Id:2,
            Name:'Ihsan',
            Age:'12'
        },{
            Id:3,
            Name:'Faruk',
            Age:'7'
        }
    
    ]
}