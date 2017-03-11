//system
import {InMemoryDbService} from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb(): any {
    let heroes: any = [
      {id: 11, name: 'Mr. Nice', abilities: [{type: 'Mental', ability: 'Mind Control'}]},
      {id: 12, name: 'Narco', abilities: [{type: 'Regeneration', ability: 'Healing'}]},
      {id: 13, name: 'Bombasto', abilities: [{type: 'Magic', ability: 'Shape Changing'}]},
      {id: 14, name: 'Celeritas', abilities: [{type: 'Physical', ability: 'Steal Body'}]},
      {id: 15, name: 'Magneta', abilities: [{type: 'Magic', ability: 'Thunder Blot'}]},
      {id: 16, name: 'RubberMan', abilities: [{type: 'Physical', ability: 'Gun Master'}]},
      {id: 17, name: 'Dynama', abilities: [{type: 'Mental', ability: 'Tele-Communication'}]},
      {id: 18, name: 'Dr IQ', abilities: [{type: 'Physical', ability: 'Weapon Master'}]},
      {id: 19, name: 'Magma', abilities: [{type: 'Magic', ability: 'Illusion'}]},
      {id: 20, name: 'Tornado', abilities: [{type: 'Regeneration', ability: 'Self Regeneration'}]}
    ];
    return {heroes};
  }
}
