import { Component, inject, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interface';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

//dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

  public arrayProjects = signal<IProjects[]>([
   
    {
      src: 'assets/img/projects/lista-de-tarefas.png',
      alt: 'lista angular 17',
      title: 'lista angular 17',
      with: '100px',
      height: '50px',
      description: 'Uma lista de tarefas onde você pode estar adicionando tarefas, confirmando se já fés afazeres, editando o que já foi colocado ou deletando item, feito em angular 17.',
      links: [
        {
          name: 'Ir para a projeto  ',
          href: 'dd'
        },
      ],
    },
  ])

  public opnDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent,{
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
