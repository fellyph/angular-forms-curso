import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosItemComponent } from './cursos-item.component';

describe('CursosItemComponent', () => {
  let component: CursosItemComponent;
  let fixture: ComponentFixture<CursosItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
