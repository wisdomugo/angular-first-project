import {Component, OnInit} from '@angular/core';
import { EventService } from './shared/event.service';
import { ToastrService } from '../common/toastr.service'

declare let toastr

@Component({
    template: `
    <div>
        <h1>Upcoming Angular Events</h1>
        <hr>

        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail (click)="handleThumbnailClick(event.name)" [event]="event" #thumbnail [event]="event1"></event-thumbnail>
            </div>
        </div>
        <button class="btn btn-primary" (click)="thumbnail.logFoo()">Log me some foo </button>
    </div>
    `
})
export class EventsListComponent implements OnInit{
    events:any[]

    constructor(private eventService: EventService, private toastr: ToastrService){
       
    }

    ngOnInit(){
        this.events = this.eventService.getEvents()
    }
    handleThumbnailClick(eventName){
        this.toastr.success(eventName)
        //console.log("Kwakupricy")
    }
}