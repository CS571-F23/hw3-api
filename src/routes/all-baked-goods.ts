import { Express } from 'express';

import { CS571Route } from "@cs571/f23-api-middleware/src/interfaces/route";
import { BakedGood } from '../model/baked-good';
import { CS571FeaturedBakedGoodMapper } from '../model/services/feature-mapper';

export class CS571AllBakedGoodsRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = '/all-baked-goods';

    private readonly bakedGoods: BakedGood[];
    private readonly featureMapper: CS571FeaturedBakedGoodMapper;

    public constructor(bakedGoods: BakedGood[], featureMapper: CS571FeaturedBakedGoodMapper) {
        this.bakedGoods = [...bakedGoods];
        this.featureMapper = featureMapper;
    }

    public addRoute(app: Express): void {
        app.get(CS571AllBakedGoodsRoute.ROUTE_NAME, (req, res) => {
            res.status(200).send([...this.bakedGoods, { ...this.featureMapper.getFeaturedBakedGood(), featured: true }]);
        })
    }

    public getRouteName(): string {
        return CS571AllBakedGoodsRoute.ROUTE_NAME;
    }
}