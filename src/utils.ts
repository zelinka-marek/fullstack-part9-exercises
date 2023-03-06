export function parseNumberParams(...params: string[]): number[] {
  return params.map((param) => {
    if (isNaN(Number(param))) {
      throw new Error(`Provided value is not a number: ${param}`);
    }

    return Number(param);
  });
}
