import { Directive, ElementRef, Input, HostListener, Output, EventEmitter } from '@angular/core'
import { EventBusService } from './services/event/eventBus.service';

@Directive({
    selector: '[emitEvent]',
    providers: [EventBusService]
})
export class EmitEventDirective {

    @Input('emitEvent')
    private eventName: string;

    constructor(
        private eventBusService: EventBusService,
        private ele: ElementRef) {
    }

    @HostListener('keypress', ['$event'])
    onValueChange(event: Event) {
        this.eventBusService.publish(this.eventName, event);
        console.error(this.eventName);
        console.error(event);
    }
}