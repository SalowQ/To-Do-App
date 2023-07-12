import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  tasks = [
    { toDoTask: 'buy oranges', done: false },
    { toDoTask: 'wash clothes', done: false },
  ];

  onSubmit(form: NgForm) {
    this.tasks.push({ toDoTask: form.controls['toDoTask'].value, done: false });

    console.log(this.tasks);

    form.reset();
  }
}
