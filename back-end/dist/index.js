"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const api_1 = __importDefault(require("./routes/api"));
const app = (0, express_1.default)();
const port = process.env.PORT || 5100;
app.use('/api', api_1.default);
app.use((req, res) => {
    res.status(404).json({
        message: 'Esta ruta no existe, por favor usa /api/search',
    });
});
app.use(express_1.default.static('public'));
app.listen(port, () => {
    console.log(`API corriendo en el PORT ${port}`);
});
//# sourceMappingURL=index.js.map