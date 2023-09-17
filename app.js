const bici= require('./datosBici.js');


const dhBici={
    bicicletas: bici,

    buscarBici: function (id) {
        const encontrada= this.bicicletas.filter(bici=> bici.id===id)
        return encontrada.length>0?encontrada[0]:null;
    },

    venderBici: function (id) {
        const vender= this.buscarBici(id);
        if (vender) {
           vender.vendida=true;
           return vender
        }
        else{
            return 'Bicicleta no encontrada';}
        
    }
     

};

console.log(dhBici.venderBici(1111111111));

