//system
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() : any {
        let heroes : any = [
            { id: 11, name: 'Mr. Nice', abilityType: 'Mental' },
            { id: 12, name: 'Narco', abilityType: 'Regeneration' },
            { id: 13, name: 'Bombasto', abilityType: 'Magic' },
            { id: 14, name: 'Celeritas', abilityType: 'Physical' },
            { id: 15, name: 'Magneta', abilityType: 'Mental' },
            { id: 16, name: 'RubberMan', abilityType: 'Physical' },
            { id: 17, name: 'Dynama', abilityType: 'Mental' },
            { id: 18, name: 'Dr IQ', abilityType: 'Physical' },
            { id: 19, name: 'Magma', abilityType: 'Magic' },
            { id: 20, name: 'Tornado', abilityType: 'Regeneration' }
        ];
        return {heroes};
    }
}
