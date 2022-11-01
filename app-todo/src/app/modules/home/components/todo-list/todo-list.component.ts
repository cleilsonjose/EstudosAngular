import { Component, DoCheck, OnInit } from '@angular/core';
import { first, last } from 'rxjs';
import { TaskList } from '../../model/task-list';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck {

  public taskList: Array<TaskList> = [];

  constructor() {
    //
  }

  ngDoCheck(){
    this.taskList.sort((first, last) => Number(first.checked) - Number(last.checked))
  }


  public deleteItemTaskList(event: number){
    this.taskList.splice(event, 1);
  }

  public deleteAllTaskList(){
    this.taskList = [];
  }

  public setEmitTaskList(event: string){
    this.taskList.push({ task: event, checked: false});
  }

  public validationInput(event: string, index: number){

    if(!event.length){
      const confirm = window.confirm("Task está vazia, deseja Deletar?");
      if(confirm){
        this.deleteItemTaskList(index);
      }
    }
  }

}
