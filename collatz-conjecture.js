export default function steps (num, step = 0) {
    if (num <= 0) {
        throw new Error('Only positive numbers are allowed');
    }

    if (num === 1) {
        return step;
    } else {
        if (num % 2 == 0) {
            return steps((num/2), step+1);
        } else {
            return steps((num*3)+1, step+1);
        } 
    }
}
