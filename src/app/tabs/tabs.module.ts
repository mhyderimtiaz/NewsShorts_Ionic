import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import {NewsPageModule} from '../news/news.module';
import {WeatherPageModule} from '../weather/weather.module';
import {Covid19PageModule} from '../covid19/covid19.module';
// import {HomePageModule} from '../home/home.module';
// import {LoginPageModule} from '../login/login.module';
// import {RegistrationPageModule} from '../registration/registration.module';
// import {ForgetPasswordPageModule} from '../forget-password/forget-password.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    NewsPageModule,
    WeatherPageModule,
    Covid19PageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
