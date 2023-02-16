import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo-add-section',
  templateUrl: './todo-add-section.component.html',
  styleUrls: ['./todo-add-section.component.css']
})
export class TodoAddSectionComponent {
  @Output()
  onAddNewSelection = new EventEmitter()

  newSectionName:string
  newSectionDescription:string
  newSelectionInfo:string[]=[]

  CrateNewSelection():void{
    if(this.newSectionName.trim() && this.newSectionDescription.trim()){
    this.newSelectionInfo.push(this.newSectionDescription,this.newSectionName.toLowerCase())
    this.onAddNewSelection.emit(this.newSelectionInfo)
    }
  }
}
