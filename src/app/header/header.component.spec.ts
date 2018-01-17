import { TestBed, async } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HeaderComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
