import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms'; 
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatChipsModule} from '@angular/material/chips';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';
import { UserdetailComponent } from './userdetail/userdetail.component';

import { LoginmenuService } from './services/loginmenu.service';
import { AboutusService } from './services/aboutus.service';
import { MenuserviceService } from './farmer/farmerservice/menuservice.service';
import { FarmingtipserviceService } from './farmer/farmerservice/farmingtipservice.service';
import { SupplierregsiterService } from './supplier/supplierregister/supplierregsiter.service';
import { SuppliermenuService } from './supplier/supplierservice/suppliermenu.service';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ViewadvertisementComponent } from './farmer/viewadvertisement/viewadvertisement.component';
import { FarmersignupComponent } from './farmer/farmersignup/farmersignup.component';
import { SuppliersignupComponent } from './supplier/suppliersignup/suppliersignup.component';
import { AddadvertisementComponent } from './supplier/addadvertisement/addadvertisement.component';
import { SupplierhomeComponent } from './supplier/supplierhome/supplierhome.component';
import { FarmerhomeComponent } from './farmer/farmerhome/farmerhome.component';
import { FarmerloginComponent } from './farmer/farmerlogin/farmerlogin.component';
import { SupplierloginComponent } from './supplier/supplierlogin/supplierlogin.component';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdminhomeComponent } from './admin/adminhome/adminhome.component';
import { TableComponent } from './farmer/viewadvertisement/table/table.component';
import { FarmingtipsComponent } from './farmer/farmingtips/farmingtips.component';
import { AdminmenuService } from './admin/adminservice/adminmenu.service';
import { AdminregisterService } from './admin/adminregister/adminregister.service';
import { DeleteadvertisementComponent } from './supplier/deleteadvertisement/deleteadvertisement.component';
import { ViewfarmingtipsComponent } from './admin/viewfarmingtips/viewfarmingtips.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { FarmerlogoutComponent } from './farmer/farmerlogout/farmerlogout.component';
import { DialogElementsExampleDialogComponent } from './supplier/suppliersignup/dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import { CrophomeComponent } from './farmer/farmercrop/crophome/crophome.component';
import { CropsellComponent } from './farmer/farmercrop/cropsell/cropsell.component';
import { UpdatecropComponent } from './farmer/farmercrop/updatecrop/updatecrop.component';
import { CropmenuComponent } from './farmer/farmercrop/cropmenu/cropmenu.component';
import { SuppliercropmenuComponent } from './supplier/suppliercrop/suppliercropmenu/suppliercropmenu.component';
import { BuycrophomeComponent } from './supplier/suppliercrop/buycrophome/buycrophome.component';
import { BuycropComponent } from './supplier/suppliercrop/buycrop/buycrop.component';
import { BuytransactionComponent } from './supplier/suppliercrop/buytransaction/buytransaction.component';
import { AddcomplaintComponent } from './farmer/addcomplaint/addcomplaint.component';
import { ComplaintService } from './farmer/addcomplaint/complaint.service';
import { ViewcomplaintComponent } from './admin/viewcomplaint/viewcomplaint.component';
import {MatStepperModule} from '@angular/material/stepper';
import { HighlightDirective } from './directives/highlight.directive';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    UserdetailComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
  
    FarmersignupComponent,
    SuppliersignupComponent,
    AddadvertisementComponent,
    SupplierhomeComponent,
    FarmerhomeComponent,
    FarmerloginComponent,
    SupplierloginComponent,
    AdminloginComponent,
    AdminhomeComponent,
    ViewadvertisementComponent,
    TableComponent,
    FarmingtipsComponent,AdminloginComponent,AdminhomeComponent, DeleteadvertisementComponent, ViewfarmingtipsComponent, AuthorizationComponent, FarmerlogoutComponent, DialogElementsExampleDialogComponent, CrophomeComponent, CropsellComponent, UpdatecropComponent, CropmenuComponent, SuppliercropmenuComponent, BuycrophomeComponent, BuycropComponent, BuytransactionComponent, AddcomplaintComponent, ViewcomplaintComponent, HighlightDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule,
    MatFormFieldModule, 
    MatInputModule,
    MatCheckboxModule,
    AppRoutingModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatIconModule,
    MatMenuModule,
    HttpClientModule,
    MatTableModule,
    MatChipsModule,
    MatStepperModule,

    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [ LoginmenuService,AboutusService,MenuserviceService, 
    FarmingtipserviceService, AdminmenuService,AdminregisterService,
    SupplierregsiterService,SuppliermenuService,ComplaintService ],
  entryComponents: [FarmersignupComponent,FarmerloginComponent,AdminloginComponent,AddcomplaintComponent,
    SupplierloginComponent,SuppliersignupComponent,BuycropComponent,BuycrophomeComponent,BuytransactionComponent,
  ,ViewadvertisementComponent,FarmerhomeComponent, ViewfarmingtipsComponent,CrophomeComponent,CropsellComponent, UpdatecropComponent,
  FarmingtipsComponent,AdminloginComponent,AdminhomeComponent, AddadvertisementComponent,DeleteadvertisementComponent,CropmenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
