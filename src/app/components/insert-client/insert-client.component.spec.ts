import { InsertClientComponent } from './insert-client.component'
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('InsertClientComponent', () => {
  let component: InsertClientComponent;
  let fixture: ComponentFixture<InsertClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertClientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsertClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
