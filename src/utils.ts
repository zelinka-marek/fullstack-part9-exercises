export function parseNumberParams(...params: string[]): number[] {
  return params.map((param) => {
    if (!isNumber(param)) {
      throw new Error(`Provided value is not a number: ${param}`);
    }

    return Number(param);
  });
}

export function isNumber(arg: any): boolean {
  return !isNaN(Number(arg));
}
