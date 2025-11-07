import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput, IonCardContent} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, IonButton, IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput, IonCardContent, RouterLink],
})
export class LoginPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
