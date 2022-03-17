import { Router } from "express";
import { CreateDeveloperController } from "./modules/developer/useCases/createDeveloper/CreateDeveloperController";
import { DeleteDeveloperController } from "./modules/developer/useCases/deleteDeveloper/DeleteDeveloperController";
import { ShowDeveloperController } from "./modules/developer/useCases/showDeveloper/ShowDeveloperController";
import { UpdateDeveloperController } from "./modules/developer/useCases/updateDeveloper/UpdateDeveloperController";



const showDeveloperController =  new ShowDeveloperController();
const createDeveloperController  = new CreateDeveloperController();
const updateDeveloperController = new UpdateDeveloperController();
const deleteDeveloperController = new DeleteDeveloperController();

const routes = Router();

routes.get('/developers/:id?', showDeveloperController.handle);
routes.post('/developers/', createDeveloperController.handle);
routes.put('/developers/:id', updateDeveloperController.handle);
routes.delete('/developers/:id', deleteDeveloperController.handle);


export { routes }