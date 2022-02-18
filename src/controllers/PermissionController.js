import Permission from '../models/Permission';

class PermissionController {
    async create(req, res){
        try {
            const { description } = req.body
            await Permission.create({description})

            return res.status(200).send({message: 'Permissão criado com sucesso.'})
        } catch (error) {
            const [err] = error.errors
            return res.status(400).send({message: err.message})
        }
    }
    async index(req, res){
        try {
            const permissions = await Permission.findAll({
                attributes: ['id', 'description']
            })

            return res.status(200).send({records: permissions})
        } catch (error) {
            const [err] = error.errors
            return res.status(400).send({message: err.message})
        }
    }
}

export default new PermissionController()