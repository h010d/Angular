import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
      constructor(private http: HttpClient) {}
  public logComponentCreatgion(componentName: string){
    console.log(`Component creation: ${componentName}`);
  }
}
