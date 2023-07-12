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

  chosenIndex: number = 0;

  onSubmit(form: NgForm) {
    this.tasks.push({ toDoTask: form.controls['toDoTask'].value, done: false });

    console.log(this.tasks);

    form.reset();
  }

  onCheck(index: number) {
    this.tasks[index].done = !this.tasks[index].done;
    console.log(this.tasks);
  }

  setIndex(index: number) {
    this.chosenIndex = index;
  }

  onDelete(index: number) {
    this.tasks.splice(index, 1);
    console.log(this.tasks);
  }

  onEdit(form: NgForm, index: number) {
    console.log(form, index);
    this.tasks[index].toDoTask = form.controls['toDoTask'].value;
    form.reset();
  }
}
