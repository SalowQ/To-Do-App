import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass'],
})
export class HomeComponent {
  isSubmited: any;
  // onSubmit(form: NgForm) {
  //   this.tasks.push({ toDoTask: form.controls['toDoTask'].value, done: false });
  //   console.log(this.tasks);
  //   form.reset();
  // }
  // onCheck(index: number) {
  //   this.tasks[index].done = !this.tasks[index].done;
  //   console.log(this.tasks);
  // }
  // setIndex(index: number) {
  //   this.chosenIndex = index;
  // }
  // onDelete(index: number) {
  //   this.tasks.splice(index, 1);
  //   console.log(this.tasks);
  // }
  // onEdit(form: NgForm, index: number) {
  //   console.log(form, index);
  //   this.tasks[index].toDoTask = form.controls['toDoTask'].value;
  //   form.reset();
  // }

  attList(emitedItem: any) {
    this.isSubmited = emitedItem;
    console.log('item emitido:' + this.isSubmited);
  }
}
