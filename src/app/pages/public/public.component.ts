import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";

@Component({
    selector: 'app-public',
    standalone: true,
    templateUrl: './public.component.html',
    styleUrl: './public.component.scss',
    imports: [RouterOutlet, HeaderComponent, FooterComponent]
})
export class PublicComponent {

}
