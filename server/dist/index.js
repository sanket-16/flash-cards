"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = require("dotenv");
const cors_1 = __importDefault(require("cors"));
const getDeck_1 = __importDefault(require("./controllers/getDeck"));
const getDecks_1 = __importDefault(require("./controllers/getDecks"));
const createDeck_1 = __importDefault(require("./controllers/createDeck"));
const deleteDeck_1 = __importDefault(require("./controllers/deleteDeck"));
const createCardForDeck_1 = __importDefault(require("./controllers/createCardForDeck"));
const deleteCardDeck_1 = __importDefault(require("./controllers/deleteCardDeck"));
(0, dotenv_1.config)();
const PORT = 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.route('/decks')
    .get(getDecks_1.default)
    .post(createDeck_1.default);
app.route('/decks/:deckId')
    .get(getDeck_1.default)
    .post(createCardForDeck_1.default)
    .delete(deleteDeck_1.default);
app.route('/decks/:deckId/:cardIndex')
    .delete(deleteCardDeck_1.default);
mongoose_1.default.set('strictQuery', false);
mongoose_1.default.connect(process.env.MONGO_DB).then(() => {
    console.log('[ 🚀 ] DB is connected');
});
app.listen(PORT, () => {
    console.log(`[ 🚀 ] Server running on ${PORT}`);
});
