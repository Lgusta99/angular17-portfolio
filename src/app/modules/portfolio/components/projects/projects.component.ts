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
      src: 'assets/img/projects/vfull.png',
      alt: 'Projeto vida FullStack',
      title: 'vida FullStack',
      with: '100px',
      height: '50px',
      description: 'colocar erfgvejrthgnjaerni;ujgvnbu;akshldfhjkvbarldfugbvjkndvl;askjhUIOGHFRUIQEBAJKLFVNIOQERTHJAIONMFVROPJQWAIOGHNJKLNMDWFNGWERNG LRENJ;KWTHGNK QWEGRTHGRTQH WERTHRTYHNBWRSFGHJRY JEWSRGH ETYUEIKDJSTYRJ ETYDEJAHSRTYUHJET YUIJ',
      links: [
        {
          name: 'Conheça o blog',
          href: 'https://vidafullstack.com.br'
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
