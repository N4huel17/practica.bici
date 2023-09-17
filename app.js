const bici= require('./datosBici.js');


const dhBici={
    bicicletas: bici,

    buscarBici: function (id) {
        const encontrada= this.bicicletas.filter(bici=> bici.id===id)
        return encontrada.length>0?encontrada[0]:null;
    }
     

};


console.log("La Bici encontrada es ", dhBici.buscarBici(1));
