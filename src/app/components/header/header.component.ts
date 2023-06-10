import { Component } from "@angular/core";

@Component({
    selector: 'headercomponent',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent {
    public titulo:string;
    

    constructor(){
        this.titulo = 'Emanuel Maza'
    }
}
