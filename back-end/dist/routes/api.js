"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const axios_1 = __importDefault(require("axios"));
const node_cache_1 = __importDefault(require("../middlewares/node-cache"));
const cache_1 = __importDefault(require("../controllers/cache"));
const router = express_1.default.Router();
router.use((req, res, next) => {
    if (!req.query.query) {
        return res.status(400).json({
            message: 'Falta el parametro de query /api/search?query=BUSQUEDA',
        });
    }
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    next();
    return 0;
});
router.get('/search', node_cache_1.default, (req, res) => {
    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${req.query.query}`;
    axios_1.default.get(url)
        .then((response) => {
        const items = response.data.results.map((item) => ({
            id: item.id,
            title: item.title,
            price: item.price,
            currency_id: item.currency_id,
            available_quantity: item.available_quantity,
            thumbnail: item.thumbnail,
            condition: item.condition,
        }));
        const cache = [{
                key: req.query.query,
                val: items,
                ttl: 1800,
            }];
        cache_1.default.mset(cache);
        res.send(items);
    })
        .catch((error) => {
        const jsonError = {
            hostname: error.hostname,
            err: error.syscall,
            code_error: error.code,
        };
        res.status(500).send(jsonError);
    });
    return 0;
});
exports.default = router;
//# sourceMappingURL=api.js.map