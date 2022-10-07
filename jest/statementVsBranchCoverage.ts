const returnInput = (
    input: number,
    condition1: boolean,
    condition2: boolean,
    condition3: boolean): number => {
    let x = input;
    let y = 0;
    if (condition1)
        x++;
    else
        x--;
    if (condition2)
        x--;
    else
        x++;
    if (condition3)
        y=x;
    else
        x=y;
    return y;
}
export default returnInput;