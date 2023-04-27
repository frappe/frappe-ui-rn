import tokens from './tokens';

export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b + 1);
}

export const FrappeUITokens = tokens;
