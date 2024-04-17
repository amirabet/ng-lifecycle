import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styles: ``
})
export class ProductComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  private _componentName: string = "ProductComponent";

  public isProductVisible: boolean = true;
  public currentPrice = 40;

  /*
  * Llamado antes de cualquier ciclo de vida,
  * una vez por cada instancia del componente
  * Aquí es dónde inyectamos las dependencias
  */
  constructor() {
    console.info("👴constructor", this._componentName)
  }

  /*
  * Llamado después deñ constructor, al iniciar
  * el componente
  */
  ngOnInit(): void {
    console.info("👴ngOnInit", this._componentName)
  }

  /*
  * Sólo se llamá si tenemos un @Input en el componente.
  * Cada vez que cambiamos una propiedad del componente,
  * inlcuida la primera vez que se setean sus propiedades.
  * Se puede llamar ANTES que OnInit
  */
  ngOnChanges(changes: SimpleChanges): void {
    console.info("👴ngOnChanges", this._componentName)
    console.info("👴ngOnChanges changes: SimpleChanges", changes)
  }

  /*
  * Se llama cada vez que una propiedad del componente o 
  * directiva es revisada
  */
  ngDoCheck(): void {
    console.info("👴ngDoCheck", this._componentName)
  }

  /*
  * Después de ngOnInit, cuando el 
  * componente es inicializado
  */
  ngAfterContentInit(): void {
    console.info("👴ngAfterContentInit", this._componentName)
  }

  /*
  * Se llama después de cada 
  * revisión del componente o 
  * directiva.
  */
  ngAfterContentChecked(): void {
    console.info("👴ngAfterContentChecked", this._componentName)
  }

  /*
  * Después del ngAfterContentInit
  */
  ngAfterViewInit(): void {
    console.info("👴ngAfterViewInit", this._componentName)
  }

  /*
  * Llamado después de cada revisión de las vistas del 
  * componente o directiva.
  */
  ngAfterViewChecked(): void {
    console.info("👴ngAfterViewChecked", this._componentName)
  }

  /*
  * Se llama justo antes de que el componente o directiva va a ser 
  * destruida.
  * Un ngIf lanza esta destrucción
  */
  ngOnDestroy(): void {
    console.info("👴ngOnDestroy", this._componentName)
  }

  public incrementPrice() {
    this.currentPrice++;
  }
}
