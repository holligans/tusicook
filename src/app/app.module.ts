import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { SignSecComponent } from './header/sign-sec/sign-sec.component';
import { LogoHolderComponent } from './header/logo-holder/logo-holder.component';
import { FooterComponent } from './footer/footer/footer.component';
import { SearchComponent } from './searching/search/search.component';
import { FiltersComponent } from './searching/filters/filters.component';
import { SearchResultsComponent } from './searching/search-results/search-results.component';
import { SearchBarComponent } from './searching/search-bar/search-bar.component';
import { AppRoutingModule } from './/app-routing.module';
import { CookerComponent } from './cooker/cooker/cooker.component';
import { MealsComponent } from './meals/meals/meals.component';
import { CookerInfoComponent } from './cooker/cooker-info/cooker-info.component';
import { CookerOfferComponent } from './cooker/cooker-offer/cooker-offer.component';
import { MealsInfoComponent } from './meals/meals-info/meals-info.component';
import { MealsOrderComponent } from './meals/meals-order/meals-order.component';
import { CustomerProfileComponent } from './customer/customer-profile/customer-profile.component';
import { SubscriptionComponent } from './subscription/subscription/subscription.component';
import { KitchenComponent } from './kitchen/kitchen/kitchen.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    SignSecComponent,
    LogoHolderComponent,
    FooterComponent,
    SearchComponent,
    FiltersComponent,
    SearchResultsComponent,
    SearchBarComponent,
    CookerComponent,
    MealsComponent,
    CookerInfoComponent,
    CookerOfferComponent,
    MealsInfoComponent,
    MealsOrderComponent,
    CustomerProfileComponent,
    SubscriptionComponent,
    KitchenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
