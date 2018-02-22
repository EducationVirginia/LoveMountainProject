import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

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

const appRoutes: Routes = [
  {path: 'tourmountains', component: MountainsComponent},
  {path: 'tourmountains_deatil/:id', component: MountainDetailComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog_deatil/:id', component: BlogDetailComponent},
  {path: 'contact', component: ContactComponent},
]
 
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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAUQJYch7LqsHbehONVtk_ETeJbFUuSBtM'
    })
  ],
  providers: [MountainsService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
