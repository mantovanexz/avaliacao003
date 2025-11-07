import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-recuperarsenha',
  templateUrl: './recuperarsenha.page.html',
  styleUrls: ['./recuperarsenha.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class RecuperarsenhaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
