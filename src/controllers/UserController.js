class UserController {
  async index(req, res) {

    const users = getData('user.json')

    return res.status(200).json({ users: users })
  }

  async indexOne(req, res) {

    const { id } = req.params
    try {
      const response = await userService.getUserById(id)
      return res.status(200).json(response)

    } catch (error) {
      console.log(error.message)
      return res.status(400).json({ error: error.message })
    }
  }

  async create(req, res) {
    /*  #swagger.parameters['obj'] = {
            in: 'body',
            description: 'O endpoint cria um novo usuário para a aplicação.',
            schema: {
                name: 'Jhon Doe',
                age: 29,
                job: 'Developer',
                state: 'Santa Catarina' 
            }
    } */
    const { name, age, job, state } = req.body;
    const existKeyValue = Object.keys(req.body).filter((item) => !req.body[item])
    const translateOptions = existKeyValue.map((item) => translate[item])

    if (existKeyValue.length > 0) {
      return res.status(400).send(
        {
          message: `É necessário enviar o(s) seguinte(s) ${translateOptions.join(', ')}`
        })
    }

    const users = getData('user.json')
    const createNewUser = [
      ...users, {
        id: users.length + 1,
        name: name,
        age: age,
        job: job,
        state: state
      }
    ]
    createOrUpdateData('user.json', createNewUser)
    return res.status(201).send({ message: 'Usuário salvo com sucesso.' })
  }

  async updateOne(req, res) {
    const { id } = req.params
    const users = getData('user.json')

    const existUser = users.find((item) => item.id === Number(id))

    const dataForUpdate = req.body

    if (!existUser) {
      return res.status(200).send({ message: "Não houve mudança de dados" })
    }

    const updateUsersList = users.map((item) => {
      if (item.id === Number(id)) {
        return { ...item, ...dataForUpdate }
      }
      else {
        return { ...item }
      }
    })
    createOrUpdateData(updateUsersList)
    return res.status(200).send({ message: "Usuário atualizado com sucesso." })
  }

  async deleteOne(req, res) {
    const { id } = req.params;

    const users = getData('user.json')
    const findUser = users.find((item) => item.id === Number(id))

    if (!findUser) {
      return res.status(400).send({ message: "Usuário não pode ser deletado." })
    }

    const removeOnlyOneUserByUsers = users.filter((item) => item.id !== Number(id))

    createOrUpdateData(removeOnlyOneUserByUsers)
    return res.status(200).send({ message: "Usuário deletado com sucesso." })
  }
}

export default new UserController()
