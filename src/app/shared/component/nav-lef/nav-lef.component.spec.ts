import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLefComponent } from './nav-lef.component';

describe('NavLefComponent', () => {
  let component: NavLefComponent;
  let fixture: ComponentFixture<NavLefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavLefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavLefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
