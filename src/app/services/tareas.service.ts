import { Injectable } from '@angular/core';

export interface Tarea {
  titulo: string;
  descripcion: string;
}

@Injectable({ providedIn: 'root' })
export class TareasService {
  tareas: Tarea[] = [];

  agregar(tarea: Tarea) {
    this.tareas.push(tarea);
  }

  editar(index: number, tarea: Tarea) {
    this.tareas[index] = tarea;
  }

  eliminar(index: number) {
    this.tareas.splice(index, 1);
  }
}
