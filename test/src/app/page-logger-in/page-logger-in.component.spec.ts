import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageLoggerInComponent } from './page-logger-in.component';

describe('PageLoggerInComponent', () => {
  let component: PageLoggerInComponent;
  let fixture: ComponentFixture<PageLoggerInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageLoggerInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageLoggerInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
