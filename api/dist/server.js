"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// @ts-ignore
const db_1 = require("@/api/db/db");
const app = (0, express_1.default)();
const port = 3001;
app.get('/', (req, res) => {
    console.log(db_1.data);
    res.json(db_1.data).status(200);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map