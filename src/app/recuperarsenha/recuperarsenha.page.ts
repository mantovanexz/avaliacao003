import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonLabel, IonInput, IonButton, IonText } from '@ionic/angular/standalone';
import { HttpClient } from '@angular/common/http'; 
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-recuperarsenha',
  templateUrl: './recuperarsenha.page.html',
  styleUrls: ['./recuperarsenha.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonButton, 
    IonText, 
    CommonModule, 
    FormsModule
  ]
})
export class RecuperarsenhaPage implements OnInit {

 
  email: string = '';
  
  
  private readonly API_URL = 'https://api.seusite.com/solicitar-recuperacao'; 

  /
  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
   
  }


  enviarSolicitacao(): void {

    if (!this.email) {
      alert('Por favor, digite seu e-mail.');
      return;
    }

    console.log('Enviando solicitação para:', this.email);
    
    
    this.http.post(this.API_URL, { email: this.email })
      .subscribe({
        next: (response) => {
          
          alert('Se o e-mail estiver cadastrado, um link de redefinição foi enviado!');
          
          this.router.navigate(['/login']);
        },
        error: (error) => {
          
          console.error('Erro na solicitação:', error);
          alert('Ocorreu um erro. Por favor, tente novamente mais tarde.');
        }
      });
  }
}
