import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEnableButton]',
  standalone: true, // El selector que vamos a usar en el HTML
})
export class EnableButtonDirective {
  // Valor que se pasa desde el componente para habilitar o deshabilitar el botón
  @Input() set appEnableButton(isEnabled: boolean) {
    this.toggleButton(isEnabled);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  // Función para habilitar o deshabilitar el botón
  private toggleButton(isEnabled: boolean): void {
    if (isEnabled) {
      this.renderer.removeClass(this.el.nativeElement, 'disabled');
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'false');
    } else {
      this.renderer.addClass(this.el.nativeElement, 'disabled');
      this.renderer.setAttribute(this.el.nativeElement, 'disabled', 'true');
    }
  }
}
