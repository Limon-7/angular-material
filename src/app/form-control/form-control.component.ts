import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
export interface Colours {
  id: number;
  name: string;
}
@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.css']
})
export class FormControlComponent implements OnInit {
  isChecked = false;
  seasons: string[] = ['winter', 'Spring', 'Summer', 'Autumn', 'Louisiana',
    'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi'];
  favoriteSeason: any;
  colors: Colours[] = [
    { id: 1, name: 'Red' },
    { id: 2, name: 'Yellow' },
    { id: 3, name: 'Blue' },
    { id: 4, name: 'Green' }
  ];
  selectedColour: string;
  colourControl = new FormControl('', [Validators.required]);
  selectColourControl = new FormControl('', Validators.required);
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
  constructor() { }

  ngOnInit() {
  }
  onChanges($event) {
    console.log($event);
  }

}
