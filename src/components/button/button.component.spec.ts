import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT, OamiButtonComponent } from './button.component';

describe('OamiButtonComponent', () => {
  let component: OamiButtonComponent;
  let fixture: ComponentFixture<OamiButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OamiButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OamiButtonComponent);
    component = fixture.componentInstance;

    // Set the required input before the first change detection
    fixture.componentRef.setInput('label', 'Test Button');
    fixture.componentRef.setInput('size', BUTTON_SIZE.LARGE);
    fixture.componentRef.setInput('variant', BUTTON_VARIANT.PRIMARY);
    fixture.componentRef.setInput('type', BUTTON_TYPE.BUTTON);
    fixture.componentRef.setInput('disabled', false);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the correct label', () => {
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.textContent.trim()).toBe('Test Button');

    fixture.componentRef.setInput('label', 'New Label');
    fixture.detectChanges();
    expect(buttonElement.textContent.trim()).toBe('New Label');
  });

  it('should apply the correct size class', () => {
    fixture.componentRef.setInput('size', 'large');
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList.contains('oami-button--large')).toBeTruthy();
  });

  it('should apply the correct variant class', () => {
    fixture.componentRef.setInput('variant', 'secondary');
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.classList.contains('oami-button--secondary')).toBeTruthy();
  });

  it('should set the disabled attribute correctly', () => {
    fixture.componentRef.setInput('disabled', true);
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.disabled).toBeTruthy();
  });

  it('should set the correct type attribute', () => {
    fixture.componentRef.setInput('type', 'submit');
    fixture.detectChanges();
    const buttonElement = fixture.nativeElement.querySelector('button');
    expect(buttonElement.getAttribute('type')).toBe('submit');
  });
});
