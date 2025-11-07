import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonTitle, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, RouterLink, IonButton],
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
