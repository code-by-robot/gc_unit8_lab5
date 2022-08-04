import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToDo } from './to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';

  sampleItems: ToDo[] = [
    {
      task:"Take out trash",
      completed: false
    },
    {
      task:"Sweep kitchen",
      completed: true
    }
  ];

  CompleteTask(ToDo:ToDo){
    ToDo.completed = (ToDo.completed == true) ? false: true;
  }

  addItem(form:NgForm):void{
    let newItem:ToDo={
      task: form.form.value.task,
      completed: false
    }
    this.sampleItems.push(newItem);
  }
}
