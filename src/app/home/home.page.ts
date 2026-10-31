import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton } from '@ionic/angular';
import { TareasService } from '../services/tareas.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [RouterLink, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonButton],
})
export class HomePage {
  tareasService = inject(TareasService);
}
