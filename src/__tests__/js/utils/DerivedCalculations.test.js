import { calculateDiscountedPrice } from '../../../js/utils/DerivedCalculations';

describe("calculateDiscountedPrice", () => {

    it("calculates the correct discounted price from a percentage", () => {
        const result = calculateDiscountedPrice(10, 10); //10 dollars and 10 percent discount
        expect(result).toBe(9);
    });
});