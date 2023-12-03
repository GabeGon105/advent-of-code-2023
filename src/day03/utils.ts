export const getFullNumber = (line: string, index: number, currentNumbers: number[]): number => {
    if ( !isNaN(Number(line[index])) ) {
        let left = index;
        let right = index;

        // find the left-most index of the number
        for ( left ; left >= 0 ; left-- ) {
            if ( isNaN(Number(line[left])) ) break;
        }

        // find the right-most index of the number
        for ( right ; right < line.length ; right++ ) {
            if ( isNaN(Number(line[right])) ) break;
        }

        // slice line from left to right, convert to a number
        const fullNumber = Number(line.slice(left+1, right));

        // push fullNumber to currentNumbers if not included
        if ( !currentNumbers.includes(fullNumber) ) {
            currentNumbers.push(fullNumber);
            return fullNumber;
        }
        return 0;
    }
    return 0;
}