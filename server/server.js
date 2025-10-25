import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import adminRoutes from './routes/adminRoutes.js';


dotenv.config();
const app = express();
app.use(cors({ 
  origin: 'https://admin-dashboard-client-06r0.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());


app.use('/api/auth', authRoutes);
app.use('/api/admin', adminRoutes);

app.get('/', (req, res) => {
  res.send('Backend running successfully 🚀');
});


mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('✅ MongoDB Connected'))
.catch(err => console.log(err));


app.listen(process.env.PORT, () => console.log(`🚀 Server running on port ${process.env.PORT}`));
