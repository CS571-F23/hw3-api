import fs from 'fs'

import express, { Express } from 'express';

import { CS571DefaultSecretConfig, CS571Initializer } from '@cs571/f23-api-middleware'
import { CS571AllBakedGoodsRoute } from './routes/all-baked-goods';
import { CS571FeaturedBakedGoodRoute } from './routes/featured-baked-good';
import { CS571FeaturedBakedGoodMapper } from './model/services/feature-mapper';
import { BakedGood } from './model/baked-good';

console.log("Welcome to HW3!");

const app: Express = express();

const appBundle = CS571Initializer.init(app, {
  allowNoAuth: [],
  skipAuth: false
});

const bakedGoods = JSON.parse(fs.readFileSync("includes/baked-goods.json").toString()).map((good: BakedGood) => { return {...good, featured: false}})
const featuredGoods = JSON.parse(fs.readFileSync("includes/featured-baked-goods.json").toString())

const featureMapper = new CS571FeaturedBakedGoodMapper(featuredGoods);

appBundle.router.addRoutes([
  new CS571AllBakedGoodsRoute(bakedGoods, featureMapper),
  new CS571FeaturedBakedGoodRoute(featureMapper)
])

app.listen(appBundle.config.PORT, () => {
  console.log(`Running at :${appBundle.config.PORT}`);
});
