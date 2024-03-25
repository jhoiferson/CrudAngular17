import { Component } from '@angular/core';
import { CursosInterfaces } from '../../../../shared/models/cursosInterfaces';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

dataCursos: CursosInterfaces[]=[
    {id:1, nombreCurso:'matematicas', creditos:4},
    {id:2, nombreCurso:'lengua', creditos:2},
    {id:3, nombreCurso:'quimica', creditos:4},
    {id:4, nombreCurso:'calculo', creditos:5},
    {id:5, nombreCurso:'programacion', creditos:6},
]


}
