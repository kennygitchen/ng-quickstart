import { Directive, ElementRef, Input, HostListener, Output, EventEmitter } from '@angular/core'
import { EventBusService } from './services/event/eventBus.service';

@Directive({
    selector: '[appEvent]'
})
export class AppEventDirective {

    @Input('appEvent')
    private eventName: string;

    constructor(
        private eventBusService: EventBusService,
        private ele: ElementRef) {
    }

    @HostListener('input', ['$event'])
    onValueChange(event: Event) {
        this.eventBusService.publish(
            this.eventName, new AppEvent(event, this.eventName, (<HTMLInputElement>event.target).value));
    }
}

export class AppEvent {
    constructor(
        private _nativeEvent: Event,
        private _eventName: string,
        private _eventData: any) {
    }

    get nativeEvent() : Event {
        return this._nativeEvent;
    }

    get eventName() : string {
        return this._eventName;
    }

    get eventData() : any {
        return this._eventData;
    }
}
