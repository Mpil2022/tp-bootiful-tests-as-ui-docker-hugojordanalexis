import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../environments/environment";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  private readonly _backendURL : any ;
  private _currentValue :  number ;
  private _value : number;
  constructor(private _http: HttpClient) {
    this._backendURL = {};

    // build backend base url
    let baseUrl = `${environment.backend.protocol}://${environment.backend.host}`;
    if (environment.backend.port) {
      baseUrl += `:${environment.backend.port}`;
    }

    // build all backend urls
    // @ts-ignore
    Object.keys(environment.backend.endpoints).forEach(k => this._backendURL[ k ] = `${baseUrl}${environment.backend.endpoints[ k ]}`);
    this._currentValue = 0;
    this._value = 0 ;
  }
  ngOnInit(): void {
    this.getCurrentValue().subscribe(
      (n : number) =>  this._currentValue = n
    );
  }

  get value(): number {
    return this._value;
  }

  set value(value: number) {
    this._value = value;
  }

  /**
   * get current value
   */
  getCurrentValue(): Observable<any>{
    return this._http.get(this._backendURL.current);
  }

  /**
   *  add
   */
  add(n : number): Observable<any>{
    let body = new HttpParams()
    body = body.set('value',n)
    return this._http.post(this._backendURL.add, body);
  }

  get currentValue(): number {
    return this._currentValue;
  }

  submit(n: string){
      this.add(Number.parseInt(n)).subscribe(
        (nt:number) => this._currentValue = nt
      )
  }
}
