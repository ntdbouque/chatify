import express from 'express';
import dotenv from 'dotenv';
import authroutes from './routes/auth.routes.js';
import messageroutes from './routes/message.routes.js'

dotenv.config();
const app = express();

const PORT = process.env.PORT;


app.use('/api/auth', authroutes); 
app.use('/api/message', messageroutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});