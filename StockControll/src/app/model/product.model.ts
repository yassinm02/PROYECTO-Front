import { Provider } from "./provider.model";
import { TaxType } from "./taxType.model";

export interface Product {
    id : number; 
    name : string;
    descripcion : string; 
    marca : string; 
    cantidad : number; 
    estado : string; 
    precioBase : number;
    tipoIva  : TaxType; 
    fechaCreacion: Date; 
    proveedor  : Provider; 
    imagen : string ; 
    codBarras : string;
}



