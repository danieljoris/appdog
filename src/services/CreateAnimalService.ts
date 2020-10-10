import { getRepository } from 'typeorm';
import Animal, { Species } from '../models/Animal';

interface Request {
    name: string;
    size: string;
    sex: string;
    isCastrated: boolean;
    approximateAge: number;
    specie: Species.Dog | Species.Cat ;
}

class CreateAnimalService {
    public async execute({name, size, sex, isCastrated, approximateAge, specie}: Request): Promise<Animal> {
        
        const animalRepository = getRepository(Animal);
        
        const animal = animalRepository.create({
            name, 
            size, 
            sex, 
            isCastrated, 
            approximateAge, 
            specie
        });

        await animalRepository.save(animal);

        return animal;
    }
}

export default CreateAnimalService;