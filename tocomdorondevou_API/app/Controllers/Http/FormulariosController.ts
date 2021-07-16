import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Formulario from 'App/Models/Formulario';

export default class FormulariosController {
  public async registraResposta({ request }: HttpContextContract) {

    console.log("---- Registra Resposta ----");


    const data = request.only(["latitude", "longitude","resultado", "respostas","versao"])

    console.log(data)

    const form = await Formulario.create(data)

    return form
  }

  public async formulariosTodos() {

    console.log("---- Lista Formularios ----");
    const forms = await Formulario.all()
    console.log(forms)
    return forms

  }
}
