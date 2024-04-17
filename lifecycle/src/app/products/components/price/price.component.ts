import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'product-price',
  templateUrl: './price.component.html',
  styles: ``
})
export class PriceComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  private _componentName: string = "PriceComponent";

  @Input()
  public price: number = 0;

  /*
  * Para poder manejar el interval de rxJS que creamos en el onInit
  * creamos esta porpiedad.
  * La nomenclatura inicda que si se trata de una Subscription, 
  * el nombre finaliza con el carácter "$"
  */
  public interval$?: Subscription;

  constructor() {
    console.info("👼🏾constructor", this._componentName)
  }

  ngOnInit(): void {
    console.info("👼🏾ngOnInit", this._componentName)

    /*
    * Creamos una suscripción para después poderla destruir.
    * "interval" de rxJS va lanzando periódicamente valores
    * 
    * Con cada Toggle del componente se inicia una nueva instancia del interval
    */
    console.log(`Creating new 🚀Undestructable Interval`);
    interval(1000).subscribe(value => console.log(`🚀Undestructable Interval value: ${value}`));
    console.log(`Creating new 💗Destructable  Interval =>  (this.interval$ = interval)`)
    this.interval$ = interval(1000).subscribe(value => console.log(`💗Destructable Interval value: ${value}`));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.info("👼🏾ngOnChanges", this._componentName)
    console.info("👼🏾ngOnChanges changes: SimpleChanges", changes)
  }

  ngDoCheck(): void {
    console.info("👼🏾ngDoCheck", this._componentName)
  }

  ngAfterContentInit(): void {
    console.info("👼🏾ngAfterContentInit", this._componentName)
  }

  ngAfterContentChecked(): void {
    console.info("👼🏾ngAfterContentChecked", this._componentName)
  }

  ngAfterViewInit(): void {
    console.info("👼🏾ngAfterViewInit", this._componentName)
  }

  ngAfterViewChecked(): void {
    console.info("👼🏾ngAfterViewChecked", this._componentName)
  }

  ngOnDestroy(): void {
    console.info("👼🏾ngOnDestroy", this._componentName);
    /*
    * Con este comando, en caso de tener iniciado el interval$
    * nos dessubscribiremos al destruir el componente (Toggle del padre)
    */
    this.interval$?.unsubscribe();
    console.info("💗Destructable Interval destroyed via this.interval$?.unsubscribe()");
  }
}
