import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule}from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MenuComponent } from './menu/menu.component';
import { AcercademiinfobasicaComponent } from './acercademiinfobasica/acercademiinfobasica.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { SkillsComponent } from './skills/skills.component';
import { ExperiencialaboralComponent } from './experiencialaboral/experiencialaboral.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { IndexComponent } from './index/index.component';
import { NavbardashboardComponent } from './navbardashboard/navbardashboard.component';
import { LogindashboardComponent } from './logindashboard/logindashboard.component';
import { BotonlogautComponent } from './botonlogautdashboard/botonlogaut.component';
import { LoginbotonComponent } from './loginboton/loginboton.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { NavbarproyectosComponent } from './navbarproyectos/navbarproyectos.component';
import { ModalproyectosComponent } from './modalproyectos/modalproyectos.component';
import { MainproyectosComponent } from './mainproyectos/mainproyectos.component';
import { TrabajosproyectosComponent } from './trabajosproyectos/trabajosproyectos.component';
import { FooterproyectosComponent } from './footerproyectos/footerproyectos.component';
import { MaindashboardComponent } from './maindashboard/maindashboard.component';
import { RedesdashboardComponent } from './modalesdashboard/redesdashboard/redesdashboard.component';
import { PerfildashboardComponent } from './modalesdashboard/perfildashboard/perfildashboard.component';
import { AcercademidashboardComponent } from './modalesdashboard/acercademidashboard/acercademidashboard.component';
import { InfobasicadashboardComponent } from './modalesdashboard/infobasicadashboard/infobasicadashboard.component';
import { EducaciondashboardComponent } from './modalesdashboard/educaciondashboard/educaciondashboard.component';
import { SkilldashboardComponent } from './modalesdashboard/skilldashboard/skilldashboard.component';
import { ExperienciadashboardComponent } from './modalesdashboard/experienciadashboard/experienciadashboard.component';
import { FooterdashboardComponent } from './modalesdashboard/footerdashboard/footerdashboard.component';
import { ProyectosrealizadosdashboardComponent } from './modalesdashboard/proyectosrealizadosdashboard/proyectosrealizadosdashboard.component';
import { FormulariocontactoComponent } from './formulariocontacto/formulariocontacto.component';
import { SaludoproyectosdashboardComponent } from './modalesdashboard/saludoproyectosdashboard/saludoproyectosdashboard.component';
import { Pagina404Component } from './pagina404/pagina404.component';
import { BannerComponent } from './banner/banner.component';
import { BannerdashboardComponent } from './modalesdashboard/bannerdashboard/bannerdashboard.component';




@NgModule({
  
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    PerfilComponent,
    MenuComponent,
    AcercademiinfobasicaComponent,
    EstudiosComponent,
    SkillsComponent,
    ExperiencialaboralComponent,
    PortfolioComponent,
    FooterComponent,
    DashboardComponent,
    IndexComponent,
    NavbardashboardComponent,
    LogindashboardComponent,
    BotonlogautComponent,
    LoginbotonComponent,
    ProyectosComponent,
    NavbarproyectosComponent,
    ModalproyectosComponent,
    MainproyectosComponent,
    TrabajosproyectosComponent,
    FooterproyectosComponent,
    MaindashboardComponent,
    RedesdashboardComponent,
    PerfildashboardComponent,
    AcercademidashboardComponent,
    InfobasicadashboardComponent,
    EducaciondashboardComponent,
    SkilldashboardComponent,
    ExperienciadashboardComponent,
    FooterdashboardComponent,
    ProyectosrealizadosdashboardComponent,
    FormulariocontactoComponent,
    SaludoproyectosdashboardComponent,
    Pagina404Component,
    BannerComponent,
    BannerdashboardComponent,
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
