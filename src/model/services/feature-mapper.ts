import { BakedGood } from "../baked-good";

export class CS571FeaturedBakedGoodMapper {
    
    private readonly featureMapper: any;

    public constructor(featureMapper: any) {
        this.featureMapper = featureMapper;
    }

    public getFeaturedBakedGood(): BakedGood {
        return this.featureMapper[this.getDayName()] as BakedGood
    }

    // https://stackoverflow.com/questions/57187691/javascript-how-to-verify-day-by-getday-when-using-timezone
    private getDayName(): string {
        return new Date().toLocaleString("en-US", {
            timeZone: "America/Chicago",
            weekday: 'long'
        })
    }
}