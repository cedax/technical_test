"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cache_1 = __importDefault(require("../controllers/cache"));
const verificarCache = (req, res, next) => {
    const { query } = req.query;
    const cache = cache_1.default.get(query);
    if (cache) {
        return res.status(200).json(cache);
    }
    next();
    return 0;
};
exports.default = verificarCache;
//# sourceMappingURL=node-cache.js.map