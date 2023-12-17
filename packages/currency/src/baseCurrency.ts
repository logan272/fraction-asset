import invariant from 'tiny-invariant';

import type { Currency } from './currency';

/**
 * A currency is any fungible financial instrument, including Ether, all ERC20 tokens, and other chain-native currencies
 */
export abstract class BaseCurrency {
  /**
   * Returns whether the currency is native to the chain (e.g. Ether)
   */
  public abstract readonly isNative: boolean;

  /**
   * Returns whether the currency is a token.
   */
  public abstract readonly isToken: boolean;

  /**
   * The chain ID on which this currency resides
   */
  public readonly chainId: number;

  /**
   * The decimals used in representing currency amounts
   */
  public readonly decimals: number;

  /**
   * The symbol of the currency, i.e. a short textual non-unique identifier
   */
  public readonly symbol: string;

  /**
   * The name of the currency, i.e. a descriptive textual non-unique identifier
   */
  public readonly name?: string;

  /**
   * The decimal scale of the currency, used for conversions.
   */
  public get decimalScale(): bigint {
    return 10n ** BigInt(this.decimals);
  }

  /**
   * Constructs an instance of the base class `BaseCurrency`.
   *
   * @param chainId the chain ID on which this currency resides
   * @param decimals decimals of the currency
   * @param symbol symbol of the currency
   * @param name of the currency
   */
  protected constructor(
    chainId: number,
    decimals: number,
    symbol: string,
    name?: string,
  ) {
    invariant(Number.isSafeInteger(chainId), 'CHAIN_ID');
    invariant(
      decimals >= 0 && decimals < 255 && Number.isInteger(decimals),
      'DECIMALS',
    );

    this.chainId = chainId;
    this.decimals = decimals;
    this.symbol = symbol;
    this.name = name;
  }

  /**
   * Returns whether this currency is functionally equivalent to the other currency
   * @param other the other currency
   */
  public abstract eq(other: Currency): boolean;

  /**
   * Returns whether this currency is not functionally equivalent to the other currency
   * @param other the other currency
   */
  public neq(other: Currency): boolean {
    return !this.eq(other);
  }
}
