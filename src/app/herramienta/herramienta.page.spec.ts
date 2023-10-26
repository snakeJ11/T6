import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HerramientaPage } from './herramienta.page';

describe('HerramientaPage', () => {
  let component: HerramientaPage;
  let fixture: ComponentFixture<HerramientaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HerramientaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
