import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { getBlacklistCategories } from '../../Dependencies/common-categories.function'
import { getCommonCategories } from '../../Dependencies/common-categories.function'


@Component({
  selector: 'add-category-input',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  @Input() filterCategories: Array<string>; // Categories to filter out
  @Output() categoryAddSignal = new EventEmitter<string>();
  @Output() cancelAddSignal = new EventEmitter<boolean>();

  @ViewChild(NgForm) form;

  category: String;
  otherCategory: String;
  categoriesToList: Array<String>; // Categories to form

  ngOnInit () {
    this.updateListCategories();
  }

  addCategory(): void {
    var isFormValid = this.form.valid; // Stored in a variable for debugging purposes
    if (isFormValid) {
      var addCategory;
      if (this.category == "Other") { // The "other" option is selected
        addCategory = this.otherCategory;
      } else {
        addCategory = this.category;
      }
      this.categoryAddSignal.next(addCategory); // Tells the parent element that the user wants to add this category
      this.reset(); // Resets the form and udpates categories
    }
  }
  cancel(): void {
    this.cancelAddSignal.next(true); // Tells the parent element that the addCategory action has been cancelled
    this.reset(); // Resets the form and updates categories
  }
  reset(): void {
    this.updateListCategories();
    this.otherCategory = "";
    this.category = this.categoriesToList[0];
  }
  updateListCategories (): void { // Updates the category options. Could be because the filter categories changed
    this.categoriesToList = getCommonCategories(this.filterCategories);
  }


}
