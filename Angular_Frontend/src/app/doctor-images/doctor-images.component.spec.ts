import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorImagesComponent } from './doctor-images.component';

describe('DoctorImagesComponent', () => {
  let component: DoctorImagesComponent;
  let fixture: ComponentFixture<DoctorImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorImagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
