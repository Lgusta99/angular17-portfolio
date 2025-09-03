import { Component, signal } from '@angular/core';

//interface
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone html5',
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone css3',
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone javascript',
    },
    {
      src: 'assets/icons/knowledge/nodejs.svg',
      alt: 'Icone nodejs',
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone angular',
    },
    {
      src: 'assets/icons/knowledge/Nx.svg',
      alt: 'Icone Nx',
    },
    {
      src: 'assets/icons/knowledge/python.svg',
      alt: 'Icone python',
    }
  ])

}
