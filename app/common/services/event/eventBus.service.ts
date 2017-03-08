//system imports
import { Injectable } from '@angular/core';
//rxjs
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Subject } from 'rxjs/Subject';
//app import


@Injectable()
export class EventBusService {
    private eventBus = new Map<string, Subject<any>>();

    public unsubscribe( eventName: string ) : void {
        //unsubscribe to an event
        this.eventBus.delete( eventName );
    }

    public subscribe( eventName: string, handler: Function ) : Subscription {
        //subscribe to an event
        if( this.eventBus.get( eventName ) == null ) {
            this.eventBus.set( eventName, new Subject<any>() );
        }
        return this.eventBus.get( eventName ).asObservable().subscribe( ( eventData ) => { handler( eventData ) } );
    }

    public publish( eventName: string, data: any ) : void {
        //trigger an event
        this.eventBus.get( eventName ).next( data );
    }
}
