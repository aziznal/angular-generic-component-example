import { Component, Input } from '@angular/core';

export type DropdownOption<T> = {
  title: string;
  value: T;
}

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent<T> {
  @Input()
  value!: DropdownOption<T>;

  @Input()
  options!: DropdownOption<T>[];
}
