import { extendObservable } from 'mobx';

class TiendaController{
    constructor(){
        extendObservable(this, 
            {
                platillos: [
                    {nombre: 'primerPlatillo',
                     descripcion: 'platillo muy rico',
                     precio: 100,
                     cantidad: 0},
                     {nombre: 'segundoPlatillo',
                      descripcion: 'platillo muy rico',
                      precio: 150,
                      cantidad: 0},
                    {nombre: 'tercerPlatillo',
                     descripcion: 'platillo muy rico',
                     precio: 200,
                     cantidad: 0}],
                bebidas: [
                    {nombre: 'primerBebida',
                     descripcion: 'bebida muy rica',
                     precio: 20,
                     cantidad: 0},
                     {nombre: 'segundaBebida',
                      descripcion: 'Bebida muy rica',
                      precio: 30,
                      cantidad: 0},
                     {nombre: 'tercerBebida',
                      descripcion: 'bebida muy rica',
                      precio: 40,
                      cantidad: 0}
                ]
            });
    }
    ponerEnLaOrden(indicePlatillo, cantidad){
        this.platillos.forEach(
            (value, index)=>{
                if(indicePlatillo === index){
                   this.platillos[index].cantidad = cantidad;
                }
            }
        )
    }
    bebidasEnLaOrden(indiceBebida, cantidad){
        this.bebidas.forEach(
            (value, index)=>{
                if(indiceBebida === index){
                   this.bebidas[index].cantidad = cantidad;
                }
            }
        )
    }
}
var VarTiendaController = new TiendaController;
export default VarTiendaController;