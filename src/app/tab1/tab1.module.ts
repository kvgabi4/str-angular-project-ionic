import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HomeComponent } from '../components/home/home.component';
import { ProfileCardComponent } from '../components/profile-card/profile-card.component';
import { ConnectPipe } from '../pipe/connect.pipe';
import { FilterPipe } from '../pipe/filter.pipe';
import { environment } from 'src/environments/environment';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
  ],
  declarations: [Tab1Page, HomeComponent, ProfileCardComponent, ConnectPipe, FilterPipe]
})
export class Tab1PageModule {}
