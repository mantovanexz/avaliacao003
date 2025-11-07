import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms'; // <-- Importações Essenciais
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput, IonCardContent, IonText} from '@ionic/angular/standalone'; // Adicionado IonText para mensagens de erro

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent, CommonModule, FormsModule, ReactiveFormsModule, IonButton, IonCard, IonCardHeader, IonCardTitle, IonItem, IonLabel, IonInput, IonCardContent, RouterLink, IonText ],
})
export class LoginPage implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      
      console.log('Login efetuado. Navegando para /api');
      this.router.navigate(['/api']); 
    } else {

      this.loginForm.markAllAsTouched();
      console.log('Formulário inválido. Não será enviado pelo Enter/Botão.');
    }
  }


  get f() {
    return this.loginForm.controls;
  }
}