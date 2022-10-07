import returnInput from "./statementVsBranchCoverage";

test('test one half', () => {
    const actualValue = returnInput(2, true, true, true);
    expect(actualValue).toBe(2);
});

test('test the other half', () => {
    const actualValue = returnInput(0, false, false, false);
    expect(actualValue).toBe(0);
});
