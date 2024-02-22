import mongoose from 'mongoose'

// URL de conexão com o MongoDB
const uri = process.env.MONGO_CONNECTION

// Opções de configuração (opcional)
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// Conectando ao MongoDB
mongoose.connect(uri, options)
  .then(() => {
    console.log('Conexão estabelecida com o MongoDB.');
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });

export default mongoose
