import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Client } from 'src/app/interfaces/client.interface';
@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent {

  client!: Client;

  type :string = 'Client'

  constructor(
    public dialogRef: MatDialogRef<EditClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.client = data.data;
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSave(): void {
    // Implement logic to save the changes made to the product
    this.dialogRef.close();
  }
}
