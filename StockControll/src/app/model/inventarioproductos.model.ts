import { InventarioModel } from "./inventario.model";
import { Product } from "./product.model";

export interface InventarioproductosModel {
    id: {
      idInventario: number;
      idProducto: number;
    };
    revisado: boolean;
    inventario: {
      id: number;
      fechaCreacion: string;
      nombre: string;
    };
    producto: {
      id: number;
      name: string;
      descripcion: string;
      marca: string;
      cantidad: number;
      estado: string;
      precioBase: number;
      tipoIva: {
        id: number;
        name: string;
        percentage: number;
      };
      fechaCreacion: string;
      proveedor: {
        id: number;
        name: string;
        address: string;
        phone: string;
        email: string;
        website: string;
        observations: string;
      };
      image: string | null;
      codBarras: string;
    };
    
  }
  
