const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());


const authRoutes = require('./src/routes/authRoutes');
const productsRouter = require('./src/routes/products'); 

app.use('/api/auth', authRoutes);
app.use('/api/products', productsRouter); 

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Conectado a MongoDB');
}).catch((err) => {
  console.error('Error de conexión a MongoDB:', err);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
