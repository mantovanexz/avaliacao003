import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ArmazenamentoPage } from './armazenamento.page';

describe('ArmazenamentoPage', () => {
  let component: ArmazenamentoPage;
  let fixture: ComponentFixture<ArmazenamentoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmazenamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
