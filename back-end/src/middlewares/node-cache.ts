import datosCache from '../controllers/cache';
import { ItemML } from '../models/item-ml';

const verificarCache = (req:any, res:any, next:any) => {
    const { query } = req.query;
    const cache:ItemML[] = datosCache.get(query) as ItemML[];
    if (cache) {
        return res.status(200).json(cache);
    }
    next();
    return 0;
};

export default verificarCache;
