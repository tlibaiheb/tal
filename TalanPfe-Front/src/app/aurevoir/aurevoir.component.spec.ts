import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AurevoirComponent } from './aurevoir.component';

describe('AurevoirComponent', () => {
  let component: AurevoirComponent;
  let fixture: ComponentFixture<AurevoirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AurevoirComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AurevoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
