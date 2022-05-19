import express from 'express';
import routerApi from './routes/api';

const app = express();
const port = process.env.PORT || 5100;

app.use('/api', routerApi);

app.use((req, res) => {
    res.status(404).json({
        message: 'Esta ruta no existe, por favor usa /api/search',
    });
});

app.listen(port, () => {
    console.log(`API corriendo en el PORT ${port}`);
});
