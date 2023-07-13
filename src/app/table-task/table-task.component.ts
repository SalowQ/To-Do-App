import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';
import { Task } from '../task';

@Component({
  selector: 'app-table-task',
  templateUrl: './table-task.component.html',
  styleUrls: ['./table-task.component.sass'],
})
export class TableTaskComponent implements OnChanges {
  @Input() submit = '';

  tasks: Task[] = [];

  chosenIndex: number = 0;

  constructor(private service: TaskService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['submit']) {
      this.service.list().subscribe((tasks) => {
        this.tasks = tasks;
      });
    }
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
