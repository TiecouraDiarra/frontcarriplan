import { Injectable } from '@angular/core';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

export const INTRO_KEY = 'intro-slides';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  

  constructor() { }
  
  setStorage(key: any, value: string) {
    return Storage['set']({
      key,
      value
    });
  }

  getStorage(key: any) {
    return Storage['get']({key});
  }
}
