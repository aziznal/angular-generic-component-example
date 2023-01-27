import { DropdownOption } from './components/dropdown/dropdown.component';
import { Component } from '@angular/core';

type MyCustomType = { name: string, value: number };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentOption: MyCustomType = { name: 'foo', value: 42};

  options: MyCustomType[] = [
    {
      name: 'foo',
      value: 42,
    },
    {
      name: 'bar',
      value: 13,
    },
  ]

  get valueAsDropdownItem(): DropdownOption<MyCustomType> {
    return this.toDropdownOption(this.currentOption);
  }

  get optionsAsDropdownItems(): DropdownOption<MyCustomType>[] {
    return this.options.map(option => this.toDropdownOption(option));
  }

  toDropdownOption(item: MyCustomType): DropdownOption<MyCustomType> {
    return {
      title: item.name,
      value: item,
    }
  }
}
