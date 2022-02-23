import { Component, OnInit } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userForm!: FormGroup;
  listData: any;

  constructor(private fb: FormBuilder) {
    this.listData = [];
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', Validators.required],
      contact: ['', Validators.required],
    });
  }

  addItem() {
    console.log(this.userForm);
    this.listData.push(this.userForm.value);
    this.userForm.reset();
  }

  reset() {
    this.userForm.reset();
  }

  removeItem(element: any) {
    console.log(this.listData);
    console.log(element);
    this.listData.splice(element, 1);
    // this.listData.array.forEach((value: any, index: any) => {
    //   if (value == element) this.listData.splice(index, 1);
    // });
  }

  myimage:string = "assets/images/photo.jpg";
}
