import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopLefComponent } from './top-lef.component';

describe('TopLefComponent', () => {
  let component: TopLefComponent;
  let fixture: ComponentFixture<TopLefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopLefComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopLefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
