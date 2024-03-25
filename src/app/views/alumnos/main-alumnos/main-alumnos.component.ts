import { Component } from '@angular/core';
import { CursosComponent } from '../pages/cursos/cursos.component';

@Component({
  selector: 'app-main-alumnos',
  standalone: true,
  imports: [CursosComponent],
  templateUrl: './main-alumnos.component.html',
  styleUrl: './main-alumnos.component.css'
})
export class MainAlumnosComponent {

}
