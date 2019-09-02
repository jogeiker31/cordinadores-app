import { AppComponent } from 'src/app/app.component';
import { HorarioComponent } from 'src/app/Components/horario/horario.component';
import { SidenavContentComponent } from 'src/app/Components/sidenav-content/sidenav-content.component';
import { InicioComponent } from 'src/app/Components/inicio/inicio.component';
import { ProfesoresComponent } from 'src/app/Components/profesores/profesores.component';
import { AsignarMateriaComponent } from 'src/app/Components/dialog/asignar-materia/asignar-materia.component';

export const components = [AppComponent,
    HorarioComponent,
    SidenavContentComponent,
    InicioComponent,
    ProfesoresComponent,
    AsignarMateriaComponent,
    ]

export const dialogs = [AsignarMateriaComponent]