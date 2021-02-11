import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subscriber } from '../models/subscriber';

const BASE_URL = `${environment.api}/subscriber`;

@Injectable()
export class SubscriberService {
    constructor(private http: HttpClient) { }

    getSubscribers(): Observable<any> {
        return this.http.get(`${BASE_URL}`);
    }

    createSubscriber(subscriber: Subscriber): Observable<any> {
        return this.http.post(`${BASE_URL}`, { ...subscriber });
    }

    getSubscriberById(id: string): Observable<any> {
      return this.http.get(`${BASE_URL}/${id}`);
    }
}
