import Permission from '../models/Permission'

class PermissionController {
  async create(req, res) {
    try {
      const { description } = req.body;

      await Permission.create({description})

      return res.status(201).send({ message: 'Permissão criada com sucesso!' })
    } catch (error) {
        console.log(error)
      return res.status(400).send({ message: 'err.message '})
    }
  }
}

export default new PermissionController()
