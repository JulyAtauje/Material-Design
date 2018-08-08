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
                link: '/',
                icon: 'home'
            },
            {
                id: 2,
                name: 'Activities',
                link: '/activity',
                icon: 'insert_invitation'
            },
            {
                id: 3,
                name: 'My List',
                link: '/activity',
                icon: 'format_list_numbered'
            }
        ]

    }
}
