import { Router } from 'express';
import { getRepository } from 'typeorm';

import Animal from '../models/Animal';
import CreateAnimalService from '../services/CreateAnimalService';

const animalsRouter = Router();

animalsRouter.get('/', async (request, response) => {
    // listar todos os animais 
    const animalsRepository = getRepository(Animal)

    const animals = await animalsRepository.find();

    return response.json(animals);
});

animalsRouter.post('/', async (request, response) => {
    // cadastra um animal

    try {
        const { name, size, sex, isCastrated, approximateAge, specie } = request.body;

        const createAnimal = new CreateAnimalService();

        const animal = await createAnimal.execute({
        name, 
        size, 
        sex, 
        isCastrated, 
        approximateAge, 
        specie
        });
    
        return response.json(animal);
    } 
    catch (error) {
        console.log(error)
    }
});

export default animalsRouter;
