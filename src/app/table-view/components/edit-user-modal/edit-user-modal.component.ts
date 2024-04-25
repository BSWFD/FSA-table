import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface DialogData {
  user: User;
}

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss'],
})
export class EditUserModalComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private dialogRef: MatDialogRef<EditUserModalComponent>
  ) {}

  form: FormGroup = new FormGroup({
    name: new FormControl(),
    email: new FormControl(),
    city: new FormControl(),
  });

  ngOnInit(): void {
    if (!this.data.user) return;

    const {
      name,
      email,
      address: { city },
    } = this.data.user;

    this.form.setValue({ name, email, city });
  }

  handleSubmit(): void {
    if (!this.data.user) return;

    const { user } = this.data;
    this.dialogRef.close({ ...user, ...this.form.value });
  }
}
