import { verify } from 'jsonwebtoken'

function auth(req, res, next){
    const { authorization } = req.headers

    if(!authorization){
        return res.status(401).send({message: "Você não tem autorização para este recurso."})
    }
    try {
        verify(authorization, process.env.SECRET)

        next()

    } catch (error) {
        console.log(error)
        return res.status(401).send({message: "Você não tem autorização para este recurso."})
    }

}

export default auth