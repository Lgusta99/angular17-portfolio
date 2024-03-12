import { Component, Inject, OnInit, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

//injetor
import { IProjects } from '../../../interface/IProjects.interface';


@Component({
  selector: 'app-dialog-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './dialog-projects.component.html',
  styleUrl: './dialog-projects.component.scss'
})
export class DialogProjectsComponent implements OnInit {

  constructor(
    private _dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) private _data: IProjects
    ) {}

  public getData = signal<IProjects | null>(null)

  ngOnInit(): void {
      this.getData.set(this._data);
  }

  public closeModel(){
    return this._dialogRef.close();
  }

}
