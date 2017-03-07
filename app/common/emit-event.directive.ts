import { Directive, ElementRef, Input, HostListener, Output, EventEmitter } from '@angular/core'

@Directive({
    selector: '[emitEvent]'
})
export class EmitEventDirective {

    @Input('emitEvent')
    private eventName: string;

    @Output('customChangeEvent')
    eventEmitter = new EventEmitter<any>();

    constructor(private ele: ElementRef) { }

    @HostListener('keypress', ['$event'])
    onValueChange(event: Event) {
        this.eventEmitter.emit(event);
        console.error(this.eventName);
        console.error(event);
    }
}