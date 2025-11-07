import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApiPage } from './api.page';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs'; 

describe('ApiPage', () => {
  let component: ApiPage;
  let fixture: ComponentFixture<ApiPage>;
  let httpMock: HttpTestingController; 
  let httpClient: HttpClient; 

  const mockMovieResults = [
    { title: 'Filme Teste 1', overview: 'Sinopse 1', release_date: '2023-01-01', vote_average: 8.5 },
    { title: 'Filme Teste 2', overview: 'Sinopse 2', release_date: '2023-02-01', vote_average: 6.2 },
  ];
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiPage, HttpClientTestingModule], 
    }).compileComponents();

    fixture = TestBed.createComponent(ApiPage);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController); 
    httpClient = TestBed.inject(HttpClient);
    

    fixture.detectChanges(); 
  });

  
  afterEach(() => {
    httpMock.verify();
  });


  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar buscarFilmesPopulares() no ngOnInit', () => {
    
    const req = httpMock.expectOne(
      `https://api.themoviedb.org/3/movie/popular?api_key=${component['API_KEY']}&language=pt-BR`
    );
    expect(req.request.method).toBe('GET');
  });

  it('deve popular a lista de filmes em caso de sucesso da API', () => {
    
    const req = httpMock.expectOne(
      `https://api.themoviedb.org/3/movie/popular?api_key=${component['API_KEY']}&language=pt-BR`
    );
    
    req.flush({ results: mockMovieResults });
    
  
    expect(component.filmes.length).toBe(2);
    expect(component.filmes[0].title).toBe('Filme Teste 1');
  });

  
  it('deve lidar com erros da API e manter filmes vazio', () => {
   
    const errorSpy = spyOn(console, 'error'); 
    
    const req = httpMock.expectOne(
      `https://api.themoviedb.org/3/movie/popular?api_key=${component['API_KEY']}&language=pt-BR`
    );
    
    req.error(new ProgressEvent('Erro de Rede'), { status: 404, statusText: 'Not Found' });

    expect(component.filmes.length).toBe(0);
    expect(errorSpy).toHaveBeenCalled(); 
  });
});