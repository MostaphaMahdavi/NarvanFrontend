import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { homeSlider } from '../Dtos/Sliders/homeSlider';
import { Slider } from '../Dtos/Sliders/slider';

@Injectable({
  providedIn: 'root'
})
export class SliderService {

constructor(private http:HttpClient) { }

private homeSlider:BehaviorSubject<Slider[]>=new BehaviorSubject<Slider[]>(null);


  public getSliders():Observable<homeSlider>{
return this.http.get<homeSlider>("slider/GetActiveSliders");
  }


public getCurrentSliders():Observable<Slider[]>{
return this.homeSlider;
}

public setCurrentSliders(slider:Slider[]){
  this.homeSlider.next(slider);
}

}
