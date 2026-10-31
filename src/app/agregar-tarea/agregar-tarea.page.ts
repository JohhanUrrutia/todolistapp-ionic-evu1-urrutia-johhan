import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonItem, IonInput, IonButton, NavController } from '@ionic/angular';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-agregar-tarea',
  templateUrl: 'agregar-tarea.page.html',
  styleUrls: ['agregar-tarea.page.scss'],
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonBackButton, IonItem, IonInput, IonButton],
})
export class AgregarTareaPage implements OnInit {
  tareasService = inject(TareasService);
  route = inject(ActivatedRoute);
  navCtrl = inject(NavController);
  index: number | null = null;
  titulo = '';
  descripcion = '';

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('index');
    if (param !== null) {
      this.index = Number(param);
      const tarea = this.tareasService.tareas[this.index];
      this.titulo = tarea.titulo;
      this.descripcion = tarea.descripcion;
    }
  }

  guardar() {
    if (!this.titulo.trim()) {
      return;
    }
    if (this.index !== null) {
      this.tareasService.editar(this.index, { titulo: this.titulo, descripcion: this.descripcion });
    } else {
      this.tareasService.agregar({ titulo: this.titulo, descripcion: this.descripcion });
    }
    this.titulo = '';
    this.descripcion = '';
    this.navCtrl.navigateBack('/home');
  }
}
