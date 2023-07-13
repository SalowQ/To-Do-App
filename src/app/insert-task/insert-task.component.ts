import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task';
import { Router } from '@angular/router';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-insert-task',
  templateUrl: './insert-task.component.html',
  styleUrls: ['./insert-task.component.sass'],
})
export class InsertTaskComponent implements OnInit {
  @Output() submit = new EventEmitter<number>();
  task?: Task;
  index: number = 0;

  constructor(private service: TaskService, private router: Router) {}

  ngOnInit(): void {
    this.service.list().subscribe((tasks) => {
      this.index = tasks.length;
      console.log(this.index);
    });
  }

  onSubmit(form: NgForm) {
    this.task = {
      id: this.index + 1,
      toDoTask: form.controls['toDoTask'].value,
      done: false,
    };

    this.service.create(this.task).subscribe(() => {
      form.reset();
    });
  }

  emit() {
    this.submit.emit(this.index);
  }
}
