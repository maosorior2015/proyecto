import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DatperComponent } from './datper/datper.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule,Routes } from '@angular/router';
import { AntecedentesComponent } from './antecedentes/antecedentes.component';
import { GeneralComponent } from './general/general.component';
import { DiagnosticoComponent } from './diagnostico/diagnostico.component';
import { ListaComponent } from './lista/lista.component';
import { PronosticoComponent } from './pronostico/pronostico.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { AdjuntarComponent } from './adjuntar/adjuntar.component';
import { EvotraComponent } from './evotra/evotra.component';
import { LisevotraComponent } from './lisevotra/lisevotra.component';


const routes:Routes=[
  {path :'',redirectTo:'ficha', pathMatch:'full'},
  {path :'datper',component:DatperComponent},
  {path :'antecedentes',component:AntecedentesComponent},
  {path :'general',component:GeneralComponent},
  {path :'diagnostico',component:DiagnosticoComponent},
  {path :'pronostico',component:PronosticoComponent},
  {path :'presupuesto',component:PresupuestoComponent},
  {path :'adjuntar',component:AdjuntarComponent},
  {path :'lista',component:ListaComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    DatperComponent,
    FooterComponent,
    HeaderComponent,
    AntecedentesComponent,
    GeneralComponent,
    DiagnosticoComponent,
    ListaComponent,
    PronosticoComponent,
    PresupuestoComponent,
    AdjuntarComponent,
    EvotraComponent,
    LisevotraComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
