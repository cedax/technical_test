import express from 'express';
import axios, { AxiosResponse } from 'axios';
import { ItemML } from '../models/item-ml';
import verificarCache from '../middlewares/node-cache';
import datosCache from '../controllers/cache';
import { DatosCache } from '../models/datos-cache';

const router = express.Router();

router.use((req, res, next) => {
    if (!req.query.query) {
        return res.status(400).json({
            message: 'Falta el parametro de query /api/search?query=BUSQUEDA',
        });
    }
    next();
    return 0;
});

router.get('/search', verificarCache, (req:Record<string, any>, res:Record<string, any>) => {
    const url: string = `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.query}`;

    axios.get(url)
        .then((response:AxiosResponse) => {
            const items:ItemML[] = response.data.results.map((item:any) => ({
                id: item.id,
                title: item.title,
                price: item.price,
                currency_id: item.currency_id,
                available_quantity: item.available_quantity,
                thumbnail: item.thumbnail,
                condition: item.condition,
            }));

            const cache: DatosCache[] = [{
                key: req.query.query,
                val: items,
                ttl: 1800,
            }];

            datosCache.mset(cache);
            res.send(items);
        })
        .catch((error:any) => {
            const jsonError: object = {
                hostname: error.hostname,
                err: error.syscall,
                code_error: error.code,
            };
            res.status(500).send(jsonError);
        });
    return 0;
});

export default router;
