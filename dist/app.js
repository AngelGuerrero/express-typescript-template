"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRouter_1 = require("./routes/authRouter");
const app = (0, express_1.default)();
const port = 5000;
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.use('/auth', authRouter_1.router);
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map