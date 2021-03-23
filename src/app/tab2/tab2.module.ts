import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { ConnectionsComponent } from '../components/connections/connections.component';
import { ProfileCardComponent } from '../components/profile-card/profile-card.component';
import { ConnectPipe } from '../pipe/connect.pipe';
import { environment } from 'src/environments/environment';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ],
  declarations: [Tab2Page, ConnectionsComponent, ProfileCardComponent, ConnectPipe,]
})
export class Tab2PageModule {}
