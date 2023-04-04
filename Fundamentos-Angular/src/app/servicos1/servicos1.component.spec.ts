import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Servicos1Component } from './servicos1.component';

describe('Servicos1Component', () => {
  let component: Servicos1Component;
  let fixture: ComponentFixture<Servicos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Servicos1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Servicos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
