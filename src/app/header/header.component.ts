import {Component} from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl:  './header.component.html'
})

export class HeaderComponent {

    public nav: Array<any>= [];
    constructor (){
        this.nav = [
            {
                id: 1,
                name: 'Home',
                link: '/'
            }
        ]

    }
}
