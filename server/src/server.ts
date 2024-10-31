import express from 'express';
import http from 'http';
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes'
import transactionRoutes from './routes/transactionRoutes'

dotenv.config()

const app = express();
const server = http.createServer(app);

app.use(cors())
app.use(express.json())
app.use(express.static('public'))

const PORT = process.env.PORT;

app.get('/test', (req, res) => {
    res.send('Basic test route works!');
});

app.use('/users', userRoutes)
app.use('/transactions', transactionRoutes)

app.use((req, res, next) => {
    console.log(`Incoming request: ${req.method} ${req.url}`);
    next();
});

try {
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
} catch (error) {
    console.error('Server failed to start:', error);
}
