import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerPedidoComponent } from './ver-pedido.component';

describe('VerPedidoComponent', () => {
  let component: VerPedidoComponent;
  let fixture: ComponentFixture<VerPedidoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerPedidoComponent]
    });
    fixture = TestBed.createComponent(VerPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
