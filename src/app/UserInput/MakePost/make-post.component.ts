import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { getBlacklistCategories } from '../../Dependencies/common-categories.function'
import { getCommonCategories } from '../../Dependencies/common-categories.function'
import { getStatesAndAbbreviations } from '../../Dependencies/locations-functions.function'


@Component({
  selector: 'make-post-input',
  templateUrl: './make-post.component.html',
  styleUrls: ['./make-post.component.css']
})
export class MakePostComponent {
  @Input() profileID: number; // Categories to filter out
  @Input() profileName: string;
  @Output() createPostSignal = new EventEmitter<string>();
  @Output() cancelSignal = new EventEmitter<boolean>();
  @ViewChild(NgForm) form;

  addCategoryVis = false;
  categories: Array<string>;
  description: string;
  stateOptions: any;
  title: string;


  ngOnInit () {
    this.categories = [];
    this.stateOptions = getStatesAndAbbreviations();
  }
  addCategory(category: string): void {
    this.categories.push(category);
    this.closeAddCategory(); // close add category dialogue
  }
  cancel(): void {
    this.cancelSignal.next(true); // Tells the parent element that the addCategory action has been cancelled
    this.reset(); // Resets the form and updates categories
  }

  closeAddCategory(): void { // Closes the "add category dialogue"
      this.addCategoryVis = false;
  }

  reset(): void {

  }

}
