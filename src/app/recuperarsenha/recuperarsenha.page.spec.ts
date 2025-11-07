import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecuperarsenhaPage } from './recuperarsenha.page';

describe('RecuperarsenhaPage', () => {
  let component: RecuperarsenhaPage;
  let fixture: ComponentFixture<RecuperarsenhaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecuperarsenhaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
