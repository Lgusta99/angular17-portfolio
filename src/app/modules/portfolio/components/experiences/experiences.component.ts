import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summery: {
        company: 'Cognizant Technology Solutions',
        strong: 'Estágio em desenvolvimento de software e QA',
        p: 'Novembro de 2021 até março 2023',
      },
      text: 'Treinamento em desenvolvimento de sistemas com Angular Participação de projetos como QA com aplicação de testes para validação do sistema',
    },
    {
      summery: {
        company: 'Proquimo Laboratório Indústria',
        strong: 'Estágio em suporte técnico (Help Desk N2)',
        p: 'Dezembro de 2020 até novembro de 2021',
      },
      text: 'Suporte interno, treinamento do sistema, criação e manutenção do servidor. Avaliação e implementação de novas tecnologias, como sistema de ponto eletrônico e servidor em nuvem.',
    },
    {
      summery: {
        company: '',
        strong: 'Suporte técnico (Help Desk N3)',
        p: 'Outubro de 2019 até dezembro de 2019',
      },
      text: 'Atendimento ao cliente, prestar suporte do sistema da empresa, aplicar treinamentos e coletar feedback de implementação do sistema para avaliação dos desenvolvedores.',
    },
    {
      summery: {
        company: '',
        strong: 'Estágio em suporte técnico (Help Desk N2)',
        p: 'Janeiro de 2019 até março de 2019',
      },
      text: 'Manutenção e reparo de softwares como aplicativos (Folha e Banco Caixa Econômica), e-mail, etc.; Manutenção de hardware nos computadores, operando ERP, cuidando da rede de internet e acesso remoto da empresa.',
    }
  ])

}
