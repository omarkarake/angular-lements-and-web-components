import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloElementComponent } from './hello-element.component';

describe('HelloElementComponent', () => {
  let component: HelloElementComponent;
  let fixture: ComponentFixture<HelloElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HelloElementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
