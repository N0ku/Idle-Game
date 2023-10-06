import { Success } from "./implements";
import {  Products } from "./implements";

export const successList = [
    new Success("Lumberjack !!", "You've reached more than 500 units of wood", "https://i.imgur.com/3YJN02x.png", Products.Wood, 500),
    new Success("Miner !!", "You've reached more than 500 units of stone", "https://i.imgur.com/3YJN02x.png", Products.Stone, 500),
    new Success("Farmer !!", "You've reached more than 500 units of Weed", "https://i.imgur.com/3YJN02x.png", Products.Weed, 500),
    new Success("Doctor..?", "You've reached more than 500 units of CBD", "https://i.imgur.com/3YJN02x.png", Products.CBD, 500),
    new Success("Cannabis King !!", "You've reached more than 2000 units of Cannabis", "https://i.imgur.com/3YJN02x.png", Products.Weed, 500),
]

