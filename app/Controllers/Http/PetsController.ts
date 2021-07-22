// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class PetsController {
    public async index(){
        return 'get pet';
    }
    public async strore(){
        return 'store pets';
    }
}
