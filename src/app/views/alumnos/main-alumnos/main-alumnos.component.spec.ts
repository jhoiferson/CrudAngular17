import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAlumnosComponent } from './main-alumnos.component';

describe('MainAlumnosComponent', () => {
  let component: MainAlumnosComponent;
  let fixture: ComponentFixture<MainAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAlumnosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
