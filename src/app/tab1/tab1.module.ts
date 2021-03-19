import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HttpClientModule } from '@angular/common/http';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HomeComponent } from '../components/home/home.component';
import { ProfileCardComponent } from '../components/profile-card/profile-card.component';
import { ConnectPipe } from '../pipe/connect.pipe';
import { FilterPipe } from '../pipe/filter.pipe';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HttpClientModule,
  ],
  declarations: [Tab1Page, HomeComponent, ProfileCardComponent, ConnectPipe, FilterPipe]
})
export class Tab1PageModule {}
