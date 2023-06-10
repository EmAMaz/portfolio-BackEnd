import { Component } from "@angular/core";

@Component({
    selector: 'my-description',
    templateUrl: './mydescription.component.html',
    styleUrls: ['./mydescription.component.css']
})

export class DescriptionComponent {
    public decription: string;

    constructor(){
        this.decription = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem sequi fugiat natus repellat nemo facilis, dignissimos, amet magnam impedit ex nobis tempore earum ducimus minima architecto doloremque rem delectus. <br> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, exercitationem sequi fugiat natus repellat nemo facilis, dignissimos, amet magnam impedit ex nobis tempore earum ducimus minima architecto doloremque rem delectus.'
    }
}