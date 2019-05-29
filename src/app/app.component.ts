import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public autocompleteDropDownData = ['AB', 'ABC', 'ABCD', 'ABCDE', 'ABCDEF', 'SDFDC', 'LCCDC', 'EREOR', 'E', 'ASQWE', 'PEROE', 'BVNDNS', 'TEUIE'];
  public selectDropDownData = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO'];
  public checkboxLabel = 'whole div is a selector, not only the icon on the left';
}
