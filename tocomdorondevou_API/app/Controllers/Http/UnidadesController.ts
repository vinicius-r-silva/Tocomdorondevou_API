import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import Database from '@ioc:Adonis/Lucid/Database';
import Unidade from 'App/Models/Unidade';
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UnidadesController {

  public async unidadeDetalhes({ request }: HttpContextContract) {

    console.log("---- Detalhes Unidade ----");
   
    
    const data = request.only(["cnes"])

    console.log(data)

    const unidade = await Unidade.find(data.cnes)
    console.log(unidade)
    return unidade

  }


  public async unidadesProximasRef({ request }: HttpContextContract) {

    const margemDef = 0.2

    var lonmax=0, lonmin=0, latmax=0, latmin=0
    console.log("---- Detalhes Unidade ----");
   
    
    const data = request.only(["longitude", "latitude", "margem"])


    if(!data.margem){
      console.log("Margem padrão");
      
      lonmax = margemDef + data.longitude;
      lonmin =- margemDef + data.longitude;
      latmax = margemDef + data.latitude;
      latmin = -margemDef + data.latitude;

      console.log(data)

     const retornoDef = await Database
                              .from('unidades')
                              .select('*')
                              .whereBetween('latitude', [latmin, latmax])
                              .whereBetween('longitude', [lonmin, lonmax])
                              
    console.log(retornoDef)
    return retornoDef

    }else{
      console.log("Margem definida");
      lonmax = data.margem + data.longitude;
      lonmin = - data.margem + data.longitude;
      latmax = data.margem + data.latitude;
      latmin = - data.margem + data.latitude;

      console.log(latmin);
      console.log(latmax);
      
      
      console.log(data)

      const retornoMargem = await Database
                                  .from('unidades')
                                  .select('*')
                                  .whereBetween('latitude', [latmin, latmax])
                                  .whereBetween('longitude', [lonmin, lonmax])
      console.log(retornoMargem)
      return retornoMargem

    }


    
  }
}
