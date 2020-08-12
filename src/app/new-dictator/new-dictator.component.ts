import { Component, OnInit } from '@angular/core';

import { Dictator } from '../dictator';


@Component({
  selector: 'app-new-dictator',
  templateUrl: './new-dictator.component.html',
  styleUrls: ['./new-dictator.component.css']
})
export class NewDictatorComponent implements OnInit {

  public firstName: string = 'Adolf';
  public lastName: string = 'Hitler';
  public birthYear: number = 1889;
  public deathYear: number = 1945;
  public description: string = 'Leader of the previous German Nazi Empire.';


  public Dictators: Dictator[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  private clearFields() {
    this.firstName = null;
    this.lastName = null;
    this.birthYear = null;
    this.deathYear = null;
    this.description = null;
  }

  public removeDictator(uuid: string) {

    // Remove dictator by UUID.
    this.Dictators.splice(this.Dictators.findIndex(dict => {
      dict.uuid === uuid;
    }), 1);


  }

  onLoginSubmit() {
    let newDictator = new Dictator(this.firstName, this.lastName,
      this.birthYear, this.deathYear, this.description);

    console.log('New dictator: ');
    console.log(newDictator);

    this.Dictators.push(newDictator);
    //this.clearFields();

    //console.table([this.username, this.password]);
  }

}
