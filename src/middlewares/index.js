function helloWorld(req, res, next){
    console.log('Hello World')
    next()
}

export default helloWorld