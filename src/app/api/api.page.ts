import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'; 
import { IonSearchbar, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent } from '@ionic/angular/standalone'; 

interface MovieResult {
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  poster_path: string;
}

@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'], 
  standalone: true, 
  imports: [CommonModule, HttpClientModule, FormsModule, IonSearchbar, IonHeader, IonToolbar, IonButtons, IonBackButton, IonContent ], 
})
export class ApiPage implements OnInit {

  public filmes: MovieResult[] = [];
  public termoBusca: string = ''; 
  
  private readonly API_KEY = '715b1ffc9fc8c73ef180dda787bcddbf'; 
  private readonly POPULAR_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${this.API_KEY}&language=pt-BR`;
  
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.buscarFilmesPopulares();
  }
  

  buscarFilmesPopulares() {
    console.log('Buscando filmes populares...');
    
    this.http.get<{ results: MovieResult[] }>(this.POPULAR_API_URL)
      .subscribe({
        next: (resposta) => {
          this.filmes = resposta.results;
          console.log('Filmes populares carregados com sucesso:', this.filmes);
        },
        error: (erro) => {
          console.error('Erro ao buscar a API do TMDB:', erro);
        },
        complete: () => {
          console.log('Busca por populares finalizada.');
        }
      });
  }

  onSearchChange(event: any) {
    this.termoBusca = event.detail.value;
    
    if (this.termoBusca.length > 2 || this.termoBusca.length === 0) {
        this.buscarFilmesPorTermo();
    }
  }
  
  buscarFilmesPorTermo() {
    
    if (this.termoBusca.trim() === '') {
      this.buscarFilmesPopulares(); 
      return;
    }

    const queryEncoded = encodeURIComponent(this.termoBusca.trim());
    const SEARCH_API_URL = 
      `https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&language=pt-BR&query=${queryEncoded}`;

    console.log('Iniciando busca por:', this.termoBusca);
    
    this.http.get<{ results: MovieResult[] }>(SEARCH_API_URL)
      .subscribe({
        next: (resposta) => {
          this.filmes = resposta.results;
          console.log('Busca por termo finalizada com sucesso. Resultados:', this.filmes.length);
        },
        error: (erro) => {
          console.error('Erro ao buscar filmes por termo:', erro);
        },
        complete: () => {
            console.log('Busca por termo finalizada.');
        }
      });
  }
}