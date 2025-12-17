export type Species = 'dog' | 'cat';
export type DogSize = 'small' | 'medium' | 'large';

export const calculateHumanAge = (
    species: Species,
    age: number,
    dogSize: DogSize = 'small'
): number => {
    if (age <= 0) return 0;

    if (species === 'cat') {
        if (age === 1) return 15;
        if (age === 2) return 24;
        if (age > 2) return 24 + (age - 2) * 4;
        return Math.floor(age * 15);
    }

    // Dog
    if (age === 1) return 15;
    if (age === 2) return 24;
    if (age > 2) {
        const multiplier = dogSize === 'small' ? 4 : dogSize === 'medium' ? 5 : 6;
        return 24 + (age - 2) * multiplier;
    }
    return Math.floor(age * 15);
};

export const calculateRER = (weight: number): number => {
    return 70 * Math.pow(weight, 0.75);
};

export const calculateCalories = (
    rer: number,
    isNeutered: boolean,
    bcs: number
): { dailyKcal: number; cupAmount: number } => {
    let factor = 1.6; // Default neutered
    if (!isNeutered) factor = 1.8;
    if (bcs > 5) factor = 1.0; // Diet needed (Overweight)

    const dailyKcal = Math.round(rer * factor);
    // Cup amount based on 80g per 300kcal
    // Returns grams? Or cups? 
    // "cupAmount" implies cups (count) or grams in a cup?
    // "paper cup conversion criteria (approx 80g/300kcal)" suggests showing "X cups" or "X grams"?
    // "cup conversion criteria" usually means "You need X cups".
    // If 1 cup = 80g and 300kcal.
    // Then dailyKcal / 300 = cups.
    const cups = Number((dailyKcal / 300).toFixed(1));

    return { dailyKcal, cupAmount: cups };
};

export const estimateBCS = (currentWeight: number, idealWeight: number): number => {
    if (currentWeight <= 0 || idealWeight <= 0) return 5;

    // Rule of thumb: Each 10-15% deviation is roughly 1 BCS point on a 9-point scale.
    // We use 10% for higher sensitivity (conservative health management).
    const deviation = (currentWeight - idealWeight) / idealWeight;
    const points = Math.round(deviation * 10);

    let estimated = 5 + points;
    if (estimated < 1) estimated = 1;
    if (estimated > 9) estimated = 9;

    return estimated;
};
