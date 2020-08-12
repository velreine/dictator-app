import * as uuid from 'uuid';

export class Dictator {

    public uuid: string = null;

    public firstName: string = null;
    public lastName: string = null;
    public birthYear: number = null;
    public deathYear: number = null;
    public description: string = null;

    constructor(firstName: string, lastName: string, birthYear: number, deathYear: number, description: string) {

        this.uuid = uuid.v4();
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.deathYear = deathYear;
        this.description = description;
    }

    
}
