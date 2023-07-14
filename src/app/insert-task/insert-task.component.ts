import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-insert-task',
  templateUrl: './insert-task.component.html',
  styleUrls: ['./insert-task.component.sass'],
})
export class InsertTaskComponent {
  @Output() submit = new EventEmitter<number>();
  task?: Task;
  uniqueId: number = 0;

  constructor(private service: TaskService) {}

  onSubmit(form: NgForm) {
    this.task = {
      id: this.uniqueId,
      toDoTask: form.controls['toDoTask'].value,
      done: false,
    };

    this.service.create(this.task).subscribe(() => {
      form.reset();
    });
  }

  emit() {
    this.submit.emit(this.uniqueId);
  }
}
