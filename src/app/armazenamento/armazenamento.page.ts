import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-armazenamento',
  templateUrl: './armazenamento.page.html',
  styleUrls: ['./armazenamento.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ArmazenamentoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
