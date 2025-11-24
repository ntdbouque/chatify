import express from 'express';
import dotenv from 'dotenv';
import path from "path";

import authroutes from './routes/auth.routes.js';
import messageroutes from './routes/message.routes.js'

dotenv.config();
const app = express();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use('/api/auth', authroutes); 
app.use('/api/message', messageroutes);

// make ready for production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/dist')));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'dist', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} `);
});