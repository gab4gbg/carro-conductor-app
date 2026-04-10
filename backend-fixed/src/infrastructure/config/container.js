import MongoCarroRepository  from "../repositories/MongoCarroRepository.js";
import MongoConductorRepository  from "../repositories/MongoConductorRepository.js";
import CreateCarro           from "../../application/usecases/CreateCarro.js";
import GetAllCarros          from "../../application/usecases/GetAllCarros.js";
import DeleteCarro           from "../../application/usecases/DeleteCarro.js";
import CreateConductor           from "../../application/usecases/CreateConductor.js";
import GetAllConductores         from "../../application/usecases/GetAllConductores.js";
import DeleteConductor           from "../../application/usecases/DeleteConductor.js";
import CarroController       from "../controllers/CarroController.js";
import ConductorController       from "../controllers/ConductorController.js";

// 1. Repositorios
const carroRepository = new MongoCarroRepository();
const conductorRepository = new MongoConductorRepository();

// 2. Use cases
const createCarro  = new CreateCarro(carroRepository);
const getAllCarros  = new GetAllCarros(carroRepository);
const deleteCarro  = new DeleteCarro(carroRepository); 

const createConductor  = new CreateConductor(conductorRepository);
const getAllConductores = new GetAllConductores(conductorRepository);
const deleteConductor  = new DeleteConductor(conductorRepository);

// 3. Controllers
const carroController = new CarroController({ createCarro, getAllCarros, deleteCarro });
const conductorController = new ConductorController({ createConductor, getAllConductores, deleteConductor });

export { carroController, conductorController };
