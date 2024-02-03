import { Component, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import {NgxTypedJsModule} from 'ngx-typed-js';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, NgxTypedJsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})


export class HeaderComponent {
  @ViewChild('subtitle') subtitle : any;

}
