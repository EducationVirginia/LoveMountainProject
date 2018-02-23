import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MountainsService } from './services/mountains.service';
import { BlogService } from './services/blog.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MountainsComponent } from './mountains/mountains.component';
import { MountainListComponent } from './mountains/mountain-list/mountain-list.component';
import { MountainDetailComponent } from './mountains/mountain-detail/mountain-detail.component';
import { MountainItemComponent } from './mountains/mountain-item/mountain-item.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogItemComponent } from './blog/blog-item/blog-item.component';
import { BlogEditComponent } from './blog/blog-detail/blog-edit/blog-edit.component';
import { ContactComponent } from './contact/contact.component';
import { ReservarComponent } from './reservar/reservar.component';
import { CreatingComponent } from './mountains/creating/creating.component';

const appRoutes: Routes = [
  {path: 'mountains', component: MountainsComponent},
  {path: 'mountains_creat', component: CreatingComponent},
  {path: 'mountains_deatil/:id', component: MountainDetailComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog_deatil/:id', component: BlogDetailComponent},
  {path: 'contact', component: ContactComponent},
]
 
export const firebaseConfig = {
  apiKey: "AIzaSyBtz7RyU-e82O1Yylx2g7KrfqhK0P9eftw",
  authDomain: "lovemountais-projectplatzi.firebaseapp.com",
  databaseURL: "https://lovemountais-projectplatzi.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "99623597854"
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MountainsComponent,
    MountainListComponent,
    MountainDetailComponent,
    MountainItemComponent,
    BlogComponent,
    BlogDetailComponent,
    BlogEditComponent,
    BlogItemComponent,
    ContactComponent,
    ReservarComponent,
    CreatingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUQJYch7LqsHbehONVtk_ETeJbFUuSBtM'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [MountainsService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
