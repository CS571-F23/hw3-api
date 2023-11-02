import { Express } from 'express';

import { CS571Route } from "@cs571/f23-api-middleware/src/interfaces/route";
import { BakedGood } from '../model/baked-good';
import { CS571FeaturedBakedGoodMapper } from '../model/services/feature-mapper';

export class CS571FeaturedBakedGoodRoute implements CS571Route {

    public static readonly ROUTE_NAME: string = '/featured-baked-good';

    private readonly featureMapper: CS571FeaturedBakedGoodMapper;

    public constructor(featureMapper: CS571FeaturedBakedGoodMapper) {
        this.featureMapper = featureMapper;
    }

    public addRoute(app: Express): void {
        app.get(CS571FeaturedBakedGoodRoute.ROUTE_NAME, (req, res) => {
            res.status(200).send(this.featureMapper.getFeaturedBakedGood());
        })
    }

    public getRouteName(): string {
        return CS571FeaturedBakedGoodRoute.ROUTE_NAME;
    }


}