import App from './index';
const PORT = process.env.PORT || 3333;

App.listen(PORT, () => {
  console.log(`Executando na porta ${PORT}`)
})