import { Component, Input, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent implements OnInit, OnDestroy {
  @Input() autocomplete = false;
  @Input() select = false;
  @Input() checkbox = false;
  @Input() data: string[];
  @Input() isDisabled: boolean;
  public initialData: string[];
  public isHovered = false;
  public isSelected = false;
  public currentValue: string | string[];

  constructor() {}

  ngOnInit() {
    if (this.checkbox) {
      this.currentValue = [];
    } else {
      this.currentValue = '';
    }
    this.initialData = Object.assign([], this.data);
    document.body.addEventListener('click', this.bodyClickHandler.bind(this));
  }
  ngOnDestroy(): void {
    document.body.removeEventListener('click', this.bodyClickHandler.bind(this));
  }
  private bodyClickHandler(event): void {
    const target: HTMLElement = event.target;
    if (target.tagName === 'BODY') {
      this.isSelected = false;
    }
  }
  public mouseEnterHandler(): void {
    if (!this.isDisabled) { this.isHovered = true; }
  }
  public mouseLeaveHandler(): void {
    if (!this.isDisabled) { this.isHovered = false; }
  }
  public toggleDropDown(value?: boolean, item?: string): void {
    if (!this.isDisabled) {
      if (value === false || value === true) {
        this.isSelected = value;
      } else {
        if (this.isSelected === false && this.autocomplete) { this.currentValue = ''; }
        this.isSelected = !this.isSelected;
      }
      if (item) {
        if (this.checkbox && typeof this.currentValue !== 'string') {
          if (this.currentValue.includes(item)) {
            this.currentValue.splice(this.currentValue.indexOf(item), 1);
          } else {
            this.currentValue.push(item);
          }
        } else {
          this.currentValue = item;
        }
      } else if (item === null) {
        if (this.checkbox) {
          this.currentValue = [];
        } else {
          this.currentValue = '';
        }
      }
    }
  }
  public inputHandler(e): void {
    this.currentValue = e.target.value;
  }
  public resetCurrentValue(): void {
    if (this.autocomplete) {
      this.currentValue = '';
      this.toggleDropDown(true);
    }
  }
}
