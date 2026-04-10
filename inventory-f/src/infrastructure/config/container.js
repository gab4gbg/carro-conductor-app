import ApiCarroRepository from "../repositories/ApiCarroRepository.js";
import ApiConductorRepository from "../repositories/ApiConductorRepository.js";
import CreateCarro        from "../../application/usecases/CreateCarro.js";
import GetAllCarros       from "../../application/usecases/GetAllCarros.js";
import DeleteCarro        from "../../application/usecases/DeleteCarro.js";
import CreateConductor        from "../../application/usecases/CreateConductor.js";
import GetAllConductores      from "../../application/usecases/GetAllConductores.js";
import DeleteConductor        from "../../application/usecases/DeleteConductor.js";

const carroRepository = new ApiCarroRepository();
const conductorRepository = new ApiConductorRepository();

export const createCarro  = new CreateCarro(carroRepository);
export const getAllCarros  = new GetAllCarros(carroRepository);
export const deleteCarro  = new DeleteCarro(carroRepository);

export const createConductor  = new CreateConductor(conductorRepository);
export const getAllConductores = new GetAllConductores(conductorRepository);
export const deleteConductor  = new DeleteConductor(conductorRepository);
