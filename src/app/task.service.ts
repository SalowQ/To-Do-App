import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly API = 'http://localhost:3000/tasks';
  constructor(private http: HttpClient) {}

  list(): Observable<Task[]> {
    return this.http.get<Task[]>(this.API);
  }

  create(task: Task): Observable<Task> {
    return this.http.post<Task>(this.API, task);
  }

  edit(task: Task): Observable<Task> {
    const url = `${this.API}/${task.id}`;
    return this.http.put<Task>(url, task);
  }

  delete(task: Task): Observable<Task> {
    const url = `${this.API}/${task.id}`;
    return this.http.delete<Task>(url);
  }
}
