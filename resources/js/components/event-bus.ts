'use strict';

import {Observable, Subject} from 'rxjs';
import {distinctUntilChanged, filter} from 'rxjs/operators';
import {map, tap} from 'rxjs/operators';
import {getAbsoluteUrl} from './utils/app-util';

let ES = require('eventsource-polyfill/dist/eventsource.js').EventSource;
type MessageType = 'event' | 'notification' | 'notify' | 'client' | null;

class Message {
  public event: string;
  public data: any;
}

class EventBus {

  private _bus = new Subject<Message>();

  constructor(url: any) {
    if (url === null) {
      return;
    }

    if (typeof EventSource !== 'undefined') {
      ES = EventSource;
    }

    this.createEventSource(url.toString());
  }

  private createEventSource(url: any) {
    const eventSource = new ES(url, {withCredentials: true});
    eventSource.onmessage = data =>this._bus.next(JSON.parse(data.data));
    eventSource.onerror = () => {
      //Mute the error
    };
  }

  on(type: MessageType, subType?: string): Observable<Message> {
    if (type === null) {
      return this._bus.asObservable();
    }

    let messageType: string = type;
    if (subType !== null && subType !== undefined) {
      messageType = type + '.' + subType;
    }
    return this._bus.pipe(
        filter(message => messageType === message.event),
        distinctUntilChanged()
    )
  }

  onClient(event: string): Observable<any> {
    return this
        .on('client', event)
        .pipe(map(message => message.data))
  }

  dispatch(event, data) {
    this._bus.next({
      event: 'client.' + event,
      data: data
    });
  }
}

let url = null;

const element = document.querySelector('meta[name=mercure]');
console.log(element);

if (element) {
  const MERCURE_SUBSCRIBE_URL = element.getAttribute('content');
  url = new URL(getAbsoluteUrl(MERCURE_SUBSCRIBE_URL));
  url.searchParams.append('topic', 'http://event/annotation');
  url.searchParams.append('topic', 'http://event/comment');
  // url.searchParams.append('topic', 'http://private/{group}/{id}');
}

const EventBusService = new EventBus(url);
export {EventBusService, Message};
