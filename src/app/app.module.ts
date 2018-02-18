import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';
import { LugaresComponent } from './lugares/lugares.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';

const appRoutes: Routes = [
  {path: '', component: LugaresComponent},
	{path: 'lugares', component: LugaresComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LugaresComponent,
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
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
