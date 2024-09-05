import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent, BUTTON_SIZE, BUTTON_TYPE, BUTTON_VARIANT } from './button.component';
import { Component } from '@angular/core';

@Component({
  template: `
    <oami-button
      [label]="label"
      [size]="size"
      [variant]="variant"
      [disabled]="disabled"
      [type]="type"
    ></oami-button>
  `,
  standalone: true,
  imports: [ButtonComponent],
})
class TestHostComponent {
  label!: string;
  size!: BUTTON_SIZE;
  variant!: BUTTON_VARIANT;
  disabled = false;
  type?: BUTTON_TYPE;
}

describe('ButtonComponent', () => {
  let hostFixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;
  let buttonComponentRef: ButtonComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent, ButtonComponent],
    }).compileComponents();

    hostFixture = TestBed.createComponent(TestHostComponent);
    hostComponent = hostFixture.componentInstance;
    buttonComponentRef = hostFixture.debugElement.children[0].componentInstance;
  });

  it('should create', () => {
    expect(buttonComponentRef).toBeTruthy();
  });

  describe('Input Signals', () => {
    it('should set label input signal', () => {
      hostComponent.label = 'Test Button';
      hostFixture.detectChanges();
      expect(buttonComponentRef.label()).toBe('Test Button');

      hostComponent.label = 'New Label';
      hostFixture.detectChanges();
      expect(buttonComponentRef.label()).toBe('New Label');
    });

    it('should set size input signal', () => {
      hostComponent.size = BUTTON_SIZE.SMALL;
      hostFixture.detectChanges();
      expect(buttonComponentRef.size()).toBe(BUTTON_SIZE.SMALL);

      hostComponent.size = BUTTON_SIZE.LARGE;
      hostFixture.detectChanges();
      expect(buttonComponentRef.size()).toBe(BUTTON_SIZE.LARGE);
    });

    it('should set variant input signal', () => {
      hostComponent.variant = BUTTON_VARIANT.PRIMARY;
      hostFixture.detectChanges();
      expect(buttonComponentRef.variant()).toBe(BUTTON_VARIANT.PRIMARY);

      hostComponent.variant = BUTTON_VARIANT.SECONDARY;
      hostFixture.detectChanges();
      expect(buttonComponentRef.variant()).toBe(BUTTON_VARIANT.SECONDARY);
    });

    it('should set disabled input signal', () => {
      expect(buttonComponentRef.disabled()).toBe(false);

      hostComponent.disabled = true;
      hostFixture.detectChanges();
      expect(buttonComponentRef.disabled()).toBe(true);
    });

    it('should set type input signal', () => {
      hostComponent.type = BUTTON_TYPE.BUTTON;
      hostFixture.detectChanges();
      expect(buttonComponentRef.type()).toBe(BUTTON_TYPE.BUTTON);

      hostComponent.type = BUTTON_TYPE.SUBMIT;
      hostFixture.detectChanges();
      expect(buttonComponentRef.type()).toBe(BUTTON_TYPE.SUBMIT);
    });
  });
});
