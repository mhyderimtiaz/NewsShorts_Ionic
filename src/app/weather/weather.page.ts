import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { WeatherService } from '../weather.service';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
 data:any
 temp:any;
  constructor(private weatherService: WeatherService,private ionicStorage:Storage) {  
  }
  public weatherForm=new FormGroup({
    city:new FormControl('',Validators.required)
  });

  search(formData:FormData){
    console.log(formData);
    this.ionicStorage.set("city",formData["city"]);
    this.weatherService
    .getWeather(formData["city"])
    .subscribe(data =>{
      console.log(data);
      this.data=data;
      this.temp=Math.round(this.data.main.temp-273.15);
      console.log(this.data);
    })
  }

  ngOnInit() {
    // this.set(this.queryText);
    // console.log(this.city);
    
    // console.log(this.param);
    // return this.initiateData();
    
    
   
    
  }

}
