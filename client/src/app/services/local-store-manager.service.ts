import { Injectable } from '@angular/core';
import { Resume } from '../models/resume';

@Injectable({
  providedIn: 'root'
})
export class LocalStoreManager {

    constructor() { }

    create(key: string, value: Resume[]) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    get(key: string) {
        let result = localStorage.getItem(key);
        console.log(result);
        return result;
    }
}
