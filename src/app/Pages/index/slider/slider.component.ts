import { Component, OnInit } from '@angular/core';
import { SliderService } from 'src/app/services/slider.service';
import { Slider } from 'src/app/Dtos/Sliders/slider';
import { DomainName } from 'src/app/Utilities/PathTools';
declare function homeSlider():any;
@Component({
  selector: 'app-index-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
public sliders:Slider[]=[];
public domain=DomainName;
  constructor(private slider:SliderService) { }

  ngOnInit(): void {

this.slider.getCurrentSliders().subscribe(res=>{
  console.log(res);

  if(res==null){
    this.slider.getSliders().subscribe(res=>{
      if(res.status=="success"){
         this.slider.setCurrentSliders(res.data);
      }
     
    })

  }
  else{
    this.sliders=res;

    setInterval(()=>{
      homeSlider();
    },100);
   
   
  }


 

});

  }

}
