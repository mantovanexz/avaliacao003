import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonButton, IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput, IonCardContent} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonButton,IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput, IonCardContent, RouterLink],
})
export class CadastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
