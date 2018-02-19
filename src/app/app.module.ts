import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { LugaresComponent } from './lugares/lugares.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { MountainsComponent } from './mountains/mountains.component';
import { MountainListComponent } from './mountains/mountain-list/mountain-list.component';
import { MountainDetailComponent } from './mountains/mountain-detail/mountain-detail.component';
import { MountainItemComponent } from './mountains/mountain-list/mountain-item/mountain-item.component';
import { BlogComponent } from './blog/blog.component';
import { BlogItemComponent } from './blog/blog-item/blog-item.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogEditComponent } from './blog/blog-detail/blog-edit/blog-edit.component';
import { ContactComponent } from './contact/contact.component';
import { ReservarComponent } from './reservar/reservar.component';

const appRoutes: Routes = [
  {path: 'tourmountains', component: MountainsComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'contact', component: ContactComponent},
]
 
@NgModule({
  declarations: [
    AppComponent,
    LugaresComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    MountainsComponent,
    MountainListComponent,
    MountainDetailComponent,
    MountainItemComponent,
    BlogComponent,
    BlogItemComponent,
    BlogDetailComponent,
    BlogEditComponent,
    ContactComponent,
    ReservarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
