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
      alt: 'Lista Angular 17',
      title: 'Lista Angular 17',
      with: '100px',
      height: '50px',
      description: 'Uma lista de tarefas onde você pode estar adicionando tarefas, confirmando se já fés afazeres, editando o que já foi colocado ou deletando item, feito em angular 17.',
      links: [
        {
          name: 'Ir para a projeto  ',
          href: 'https://angular17-todo-list.vercel.app/'
        },
      ],
    },
    {
      src: 'assets/icons/knowledge/Nx.svg',
      alt: 'Champion Finder',
      title: 'Champion Finder',
      with: '100px',
      height: '50px',
      description: 'Criei este projeto com o objetivo de explorar e demonstrar o uso do NX, estruturando um monorepo e aplicando micro-frontends para desenvolver dois projetos distintos dentro de um único repositório. A ideia é mostrar como diferentes equipes podem colaborar no mesmo ambiente, utilizando linguagens e tecnologias variadas, além de reaproveitar funcionalidades entre projetos, otimizando tempo e esforço no desenvolvimento, e integrando tudo para rodar de forma unificada.',
      links: [
        {
          name: 'Ir para a projeto  ',
          href: 'https://champion-finder-shell.vercel.app/lol'
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
