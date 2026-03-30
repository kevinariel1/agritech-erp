
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Farm
 * 
 */
export type Farm = $Result.DefaultSelection<Prisma.$FarmPayload>
/**
 * Model Distributor
 * 
 */
export type Distributor = $Result.DefaultSelection<Prisma.$DistributorPayload>
/**
 * Model Retailer
 * 
 */
export type Retailer = $Result.DefaultSelection<Prisma.$RetailerPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model Shipment
 * 
 */
export type Shipment = $Result.DefaultSelection<Prisma.$ShipmentPayload>
/**
 * Model TrackingHistory
 * 
 */
export type TrackingHistory = $Result.DefaultSelection<Prisma.$TrackingHistoryPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  FARMER: 'FARMER',
  DISTRIBUTOR: 'DISTRIBUTOR',
  RETAILER: 'RETAILER',
  ADMIN: 'ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const OrderStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  PROCESSING: 'PROCESSING',
  SHIPPED: 'SHIPPED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const ShipmentStatus: {
  PREPARING: 'PREPARING',
  IN_TRANSIT: 'IN_TRANSIT',
  DELIVERED: 'DELIVERED',
  FAILED: 'FAILED'
};

export type ShipmentStatus = (typeof ShipmentStatus)[keyof typeof ShipmentStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  REFUNDED: 'REFUNDED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type ShipmentStatus = $Enums.ShipmentStatus

export const ShipmentStatus: typeof $Enums.ShipmentStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.farm`: Exposes CRUD operations for the **Farm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Farms
    * const farms = await prisma.farm.findMany()
    * ```
    */
  get farm(): Prisma.FarmDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.distributor`: Exposes CRUD operations for the **Distributor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Distributors
    * const distributors = await prisma.distributor.findMany()
    * ```
    */
  get distributor(): Prisma.DistributorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.retailer`: Exposes CRUD operations for the **Retailer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Retailers
    * const retailers = await prisma.retailer.findMany()
    * ```
    */
  get retailer(): Prisma.RetailerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.shipment`: Exposes CRUD operations for the **Shipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipments
    * const shipments = await prisma.shipment.findMany()
    * ```
    */
  get shipment(): Prisma.ShipmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.trackingHistory`: Exposes CRUD operations for the **TrackingHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackingHistories
    * const trackingHistories = await prisma.trackingHistory.findMany()
    * ```
    */
  get trackingHistory(): Prisma.TrackingHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.5.0
   * Query Engine version: 280c870be64f457428992c43c1f6d557fab6e29e
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Farm: 'Farm',
    Distributor: 'Distributor',
    Retailer: 'Retailer',
    Product: 'Product',
    Inventory: 'Inventory',
    Order: 'Order',
    OrderItem: 'OrderItem',
    Shipment: 'Shipment',
    TrackingHistory: 'TrackingHistory',
    Payment: 'Payment'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "farm" | "distributor" | "retailer" | "product" | "inventory" | "order" | "orderItem" | "shipment" | "trackingHistory" | "payment"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Farm: {
        payload: Prisma.$FarmPayload<ExtArgs>
        fields: Prisma.FarmFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FarmFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FarmFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          findFirst: {
            args: Prisma.FarmFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FarmFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          findMany: {
            args: Prisma.FarmFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>[]
          }
          create: {
            args: Prisma.FarmCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          createMany: {
            args: Prisma.FarmCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FarmCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>[]
          }
          delete: {
            args: Prisma.FarmDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          update: {
            args: Prisma.FarmUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          deleteMany: {
            args: Prisma.FarmDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FarmUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FarmUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>[]
          }
          upsert: {
            args: Prisma.FarmUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FarmPayload>
          }
          aggregate: {
            args: Prisma.FarmAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFarm>
          }
          groupBy: {
            args: Prisma.FarmGroupByArgs<ExtArgs>
            result: $Utils.Optional<FarmGroupByOutputType>[]
          }
          count: {
            args: Prisma.FarmCountArgs<ExtArgs>
            result: $Utils.Optional<FarmCountAggregateOutputType> | number
          }
        }
      }
      Distributor: {
        payload: Prisma.$DistributorPayload<ExtArgs>
        fields: Prisma.DistributorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistributorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistributorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          findFirst: {
            args: Prisma.DistributorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistributorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          findMany: {
            args: Prisma.DistributorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>[]
          }
          create: {
            args: Prisma.DistributorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          createMany: {
            args: Prisma.DistributorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistributorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>[]
          }
          delete: {
            args: Prisma.DistributorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          update: {
            args: Prisma.DistributorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          deleteMany: {
            args: Prisma.DistributorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistributorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistributorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>[]
          }
          upsert: {
            args: Prisma.DistributorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          aggregate: {
            args: Prisma.DistributorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistributor>
          }
          groupBy: {
            args: Prisma.DistributorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistributorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistributorCountArgs<ExtArgs>
            result: $Utils.Optional<DistributorCountAggregateOutputType> | number
          }
        }
      }
      Retailer: {
        payload: Prisma.$RetailerPayload<ExtArgs>
        fields: Prisma.RetailerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RetailerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetailerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RetailerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetailerPayload>
          }
          findFirst: {
            args: Prisma.RetailerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetailerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RetailerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetailerPayload>
          }
          findMany: {
            args: Prisma.RetailerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetailerPayload>[]
          }
          create: {
            args: Prisma.RetailerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetailerPayload>
          }
          createMany: {
            args: Prisma.RetailerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RetailerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetailerPayload>[]
          }
          delete: {
            args: Prisma.RetailerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetailerPayload>
          }
          update: {
            args: Prisma.RetailerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetailerPayload>
          }
          deleteMany: {
            args: Prisma.RetailerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RetailerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RetailerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetailerPayload>[]
          }
          upsert: {
            args: Prisma.RetailerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RetailerPayload>
          }
          aggregate: {
            args: Prisma.RetailerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRetailer>
          }
          groupBy: {
            args: Prisma.RetailerGroupByArgs<ExtArgs>
            result: $Utils.Optional<RetailerGroupByOutputType>[]
          }
          count: {
            args: Prisma.RetailerCountArgs<ExtArgs>
            result: $Utils.Optional<RetailerCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      Shipment: {
        payload: Prisma.$ShipmentPayload<ExtArgs>
        fields: Prisma.ShipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findFirst: {
            args: Prisma.ShipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findMany: {
            args: Prisma.ShipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          create: {
            args: Prisma.ShipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          createMany: {
            args: Prisma.ShipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          delete: {
            args: Prisma.ShipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          update: {
            args: Prisma.ShipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShipmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          upsert: {
            args: Prisma.ShipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          aggregate: {
            args: Prisma.ShipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipment>
          }
          groupBy: {
            args: Prisma.ShipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentCountAggregateOutputType> | number
          }
        }
      }
      TrackingHistory: {
        payload: Prisma.$TrackingHistoryPayload<ExtArgs>
        fields: Prisma.TrackingHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TrackingHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TrackingHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingHistoryPayload>
          }
          findFirst: {
            args: Prisma.TrackingHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TrackingHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingHistoryPayload>
          }
          findMany: {
            args: Prisma.TrackingHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingHistoryPayload>[]
          }
          create: {
            args: Prisma.TrackingHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingHistoryPayload>
          }
          createMany: {
            args: Prisma.TrackingHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TrackingHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingHistoryPayload>[]
          }
          delete: {
            args: Prisma.TrackingHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingHistoryPayload>
          }
          update: {
            args: Prisma.TrackingHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingHistoryPayload>
          }
          deleteMany: {
            args: Prisma.TrackingHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TrackingHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TrackingHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingHistoryPayload>[]
          }
          upsert: {
            args: Prisma.TrackingHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TrackingHistoryPayload>
          }
          aggregate: {
            args: Prisma.TrackingHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTrackingHistory>
          }
          groupBy: {
            args: Prisma.TrackingHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<TrackingHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.TrackingHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<TrackingHistoryCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    farm?: FarmOmit
    distributor?: DistributorOmit
    retailer?: RetailerOmit
    product?: ProductOmit
    inventory?: InventoryOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    shipment?: ShipmentOmit
    trackingHistory?: TrackingHistoryOmit
    payment?: PaymentOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    ordersAsBuyer: number
    ordersAsSeller: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ordersAsBuyer?: boolean | UserCountOutputTypeCountOrdersAsBuyerArgs
    ordersAsSeller?: boolean | UserCountOutputTypeCountOrdersAsSellerArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersAsBuyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersAsSellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type FarmCountOutputType
   */

  export type FarmCountOutputType = {
    products: number
    inventories: number
  }

  export type FarmCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | FarmCountOutputTypeCountProductsArgs
    inventories?: boolean | FarmCountOutputTypeCountInventoriesArgs
  }

  // Custom InputTypes
  /**
   * FarmCountOutputType without action
   */
  export type FarmCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FarmCountOutputType
     */
    select?: FarmCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * FarmCountOutputType without action
   */
  export type FarmCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * FarmCountOutputType without action
   */
  export type FarmCountOutputTypeCountInventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }


  /**
   * Count Type DistributorCountOutputType
   */

  export type DistributorCountOutputType = {
    shipments: number
  }

  export type DistributorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipments?: boolean | DistributorCountOutputTypeCountShipmentsArgs
  }

  // Custom InputTypes
  /**
   * DistributorCountOutputType without action
   */
  export type DistributorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorCountOutputType
     */
    select?: DistributorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DistributorCountOutputType without action
   */
  export type DistributorCountOutputTypeCountShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }


  /**
   * Count Type RetailerCountOutputType
   */

  export type RetailerCountOutputType = {
    inventories: number
  }

  export type RetailerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | RetailerCountOutputTypeCountInventoriesArgs
  }

  // Custom InputTypes
  /**
   * RetailerCountOutputType without action
   */
  export type RetailerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RetailerCountOutputType
     */
    select?: RetailerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RetailerCountOutputType without action
   */
  export type RetailerCountOutputTypeCountInventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    inventories: number
    orderItems: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventories?: boolean | ProductCountOutputTypeCountInventoriesArgs
    orderItems?: boolean | ProductCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountInventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type ShipmentCountOutputType
   */

  export type ShipmentCountOutputType = {
    trackingHistory: number
  }

  export type ShipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trackingHistory?: boolean | ShipmentCountOutputTypeCountTrackingHistoryArgs
  }

  // Custom InputTypes
  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCountOutputType
     */
    select?: ShipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountTrackingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingHistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    firstName: string | null
    lastName: string | null
    phone: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    emailVerified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    firstName: number
    lastName: number
    phone: number
    role: number
    isActive: number
    emailVerified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    isActive?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    isActive?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    firstName?: true
    lastName?: true
    phone?: true
    role?: true
    isActive?: true
    emailVerified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone: string | null
    role: $Enums.UserRole
    isActive: boolean
    emailVerified: boolean
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farm?: boolean | User$farmArgs<ExtArgs>
    retailer?: boolean | User$retailerArgs<ExtArgs>
    distributor?: boolean | User$distributorArgs<ExtArgs>
    ordersAsBuyer?: boolean | User$ordersAsBuyerArgs<ExtArgs>
    ordersAsSeller?: boolean | User$ordersAsSellerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    firstName?: boolean
    lastName?: boolean
    phone?: boolean
    role?: boolean
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "firstName" | "lastName" | "phone" | "role" | "isActive" | "emailVerified" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | User$farmArgs<ExtArgs>
    retailer?: boolean | User$retailerArgs<ExtArgs>
    distributor?: boolean | User$distributorArgs<ExtArgs>
    ordersAsBuyer?: boolean | User$ordersAsBuyerArgs<ExtArgs>
    ordersAsSeller?: boolean | User$ordersAsSellerArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      farm: Prisma.$FarmPayload<ExtArgs> | null
      retailer: Prisma.$RetailerPayload<ExtArgs> | null
      distributor: Prisma.$DistributorPayload<ExtArgs> | null
      ordersAsBuyer: Prisma.$OrderPayload<ExtArgs>[]
      ordersAsSeller: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      firstName: string
      lastName: string
      phone: string | null
      role: $Enums.UserRole
      isActive: boolean
      emailVerified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farm<T extends User$farmArgs<ExtArgs> = {}>(args?: Subset<T, User$farmArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    retailer<T extends User$retailerArgs<ExtArgs> = {}>(args?: Subset<T, User$retailerArgs<ExtArgs>>): Prisma__RetailerClient<$Result.GetResult<Prisma.$RetailerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    distributor<T extends User$distributorArgs<ExtArgs> = {}>(args?: Subset<T, User$distributorArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    ordersAsBuyer<T extends User$ordersAsBuyerArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersAsBuyerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ordersAsSeller<T extends User$ordersAsSellerArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersAsSellerArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly emailVerified: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.farm
   */
  export type User$farmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    where?: FarmWhereInput
  }

  /**
   * User.retailer
   */
  export type User$retailerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retailer
     */
    select?: RetailerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Retailer
     */
    omit?: RetailerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetailerInclude<ExtArgs> | null
    where?: RetailerWhereInput
  }

  /**
   * User.distributor
   */
  export type User$distributorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    where?: DistributorWhereInput
  }

  /**
   * User.ordersAsBuyer
   */
  export type User$ordersAsBuyerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.ordersAsSeller
   */
  export type User$ordersAsSellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Farm
   */

  export type AggregateFarm = {
    _count: FarmCountAggregateOutputType | null
    _avg: FarmAvgAggregateOutputType | null
    _sum: FarmSumAggregateOutputType | null
    _min: FarmMinAggregateOutputType | null
    _max: FarmMaxAggregateOutputType | null
  }

  export type FarmAvgAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type FarmSumAggregateOutputType = {
    latitude: number | null
    longitude: number | null
  }

  export type FarmMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    address: string | null
    city: string | null
    province: string | null
    postalCode: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    address: string | null
    city: string | null
    province: string | null
    postalCode: string | null
    latitude: number | null
    longitude: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FarmCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    address: number
    city: number
    province: number
    postalCode: number
    latitude: number
    longitude: number
    certifications: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FarmAvgAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type FarmSumAggregateInputType = {
    latitude?: true
    longitude?: true
  }

  export type FarmMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    address?: true
    city?: true
    province?: true
    postalCode?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    address?: true
    city?: true
    province?: true
    postalCode?: true
    latitude?: true
    longitude?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FarmCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    address?: true
    city?: true
    province?: true
    postalCode?: true
    latitude?: true
    longitude?: true
    certifications?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FarmAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farm to aggregate.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Farms
    **/
    _count?: true | FarmCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FarmAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FarmSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FarmMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FarmMaxAggregateInputType
  }

  export type GetFarmAggregateType<T extends FarmAggregateArgs> = {
        [P in keyof T & keyof AggregateFarm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFarm[P]>
      : GetScalarType<T[P], AggregateFarm[P]>
  }




  export type FarmGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FarmWhereInput
    orderBy?: FarmOrderByWithAggregationInput | FarmOrderByWithAggregationInput[]
    by: FarmScalarFieldEnum[] | FarmScalarFieldEnum
    having?: FarmScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FarmCountAggregateInputType | true
    _avg?: FarmAvgAggregateInputType
    _sum?: FarmSumAggregateInputType
    _min?: FarmMinAggregateInputType
    _max?: FarmMaxAggregateInputType
  }

  export type FarmGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    address: string
    city: string
    province: string
    postalCode: string | null
    latitude: number | null
    longitude: number | null
    certifications: string[]
    createdAt: Date
    updatedAt: Date
    _count: FarmCountAggregateOutputType | null
    _avg: FarmAvgAggregateOutputType | null
    _sum: FarmSumAggregateOutputType | null
    _min: FarmMinAggregateOutputType | null
    _max: FarmMaxAggregateOutputType | null
  }

  type GetFarmGroupByPayload<T extends FarmGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FarmGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FarmGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FarmGroupByOutputType[P]>
            : GetScalarType<T[P], FarmGroupByOutputType[P]>
        }
      >
    >


  export type FarmSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    postalCode?: boolean
    latitude?: boolean
    longitude?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    products?: boolean | Farm$productsArgs<ExtArgs>
    inventories?: boolean | Farm$inventoriesArgs<ExtArgs>
    _count?: boolean | FarmCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farm"]>

  export type FarmSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    postalCode?: boolean
    latitude?: boolean
    longitude?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farm"]>

  export type FarmSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    postalCode?: boolean
    latitude?: boolean
    longitude?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["farm"]>

  export type FarmSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    postalCode?: boolean
    latitude?: boolean
    longitude?: boolean
    certifications?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FarmOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "address" | "city" | "province" | "postalCode" | "latitude" | "longitude" | "certifications" | "createdAt" | "updatedAt", ExtArgs["result"]["farm"]>
  export type FarmInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    products?: boolean | Farm$productsArgs<ExtArgs>
    inventories?: boolean | Farm$inventoriesArgs<ExtArgs>
    _count?: boolean | FarmCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type FarmIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type FarmIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FarmPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Farm"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      products: Prisma.$ProductPayload<ExtArgs>[]
      inventories: Prisma.$InventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      address: string
      city: string
      province: string
      postalCode: string | null
      latitude: number | null
      longitude: number | null
      certifications: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["farm"]>
    composites: {}
  }

  type FarmGetPayload<S extends boolean | null | undefined | FarmDefaultArgs> = $Result.GetResult<Prisma.$FarmPayload, S>

  type FarmCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FarmFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FarmCountAggregateInputType | true
    }

  export interface FarmDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Farm'], meta: { name: 'Farm' } }
    /**
     * Find zero or one Farm that matches the filter.
     * @param {FarmFindUniqueArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FarmFindUniqueArgs>(args: SelectSubset<T, FarmFindUniqueArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Farm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FarmFindUniqueOrThrowArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FarmFindUniqueOrThrowArgs>(args: SelectSubset<T, FarmFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindFirstArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FarmFindFirstArgs>(args?: SelectSubset<T, FarmFindFirstArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Farm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindFirstOrThrowArgs} args - Arguments to find a Farm
     * @example
     * // Get one Farm
     * const farm = await prisma.farm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FarmFindFirstOrThrowArgs>(args?: SelectSubset<T, FarmFindFirstOrThrowArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Farms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Farms
     * const farms = await prisma.farm.findMany()
     * 
     * // Get first 10 Farms
     * const farms = await prisma.farm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const farmWithIdOnly = await prisma.farm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FarmFindManyArgs>(args?: SelectSubset<T, FarmFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Farm.
     * @param {FarmCreateArgs} args - Arguments to create a Farm.
     * @example
     * // Create one Farm
     * const Farm = await prisma.farm.create({
     *   data: {
     *     // ... data to create a Farm
     *   }
     * })
     * 
     */
    create<T extends FarmCreateArgs>(args: SelectSubset<T, FarmCreateArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Farms.
     * @param {FarmCreateManyArgs} args - Arguments to create many Farms.
     * @example
     * // Create many Farms
     * const farm = await prisma.farm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FarmCreateManyArgs>(args?: SelectSubset<T, FarmCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Farms and returns the data saved in the database.
     * @param {FarmCreateManyAndReturnArgs} args - Arguments to create many Farms.
     * @example
     * // Create many Farms
     * const farm = await prisma.farm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Farms and only return the `id`
     * const farmWithIdOnly = await prisma.farm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FarmCreateManyAndReturnArgs>(args?: SelectSubset<T, FarmCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Farm.
     * @param {FarmDeleteArgs} args - Arguments to delete one Farm.
     * @example
     * // Delete one Farm
     * const Farm = await prisma.farm.delete({
     *   where: {
     *     // ... filter to delete one Farm
     *   }
     * })
     * 
     */
    delete<T extends FarmDeleteArgs>(args: SelectSubset<T, FarmDeleteArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Farm.
     * @param {FarmUpdateArgs} args - Arguments to update one Farm.
     * @example
     * // Update one Farm
     * const farm = await prisma.farm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FarmUpdateArgs>(args: SelectSubset<T, FarmUpdateArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Farms.
     * @param {FarmDeleteManyArgs} args - Arguments to filter Farms to delete.
     * @example
     * // Delete a few Farms
     * const { count } = await prisma.farm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FarmDeleteManyArgs>(args?: SelectSubset<T, FarmDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Farms
     * const farm = await prisma.farm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FarmUpdateManyArgs>(args: SelectSubset<T, FarmUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Farms and returns the data updated in the database.
     * @param {FarmUpdateManyAndReturnArgs} args - Arguments to update many Farms.
     * @example
     * // Update many Farms
     * const farm = await prisma.farm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Farms and only return the `id`
     * const farmWithIdOnly = await prisma.farm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FarmUpdateManyAndReturnArgs>(args: SelectSubset<T, FarmUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Farm.
     * @param {FarmUpsertArgs} args - Arguments to update or create a Farm.
     * @example
     * // Update or create a Farm
     * const farm = await prisma.farm.upsert({
     *   create: {
     *     // ... data to create a Farm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Farm we want to update
     *   }
     * })
     */
    upsert<T extends FarmUpsertArgs>(args: SelectSubset<T, FarmUpsertArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Farms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmCountArgs} args - Arguments to filter Farms to count.
     * @example
     * // Count the number of Farms
     * const count = await prisma.farm.count({
     *   where: {
     *     // ... the filter for the Farms we want to count
     *   }
     * })
    **/
    count<T extends FarmCountArgs>(
      args?: Subset<T, FarmCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FarmCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Farm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FarmAggregateArgs>(args: Subset<T, FarmAggregateArgs>): Prisma.PrismaPromise<GetFarmAggregateType<T>>

    /**
     * Group by Farm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FarmGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FarmGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FarmGroupByArgs['orderBy'] }
        : { orderBy?: FarmGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FarmGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFarmGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Farm model
   */
  readonly fields: FarmFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Farm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FarmClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    products<T extends Farm$productsArgs<ExtArgs> = {}>(args?: Subset<T, Farm$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    inventories<T extends Farm$inventoriesArgs<ExtArgs> = {}>(args?: Subset<T, Farm$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Farm model
   */
  interface FarmFieldRefs {
    readonly id: FieldRef<"Farm", 'String'>
    readonly userId: FieldRef<"Farm", 'String'>
    readonly name: FieldRef<"Farm", 'String'>
    readonly description: FieldRef<"Farm", 'String'>
    readonly address: FieldRef<"Farm", 'String'>
    readonly city: FieldRef<"Farm", 'String'>
    readonly province: FieldRef<"Farm", 'String'>
    readonly postalCode: FieldRef<"Farm", 'String'>
    readonly latitude: FieldRef<"Farm", 'Float'>
    readonly longitude: FieldRef<"Farm", 'Float'>
    readonly certifications: FieldRef<"Farm", 'String[]'>
    readonly createdAt: FieldRef<"Farm", 'DateTime'>
    readonly updatedAt: FieldRef<"Farm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Farm findUnique
   */
  export type FarmFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm findUniqueOrThrow
   */
  export type FarmFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm findFirst
   */
  export type FarmFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farms.
     */
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm findFirstOrThrow
   */
  export type FarmFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farm to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farms.
     */
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm findMany
   */
  export type FarmFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter, which Farms to fetch.
     */
    where?: FarmWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Farms to fetch.
     */
    orderBy?: FarmOrderByWithRelationInput | FarmOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Farms.
     */
    cursor?: FarmWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Farms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Farms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Farms.
     */
    distinct?: FarmScalarFieldEnum | FarmScalarFieldEnum[]
  }

  /**
   * Farm create
   */
  export type FarmCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The data needed to create a Farm.
     */
    data: XOR<FarmCreateInput, FarmUncheckedCreateInput>
  }

  /**
   * Farm createMany
   */
  export type FarmCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Farms.
     */
    data: FarmCreateManyInput | FarmCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Farm createManyAndReturn
   */
  export type FarmCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * The data used to create many Farms.
     */
    data: FarmCreateManyInput | FarmCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Farm update
   */
  export type FarmUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The data needed to update a Farm.
     */
    data: XOR<FarmUpdateInput, FarmUncheckedUpdateInput>
    /**
     * Choose, which Farm to update.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm updateMany
   */
  export type FarmUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Farms.
     */
    data: XOR<FarmUpdateManyMutationInput, FarmUncheckedUpdateManyInput>
    /**
     * Filter which Farms to update
     */
    where?: FarmWhereInput
    /**
     * Limit how many Farms to update.
     */
    limit?: number
  }

  /**
   * Farm updateManyAndReturn
   */
  export type FarmUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * The data used to update Farms.
     */
    data: XOR<FarmUpdateManyMutationInput, FarmUncheckedUpdateManyInput>
    /**
     * Filter which Farms to update
     */
    where?: FarmWhereInput
    /**
     * Limit how many Farms to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Farm upsert
   */
  export type FarmUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * The filter to search for the Farm to update in case it exists.
     */
    where: FarmWhereUniqueInput
    /**
     * In case the Farm found by the `where` argument doesn't exist, create a new Farm with this data.
     */
    create: XOR<FarmCreateInput, FarmUncheckedCreateInput>
    /**
     * In case the Farm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FarmUpdateInput, FarmUncheckedUpdateInput>
  }

  /**
   * Farm delete
   */
  export type FarmDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    /**
     * Filter which Farm to delete.
     */
    where: FarmWhereUniqueInput
  }

  /**
   * Farm deleteMany
   */
  export type FarmDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Farms to delete
     */
    where?: FarmWhereInput
    /**
     * Limit how many Farms to delete.
     */
    limit?: number
  }

  /**
   * Farm.products
   */
  export type Farm$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Farm.inventories
   */
  export type Farm$inventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Farm without action
   */
  export type FarmDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
  }


  /**
   * Model Distributor
   */

  export type AggregateDistributor = {
    _count: DistributorCountAggregateOutputType | null
    _avg: DistributorAvgAggregateOutputType | null
    _sum: DistributorSumAggregateOutputType | null
    _min: DistributorMinAggregateOutputType | null
    _max: DistributorMaxAggregateOutputType | null
  }

  export type DistributorAvgAggregateOutputType = {
    vehicleCount: number | null
    warehouseCount: number | null
  }

  export type DistributorSumAggregateOutputType = {
    vehicleCount: number | null
    warehouseCount: number | null
  }

  export type DistributorMinAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    address: string | null
    city: string | null
    province: string | null
    licenseNumber: string | null
    vehicleCount: number | null
    warehouseCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DistributorMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    address: string | null
    city: string | null
    province: string | null
    licenseNumber: string | null
    vehicleCount: number | null
    warehouseCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type DistributorCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    address: number
    city: number
    province: number
    licenseNumber: number
    vehicleCount: number
    warehouseCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type DistributorAvgAggregateInputType = {
    vehicleCount?: true
    warehouseCount?: true
  }

  export type DistributorSumAggregateInputType = {
    vehicleCount?: true
    warehouseCount?: true
  }

  export type DistributorMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    address?: true
    city?: true
    province?: true
    licenseNumber?: true
    vehicleCount?: true
    warehouseCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DistributorMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    address?: true
    city?: true
    province?: true
    licenseNumber?: true
    vehicleCount?: true
    warehouseCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type DistributorCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    address?: true
    city?: true
    province?: true
    licenseNumber?: true
    vehicleCount?: true
    warehouseCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type DistributorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distributor to aggregate.
     */
    where?: DistributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributors to fetch.
     */
    orderBy?: DistributorOrderByWithRelationInput | DistributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Distributors
    **/
    _count?: true | DistributorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DistributorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DistributorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistributorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistributorMaxAggregateInputType
  }

  export type GetDistributorAggregateType<T extends DistributorAggregateArgs> = {
        [P in keyof T & keyof AggregateDistributor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistributor[P]>
      : GetScalarType<T[P], AggregateDistributor[P]>
  }




  export type DistributorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorWhereInput
    orderBy?: DistributorOrderByWithAggregationInput | DistributorOrderByWithAggregationInput[]
    by: DistributorScalarFieldEnum[] | DistributorScalarFieldEnum
    having?: DistributorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistributorCountAggregateInputType | true
    _avg?: DistributorAvgAggregateInputType
    _sum?: DistributorSumAggregateInputType
    _min?: DistributorMinAggregateInputType
    _max?: DistributorMaxAggregateInputType
  }

  export type DistributorGroupByOutputType = {
    id: string
    userId: string
    companyName: string
    address: string
    city: string
    province: string
    licenseNumber: string | null
    vehicleCount: number
    warehouseCount: number
    createdAt: Date
    updatedAt: Date
    _count: DistributorCountAggregateOutputType | null
    _avg: DistributorAvgAggregateOutputType | null
    _sum: DistributorSumAggregateOutputType | null
    _min: DistributorMinAggregateOutputType | null
    _max: DistributorMaxAggregateOutputType | null
  }

  type GetDistributorGroupByPayload<T extends DistributorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistributorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistributorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistributorGroupByOutputType[P]>
            : GetScalarType<T[P], DistributorGroupByOutputType[P]>
        }
      >
    >


  export type DistributorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    licenseNumber?: boolean
    vehicleCount?: boolean
    warehouseCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    shipments?: boolean | Distributor$shipmentsArgs<ExtArgs>
    _count?: boolean | DistributorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributor"]>

  export type DistributorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    licenseNumber?: boolean
    vehicleCount?: boolean
    warehouseCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributor"]>

  export type DistributorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    licenseNumber?: boolean
    vehicleCount?: boolean
    warehouseCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributor"]>

  export type DistributorSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    licenseNumber?: boolean
    vehicleCount?: boolean
    warehouseCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type DistributorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyName" | "address" | "city" | "province" | "licenseNumber" | "vehicleCount" | "warehouseCount" | "createdAt" | "updatedAt", ExtArgs["result"]["distributor"]>
  export type DistributorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    shipments?: boolean | Distributor$shipmentsArgs<ExtArgs>
    _count?: boolean | DistributorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DistributorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DistributorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DistributorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Distributor"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      shipments: Prisma.$ShipmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      companyName: string
      address: string
      city: string
      province: string
      licenseNumber: string | null
      vehicleCount: number
      warehouseCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["distributor"]>
    composites: {}
  }

  type DistributorGetPayload<S extends boolean | null | undefined | DistributorDefaultArgs> = $Result.GetResult<Prisma.$DistributorPayload, S>

  type DistributorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistributorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DistributorCountAggregateInputType | true
    }

  export interface DistributorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Distributor'], meta: { name: 'Distributor' } }
    /**
     * Find zero or one Distributor that matches the filter.
     * @param {DistributorFindUniqueArgs} args - Arguments to find a Distributor
     * @example
     * // Get one Distributor
     * const distributor = await prisma.distributor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistributorFindUniqueArgs>(args: SelectSubset<T, DistributorFindUniqueArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Distributor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistributorFindUniqueOrThrowArgs} args - Arguments to find a Distributor
     * @example
     * // Get one Distributor
     * const distributor = await prisma.distributor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistributorFindUniqueOrThrowArgs>(args: SelectSubset<T, DistributorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distributor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorFindFirstArgs} args - Arguments to find a Distributor
     * @example
     * // Get one Distributor
     * const distributor = await prisma.distributor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistributorFindFirstArgs>(args?: SelectSubset<T, DistributorFindFirstArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Distributor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorFindFirstOrThrowArgs} args - Arguments to find a Distributor
     * @example
     * // Get one Distributor
     * const distributor = await prisma.distributor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistributorFindFirstOrThrowArgs>(args?: SelectSubset<T, DistributorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Distributors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Distributors
     * const distributors = await prisma.distributor.findMany()
     * 
     * // Get first 10 Distributors
     * const distributors = await prisma.distributor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distributorWithIdOnly = await prisma.distributor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistributorFindManyArgs>(args?: SelectSubset<T, DistributorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Distributor.
     * @param {DistributorCreateArgs} args - Arguments to create a Distributor.
     * @example
     * // Create one Distributor
     * const Distributor = await prisma.distributor.create({
     *   data: {
     *     // ... data to create a Distributor
     *   }
     * })
     * 
     */
    create<T extends DistributorCreateArgs>(args: SelectSubset<T, DistributorCreateArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Distributors.
     * @param {DistributorCreateManyArgs} args - Arguments to create many Distributors.
     * @example
     * // Create many Distributors
     * const distributor = await prisma.distributor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistributorCreateManyArgs>(args?: SelectSubset<T, DistributorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Distributors and returns the data saved in the database.
     * @param {DistributorCreateManyAndReturnArgs} args - Arguments to create many Distributors.
     * @example
     * // Create many Distributors
     * const distributor = await prisma.distributor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Distributors and only return the `id`
     * const distributorWithIdOnly = await prisma.distributor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistributorCreateManyAndReturnArgs>(args?: SelectSubset<T, DistributorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Distributor.
     * @param {DistributorDeleteArgs} args - Arguments to delete one Distributor.
     * @example
     * // Delete one Distributor
     * const Distributor = await prisma.distributor.delete({
     *   where: {
     *     // ... filter to delete one Distributor
     *   }
     * })
     * 
     */
    delete<T extends DistributorDeleteArgs>(args: SelectSubset<T, DistributorDeleteArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Distributor.
     * @param {DistributorUpdateArgs} args - Arguments to update one Distributor.
     * @example
     * // Update one Distributor
     * const distributor = await prisma.distributor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistributorUpdateArgs>(args: SelectSubset<T, DistributorUpdateArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Distributors.
     * @param {DistributorDeleteManyArgs} args - Arguments to filter Distributors to delete.
     * @example
     * // Delete a few Distributors
     * const { count } = await prisma.distributor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistributorDeleteManyArgs>(args?: SelectSubset<T, DistributorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distributors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Distributors
     * const distributor = await prisma.distributor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistributorUpdateManyArgs>(args: SelectSubset<T, DistributorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distributors and returns the data updated in the database.
     * @param {DistributorUpdateManyAndReturnArgs} args - Arguments to update many Distributors.
     * @example
     * // Update many Distributors
     * const distributor = await prisma.distributor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Distributors and only return the `id`
     * const distributorWithIdOnly = await prisma.distributor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DistributorUpdateManyAndReturnArgs>(args: SelectSubset<T, DistributorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Distributor.
     * @param {DistributorUpsertArgs} args - Arguments to update or create a Distributor.
     * @example
     * // Update or create a Distributor
     * const distributor = await prisma.distributor.upsert({
     *   create: {
     *     // ... data to create a Distributor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Distributor we want to update
     *   }
     * })
     */
    upsert<T extends DistributorUpsertArgs>(args: SelectSubset<T, DistributorUpsertArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Distributors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorCountArgs} args - Arguments to filter Distributors to count.
     * @example
     * // Count the number of Distributors
     * const count = await prisma.distributor.count({
     *   where: {
     *     // ... the filter for the Distributors we want to count
     *   }
     * })
    **/
    count<T extends DistributorCountArgs>(
      args?: Subset<T, DistributorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistributorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Distributor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DistributorAggregateArgs>(args: Subset<T, DistributorAggregateArgs>): Prisma.PrismaPromise<GetDistributorAggregateType<T>>

    /**
     * Group by Distributor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DistributorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistributorGroupByArgs['orderBy'] }
        : { orderBy?: DistributorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DistributorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistributorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Distributor model
   */
  readonly fields: DistributorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Distributor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistributorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    shipments<T extends Distributor$shipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Distributor$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Distributor model
   */
  interface DistributorFieldRefs {
    readonly id: FieldRef<"Distributor", 'String'>
    readonly userId: FieldRef<"Distributor", 'String'>
    readonly companyName: FieldRef<"Distributor", 'String'>
    readonly address: FieldRef<"Distributor", 'String'>
    readonly city: FieldRef<"Distributor", 'String'>
    readonly province: FieldRef<"Distributor", 'String'>
    readonly licenseNumber: FieldRef<"Distributor", 'String'>
    readonly vehicleCount: FieldRef<"Distributor", 'Int'>
    readonly warehouseCount: FieldRef<"Distributor", 'Int'>
    readonly createdAt: FieldRef<"Distributor", 'DateTime'>
    readonly updatedAt: FieldRef<"Distributor", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Distributor findUnique
   */
  export type DistributorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter, which Distributor to fetch.
     */
    where: DistributorWhereUniqueInput
  }

  /**
   * Distributor findUniqueOrThrow
   */
  export type DistributorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter, which Distributor to fetch.
     */
    where: DistributorWhereUniqueInput
  }

  /**
   * Distributor findFirst
   */
  export type DistributorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter, which Distributor to fetch.
     */
    where?: DistributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributors to fetch.
     */
    orderBy?: DistributorOrderByWithRelationInput | DistributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distributors.
     */
    cursor?: DistributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distributors.
     */
    distinct?: DistributorScalarFieldEnum | DistributorScalarFieldEnum[]
  }

  /**
   * Distributor findFirstOrThrow
   */
  export type DistributorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter, which Distributor to fetch.
     */
    where?: DistributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributors to fetch.
     */
    orderBy?: DistributorOrderByWithRelationInput | DistributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distributors.
     */
    cursor?: DistributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distributors.
     */
    distinct?: DistributorScalarFieldEnum | DistributorScalarFieldEnum[]
  }

  /**
   * Distributor findMany
   */
  export type DistributorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter, which Distributors to fetch.
     */
    where?: DistributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributors to fetch.
     */
    orderBy?: DistributorOrderByWithRelationInput | DistributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Distributors.
     */
    cursor?: DistributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distributors.
     */
    distinct?: DistributorScalarFieldEnum | DistributorScalarFieldEnum[]
  }

  /**
   * Distributor create
   */
  export type DistributorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * The data needed to create a Distributor.
     */
    data: XOR<DistributorCreateInput, DistributorUncheckedCreateInput>
  }

  /**
   * Distributor createMany
   */
  export type DistributorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Distributors.
     */
    data: DistributorCreateManyInput | DistributorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Distributor createManyAndReturn
   */
  export type DistributorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * The data used to create many Distributors.
     */
    data: DistributorCreateManyInput | DistributorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distributor update
   */
  export type DistributorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * The data needed to update a Distributor.
     */
    data: XOR<DistributorUpdateInput, DistributorUncheckedUpdateInput>
    /**
     * Choose, which Distributor to update.
     */
    where: DistributorWhereUniqueInput
  }

  /**
   * Distributor updateMany
   */
  export type DistributorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Distributors.
     */
    data: XOR<DistributorUpdateManyMutationInput, DistributorUncheckedUpdateManyInput>
    /**
     * Filter which Distributors to update
     */
    where?: DistributorWhereInput
    /**
     * Limit how many Distributors to update.
     */
    limit?: number
  }

  /**
   * Distributor updateManyAndReturn
   */
  export type DistributorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * The data used to update Distributors.
     */
    data: XOR<DistributorUpdateManyMutationInput, DistributorUncheckedUpdateManyInput>
    /**
     * Filter which Distributors to update
     */
    where?: DistributorWhereInput
    /**
     * Limit how many Distributors to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distributor upsert
   */
  export type DistributorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * The filter to search for the Distributor to update in case it exists.
     */
    where: DistributorWhereUniqueInput
    /**
     * In case the Distributor found by the `where` argument doesn't exist, create a new Distributor with this data.
     */
    create: XOR<DistributorCreateInput, DistributorUncheckedCreateInput>
    /**
     * In case the Distributor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistributorUpdateInput, DistributorUncheckedUpdateInput>
  }

  /**
   * Distributor delete
   */
  export type DistributorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter which Distributor to delete.
     */
    where: DistributorWhereUniqueInput
  }

  /**
   * Distributor deleteMany
   */
  export type DistributorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distributors to delete
     */
    where?: DistributorWhereInput
    /**
     * Limit how many Distributors to delete.
     */
    limit?: number
  }

  /**
   * Distributor.shipments
   */
  export type Distributor$shipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Distributor without action
   */
  export type DistributorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
  }


  /**
   * Model Retailer
   */

  export type AggregateRetailer = {
    _count: RetailerCountAggregateOutputType | null
    _min: RetailerMinAggregateOutputType | null
    _max: RetailerMaxAggregateOutputType | null
  }

  export type RetailerMinAggregateOutputType = {
    id: string | null
    userId: string | null
    storeName: string | null
    address: string | null
    city: string | null
    province: string | null
    storeType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RetailerMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    storeName: string | null
    address: string | null
    city: string | null
    province: string | null
    storeType: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RetailerCountAggregateOutputType = {
    id: number
    userId: number
    storeName: number
    address: number
    city: number
    province: number
    storeType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RetailerMinAggregateInputType = {
    id?: true
    userId?: true
    storeName?: true
    address?: true
    city?: true
    province?: true
    storeType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RetailerMaxAggregateInputType = {
    id?: true
    userId?: true
    storeName?: true
    address?: true
    city?: true
    province?: true
    storeType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RetailerCountAggregateInputType = {
    id?: true
    userId?: true
    storeName?: true
    address?: true
    city?: true
    province?: true
    storeType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RetailerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Retailer to aggregate.
     */
    where?: RetailerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Retailers to fetch.
     */
    orderBy?: RetailerOrderByWithRelationInput | RetailerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RetailerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Retailers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Retailers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Retailers
    **/
    _count?: true | RetailerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RetailerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RetailerMaxAggregateInputType
  }

  export type GetRetailerAggregateType<T extends RetailerAggregateArgs> = {
        [P in keyof T & keyof AggregateRetailer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRetailer[P]>
      : GetScalarType<T[P], AggregateRetailer[P]>
  }




  export type RetailerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RetailerWhereInput
    orderBy?: RetailerOrderByWithAggregationInput | RetailerOrderByWithAggregationInput[]
    by: RetailerScalarFieldEnum[] | RetailerScalarFieldEnum
    having?: RetailerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RetailerCountAggregateInputType | true
    _min?: RetailerMinAggregateInputType
    _max?: RetailerMaxAggregateInputType
  }

  export type RetailerGroupByOutputType = {
    id: string
    userId: string
    storeName: string
    address: string
    city: string
    province: string
    storeType: string | null
    createdAt: Date
    updatedAt: Date
    _count: RetailerCountAggregateOutputType | null
    _min: RetailerMinAggregateOutputType | null
    _max: RetailerMaxAggregateOutputType | null
  }

  type GetRetailerGroupByPayload<T extends RetailerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RetailerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RetailerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RetailerGroupByOutputType[P]>
            : GetScalarType<T[P], RetailerGroupByOutputType[P]>
        }
      >
    >


  export type RetailerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storeName?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    storeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    inventories?: boolean | Retailer$inventoriesArgs<ExtArgs>
    _count?: boolean | RetailerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["retailer"]>

  export type RetailerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storeName?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    storeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["retailer"]>

  export type RetailerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    storeName?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    storeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["retailer"]>

  export type RetailerSelectScalar = {
    id?: boolean
    userId?: boolean
    storeName?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    storeType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RetailerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "storeName" | "address" | "city" | "province" | "storeType" | "createdAt" | "updatedAt", ExtArgs["result"]["retailer"]>
  export type RetailerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    inventories?: boolean | Retailer$inventoriesArgs<ExtArgs>
    _count?: boolean | RetailerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RetailerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RetailerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RetailerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Retailer"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      inventories: Prisma.$InventoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      storeName: string
      address: string
      city: string
      province: string
      storeType: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["retailer"]>
    composites: {}
  }

  type RetailerGetPayload<S extends boolean | null | undefined | RetailerDefaultArgs> = $Result.GetResult<Prisma.$RetailerPayload, S>

  type RetailerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RetailerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RetailerCountAggregateInputType | true
    }

  export interface RetailerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Retailer'], meta: { name: 'Retailer' } }
    /**
     * Find zero or one Retailer that matches the filter.
     * @param {RetailerFindUniqueArgs} args - Arguments to find a Retailer
     * @example
     * // Get one Retailer
     * const retailer = await prisma.retailer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RetailerFindUniqueArgs>(args: SelectSubset<T, RetailerFindUniqueArgs<ExtArgs>>): Prisma__RetailerClient<$Result.GetResult<Prisma.$RetailerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Retailer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RetailerFindUniqueOrThrowArgs} args - Arguments to find a Retailer
     * @example
     * // Get one Retailer
     * const retailer = await prisma.retailer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RetailerFindUniqueOrThrowArgs>(args: SelectSubset<T, RetailerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RetailerClient<$Result.GetResult<Prisma.$RetailerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Retailer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetailerFindFirstArgs} args - Arguments to find a Retailer
     * @example
     * // Get one Retailer
     * const retailer = await prisma.retailer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RetailerFindFirstArgs>(args?: SelectSubset<T, RetailerFindFirstArgs<ExtArgs>>): Prisma__RetailerClient<$Result.GetResult<Prisma.$RetailerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Retailer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetailerFindFirstOrThrowArgs} args - Arguments to find a Retailer
     * @example
     * // Get one Retailer
     * const retailer = await prisma.retailer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RetailerFindFirstOrThrowArgs>(args?: SelectSubset<T, RetailerFindFirstOrThrowArgs<ExtArgs>>): Prisma__RetailerClient<$Result.GetResult<Prisma.$RetailerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Retailers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetailerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Retailers
     * const retailers = await prisma.retailer.findMany()
     * 
     * // Get first 10 Retailers
     * const retailers = await prisma.retailer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const retailerWithIdOnly = await prisma.retailer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RetailerFindManyArgs>(args?: SelectSubset<T, RetailerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RetailerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Retailer.
     * @param {RetailerCreateArgs} args - Arguments to create a Retailer.
     * @example
     * // Create one Retailer
     * const Retailer = await prisma.retailer.create({
     *   data: {
     *     // ... data to create a Retailer
     *   }
     * })
     * 
     */
    create<T extends RetailerCreateArgs>(args: SelectSubset<T, RetailerCreateArgs<ExtArgs>>): Prisma__RetailerClient<$Result.GetResult<Prisma.$RetailerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Retailers.
     * @param {RetailerCreateManyArgs} args - Arguments to create many Retailers.
     * @example
     * // Create many Retailers
     * const retailer = await prisma.retailer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RetailerCreateManyArgs>(args?: SelectSubset<T, RetailerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Retailers and returns the data saved in the database.
     * @param {RetailerCreateManyAndReturnArgs} args - Arguments to create many Retailers.
     * @example
     * // Create many Retailers
     * const retailer = await prisma.retailer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Retailers and only return the `id`
     * const retailerWithIdOnly = await prisma.retailer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RetailerCreateManyAndReturnArgs>(args?: SelectSubset<T, RetailerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RetailerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Retailer.
     * @param {RetailerDeleteArgs} args - Arguments to delete one Retailer.
     * @example
     * // Delete one Retailer
     * const Retailer = await prisma.retailer.delete({
     *   where: {
     *     // ... filter to delete one Retailer
     *   }
     * })
     * 
     */
    delete<T extends RetailerDeleteArgs>(args: SelectSubset<T, RetailerDeleteArgs<ExtArgs>>): Prisma__RetailerClient<$Result.GetResult<Prisma.$RetailerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Retailer.
     * @param {RetailerUpdateArgs} args - Arguments to update one Retailer.
     * @example
     * // Update one Retailer
     * const retailer = await prisma.retailer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RetailerUpdateArgs>(args: SelectSubset<T, RetailerUpdateArgs<ExtArgs>>): Prisma__RetailerClient<$Result.GetResult<Prisma.$RetailerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Retailers.
     * @param {RetailerDeleteManyArgs} args - Arguments to filter Retailers to delete.
     * @example
     * // Delete a few Retailers
     * const { count } = await prisma.retailer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RetailerDeleteManyArgs>(args?: SelectSubset<T, RetailerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Retailers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetailerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Retailers
     * const retailer = await prisma.retailer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RetailerUpdateManyArgs>(args: SelectSubset<T, RetailerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Retailers and returns the data updated in the database.
     * @param {RetailerUpdateManyAndReturnArgs} args - Arguments to update many Retailers.
     * @example
     * // Update many Retailers
     * const retailer = await prisma.retailer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Retailers and only return the `id`
     * const retailerWithIdOnly = await prisma.retailer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RetailerUpdateManyAndReturnArgs>(args: SelectSubset<T, RetailerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RetailerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Retailer.
     * @param {RetailerUpsertArgs} args - Arguments to update or create a Retailer.
     * @example
     * // Update or create a Retailer
     * const retailer = await prisma.retailer.upsert({
     *   create: {
     *     // ... data to create a Retailer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Retailer we want to update
     *   }
     * })
     */
    upsert<T extends RetailerUpsertArgs>(args: SelectSubset<T, RetailerUpsertArgs<ExtArgs>>): Prisma__RetailerClient<$Result.GetResult<Prisma.$RetailerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Retailers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetailerCountArgs} args - Arguments to filter Retailers to count.
     * @example
     * // Count the number of Retailers
     * const count = await prisma.retailer.count({
     *   where: {
     *     // ... the filter for the Retailers we want to count
     *   }
     * })
    **/
    count<T extends RetailerCountArgs>(
      args?: Subset<T, RetailerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RetailerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Retailer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetailerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RetailerAggregateArgs>(args: Subset<T, RetailerAggregateArgs>): Prisma.PrismaPromise<GetRetailerAggregateType<T>>

    /**
     * Group by Retailer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RetailerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RetailerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RetailerGroupByArgs['orderBy'] }
        : { orderBy?: RetailerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RetailerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRetailerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Retailer model
   */
  readonly fields: RetailerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Retailer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RetailerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventories<T extends Retailer$inventoriesArgs<ExtArgs> = {}>(args?: Subset<T, Retailer$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Retailer model
   */
  interface RetailerFieldRefs {
    readonly id: FieldRef<"Retailer", 'String'>
    readonly userId: FieldRef<"Retailer", 'String'>
    readonly storeName: FieldRef<"Retailer", 'String'>
    readonly address: FieldRef<"Retailer", 'String'>
    readonly city: FieldRef<"Retailer", 'String'>
    readonly province: FieldRef<"Retailer", 'String'>
    readonly storeType: FieldRef<"Retailer", 'String'>
    readonly createdAt: FieldRef<"Retailer", 'DateTime'>
    readonly updatedAt: FieldRef<"Retailer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Retailer findUnique
   */
  export type RetailerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retailer
     */
    select?: RetailerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Retailer
     */
    omit?: RetailerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetailerInclude<ExtArgs> | null
    /**
     * Filter, which Retailer to fetch.
     */
    where: RetailerWhereUniqueInput
  }

  /**
   * Retailer findUniqueOrThrow
   */
  export type RetailerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retailer
     */
    select?: RetailerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Retailer
     */
    omit?: RetailerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetailerInclude<ExtArgs> | null
    /**
     * Filter, which Retailer to fetch.
     */
    where: RetailerWhereUniqueInput
  }

  /**
   * Retailer findFirst
   */
  export type RetailerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retailer
     */
    select?: RetailerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Retailer
     */
    omit?: RetailerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetailerInclude<ExtArgs> | null
    /**
     * Filter, which Retailer to fetch.
     */
    where?: RetailerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Retailers to fetch.
     */
    orderBy?: RetailerOrderByWithRelationInput | RetailerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Retailers.
     */
    cursor?: RetailerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Retailers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Retailers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Retailers.
     */
    distinct?: RetailerScalarFieldEnum | RetailerScalarFieldEnum[]
  }

  /**
   * Retailer findFirstOrThrow
   */
  export type RetailerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retailer
     */
    select?: RetailerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Retailer
     */
    omit?: RetailerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetailerInclude<ExtArgs> | null
    /**
     * Filter, which Retailer to fetch.
     */
    where?: RetailerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Retailers to fetch.
     */
    orderBy?: RetailerOrderByWithRelationInput | RetailerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Retailers.
     */
    cursor?: RetailerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Retailers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Retailers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Retailers.
     */
    distinct?: RetailerScalarFieldEnum | RetailerScalarFieldEnum[]
  }

  /**
   * Retailer findMany
   */
  export type RetailerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retailer
     */
    select?: RetailerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Retailer
     */
    omit?: RetailerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetailerInclude<ExtArgs> | null
    /**
     * Filter, which Retailers to fetch.
     */
    where?: RetailerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Retailers to fetch.
     */
    orderBy?: RetailerOrderByWithRelationInput | RetailerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Retailers.
     */
    cursor?: RetailerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Retailers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Retailers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Retailers.
     */
    distinct?: RetailerScalarFieldEnum | RetailerScalarFieldEnum[]
  }

  /**
   * Retailer create
   */
  export type RetailerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retailer
     */
    select?: RetailerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Retailer
     */
    omit?: RetailerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetailerInclude<ExtArgs> | null
    /**
     * The data needed to create a Retailer.
     */
    data: XOR<RetailerCreateInput, RetailerUncheckedCreateInput>
  }

  /**
   * Retailer createMany
   */
  export type RetailerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Retailers.
     */
    data: RetailerCreateManyInput | RetailerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Retailer createManyAndReturn
   */
  export type RetailerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retailer
     */
    select?: RetailerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Retailer
     */
    omit?: RetailerOmit<ExtArgs> | null
    /**
     * The data used to create many Retailers.
     */
    data: RetailerCreateManyInput | RetailerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetailerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Retailer update
   */
  export type RetailerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retailer
     */
    select?: RetailerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Retailer
     */
    omit?: RetailerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetailerInclude<ExtArgs> | null
    /**
     * The data needed to update a Retailer.
     */
    data: XOR<RetailerUpdateInput, RetailerUncheckedUpdateInput>
    /**
     * Choose, which Retailer to update.
     */
    where: RetailerWhereUniqueInput
  }

  /**
   * Retailer updateMany
   */
  export type RetailerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Retailers.
     */
    data: XOR<RetailerUpdateManyMutationInput, RetailerUncheckedUpdateManyInput>
    /**
     * Filter which Retailers to update
     */
    where?: RetailerWhereInput
    /**
     * Limit how many Retailers to update.
     */
    limit?: number
  }

  /**
   * Retailer updateManyAndReturn
   */
  export type RetailerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retailer
     */
    select?: RetailerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Retailer
     */
    omit?: RetailerOmit<ExtArgs> | null
    /**
     * The data used to update Retailers.
     */
    data: XOR<RetailerUpdateManyMutationInput, RetailerUncheckedUpdateManyInput>
    /**
     * Filter which Retailers to update
     */
    where?: RetailerWhereInput
    /**
     * Limit how many Retailers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetailerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Retailer upsert
   */
  export type RetailerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retailer
     */
    select?: RetailerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Retailer
     */
    omit?: RetailerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetailerInclude<ExtArgs> | null
    /**
     * The filter to search for the Retailer to update in case it exists.
     */
    where: RetailerWhereUniqueInput
    /**
     * In case the Retailer found by the `where` argument doesn't exist, create a new Retailer with this data.
     */
    create: XOR<RetailerCreateInput, RetailerUncheckedCreateInput>
    /**
     * In case the Retailer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RetailerUpdateInput, RetailerUncheckedUpdateInput>
  }

  /**
   * Retailer delete
   */
  export type RetailerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retailer
     */
    select?: RetailerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Retailer
     */
    omit?: RetailerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetailerInclude<ExtArgs> | null
    /**
     * Filter which Retailer to delete.
     */
    where: RetailerWhereUniqueInput
  }

  /**
   * Retailer deleteMany
   */
  export type RetailerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Retailers to delete
     */
    where?: RetailerWhereInput
    /**
     * Limit how many Retailers to delete.
     */
    limit?: number
  }

  /**
   * Retailer.inventories
   */
  export type Retailer$inventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Retailer without action
   */
  export type RetailerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retailer
     */
    select?: RetailerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Retailer
     */
    omit?: RetailerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetailerInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    unitPrice: number | null
  }

  export type ProductSumAggregateOutputType = {
    unitPrice: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    farmId: string | null
    name: string | null
    description: string | null
    category: string | null
    unit: string | null
    unitPrice: number | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    farmId: string | null
    name: string | null
    description: string | null
    category: string | null
    unit: string | null
    unitPrice: number | null
    imageUrl: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    farmId: number
    name: number
    description: number
    category: number
    unit: number
    unitPrice: number
    imageUrl: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    unitPrice?: true
  }

  export type ProductSumAggregateInputType = {
    unitPrice?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    farmId?: true
    name?: true
    description?: true
    category?: true
    unit?: true
    unitPrice?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    farmId?: true
    name?: true
    description?: true
    category?: true
    unit?: true
    unitPrice?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    farmId?: true
    name?: true
    description?: true
    category?: true
    unit?: true
    unitPrice?: true
    imageUrl?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    farmId: string
    name: string
    description: string | null
    category: string
    unit: string
    unitPrice: number
    imageUrl: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    unit?: boolean
    unitPrice?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farm?: boolean | FarmDefaultArgs<ExtArgs>
    inventories?: boolean | Product$inventoriesArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    unit?: boolean
    unitPrice?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    farmId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    unit?: boolean
    unitPrice?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    farmId?: boolean
    name?: boolean
    description?: boolean
    category?: boolean
    unit?: boolean
    unitPrice?: boolean
    imageUrl?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "farmId" | "name" | "description" | "category" | "unit" | "unitPrice" | "imageUrl" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | FarmDefaultArgs<ExtArgs>
    inventories?: boolean | Product$inventoriesArgs<ExtArgs>
    orderItems?: boolean | Product$orderItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    farm?: boolean | FarmDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      farm: Prisma.$FarmPayload<ExtArgs>
      inventories: Prisma.$InventoryPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      farmId: string
      name: string
      description: string | null
      category: string
      unit: string
      unitPrice: number
      imageUrl: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    farm<T extends FarmDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FarmDefaultArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    inventories<T extends Product$inventoriesArgs<ExtArgs> = {}>(args?: Subset<T, Product$inventoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends Product$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly farmId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly unit: FieldRef<"Product", 'String'>
    readonly unitPrice: FieldRef<"Product", 'Float'>
    readonly imageUrl: FieldRef<"Product", 'String'>
    readonly isActive: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.inventories
   */
  export type Product$inventoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Product.orderItems
   */
  export type Product$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    quantity: number | null
  }

  export type InventorySumAggregateOutputType = {
    quantity: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: string | null
    productId: string | null
    farmId: string | null
    retailerId: string | null
    quantity: number | null
    batchNumber: string | null
    harvestDate: Date | null
    expiryDate: Date | null
    qualityGrade: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    farmId: string | null
    retailerId: string | null
    quantity: number | null
    batchNumber: string | null
    harvestDate: Date | null
    expiryDate: Date | null
    qualityGrade: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    productId: number
    farmId: number
    retailerId: number
    quantity: number
    batchNumber: number
    harvestDate: number
    expiryDate: number
    qualityGrade: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    quantity?: true
  }

  export type InventorySumAggregateInputType = {
    quantity?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    productId?: true
    farmId?: true
    retailerId?: true
    quantity?: true
    batchNumber?: true
    harvestDate?: true
    expiryDate?: true
    qualityGrade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    productId?: true
    farmId?: true
    retailerId?: true
    quantity?: true
    batchNumber?: true
    harvestDate?: true
    expiryDate?: true
    qualityGrade?: true
    createdAt?: true
    updatedAt?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    productId?: true
    farmId?: true
    retailerId?: true
    quantity?: true
    batchNumber?: true
    harvestDate?: true
    expiryDate?: true
    qualityGrade?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: string
    productId: string
    farmId: string | null
    retailerId: string | null
    quantity: number
    batchNumber: string
    harvestDate: Date | null
    expiryDate: Date | null
    qualityGrade: string | null
    createdAt: Date
    updatedAt: Date
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    farmId?: boolean
    retailerId?: boolean
    quantity?: boolean
    batchNumber?: boolean
    harvestDate?: boolean
    expiryDate?: boolean
    qualityGrade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    farm?: boolean | Inventory$farmArgs<ExtArgs>
    retailer?: boolean | Inventory$retailerArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    farmId?: boolean
    retailerId?: boolean
    quantity?: boolean
    batchNumber?: boolean
    harvestDate?: boolean
    expiryDate?: boolean
    qualityGrade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    farm?: boolean | Inventory$farmArgs<ExtArgs>
    retailer?: boolean | Inventory$retailerArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    farmId?: boolean
    retailerId?: boolean
    quantity?: boolean
    batchNumber?: boolean
    harvestDate?: boolean
    expiryDate?: boolean
    qualityGrade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    farm?: boolean | Inventory$farmArgs<ExtArgs>
    retailer?: boolean | Inventory$retailerArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    id?: boolean
    productId?: boolean
    farmId?: boolean
    retailerId?: boolean
    quantity?: boolean
    batchNumber?: boolean
    harvestDate?: boolean
    expiryDate?: boolean
    qualityGrade?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type InventoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "farmId" | "retailerId" | "quantity" | "batchNumber" | "harvestDate" | "expiryDate" | "qualityGrade" | "createdAt" | "updatedAt", ExtArgs["result"]["inventory"]>
  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    farm?: boolean | Inventory$farmArgs<ExtArgs>
    retailer?: boolean | Inventory$retailerArgs<ExtArgs>
  }
  export type InventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    farm?: boolean | Inventory$farmArgs<ExtArgs>
    retailer?: boolean | Inventory$retailerArgs<ExtArgs>
  }
  export type InventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    farm?: boolean | Inventory$farmArgs<ExtArgs>
    retailer?: boolean | Inventory$retailerArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      farm: Prisma.$FarmPayload<ExtArgs> | null
      retailer: Prisma.$RetailerPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      farmId: string | null
      retailerId: string | null
      quantity: number
      batchNumber: string
      harvestDate: Date | null
      expiryDate: Date | null
      qualityGrade: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {InventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    farm<T extends Inventory$farmArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$farmArgs<ExtArgs>>): Prisma__FarmClient<$Result.GetResult<Prisma.$FarmPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    retailer<T extends Inventory$retailerArgs<ExtArgs> = {}>(args?: Subset<T, Inventory$retailerArgs<ExtArgs>>): Prisma__RetailerClient<$Result.GetResult<Prisma.$RetailerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventory model
   */
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'String'>
    readonly productId: FieldRef<"Inventory", 'String'>
    readonly farmId: FieldRef<"Inventory", 'String'>
    readonly retailerId: FieldRef<"Inventory", 'String'>
    readonly quantity: FieldRef<"Inventory", 'Float'>
    readonly batchNumber: FieldRef<"Inventory", 'String'>
    readonly harvestDate: FieldRef<"Inventory", 'DateTime'>
    readonly expiryDate: FieldRef<"Inventory", 'DateTime'>
    readonly qualityGrade: FieldRef<"Inventory", 'String'>
    readonly createdAt: FieldRef<"Inventory", 'DateTime'>
    readonly updatedAt: FieldRef<"Inventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventory createManyAndReturn
   */
  export type InventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
  }

  /**
   * Inventory updateManyAndReturn
   */
  export type InventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
    /**
     * Limit how many Inventories to delete.
     */
    limit?: number
  }

  /**
   * Inventory.farm
   */
  export type Inventory$farmArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Farm
     */
    select?: FarmSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Farm
     */
    omit?: FarmOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FarmInclude<ExtArgs> | null
    where?: FarmWhereInput
  }

  /**
   * Inventory.retailer
   */
  export type Inventory$retailerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Retailer
     */
    select?: RetailerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Retailer
     */
    omit?: RetailerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RetailerInclude<ExtArgs> | null
    where?: RetailerWhereInput
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Inventory
     */
    omit?: InventoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    totalAmount: number | null
  }

  export type OrderSumAggregateOutputType = {
    totalAmount: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    buyerId: string | null
    sellerId: string | null
    status: $Enums.OrderStatus | null
    totalAmount: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    buyerId: string | null
    sellerId: string | null
    status: $Enums.OrderStatus | null
    totalAmount: number | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    buyerId: number
    sellerId: number
    status: number
    totalAmount: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    totalAmount?: true
  }

  export type OrderSumAggregateInputType = {
    totalAmount?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    buyerId?: true
    sellerId?: true
    status?: true
    totalAmount?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    buyerId?: true
    sellerId?: true
    status?: true
    totalAmount?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    buyerId?: true
    sellerId?: true
    status?: true
    totalAmount?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    orderNumber: string
    buyerId: string
    sellerId: string
    status: $Enums.OrderStatus
    totalAmount: number
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    buyerId?: boolean
    sellerId?: boolean
    status?: boolean
    totalAmount?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    shipment?: boolean | Order$shipmentArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    buyerId?: boolean
    sellerId?: boolean
    status?: boolean
    totalAmount?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    buyerId?: boolean
    sellerId?: boolean
    status?: boolean
    totalAmount?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    buyerId?: boolean
    sellerId?: boolean
    status?: boolean
    totalAmount?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "buyerId" | "sellerId" | "status" | "totalAmount" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    shipment?: boolean | Order$shipmentArgs<ExtArgs>
    payment?: boolean | Order$paymentArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    buyer?: boolean | UserDefaultArgs<ExtArgs>
    seller?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      buyer: Prisma.$UserPayload<ExtArgs>
      seller: Prisma.$UserPayload<ExtArgs>
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      shipment: Prisma.$ShipmentPayload<ExtArgs> | null
      payment: Prisma.$PaymentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: string
      buyerId: string
      sellerId: string
      status: $Enums.OrderStatus
      totalAmount: number
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    shipment<T extends Order$shipmentArgs<ExtArgs> = {}>(args?: Subset<T, Order$shipmentArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    payment<T extends Order$paymentArgs<ExtArgs> = {}>(args?: Subset<T, Order$paymentArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly buyerId: FieldRef<"Order", 'String'>
    readonly sellerId: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly totalAmount: FieldRef<"Order", 'Float'>
    readonly notes: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order.shipment
   */
  export type Order$shipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
  }

  /**
   * Order.payment
   */
  export type Order$paymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
    createdAt: Date | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    productId: string | null
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
    createdAt: Date | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    orderId: number
    productId: number
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type OrderItemSumAggregateInputType = {
    quantity?: true
    unitPrice?: true
    subtotal?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    createdAt?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    createdAt?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    orderId?: true
    productId?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    createdAt?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    orderId: string
    productId: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt: Date
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    orderId?: boolean
    productId?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    createdAt?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "productId" | "quantity" | "unitPrice" | "subtotal" | "createdAt", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      productId: string
      quantity: number
      unitPrice: number
      subtotal: number
      createdAt: Date
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly productId: FieldRef<"OrderItem", 'String'>
    readonly quantity: FieldRef<"OrderItem", 'Float'>
    readonly unitPrice: FieldRef<"OrderItem", 'Float'>
    readonly subtotal: FieldRef<"OrderItem", 'Float'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Shipment
   */

  export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  export type ShipmentMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    distributorId: string | null
    trackingNumber: string | null
    status: $Enums.ShipmentStatus | null
    pickupAddress: string | null
    deliveryAddress: string | null
    estimatedPickup: Date | null
    actualPickup: Date | null
    estimatedDelivery: Date | null
    actualDelivery: Date | null
    driverName: string | null
    vehicleNumber: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShipmentMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    distributorId: string | null
    trackingNumber: string | null
    status: $Enums.ShipmentStatus | null
    pickupAddress: string | null
    deliveryAddress: string | null
    estimatedPickup: Date | null
    actualPickup: Date | null
    estimatedDelivery: Date | null
    actualDelivery: Date | null
    driverName: string | null
    vehicleNumber: string | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShipmentCountAggregateOutputType = {
    id: number
    orderId: number
    distributorId: number
    trackingNumber: number
    status: number
    pickupAddress: number
    deliveryAddress: number
    estimatedPickup: number
    actualPickup: number
    estimatedDelivery: number
    actualDelivery: number
    driverName: number
    vehicleNumber: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShipmentMinAggregateInputType = {
    id?: true
    orderId?: true
    distributorId?: true
    trackingNumber?: true
    status?: true
    pickupAddress?: true
    deliveryAddress?: true
    estimatedPickup?: true
    actualPickup?: true
    estimatedDelivery?: true
    actualDelivery?: true
    driverName?: true
    vehicleNumber?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShipmentMaxAggregateInputType = {
    id?: true
    orderId?: true
    distributorId?: true
    trackingNumber?: true
    status?: true
    pickupAddress?: true
    deliveryAddress?: true
    estimatedPickup?: true
    actualPickup?: true
    estimatedDelivery?: true
    actualDelivery?: true
    driverName?: true
    vehicleNumber?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShipmentCountAggregateInputType = {
    id?: true
    orderId?: true
    distributorId?: true
    trackingNumber?: true
    status?: true
    pickupAddress?: true
    deliveryAddress?: true
    estimatedPickup?: true
    actualPickup?: true
    estimatedDelivery?: true
    actualDelivery?: true
    driverName?: true
    vehicleNumber?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipment to aggregate.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shipments
    **/
    _count?: true | ShipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentMaxAggregateInputType
  }

  export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipment[P]>
      : GetScalarType<T[P], AggregateShipment[P]>
  }




  export type ShipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithAggregationInput | ShipmentOrderByWithAggregationInput[]
    by: ShipmentScalarFieldEnum[] | ShipmentScalarFieldEnum
    having?: ShipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentCountAggregateInputType | true
    _min?: ShipmentMinAggregateInputType
    _max?: ShipmentMaxAggregateInputType
  }

  export type ShipmentGroupByOutputType = {
    id: string
    orderId: string
    distributorId: string | null
    trackingNumber: string
    status: $Enums.ShipmentStatus
    pickupAddress: string
    deliveryAddress: string
    estimatedPickup: Date | null
    actualPickup: Date | null
    estimatedDelivery: Date | null
    actualDelivery: Date | null
    driverName: string | null
    vehicleNumber: string | null
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: ShipmentCountAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    distributorId?: boolean
    trackingNumber?: boolean
    status?: boolean
    pickupAddress?: boolean
    deliveryAddress?: boolean
    estimatedPickup?: boolean
    actualPickup?: boolean
    estimatedDelivery?: boolean
    actualDelivery?: boolean
    driverName?: boolean
    vehicleNumber?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    distributor?: boolean | Shipment$distributorArgs<ExtArgs>
    trackingHistory?: boolean | Shipment$trackingHistoryArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    distributorId?: boolean
    trackingNumber?: boolean
    status?: boolean
    pickupAddress?: boolean
    deliveryAddress?: boolean
    estimatedPickup?: boolean
    actualPickup?: boolean
    estimatedDelivery?: boolean
    actualDelivery?: boolean
    driverName?: boolean
    vehicleNumber?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    distributor?: boolean | Shipment$distributorArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    distributorId?: boolean
    trackingNumber?: boolean
    status?: boolean
    pickupAddress?: boolean
    deliveryAddress?: boolean
    estimatedPickup?: boolean
    actualPickup?: boolean
    estimatedDelivery?: boolean
    actualDelivery?: boolean
    driverName?: boolean
    vehicleNumber?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    distributor?: boolean | Shipment$distributorArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectScalar = {
    id?: boolean
    orderId?: boolean
    distributorId?: boolean
    trackingNumber?: boolean
    status?: boolean
    pickupAddress?: boolean
    deliveryAddress?: boolean
    estimatedPickup?: boolean
    actualPickup?: boolean
    estimatedDelivery?: boolean
    actualDelivery?: boolean
    driverName?: boolean
    vehicleNumber?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShipmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "distributorId" | "trackingNumber" | "status" | "pickupAddress" | "deliveryAddress" | "estimatedPickup" | "actualPickup" | "estimatedDelivery" | "actualDelivery" | "driverName" | "vehicleNumber" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["shipment"]>
  export type ShipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    distributor?: boolean | Shipment$distributorArgs<ExtArgs>
    trackingHistory?: boolean | Shipment$trackingHistoryArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    distributor?: boolean | Shipment$distributorArgs<ExtArgs>
  }
  export type ShipmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    distributor?: boolean | Shipment$distributorArgs<ExtArgs>
  }

  export type $ShipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipment"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      distributor: Prisma.$DistributorPayload<ExtArgs> | null
      trackingHistory: Prisma.$TrackingHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      distributorId: string | null
      trackingNumber: string
      status: $Enums.ShipmentStatus
      pickupAddress: string
      deliveryAddress: string
      estimatedPickup: Date | null
      actualPickup: Date | null
      estimatedDelivery: Date | null
      actualDelivery: Date | null
      driverName: string | null
      vehicleNumber: string | null
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shipment"]>
    composites: {}
  }

  type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = $Result.GetResult<Prisma.$ShipmentPayload, S>

  type ShipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShipmentCountAggregateInputType | true
    }

  export interface ShipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipment'], meta: { name: 'Shipment' } }
    /**
     * Find zero or one Shipment that matches the filter.
     * @param {ShipmentFindUniqueArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentFindUniqueArgs>(args: SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shipment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShipmentFindUniqueOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentFindFirstArgs>(args?: SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipments
     * const shipments = await prisma.shipment.findMany()
     * 
     * // Get first 10 Shipments
     * const shipments = await prisma.shipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentWithIdOnly = await prisma.shipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentFindManyArgs>(args?: SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shipment.
     * @param {ShipmentCreateArgs} args - Arguments to create a Shipment.
     * @example
     * // Create one Shipment
     * const Shipment = await prisma.shipment.create({
     *   data: {
     *     // ... data to create a Shipment
     *   }
     * })
     * 
     */
    create<T extends ShipmentCreateArgs>(args: SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shipments.
     * @param {ShipmentCreateManyArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentCreateManyArgs>(args?: SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shipments and returns the data saved in the database.
     * @param {ShipmentCreateManyAndReturnArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shipment.
     * @param {ShipmentDeleteArgs} args - Arguments to delete one Shipment.
     * @example
     * // Delete one Shipment
     * const Shipment = await prisma.shipment.delete({
     *   where: {
     *     // ... filter to delete one Shipment
     *   }
     * })
     * 
     */
    delete<T extends ShipmentDeleteArgs>(args: SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shipment.
     * @param {ShipmentUpdateArgs} args - Arguments to update one Shipment.
     * @example
     * // Update one Shipment
     * const shipment = await prisma.shipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentUpdateArgs>(args: SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shipments.
     * @param {ShipmentDeleteManyArgs} args - Arguments to filter Shipments to delete.
     * @example
     * // Delete a few Shipments
     * const { count } = await prisma.shipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentUpdateManyArgs>(args: SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments and returns the data updated in the database.
     * @param {ShipmentUpdateManyAndReturnArgs} args - Arguments to update many Shipments.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ShipmentUpdateManyAndReturnArgs>(args: SelectSubset<T, ShipmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shipment.
     * @param {ShipmentUpsertArgs} args - Arguments to update or create a Shipment.
     * @example
     * // Update or create a Shipment
     * const shipment = await prisma.shipment.upsert({
     *   create: {
     *     // ... data to create a Shipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipment we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentUpsertArgs>(args: SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCountArgs} args - Arguments to filter Shipments to count.
     * @example
     * // Count the number of Shipments
     * const count = await prisma.shipment.count({
     *   where: {
     *     // ... the filter for the Shipments we want to count
     *   }
     * })
    **/
    count<T extends ShipmentCountArgs>(
      args?: Subset<T, ShipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ShipmentAggregateArgs>(args: Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>

    /**
     * Group by Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ShipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipment model
   */
  readonly fields: ShipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    distributor<T extends Shipment$distributorArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$distributorArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    trackingHistory<T extends Shipment$trackingHistoryArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$trackingHistoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Shipment model
   */
  interface ShipmentFieldRefs {
    readonly id: FieldRef<"Shipment", 'String'>
    readonly orderId: FieldRef<"Shipment", 'String'>
    readonly distributorId: FieldRef<"Shipment", 'String'>
    readonly trackingNumber: FieldRef<"Shipment", 'String'>
    readonly status: FieldRef<"Shipment", 'ShipmentStatus'>
    readonly pickupAddress: FieldRef<"Shipment", 'String'>
    readonly deliveryAddress: FieldRef<"Shipment", 'String'>
    readonly estimatedPickup: FieldRef<"Shipment", 'DateTime'>
    readonly actualPickup: FieldRef<"Shipment", 'DateTime'>
    readonly estimatedDelivery: FieldRef<"Shipment", 'DateTime'>
    readonly actualDelivery: FieldRef<"Shipment", 'DateTime'>
    readonly driverName: FieldRef<"Shipment", 'String'>
    readonly vehicleNumber: FieldRef<"Shipment", 'String'>
    readonly notes: FieldRef<"Shipment", 'String'>
    readonly createdAt: FieldRef<"Shipment", 'DateTime'>
    readonly updatedAt: FieldRef<"Shipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shipment findUnique
   */
  export type ShipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findUniqueOrThrow
   */
  export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findFirst
   */
  export type ShipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findFirstOrThrow
   */
  export type ShipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findMany
   */
  export type ShipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipments to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment create
   */
  export type ShipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipment.
     */
    data: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
  }

  /**
   * Shipment createMany
   */
  export type ShipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shipment createManyAndReturn
   */
  export type ShipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment update
   */
  export type ShipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipment.
     */
    data: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
    /**
     * Choose, which Shipment to update.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment updateMany
   */
  export type ShipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
  }

  /**
   * Shipment updateManyAndReturn
   */
  export type ShipmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment upsert
   */
  export type ShipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipment to update in case it exists.
     */
    where: ShipmentWhereUniqueInput
    /**
     * In case the Shipment found by the `where` argument doesn't exist, create a new Shipment with this data.
     */
    create: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
    /**
     * In case the Shipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
  }

  /**
   * Shipment delete
   */
  export type ShipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter which Shipment to delete.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment deleteMany
   */
  export type ShipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipments to delete
     */
    where?: ShipmentWhereInput
    /**
     * Limit how many Shipments to delete.
     */
    limit?: number
  }

  /**
   * Shipment.distributor
   */
  export type Shipment$distributorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Distributor
     */
    omit?: DistributorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    where?: DistributorWhereInput
  }

  /**
   * Shipment.trackingHistory
   */
  export type Shipment$trackingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingHistory
     */
    select?: TrackingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingHistory
     */
    omit?: TrackingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingHistoryInclude<ExtArgs> | null
    where?: TrackingHistoryWhereInput
    orderBy?: TrackingHistoryOrderByWithRelationInput | TrackingHistoryOrderByWithRelationInput[]
    cursor?: TrackingHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TrackingHistoryScalarFieldEnum | TrackingHistoryScalarFieldEnum[]
  }

  /**
   * Shipment without action
   */
  export type ShipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shipment
     */
    omit?: ShipmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
  }


  /**
   * Model TrackingHistory
   */

  export type AggregateTrackingHistory = {
    _count: TrackingHistoryCountAggregateOutputType | null
    _min: TrackingHistoryMinAggregateOutputType | null
    _max: TrackingHistoryMaxAggregateOutputType | null
  }

  export type TrackingHistoryMinAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    status: $Enums.ShipmentStatus | null
    location: string | null
    notes: string | null
    timestamp: Date | null
  }

  export type TrackingHistoryMaxAggregateOutputType = {
    id: string | null
    shipmentId: string | null
    status: $Enums.ShipmentStatus | null
    location: string | null
    notes: string | null
    timestamp: Date | null
  }

  export type TrackingHistoryCountAggregateOutputType = {
    id: number
    shipmentId: number
    status: number
    location: number
    notes: number
    timestamp: number
    _all: number
  }


  export type TrackingHistoryMinAggregateInputType = {
    id?: true
    shipmentId?: true
    status?: true
    location?: true
    notes?: true
    timestamp?: true
  }

  export type TrackingHistoryMaxAggregateInputType = {
    id?: true
    shipmentId?: true
    status?: true
    location?: true
    notes?: true
    timestamp?: true
  }

  export type TrackingHistoryCountAggregateInputType = {
    id?: true
    shipmentId?: true
    status?: true
    location?: true
    notes?: true
    timestamp?: true
    _all?: true
  }

  export type TrackingHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackingHistory to aggregate.
     */
    where?: TrackingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingHistories to fetch.
     */
    orderBy?: TrackingHistoryOrderByWithRelationInput | TrackingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackingHistories
    **/
    _count?: true | TrackingHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackingHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackingHistoryMaxAggregateInputType
  }

  export type GetTrackingHistoryAggregateType<T extends TrackingHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackingHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackingHistory[P]>
      : GetScalarType<T[P], AggregateTrackingHistory[P]>
  }




  export type TrackingHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TrackingHistoryWhereInput
    orderBy?: TrackingHistoryOrderByWithAggregationInput | TrackingHistoryOrderByWithAggregationInput[]
    by: TrackingHistoryScalarFieldEnum[] | TrackingHistoryScalarFieldEnum
    having?: TrackingHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackingHistoryCountAggregateInputType | true
    _min?: TrackingHistoryMinAggregateInputType
    _max?: TrackingHistoryMaxAggregateInputType
  }

  export type TrackingHistoryGroupByOutputType = {
    id: string
    shipmentId: string
    status: $Enums.ShipmentStatus
    location: string | null
    notes: string | null
    timestamp: Date
    _count: TrackingHistoryCountAggregateOutputType | null
    _min: TrackingHistoryMinAggregateOutputType | null
    _max: TrackingHistoryMaxAggregateOutputType | null
  }

  type GetTrackingHistoryGroupByPayload<T extends TrackingHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TrackingHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackingHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackingHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], TrackingHistoryGroupByOutputType[P]>
        }
      >
    >


  export type TrackingHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    status?: boolean
    location?: boolean
    notes?: boolean
    timestamp?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackingHistory"]>

  export type TrackingHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    status?: boolean
    location?: boolean
    notes?: boolean
    timestamp?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackingHistory"]>

  export type TrackingHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    shipmentId?: boolean
    status?: boolean
    location?: boolean
    notes?: boolean
    timestamp?: boolean
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["trackingHistory"]>

  export type TrackingHistorySelectScalar = {
    id?: boolean
    shipmentId?: boolean
    status?: boolean
    location?: boolean
    notes?: boolean
    timestamp?: boolean
  }

  export type TrackingHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "shipmentId" | "status" | "location" | "notes" | "timestamp", ExtArgs["result"]["trackingHistory"]>
  export type TrackingHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }
  export type TrackingHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }
  export type TrackingHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
  }

  export type $TrackingHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TrackingHistory"
    objects: {
      shipment: Prisma.$ShipmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      shipmentId: string
      status: $Enums.ShipmentStatus
      location: string | null
      notes: string | null
      timestamp: Date
    }, ExtArgs["result"]["trackingHistory"]>
    composites: {}
  }

  type TrackingHistoryGetPayload<S extends boolean | null | undefined | TrackingHistoryDefaultArgs> = $Result.GetResult<Prisma.$TrackingHistoryPayload, S>

  type TrackingHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TrackingHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TrackingHistoryCountAggregateInputType | true
    }

  export interface TrackingHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TrackingHistory'], meta: { name: 'TrackingHistory' } }
    /**
     * Find zero or one TrackingHistory that matches the filter.
     * @param {TrackingHistoryFindUniqueArgs} args - Arguments to find a TrackingHistory
     * @example
     * // Get one TrackingHistory
     * const trackingHistory = await prisma.trackingHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TrackingHistoryFindUniqueArgs>(args: SelectSubset<T, TrackingHistoryFindUniqueArgs<ExtArgs>>): Prisma__TrackingHistoryClient<$Result.GetResult<Prisma.$TrackingHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TrackingHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TrackingHistoryFindUniqueOrThrowArgs} args - Arguments to find a TrackingHistory
     * @example
     * // Get one TrackingHistory
     * const trackingHistory = await prisma.trackingHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TrackingHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, TrackingHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TrackingHistoryClient<$Result.GetResult<Prisma.$TrackingHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackingHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingHistoryFindFirstArgs} args - Arguments to find a TrackingHistory
     * @example
     * // Get one TrackingHistory
     * const trackingHistory = await prisma.trackingHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TrackingHistoryFindFirstArgs>(args?: SelectSubset<T, TrackingHistoryFindFirstArgs<ExtArgs>>): Prisma__TrackingHistoryClient<$Result.GetResult<Prisma.$TrackingHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TrackingHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingHistoryFindFirstOrThrowArgs} args - Arguments to find a TrackingHistory
     * @example
     * // Get one TrackingHistory
     * const trackingHistory = await prisma.trackingHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TrackingHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, TrackingHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__TrackingHistoryClient<$Result.GetResult<Prisma.$TrackingHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TrackingHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackingHistories
     * const trackingHistories = await prisma.trackingHistory.findMany()
     * 
     * // Get first 10 TrackingHistories
     * const trackingHistories = await prisma.trackingHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackingHistoryWithIdOnly = await prisma.trackingHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TrackingHistoryFindManyArgs>(args?: SelectSubset<T, TrackingHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TrackingHistory.
     * @param {TrackingHistoryCreateArgs} args - Arguments to create a TrackingHistory.
     * @example
     * // Create one TrackingHistory
     * const TrackingHistory = await prisma.trackingHistory.create({
     *   data: {
     *     // ... data to create a TrackingHistory
     *   }
     * })
     * 
     */
    create<T extends TrackingHistoryCreateArgs>(args: SelectSubset<T, TrackingHistoryCreateArgs<ExtArgs>>): Prisma__TrackingHistoryClient<$Result.GetResult<Prisma.$TrackingHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TrackingHistories.
     * @param {TrackingHistoryCreateManyArgs} args - Arguments to create many TrackingHistories.
     * @example
     * // Create many TrackingHistories
     * const trackingHistory = await prisma.trackingHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TrackingHistoryCreateManyArgs>(args?: SelectSubset<T, TrackingHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TrackingHistories and returns the data saved in the database.
     * @param {TrackingHistoryCreateManyAndReturnArgs} args - Arguments to create many TrackingHistories.
     * @example
     * // Create many TrackingHistories
     * const trackingHistory = await prisma.trackingHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TrackingHistories and only return the `id`
     * const trackingHistoryWithIdOnly = await prisma.trackingHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TrackingHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, TrackingHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TrackingHistory.
     * @param {TrackingHistoryDeleteArgs} args - Arguments to delete one TrackingHistory.
     * @example
     * // Delete one TrackingHistory
     * const TrackingHistory = await prisma.trackingHistory.delete({
     *   where: {
     *     // ... filter to delete one TrackingHistory
     *   }
     * })
     * 
     */
    delete<T extends TrackingHistoryDeleteArgs>(args: SelectSubset<T, TrackingHistoryDeleteArgs<ExtArgs>>): Prisma__TrackingHistoryClient<$Result.GetResult<Prisma.$TrackingHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TrackingHistory.
     * @param {TrackingHistoryUpdateArgs} args - Arguments to update one TrackingHistory.
     * @example
     * // Update one TrackingHistory
     * const trackingHistory = await prisma.trackingHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TrackingHistoryUpdateArgs>(args: SelectSubset<T, TrackingHistoryUpdateArgs<ExtArgs>>): Prisma__TrackingHistoryClient<$Result.GetResult<Prisma.$TrackingHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TrackingHistories.
     * @param {TrackingHistoryDeleteManyArgs} args - Arguments to filter TrackingHistories to delete.
     * @example
     * // Delete a few TrackingHistories
     * const { count } = await prisma.trackingHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TrackingHistoryDeleteManyArgs>(args?: SelectSubset<T, TrackingHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackingHistories
     * const trackingHistory = await prisma.trackingHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TrackingHistoryUpdateManyArgs>(args: SelectSubset<T, TrackingHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackingHistories and returns the data updated in the database.
     * @param {TrackingHistoryUpdateManyAndReturnArgs} args - Arguments to update many TrackingHistories.
     * @example
     * // Update many TrackingHistories
     * const trackingHistory = await prisma.trackingHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TrackingHistories and only return the `id`
     * const trackingHistoryWithIdOnly = await prisma.trackingHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TrackingHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, TrackingHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TrackingHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TrackingHistory.
     * @param {TrackingHistoryUpsertArgs} args - Arguments to update or create a TrackingHistory.
     * @example
     * // Update or create a TrackingHistory
     * const trackingHistory = await prisma.trackingHistory.upsert({
     *   create: {
     *     // ... data to create a TrackingHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackingHistory we want to update
     *   }
     * })
     */
    upsert<T extends TrackingHistoryUpsertArgs>(args: SelectSubset<T, TrackingHistoryUpsertArgs<ExtArgs>>): Prisma__TrackingHistoryClient<$Result.GetResult<Prisma.$TrackingHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TrackingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingHistoryCountArgs} args - Arguments to filter TrackingHistories to count.
     * @example
     * // Count the number of TrackingHistories
     * const count = await prisma.trackingHistory.count({
     *   where: {
     *     // ... the filter for the TrackingHistories we want to count
     *   }
     * })
    **/
    count<T extends TrackingHistoryCountArgs>(
      args?: Subset<T, TrackingHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackingHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackingHistoryAggregateArgs>(args: Subset<T, TrackingHistoryAggregateArgs>): Prisma.PrismaPromise<GetTrackingHistoryAggregateType<T>>

    /**
     * Group by TrackingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackingHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackingHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackingHistoryGroupByArgs['orderBy'] }
        : { orderBy?: TrackingHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackingHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackingHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TrackingHistory model
   */
  readonly fields: TrackingHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackingHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TrackingHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TrackingHistory model
   */
  interface TrackingHistoryFieldRefs {
    readonly id: FieldRef<"TrackingHistory", 'String'>
    readonly shipmentId: FieldRef<"TrackingHistory", 'String'>
    readonly status: FieldRef<"TrackingHistory", 'ShipmentStatus'>
    readonly location: FieldRef<"TrackingHistory", 'String'>
    readonly notes: FieldRef<"TrackingHistory", 'String'>
    readonly timestamp: FieldRef<"TrackingHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TrackingHistory findUnique
   */
  export type TrackingHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingHistory
     */
    select?: TrackingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingHistory
     */
    omit?: TrackingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TrackingHistory to fetch.
     */
    where: TrackingHistoryWhereUniqueInput
  }

  /**
   * TrackingHistory findUniqueOrThrow
   */
  export type TrackingHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingHistory
     */
    select?: TrackingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingHistory
     */
    omit?: TrackingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TrackingHistory to fetch.
     */
    where: TrackingHistoryWhereUniqueInput
  }

  /**
   * TrackingHistory findFirst
   */
  export type TrackingHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingHistory
     */
    select?: TrackingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingHistory
     */
    omit?: TrackingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TrackingHistory to fetch.
     */
    where?: TrackingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingHistories to fetch.
     */
    orderBy?: TrackingHistoryOrderByWithRelationInput | TrackingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackingHistories.
     */
    cursor?: TrackingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingHistories.
     */
    distinct?: TrackingHistoryScalarFieldEnum | TrackingHistoryScalarFieldEnum[]
  }

  /**
   * TrackingHistory findFirstOrThrow
   */
  export type TrackingHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingHistory
     */
    select?: TrackingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingHistory
     */
    omit?: TrackingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TrackingHistory to fetch.
     */
    where?: TrackingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingHistories to fetch.
     */
    orderBy?: TrackingHistoryOrderByWithRelationInput | TrackingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackingHistories.
     */
    cursor?: TrackingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingHistories.
     */
    distinct?: TrackingHistoryScalarFieldEnum | TrackingHistoryScalarFieldEnum[]
  }

  /**
   * TrackingHistory findMany
   */
  export type TrackingHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingHistory
     */
    select?: TrackingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingHistory
     */
    omit?: TrackingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which TrackingHistories to fetch.
     */
    where?: TrackingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackingHistories to fetch.
     */
    orderBy?: TrackingHistoryOrderByWithRelationInput | TrackingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackingHistories.
     */
    cursor?: TrackingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackingHistories.
     */
    distinct?: TrackingHistoryScalarFieldEnum | TrackingHistoryScalarFieldEnum[]
  }

  /**
   * TrackingHistory create
   */
  export type TrackingHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingHistory
     */
    select?: TrackingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingHistory
     */
    omit?: TrackingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a TrackingHistory.
     */
    data: XOR<TrackingHistoryCreateInput, TrackingHistoryUncheckedCreateInput>
  }

  /**
   * TrackingHistory createMany
   */
  export type TrackingHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TrackingHistories.
     */
    data: TrackingHistoryCreateManyInput | TrackingHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TrackingHistory createManyAndReturn
   */
  export type TrackingHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingHistory
     */
    select?: TrackingHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingHistory
     */
    omit?: TrackingHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many TrackingHistories.
     */
    data: TrackingHistoryCreateManyInput | TrackingHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackingHistory update
   */
  export type TrackingHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingHistory
     */
    select?: TrackingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingHistory
     */
    omit?: TrackingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a TrackingHistory.
     */
    data: XOR<TrackingHistoryUpdateInput, TrackingHistoryUncheckedUpdateInput>
    /**
     * Choose, which TrackingHistory to update.
     */
    where: TrackingHistoryWhereUniqueInput
  }

  /**
   * TrackingHistory updateMany
   */
  export type TrackingHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TrackingHistories.
     */
    data: XOR<TrackingHistoryUpdateManyMutationInput, TrackingHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TrackingHistories to update
     */
    where?: TrackingHistoryWhereInput
    /**
     * Limit how many TrackingHistories to update.
     */
    limit?: number
  }

  /**
   * TrackingHistory updateManyAndReturn
   */
  export type TrackingHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingHistory
     */
    select?: TrackingHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingHistory
     */
    omit?: TrackingHistoryOmit<ExtArgs> | null
    /**
     * The data used to update TrackingHistories.
     */
    data: XOR<TrackingHistoryUpdateManyMutationInput, TrackingHistoryUncheckedUpdateManyInput>
    /**
     * Filter which TrackingHistories to update
     */
    where?: TrackingHistoryWhereInput
    /**
     * Limit how many TrackingHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TrackingHistory upsert
   */
  export type TrackingHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingHistory
     */
    select?: TrackingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingHistory
     */
    omit?: TrackingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the TrackingHistory to update in case it exists.
     */
    where: TrackingHistoryWhereUniqueInput
    /**
     * In case the TrackingHistory found by the `where` argument doesn't exist, create a new TrackingHistory with this data.
     */
    create: XOR<TrackingHistoryCreateInput, TrackingHistoryUncheckedCreateInput>
    /**
     * In case the TrackingHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackingHistoryUpdateInput, TrackingHistoryUncheckedUpdateInput>
  }

  /**
   * TrackingHistory delete
   */
  export type TrackingHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingHistory
     */
    select?: TrackingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingHistory
     */
    omit?: TrackingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingHistoryInclude<ExtArgs> | null
    /**
     * Filter which TrackingHistory to delete.
     */
    where: TrackingHistoryWhereUniqueInput
  }

  /**
   * TrackingHistory deleteMany
   */
  export type TrackingHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TrackingHistories to delete
     */
    where?: TrackingHistoryWhereInput
    /**
     * Limit how many TrackingHistories to delete.
     */
    limit?: number
  }

  /**
   * TrackingHistory without action
   */
  export type TrackingHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TrackingHistory
     */
    select?: TrackingHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the TrackingHistory
     */
    omit?: TrackingHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TrackingHistoryInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    amount: number | null
    paymentMethod: string | null
    status: $Enums.PaymentStatus | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    amount: number | null
    paymentMethod: string | null
    status: $Enums.PaymentStatus | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    orderId: number
    amount: number
    paymentMethod: number
    status: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    paymentMethod?: true
    status?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    paymentMethod?: true
    status?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    orderId?: true
    amount?: true
    paymentMethod?: true
    status?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    orderId: string
    amount: number
    paymentMethod: string
    status: $Enums.PaymentStatus
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    orderId?: boolean
    amount?: boolean
    paymentMethod?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderId" | "amount" | "paymentMethod" | "status" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      amount: number
      paymentMethod: string
      status: $Enums.PaymentStatus
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly orderId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Float'>
    readonly paymentMethod: FieldRef<"Payment", 'String'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    phone: 'phone',
    role: 'role',
    isActive: 'isActive',
    emailVerified: 'emailVerified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FarmScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    address: 'address',
    city: 'city',
    province: 'province',
    postalCode: 'postalCode',
    latitude: 'latitude',
    longitude: 'longitude',
    certifications: 'certifications',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FarmScalarFieldEnum = (typeof FarmScalarFieldEnum)[keyof typeof FarmScalarFieldEnum]


  export const DistributorScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    address: 'address',
    city: 'city',
    province: 'province',
    licenseNumber: 'licenseNumber',
    vehicleCount: 'vehicleCount',
    warehouseCount: 'warehouseCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type DistributorScalarFieldEnum = (typeof DistributorScalarFieldEnum)[keyof typeof DistributorScalarFieldEnum]


  export const RetailerScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    storeName: 'storeName',
    address: 'address',
    city: 'city',
    province: 'province',
    storeType: 'storeType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RetailerScalarFieldEnum = (typeof RetailerScalarFieldEnum)[keyof typeof RetailerScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    farmId: 'farmId',
    name: 'name',
    description: 'description',
    category: 'category',
    unit: 'unit',
    unitPrice: 'unitPrice',
    imageUrl: 'imageUrl',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    farmId: 'farmId',
    retailerId: 'retailerId',
    quantity: 'quantity',
    batchNumber: 'batchNumber',
    harvestDate: 'harvestDate',
    expiryDate: 'expiryDate',
    qualityGrade: 'qualityGrade',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    buyerId: 'buyerId',
    sellerId: 'sellerId',
    status: 'status',
    totalAmount: 'totalAmount',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    productId: 'productId',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    subtotal: 'subtotal',
    createdAt: 'createdAt'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const ShipmentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    distributorId: 'distributorId',
    trackingNumber: 'trackingNumber',
    status: 'status',
    pickupAddress: 'pickupAddress',
    deliveryAddress: 'deliveryAddress',
    estimatedPickup: 'estimatedPickup',
    actualPickup: 'actualPickup',
    estimatedDelivery: 'estimatedDelivery',
    actualDelivery: 'actualDelivery',
    driverName: 'driverName',
    vehicleNumber: 'vehicleNumber',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum]


  export const TrackingHistoryScalarFieldEnum: {
    id: 'id',
    shipmentId: 'shipmentId',
    status: 'status',
    location: 'location',
    notes: 'notes',
    timestamp: 'timestamp'
  };

  export type TrackingHistoryScalarFieldEnum = (typeof TrackingHistoryScalarFieldEnum)[keyof typeof TrackingHistoryScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    amount: 'amount',
    paymentMethod: 'paymentMethod',
    status: 'status',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'ShipmentStatus'
   */
  export type EnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus'>
    


  /**
   * Reference to a field of type 'ShipmentStatus[]'
   */
  export type ListEnumShipmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ShipmentStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    farm?: XOR<FarmNullableScalarRelationFilter, FarmWhereInput> | null
    retailer?: XOR<RetailerNullableScalarRelationFilter, RetailerWhereInput> | null
    distributor?: XOR<DistributorNullableScalarRelationFilter, DistributorWhereInput> | null
    ordersAsBuyer?: OrderListRelationFilter
    ordersAsSeller?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farm?: FarmOrderByWithRelationInput
    retailer?: RetailerOrderByWithRelationInput
    distributor?: DistributorOrderByWithRelationInput
    ordersAsBuyer?: OrderOrderByRelationAggregateInput
    ordersAsSeller?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    emailVerified?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    farm?: XOR<FarmNullableScalarRelationFilter, FarmWhereInput> | null
    retailer?: XOR<RetailerNullableScalarRelationFilter, RetailerWhereInput> | null
    distributor?: XOR<DistributorNullableScalarRelationFilter, DistributorWhereInput> | null
    ordersAsBuyer?: OrderListRelationFilter
    ordersAsSeller?: OrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    emailVerified?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FarmWhereInput = {
    AND?: FarmWhereInput | FarmWhereInput[]
    OR?: FarmWhereInput[]
    NOT?: FarmWhereInput | FarmWhereInput[]
    id?: StringFilter<"Farm"> | string
    userId?: StringFilter<"Farm"> | string
    name?: StringFilter<"Farm"> | string
    description?: StringNullableFilter<"Farm"> | string | null
    address?: StringFilter<"Farm"> | string
    city?: StringFilter<"Farm"> | string
    province?: StringFilter<"Farm"> | string
    postalCode?: StringNullableFilter<"Farm"> | string | null
    latitude?: FloatNullableFilter<"Farm"> | number | null
    longitude?: FloatNullableFilter<"Farm"> | number | null
    certifications?: StringNullableListFilter<"Farm">
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    updatedAt?: DateTimeFilter<"Farm"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    products?: ProductListRelationFilter
    inventories?: InventoryListRelationFilter
  }

  export type FarmOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    certifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    products?: ProductOrderByRelationAggregateInput
    inventories?: InventoryOrderByRelationAggregateInput
  }

  export type FarmWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: FarmWhereInput | FarmWhereInput[]
    OR?: FarmWhereInput[]
    NOT?: FarmWhereInput | FarmWhereInput[]
    name?: StringFilter<"Farm"> | string
    description?: StringNullableFilter<"Farm"> | string | null
    address?: StringFilter<"Farm"> | string
    city?: StringFilter<"Farm"> | string
    province?: StringFilter<"Farm"> | string
    postalCode?: StringNullableFilter<"Farm"> | string | null
    latitude?: FloatNullableFilter<"Farm"> | number | null
    longitude?: FloatNullableFilter<"Farm"> | number | null
    certifications?: StringNullableListFilter<"Farm">
    createdAt?: DateTimeFilter<"Farm"> | Date | string
    updatedAt?: DateTimeFilter<"Farm"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    products?: ProductListRelationFilter
    inventories?: InventoryListRelationFilter
  }, "id" | "userId">

  export type FarmOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postalCode?: SortOrderInput | SortOrder
    latitude?: SortOrderInput | SortOrder
    longitude?: SortOrderInput | SortOrder
    certifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FarmCountOrderByAggregateInput
    _avg?: FarmAvgOrderByAggregateInput
    _max?: FarmMaxOrderByAggregateInput
    _min?: FarmMinOrderByAggregateInput
    _sum?: FarmSumOrderByAggregateInput
  }

  export type FarmScalarWhereWithAggregatesInput = {
    AND?: FarmScalarWhereWithAggregatesInput | FarmScalarWhereWithAggregatesInput[]
    OR?: FarmScalarWhereWithAggregatesInput[]
    NOT?: FarmScalarWhereWithAggregatesInput | FarmScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Farm"> | string
    userId?: StringWithAggregatesFilter<"Farm"> | string
    name?: StringWithAggregatesFilter<"Farm"> | string
    description?: StringNullableWithAggregatesFilter<"Farm"> | string | null
    address?: StringWithAggregatesFilter<"Farm"> | string
    city?: StringWithAggregatesFilter<"Farm"> | string
    province?: StringWithAggregatesFilter<"Farm"> | string
    postalCode?: StringNullableWithAggregatesFilter<"Farm"> | string | null
    latitude?: FloatNullableWithAggregatesFilter<"Farm"> | number | null
    longitude?: FloatNullableWithAggregatesFilter<"Farm"> | number | null
    certifications?: StringNullableListFilter<"Farm">
    createdAt?: DateTimeWithAggregatesFilter<"Farm"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Farm"> | Date | string
  }

  export type DistributorWhereInput = {
    AND?: DistributorWhereInput | DistributorWhereInput[]
    OR?: DistributorWhereInput[]
    NOT?: DistributorWhereInput | DistributorWhereInput[]
    id?: StringFilter<"Distributor"> | string
    userId?: StringFilter<"Distributor"> | string
    companyName?: StringFilter<"Distributor"> | string
    address?: StringFilter<"Distributor"> | string
    city?: StringFilter<"Distributor"> | string
    province?: StringFilter<"Distributor"> | string
    licenseNumber?: StringNullableFilter<"Distributor"> | string | null
    vehicleCount?: IntFilter<"Distributor"> | number
    warehouseCount?: IntFilter<"Distributor"> | number
    createdAt?: DateTimeFilter<"Distributor"> | Date | string
    updatedAt?: DateTimeFilter<"Distributor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shipments?: ShipmentListRelationFilter
  }

  export type DistributorOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    vehicleCount?: SortOrder
    warehouseCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    shipments?: ShipmentOrderByRelationAggregateInput
  }

  export type DistributorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: DistributorWhereInput | DistributorWhereInput[]
    OR?: DistributorWhereInput[]
    NOT?: DistributorWhereInput | DistributorWhereInput[]
    companyName?: StringFilter<"Distributor"> | string
    address?: StringFilter<"Distributor"> | string
    city?: StringFilter<"Distributor"> | string
    province?: StringFilter<"Distributor"> | string
    licenseNumber?: StringNullableFilter<"Distributor"> | string | null
    vehicleCount?: IntFilter<"Distributor"> | number
    warehouseCount?: IntFilter<"Distributor"> | number
    createdAt?: DateTimeFilter<"Distributor"> | Date | string
    updatedAt?: DateTimeFilter<"Distributor"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    shipments?: ShipmentListRelationFilter
  }, "id" | "userId">

  export type DistributorOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    licenseNumber?: SortOrderInput | SortOrder
    vehicleCount?: SortOrder
    warehouseCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: DistributorCountOrderByAggregateInput
    _avg?: DistributorAvgOrderByAggregateInput
    _max?: DistributorMaxOrderByAggregateInput
    _min?: DistributorMinOrderByAggregateInput
    _sum?: DistributorSumOrderByAggregateInput
  }

  export type DistributorScalarWhereWithAggregatesInput = {
    AND?: DistributorScalarWhereWithAggregatesInput | DistributorScalarWhereWithAggregatesInput[]
    OR?: DistributorScalarWhereWithAggregatesInput[]
    NOT?: DistributorScalarWhereWithAggregatesInput | DistributorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Distributor"> | string
    userId?: StringWithAggregatesFilter<"Distributor"> | string
    companyName?: StringWithAggregatesFilter<"Distributor"> | string
    address?: StringWithAggregatesFilter<"Distributor"> | string
    city?: StringWithAggregatesFilter<"Distributor"> | string
    province?: StringWithAggregatesFilter<"Distributor"> | string
    licenseNumber?: StringNullableWithAggregatesFilter<"Distributor"> | string | null
    vehicleCount?: IntWithAggregatesFilter<"Distributor"> | number
    warehouseCount?: IntWithAggregatesFilter<"Distributor"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Distributor"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Distributor"> | Date | string
  }

  export type RetailerWhereInput = {
    AND?: RetailerWhereInput | RetailerWhereInput[]
    OR?: RetailerWhereInput[]
    NOT?: RetailerWhereInput | RetailerWhereInput[]
    id?: StringFilter<"Retailer"> | string
    userId?: StringFilter<"Retailer"> | string
    storeName?: StringFilter<"Retailer"> | string
    address?: StringFilter<"Retailer"> | string
    city?: StringFilter<"Retailer"> | string
    province?: StringFilter<"Retailer"> | string
    storeType?: StringNullableFilter<"Retailer"> | string | null
    createdAt?: DateTimeFilter<"Retailer"> | Date | string
    updatedAt?: DateTimeFilter<"Retailer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    inventories?: InventoryListRelationFilter
  }

  export type RetailerOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    storeName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    storeType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    inventories?: InventoryOrderByRelationAggregateInput
  }

  export type RetailerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: RetailerWhereInput | RetailerWhereInput[]
    OR?: RetailerWhereInput[]
    NOT?: RetailerWhereInput | RetailerWhereInput[]
    storeName?: StringFilter<"Retailer"> | string
    address?: StringFilter<"Retailer"> | string
    city?: StringFilter<"Retailer"> | string
    province?: StringFilter<"Retailer"> | string
    storeType?: StringNullableFilter<"Retailer"> | string | null
    createdAt?: DateTimeFilter<"Retailer"> | Date | string
    updatedAt?: DateTimeFilter<"Retailer"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    inventories?: InventoryListRelationFilter
  }, "id" | "userId">

  export type RetailerOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    storeName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    storeType?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RetailerCountOrderByAggregateInput
    _max?: RetailerMaxOrderByAggregateInput
    _min?: RetailerMinOrderByAggregateInput
  }

  export type RetailerScalarWhereWithAggregatesInput = {
    AND?: RetailerScalarWhereWithAggregatesInput | RetailerScalarWhereWithAggregatesInput[]
    OR?: RetailerScalarWhereWithAggregatesInput[]
    NOT?: RetailerScalarWhereWithAggregatesInput | RetailerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Retailer"> | string
    userId?: StringWithAggregatesFilter<"Retailer"> | string
    storeName?: StringWithAggregatesFilter<"Retailer"> | string
    address?: StringWithAggregatesFilter<"Retailer"> | string
    city?: StringWithAggregatesFilter<"Retailer"> | string
    province?: StringWithAggregatesFilter<"Retailer"> | string
    storeType?: StringNullableWithAggregatesFilter<"Retailer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Retailer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Retailer"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    farmId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    unit?: StringFilter<"Product"> | string
    unitPrice?: FloatFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    farm?: XOR<FarmScalarRelationFilter, FarmWhereInput>
    inventories?: InventoryListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    farmId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    unit?: SortOrder
    unitPrice?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    farm?: FarmOrderByWithRelationInput
    inventories?: InventoryOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    farmId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    unit?: StringFilter<"Product"> | string
    unitPrice?: FloatFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    farm?: XOR<FarmScalarRelationFilter, FarmWhereInput>
    inventories?: InventoryListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    farmId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    category?: SortOrder
    unit?: SortOrder
    unitPrice?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    farmId?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringNullableWithAggregatesFilter<"Product"> | string | null
    category?: StringWithAggregatesFilter<"Product"> | string
    unit?: StringWithAggregatesFilter<"Product"> | string
    unitPrice?: FloatWithAggregatesFilter<"Product"> | number
    imageUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    isActive?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: StringFilter<"Inventory"> | string
    productId?: StringFilter<"Inventory"> | string
    farmId?: StringNullableFilter<"Inventory"> | string | null
    retailerId?: StringNullableFilter<"Inventory"> | string | null
    quantity?: FloatFilter<"Inventory"> | number
    batchNumber?: StringFilter<"Inventory"> | string
    harvestDate?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    qualityGrade?: StringNullableFilter<"Inventory"> | string | null
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    updatedAt?: DateTimeFilter<"Inventory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    farm?: XOR<FarmNullableScalarRelationFilter, FarmWhereInput> | null
    retailer?: XOR<RetailerNullableScalarRelationFilter, RetailerWhereInput> | null
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    farmId?: SortOrderInput | SortOrder
    retailerId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    batchNumber?: SortOrder
    harvestDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    qualityGrade?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    farm?: FarmOrderByWithRelationInput
    retailer?: RetailerOrderByWithRelationInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    productId?: StringFilter<"Inventory"> | string
    farmId?: StringNullableFilter<"Inventory"> | string | null
    retailerId?: StringNullableFilter<"Inventory"> | string | null
    quantity?: FloatFilter<"Inventory"> | number
    batchNumber?: StringFilter<"Inventory"> | string
    harvestDate?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    qualityGrade?: StringNullableFilter<"Inventory"> | string | null
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    updatedAt?: DateTimeFilter<"Inventory"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    farm?: XOR<FarmNullableScalarRelationFilter, FarmWhereInput> | null
    retailer?: XOR<RetailerNullableScalarRelationFilter, RetailerWhereInput> | null
  }, "id">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    farmId?: SortOrderInput | SortOrder
    retailerId?: SortOrderInput | SortOrder
    quantity?: SortOrder
    batchNumber?: SortOrder
    harvestDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    qualityGrade?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inventory"> | string
    productId?: StringWithAggregatesFilter<"Inventory"> | string
    farmId?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    retailerId?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    quantity?: FloatWithAggregatesFilter<"Inventory"> | number
    batchNumber?: StringWithAggregatesFilter<"Inventory"> | string
    harvestDate?: DateTimeNullableWithAggregatesFilter<"Inventory"> | Date | string | null
    expiryDate?: DateTimeNullableWithAggregatesFilter<"Inventory"> | Date | string | null
    qualityGrade?: StringNullableWithAggregatesFilter<"Inventory"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    buyerId?: StringFilter<"Order"> | string
    sellerId?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: FloatFilter<"Order"> | number
    notes?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    orderItems?: OrderItemListRelationFilter
    shipment?: XOR<ShipmentNullableScalarRelationFilter, ShipmentWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    buyer?: UserOrderByWithRelationInput
    seller?: UserOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    shipment?: ShipmentOrderByWithRelationInput
    payment?: PaymentOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    buyerId?: StringFilter<"Order"> | string
    sellerId?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: FloatFilter<"Order"> | number
    notes?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    orderItems?: OrderItemListRelationFilter
    shipment?: XOR<ShipmentNullableScalarRelationFilter, ShipmentWhereInput> | null
    payment?: XOR<PaymentNullableScalarRelationFilter, PaymentWhereInput> | null
  }, "id" | "orderNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    buyerId?: StringWithAggregatesFilter<"Order"> | string
    sellerId?: StringWithAggregatesFilter<"Order"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: FloatWithAggregatesFilter<"Order"> | number
    notes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    quantity?: FloatFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    subtotal?: FloatFilter<"OrderItem"> | number
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    quantity?: FloatFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    subtotal?: FloatFilter<"OrderItem"> | number
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    productId?: StringWithAggregatesFilter<"OrderItem"> | string
    quantity?: FloatWithAggregatesFilter<"OrderItem"> | number
    unitPrice?: FloatWithAggregatesFilter<"OrderItem"> | number
    subtotal?: FloatWithAggregatesFilter<"OrderItem"> | number
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
  }

  export type ShipmentWhereInput = {
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    id?: StringFilter<"Shipment"> | string
    orderId?: StringFilter<"Shipment"> | string
    distributorId?: StringNullableFilter<"Shipment"> | string | null
    trackingNumber?: StringFilter<"Shipment"> | string
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    pickupAddress?: StringFilter<"Shipment"> | string
    deliveryAddress?: StringFilter<"Shipment"> | string
    estimatedPickup?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    actualPickup?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    estimatedDelivery?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    actualDelivery?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    driverName?: StringNullableFilter<"Shipment"> | string | null
    vehicleNumber?: StringNullableFilter<"Shipment"> | string | null
    notes?: StringNullableFilter<"Shipment"> | string | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    distributor?: XOR<DistributorNullableScalarRelationFilter, DistributorWhereInput> | null
    trackingHistory?: TrackingHistoryListRelationFilter
  }

  export type ShipmentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    distributorId?: SortOrderInput | SortOrder
    trackingNumber?: SortOrder
    status?: SortOrder
    pickupAddress?: SortOrder
    deliveryAddress?: SortOrder
    estimatedPickup?: SortOrderInput | SortOrder
    actualPickup?: SortOrderInput | SortOrder
    estimatedDelivery?: SortOrderInput | SortOrder
    actualDelivery?: SortOrderInput | SortOrder
    driverName?: SortOrderInput | SortOrder
    vehicleNumber?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    distributor?: DistributorOrderByWithRelationInput
    trackingHistory?: TrackingHistoryOrderByRelationAggregateInput
  }

  export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    trackingNumber?: string
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    distributorId?: StringNullableFilter<"Shipment"> | string | null
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    pickupAddress?: StringFilter<"Shipment"> | string
    deliveryAddress?: StringFilter<"Shipment"> | string
    estimatedPickup?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    actualPickup?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    estimatedDelivery?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    actualDelivery?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    driverName?: StringNullableFilter<"Shipment"> | string | null
    vehicleNumber?: StringNullableFilter<"Shipment"> | string | null
    notes?: StringNullableFilter<"Shipment"> | string | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    distributor?: XOR<DistributorNullableScalarRelationFilter, DistributorWhereInput> | null
    trackingHistory?: TrackingHistoryListRelationFilter
  }, "id" | "orderId" | "trackingNumber">

  export type ShipmentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    distributorId?: SortOrderInput | SortOrder
    trackingNumber?: SortOrder
    status?: SortOrder
    pickupAddress?: SortOrder
    deliveryAddress?: SortOrder
    estimatedPickup?: SortOrderInput | SortOrder
    actualPickup?: SortOrderInput | SortOrder
    estimatedDelivery?: SortOrderInput | SortOrder
    actualDelivery?: SortOrderInput | SortOrder
    driverName?: SortOrderInput | SortOrder
    vehicleNumber?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShipmentCountOrderByAggregateInput
    _max?: ShipmentMaxOrderByAggregateInput
    _min?: ShipmentMinOrderByAggregateInput
  }

  export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    OR?: ShipmentScalarWhereWithAggregatesInput[]
    NOT?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shipment"> | string
    orderId?: StringWithAggregatesFilter<"Shipment"> | string
    distributorId?: StringNullableWithAggregatesFilter<"Shipment"> | string | null
    trackingNumber?: StringWithAggregatesFilter<"Shipment"> | string
    status?: EnumShipmentStatusWithAggregatesFilter<"Shipment"> | $Enums.ShipmentStatus
    pickupAddress?: StringWithAggregatesFilter<"Shipment"> | string
    deliveryAddress?: StringWithAggregatesFilter<"Shipment"> | string
    estimatedPickup?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    actualPickup?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    estimatedDelivery?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    actualDelivery?: DateTimeNullableWithAggregatesFilter<"Shipment"> | Date | string | null
    driverName?: StringNullableWithAggregatesFilter<"Shipment"> | string | null
    vehicleNumber?: StringNullableWithAggregatesFilter<"Shipment"> | string | null
    notes?: StringNullableWithAggregatesFilter<"Shipment"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
  }

  export type TrackingHistoryWhereInput = {
    AND?: TrackingHistoryWhereInput | TrackingHistoryWhereInput[]
    OR?: TrackingHistoryWhereInput[]
    NOT?: TrackingHistoryWhereInput | TrackingHistoryWhereInput[]
    id?: StringFilter<"TrackingHistory"> | string
    shipmentId?: StringFilter<"TrackingHistory"> | string
    status?: EnumShipmentStatusFilter<"TrackingHistory"> | $Enums.ShipmentStatus
    location?: StringNullableFilter<"TrackingHistory"> | string | null
    notes?: StringNullableFilter<"TrackingHistory"> | string | null
    timestamp?: DateTimeFilter<"TrackingHistory"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }

  export type TrackingHistoryOrderByWithRelationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    status?: SortOrder
    location?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    shipment?: ShipmentOrderByWithRelationInput
  }

  export type TrackingHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TrackingHistoryWhereInput | TrackingHistoryWhereInput[]
    OR?: TrackingHistoryWhereInput[]
    NOT?: TrackingHistoryWhereInput | TrackingHistoryWhereInput[]
    shipmentId?: StringFilter<"TrackingHistory"> | string
    status?: EnumShipmentStatusFilter<"TrackingHistory"> | $Enums.ShipmentStatus
    location?: StringNullableFilter<"TrackingHistory"> | string | null
    notes?: StringNullableFilter<"TrackingHistory"> | string | null
    timestamp?: DateTimeFilter<"TrackingHistory"> | Date | string
    shipment?: XOR<ShipmentScalarRelationFilter, ShipmentWhereInput>
  }, "id">

  export type TrackingHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    status?: SortOrder
    location?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    timestamp?: SortOrder
    _count?: TrackingHistoryCountOrderByAggregateInput
    _max?: TrackingHistoryMaxOrderByAggregateInput
    _min?: TrackingHistoryMinOrderByAggregateInput
  }

  export type TrackingHistoryScalarWhereWithAggregatesInput = {
    AND?: TrackingHistoryScalarWhereWithAggregatesInput | TrackingHistoryScalarWhereWithAggregatesInput[]
    OR?: TrackingHistoryScalarWhereWithAggregatesInput[]
    NOT?: TrackingHistoryScalarWhereWithAggregatesInput | TrackingHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TrackingHistory"> | string
    shipmentId?: StringWithAggregatesFilter<"TrackingHistory"> | string
    status?: EnumShipmentStatusWithAggregatesFilter<"TrackingHistory"> | $Enums.ShipmentStatus
    location?: StringNullableWithAggregatesFilter<"TrackingHistory"> | string | null
    notes?: StringNullableWithAggregatesFilter<"TrackingHistory"> | string | null
    timestamp?: DateTimeWithAggregatesFilter<"TrackingHistory"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    orderId?: StringFilter<"Payment"> | string
    amount?: FloatFilter<"Payment"> | number
    paymentMethod?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    amount?: FloatFilter<"Payment"> | number
    paymentMethod?: StringFilter<"Payment"> | string
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id" | "orderId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    orderId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: FloatWithAggregatesFilter<"Payment"> | number
    paymentMethod?: StringWithAggregatesFilter<"Payment"> | string
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farm?: FarmCreateNestedOneWithoutUserInput
    retailer?: RetailerCreateNestedOneWithoutUserInput
    distributor?: DistributorCreateNestedOneWithoutUserInput
    ordersAsBuyer?: OrderCreateNestedManyWithoutBuyerInput
    ordersAsSeller?: OrderCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farm?: FarmUncheckedCreateNestedOneWithoutUserInput
    retailer?: RetailerUncheckedCreateNestedOneWithoutUserInput
    distributor?: DistributorUncheckedCreateNestedOneWithoutUserInput
    ordersAsBuyer?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    ordersAsSeller?: OrderUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUpdateOneWithoutUserNestedInput
    retailer?: RetailerUpdateOneWithoutUserNestedInput
    distributor?: DistributorUpdateOneWithoutUserNestedInput
    ordersAsBuyer?: OrderUpdateManyWithoutBuyerNestedInput
    ordersAsSeller?: OrderUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUncheckedUpdateOneWithoutUserNestedInput
    retailer?: RetailerUncheckedUpdateOneWithoutUserNestedInput
    distributor?: DistributorUncheckedUpdateOneWithoutUserNestedInput
    ordersAsBuyer?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    ordersAsSeller?: OrderUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmCreateInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    city: string
    province: string
    postalCode?: string | null
    latitude?: number | null
    longitude?: number | null
    certifications?: FarmCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFarmInput
    products?: ProductCreateNestedManyWithoutFarmInput
    inventories?: InventoryCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    address: string
    city: string
    province: string
    postalCode?: string | null
    latitude?: number | null
    longitude?: number | null
    certifications?: FarmCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutFarmInput
    inventories?: InventoryUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    certifications?: FarmUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFarmNestedInput
    products?: ProductUpdateManyWithoutFarmNestedInput
    inventories?: InventoryUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    certifications?: FarmUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutFarmNestedInput
    inventories?: InventoryUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type FarmCreateManyInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    address: string
    city: string
    province: string
    postalCode?: string | null
    latitude?: number | null
    longitude?: number | null
    certifications?: FarmCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FarmUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    certifications?: FarmUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FarmUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    certifications?: FarmUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorCreateInput = {
    id?: string
    companyName: string
    address: string
    city: string
    province: string
    licenseNumber?: string | null
    vehicleCount?: number
    warehouseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDistributorInput
    shipments?: ShipmentCreateNestedManyWithoutDistributorInput
  }

  export type DistributorUncheckedCreateInput = {
    id?: string
    userId: string
    companyName: string
    address: string
    city: string
    province: string
    licenseNumber?: string | null
    vehicleCount?: number
    warehouseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutDistributorInput
  }

  export type DistributorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleCount?: IntFieldUpdateOperationsInput | number
    warehouseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDistributorNestedInput
    shipments?: ShipmentUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleCount?: IntFieldUpdateOperationsInput | number
    warehouseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUncheckedUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorCreateManyInput = {
    id?: string
    userId: string
    companyName: string
    address: string
    city: string
    province: string
    licenseNumber?: string | null
    vehicleCount?: number
    warehouseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistributorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleCount?: IntFieldUpdateOperationsInput | number
    warehouseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleCount?: IntFieldUpdateOperationsInput | number
    warehouseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetailerCreateInput = {
    id?: string
    storeName: string
    address: string
    city: string
    province: string
    storeType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRetailerInput
    inventories?: InventoryCreateNestedManyWithoutRetailerInput
  }

  export type RetailerUncheckedCreateInput = {
    id?: string
    userId: string
    storeName: string
    address: string
    city: string
    province: string
    storeType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: InventoryUncheckedCreateNestedManyWithoutRetailerInput
  }

  export type RetailerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    storeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRetailerNestedInput
    inventories?: InventoryUpdateManyWithoutRetailerNestedInput
  }

  export type RetailerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    storeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUncheckedUpdateManyWithoutRetailerNestedInput
  }

  export type RetailerCreateManyInput = {
    id?: string
    userId: string
    storeName: string
    address: string
    city: string
    province: string
    storeType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RetailerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    storeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RetailerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    storeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    unit: string
    unitPrice: number
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farm: FarmCreateNestedOneWithoutProductsInput
    inventories?: InventoryCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    farmId: string
    name: string
    description?: string | null
    category: string
    unit: string
    unitPrice: number
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: InventoryUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUpdateOneRequiredWithoutProductsNestedInput
    inventories?: InventoryUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    farmId: string
    name: string
    description?: string | null
    category: string
    unit: string
    unitPrice: number
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateInput = {
    id?: string
    quantity: number
    batchNumber: string
    harvestDate?: Date | string | null
    expiryDate?: Date | string | null
    qualityGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutInventoriesInput
    farm?: FarmCreateNestedOneWithoutInventoriesInput
    retailer?: RetailerCreateNestedOneWithoutInventoriesInput
  }

  export type InventoryUncheckedCreateInput = {
    id?: string
    productId: string
    farmId?: string | null
    retailerId?: string | null
    quantity: number
    batchNumber: string
    harvestDate?: Date | string | null
    expiryDate?: Date | string | null
    qualityGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualityGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutInventoriesNestedInput
    farm?: FarmUpdateOneWithoutInventoriesNestedInput
    retailer?: RetailerUpdateOneWithoutInventoriesNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    farmId?: NullableStringFieldUpdateOperationsInput | string | null
    retailerId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualityGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateManyInput = {
    id?: string
    productId: string
    farmId?: string | null
    retailerId?: string | null
    quantity: number
    batchNumber: string
    harvestDate?: Date | string | null
    expiryDate?: Date | string | null
    qualityGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualityGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    farmId?: NullableStringFieldUpdateOperationsInput | string | null
    retailerId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualityGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    buyer: UserCreateNestedOneWithoutOrdersAsBuyerInput
    seller: UserCreateNestedOneWithoutOrdersAsSellerInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    shipment?: ShipmentCreateNestedOneWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    orderNumber: string
    buyerId: string
    sellerId: string
    status?: $Enums.OrderStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    shipment?: ShipmentUncheckedCreateNestedOneWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutOrdersAsBuyerNestedInput
    seller?: UserUpdateOneRequiredWithoutOrdersAsSellerNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    shipment?: ShipmentUpdateOneWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    shipment?: ShipmentUncheckedUpdateOneWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    orderNumber: string
    buyerId: string
    sellerId: string
    status?: $Enums.OrderStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateInput = {
    id?: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    product: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    orderId: string
    productId: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyInput = {
    id?: string
    orderId: string
    productId: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentCreateInput = {
    id?: string
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    pickupAddress: string
    deliveryAddress: string
    estimatedPickup?: Date | string | null
    actualPickup?: Date | string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    driverName?: string | null
    vehicleNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutShipmentInput
    distributor?: DistributorCreateNestedOneWithoutShipmentsInput
    trackingHistory?: TrackingHistoryCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateInput = {
    id?: string
    orderId: string
    distributorId?: string | null
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    pickupAddress: string
    deliveryAddress: string
    estimatedPickup?: Date | string | null
    actualPickup?: Date | string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    driverName?: string | null
    vehicleNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trackingHistory?: TrackingHistoryUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    estimatedPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverName?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutShipmentNestedInput
    distributor?: DistributorUpdateOneWithoutShipmentsNestedInput
    trackingHistory?: TrackingHistoryUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    estimatedPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverName?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackingHistory?: TrackingHistoryUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentCreateManyInput = {
    id?: string
    orderId: string
    distributorId?: string | null
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    pickupAddress: string
    deliveryAddress: string
    estimatedPickup?: Date | string | null
    actualPickup?: Date | string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    driverName?: string | null
    vehicleNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    estimatedPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverName?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    estimatedPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverName?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingHistoryCreateInput = {
    id?: string
    status: $Enums.ShipmentStatus
    location?: string | null
    notes?: string | null
    timestamp?: Date | string
    shipment: ShipmentCreateNestedOneWithoutTrackingHistoryInput
  }

  export type TrackingHistoryUncheckedCreateInput = {
    id?: string
    shipmentId: string
    status: $Enums.ShipmentStatus
    location?: string | null
    notes?: string | null
    timestamp?: Date | string
  }

  export type TrackingHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneRequiredWithoutTrackingHistoryNestedInput
  }

  export type TrackingHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingHistoryCreateManyInput = {
    id?: string
    shipmentId: string
    status: $Enums.ShipmentStatus
    location?: string | null
    notes?: string | null
    timestamp?: Date | string
  }

  export type TrackingHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    amount: number
    paymentMethod: string
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutPaymentInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    orderId: string
    amount: number
    paymentMethod: string
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutPaymentNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    orderId: string
    amount: number
    paymentMethod: string
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type FarmNullableScalarRelationFilter = {
    is?: FarmWhereInput | null
    isNot?: FarmWhereInput | null
  }

  export type RetailerNullableScalarRelationFilter = {
    is?: RetailerWhereInput | null
    isNot?: RetailerWhereInput | null
  }

  export type DistributorNullableScalarRelationFilter = {
    is?: DistributorWhereInput | null
    isNot?: DistributorWhereInput | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    emailVerified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput
    some?: InventoryWhereInput
    none?: InventoryWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type InventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FarmCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    certifications?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmAvgOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FarmMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
    latitude?: SortOrder
    longitude?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FarmSumOrderByAggregateInput = {
    latitude?: SortOrder
    longitude?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type ShipmentListRelationFilter = {
    every?: ShipmentWhereInput
    some?: ShipmentWhereInput
    none?: ShipmentWhereInput
  }

  export type ShipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistributorCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    licenseNumber?: SortOrder
    vehicleCount?: SortOrder
    warehouseCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistributorAvgOrderByAggregateInput = {
    vehicleCount?: SortOrder
    warehouseCount?: SortOrder
  }

  export type DistributorMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    licenseNumber?: SortOrder
    vehicleCount?: SortOrder
    warehouseCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistributorMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    licenseNumber?: SortOrder
    vehicleCount?: SortOrder
    warehouseCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DistributorSumOrderByAggregateInput = {
    vehicleCount?: SortOrder
    warehouseCount?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type RetailerCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    storeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RetailerMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    storeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RetailerMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    storeName?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    storeType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FarmScalarRelationFilter = {
    is?: FarmWhereInput
    isNot?: FarmWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    unitPrice?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    unitPrice?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    unitPrice?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    farmId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    category?: SortOrder
    unit?: SortOrder
    unitPrice?: SortOrder
    imageUrl?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    unitPrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    farmId?: SortOrder
    retailerId?: SortOrder
    quantity?: SortOrder
    batchNumber?: SortOrder
    harvestDate?: SortOrder
    expiryDate?: SortOrder
    qualityGrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    farmId?: SortOrder
    retailerId?: SortOrder
    quantity?: SortOrder
    batchNumber?: SortOrder
    harvestDate?: SortOrder
    expiryDate?: SortOrder
    qualityGrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    farmId?: SortOrder
    retailerId?: SortOrder
    quantity?: SortOrder
    batchNumber?: SortOrder
    harvestDate?: SortOrder
    expiryDate?: SortOrder
    qualityGrade?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type ShipmentNullableScalarRelationFilter = {
    is?: ShipmentWhereInput | null
    isNot?: ShipmentWhereInput | null
  }

  export type PaymentNullableScalarRelationFilter = {
    is?: PaymentWhereInput | null
    isNot?: PaymentWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    buyerId?: SortOrder
    sellerId?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    createdAt?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
  }

  export type EnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }

  export type TrackingHistoryListRelationFilter = {
    every?: TrackingHistoryWhereInput
    some?: TrackingHistoryWhereInput
    none?: TrackingHistoryWhereInput
  }

  export type TrackingHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    distributorId?: SortOrder
    trackingNumber?: SortOrder
    status?: SortOrder
    pickupAddress?: SortOrder
    deliveryAddress?: SortOrder
    estimatedPickup?: SortOrder
    actualPickup?: SortOrder
    estimatedDelivery?: SortOrder
    actualDelivery?: SortOrder
    driverName?: SortOrder
    vehicleNumber?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    distributorId?: SortOrder
    trackingNumber?: SortOrder
    status?: SortOrder
    pickupAddress?: SortOrder
    deliveryAddress?: SortOrder
    estimatedPickup?: SortOrder
    actualPickup?: SortOrder
    estimatedDelivery?: SortOrder
    actualDelivery?: SortOrder
    driverName?: SortOrder
    vehicleNumber?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShipmentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    distributorId?: SortOrder
    trackingNumber?: SortOrder
    status?: SortOrder
    pickupAddress?: SortOrder
    deliveryAddress?: SortOrder
    estimatedPickup?: SortOrder
    actualPickup?: SortOrder
    estimatedDelivery?: SortOrder
    actualDelivery?: SortOrder
    driverName?: SortOrder
    vehicleNumber?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }

  export type ShipmentScalarRelationFilter = {
    is?: ShipmentWhereInput
    isNot?: ShipmentWhereInput
  }

  export type TrackingHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    status?: SortOrder
    location?: SortOrder
    notes?: SortOrder
    timestamp?: SortOrder
  }

  export type TrackingHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    status?: SortOrder
    location?: SortOrder
    notes?: SortOrder
    timestamp?: SortOrder
  }

  export type TrackingHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    shipmentId?: SortOrder
    status?: SortOrder
    location?: SortOrder
    notes?: SortOrder
    timestamp?: SortOrder
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    amount?: SortOrder
    paymentMethod?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type FarmCreateNestedOneWithoutUserInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput>
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput
    connect?: FarmWhereUniqueInput
  }

  export type RetailerCreateNestedOneWithoutUserInput = {
    create?: XOR<RetailerCreateWithoutUserInput, RetailerUncheckedCreateWithoutUserInput>
    connectOrCreate?: RetailerCreateOrConnectWithoutUserInput
    connect?: RetailerWhereUniqueInput
  }

  export type DistributorCreateNestedOneWithoutUserInput = {
    create?: XOR<DistributorCreateWithoutUserInput, DistributorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DistributorCreateOrConnectWithoutUserInput
    connect?: DistributorWhereUniqueInput
  }

  export type OrderCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutSellerInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type FarmUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput>
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput
    connect?: FarmWhereUniqueInput
  }

  export type RetailerUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<RetailerCreateWithoutUserInput, RetailerUncheckedCreateWithoutUserInput>
    connectOrCreate?: RetailerCreateOrConnectWithoutUserInput
    connect?: RetailerWhereUniqueInput
  }

  export type DistributorUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<DistributorCreateWithoutUserInput, DistributorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DistributorCreateOrConnectWithoutUserInput
    connect?: DistributorWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FarmUpdateOneWithoutUserNestedInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput>
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput
    upsert?: FarmUpsertWithoutUserInput
    disconnect?: FarmWhereInput | boolean
    delete?: FarmWhereInput | boolean
    connect?: FarmWhereUniqueInput
    update?: XOR<XOR<FarmUpdateToOneWithWhereWithoutUserInput, FarmUpdateWithoutUserInput>, FarmUncheckedUpdateWithoutUserInput>
  }

  export type RetailerUpdateOneWithoutUserNestedInput = {
    create?: XOR<RetailerCreateWithoutUserInput, RetailerUncheckedCreateWithoutUserInput>
    connectOrCreate?: RetailerCreateOrConnectWithoutUserInput
    upsert?: RetailerUpsertWithoutUserInput
    disconnect?: RetailerWhereInput | boolean
    delete?: RetailerWhereInput | boolean
    connect?: RetailerWhereUniqueInput
    update?: XOR<XOR<RetailerUpdateToOneWithWhereWithoutUserInput, RetailerUpdateWithoutUserInput>, RetailerUncheckedUpdateWithoutUserInput>
  }

  export type DistributorUpdateOneWithoutUserNestedInput = {
    create?: XOR<DistributorCreateWithoutUserInput, DistributorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DistributorCreateOrConnectWithoutUserInput
    upsert?: DistributorUpsertWithoutUserInput
    disconnect?: DistributorWhereInput | boolean
    delete?: DistributorWhereInput | boolean
    connect?: DistributorWhereUniqueInput
    update?: XOR<XOR<DistributorUpdateToOneWithWhereWithoutUserInput, DistributorUpdateWithoutUserInput>, DistributorUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBuyerInput | OrderUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBuyerInput | OrderUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBuyerInput | OrderUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutSellerNestedInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutSellerInput | OrderUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutSellerInput | OrderUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutSellerInput | OrderUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type FarmUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput>
    connectOrCreate?: FarmCreateOrConnectWithoutUserInput
    upsert?: FarmUpsertWithoutUserInput
    disconnect?: FarmWhereInput | boolean
    delete?: FarmWhereInput | boolean
    connect?: FarmWhereUniqueInput
    update?: XOR<XOR<FarmUpdateToOneWithWhereWithoutUserInput, FarmUpdateWithoutUserInput>, FarmUncheckedUpdateWithoutUserInput>
  }

  export type RetailerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<RetailerCreateWithoutUserInput, RetailerUncheckedCreateWithoutUserInput>
    connectOrCreate?: RetailerCreateOrConnectWithoutUserInput
    upsert?: RetailerUpsertWithoutUserInput
    disconnect?: RetailerWhereInput | boolean
    delete?: RetailerWhereInput | boolean
    connect?: RetailerWhereUniqueInput
    update?: XOR<XOR<RetailerUpdateToOneWithWhereWithoutUserInput, RetailerUpdateWithoutUserInput>, RetailerUncheckedUpdateWithoutUserInput>
  }

  export type DistributorUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<DistributorCreateWithoutUserInput, DistributorUncheckedCreateWithoutUserInput>
    connectOrCreate?: DistributorCreateOrConnectWithoutUserInput
    upsert?: DistributorUpsertWithoutUserInput
    disconnect?: DistributorWhereInput | boolean
    delete?: DistributorWhereInput | boolean
    connect?: DistributorWhereUniqueInput
    update?: XOR<XOR<DistributorUpdateToOneWithWhereWithoutUserInput, DistributorUpdateWithoutUserInput>, DistributorUncheckedUpdateWithoutUserInput>
  }

  export type OrderUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput> | OrderCreateWithoutBuyerInput[] | OrderUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutBuyerInput | OrderCreateOrConnectWithoutBuyerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutBuyerInput | OrderUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: OrderCreateManyBuyerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutBuyerInput | OrderUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutBuyerInput | OrderUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput> | OrderCreateWithoutSellerInput[] | OrderUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutSellerInput | OrderCreateOrConnectWithoutSellerInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutSellerInput | OrderUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: OrderCreateManySellerInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutSellerInput | OrderUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutSellerInput | OrderUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type FarmCreatecertificationsInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutFarmInput = {
    create?: XOR<UserCreateWithoutFarmInput, UserUncheckedCreateWithoutFarmInput>
    connectOrCreate?: UserCreateOrConnectWithoutFarmInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedManyWithoutFarmInput = {
    create?: XOR<ProductCreateWithoutFarmInput, ProductUncheckedCreateWithoutFarmInput> | ProductCreateWithoutFarmInput[] | ProductUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFarmInput | ProductCreateOrConnectWithoutFarmInput[]
    createMany?: ProductCreateManyFarmInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type InventoryCreateNestedManyWithoutFarmInput = {
    create?: XOR<InventoryCreateWithoutFarmInput, InventoryUncheckedCreateWithoutFarmInput> | InventoryCreateWithoutFarmInput[] | InventoryUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutFarmInput | InventoryCreateOrConnectWithoutFarmInput[]
    createMany?: InventoryCreateManyFarmInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutFarmInput = {
    create?: XOR<ProductCreateWithoutFarmInput, ProductUncheckedCreateWithoutFarmInput> | ProductCreateWithoutFarmInput[] | ProductUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFarmInput | ProductCreateOrConnectWithoutFarmInput[]
    createMany?: ProductCreateManyFarmInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutFarmInput = {
    create?: XOR<InventoryCreateWithoutFarmInput, InventoryUncheckedCreateWithoutFarmInput> | InventoryCreateWithoutFarmInput[] | InventoryUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutFarmInput | InventoryCreateOrConnectWithoutFarmInput[]
    createMany?: InventoryCreateManyFarmInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FarmUpdatecertificationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type UserUpdateOneRequiredWithoutFarmNestedInput = {
    create?: XOR<UserCreateWithoutFarmInput, UserUncheckedCreateWithoutFarmInput>
    connectOrCreate?: UserCreateOrConnectWithoutFarmInput
    upsert?: UserUpsertWithoutFarmInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFarmInput, UserUpdateWithoutFarmInput>, UserUncheckedUpdateWithoutFarmInput>
  }

  export type ProductUpdateManyWithoutFarmNestedInput = {
    create?: XOR<ProductCreateWithoutFarmInput, ProductUncheckedCreateWithoutFarmInput> | ProductCreateWithoutFarmInput[] | ProductUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFarmInput | ProductCreateOrConnectWithoutFarmInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutFarmInput | ProductUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: ProductCreateManyFarmInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutFarmInput | ProductUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutFarmInput | ProductUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type InventoryUpdateManyWithoutFarmNestedInput = {
    create?: XOR<InventoryCreateWithoutFarmInput, InventoryUncheckedCreateWithoutFarmInput> | InventoryCreateWithoutFarmInput[] | InventoryUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutFarmInput | InventoryCreateOrConnectWithoutFarmInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutFarmInput | InventoryUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: InventoryCreateManyFarmInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutFarmInput | InventoryUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutFarmInput | InventoryUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: XOR<ProductCreateWithoutFarmInput, ProductUncheckedCreateWithoutFarmInput> | ProductCreateWithoutFarmInput[] | ProductUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutFarmInput | ProductCreateOrConnectWithoutFarmInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutFarmInput | ProductUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: ProductCreateManyFarmInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutFarmInput | ProductUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutFarmInput | ProductUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutFarmNestedInput = {
    create?: XOR<InventoryCreateWithoutFarmInput, InventoryUncheckedCreateWithoutFarmInput> | InventoryCreateWithoutFarmInput[] | InventoryUncheckedCreateWithoutFarmInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutFarmInput | InventoryCreateOrConnectWithoutFarmInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutFarmInput | InventoryUpsertWithWhereUniqueWithoutFarmInput[]
    createMany?: InventoryCreateManyFarmInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutFarmInput | InventoryUpdateWithWhereUniqueWithoutFarmInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutFarmInput | InventoryUpdateManyWithWhereWithoutFarmInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutDistributorInput = {
    create?: XOR<UserCreateWithoutDistributorInput, UserUncheckedCreateWithoutDistributorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDistributorInput
    connect?: UserWhereUniqueInput
  }

  export type ShipmentCreateNestedManyWithoutDistributorInput = {
    create?: XOR<ShipmentCreateWithoutDistributorInput, ShipmentUncheckedCreateWithoutDistributorInput> | ShipmentCreateWithoutDistributorInput[] | ShipmentUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDistributorInput | ShipmentCreateOrConnectWithoutDistributorInput[]
    createMany?: ShipmentCreateManyDistributorInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutDistributorInput = {
    create?: XOR<ShipmentCreateWithoutDistributorInput, ShipmentUncheckedCreateWithoutDistributorInput> | ShipmentCreateWithoutDistributorInput[] | ShipmentUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDistributorInput | ShipmentCreateOrConnectWithoutDistributorInput[]
    createMany?: ShipmentCreateManyDistributorInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutDistributorNestedInput = {
    create?: XOR<UserCreateWithoutDistributorInput, UserUncheckedCreateWithoutDistributorInput>
    connectOrCreate?: UserCreateOrConnectWithoutDistributorInput
    upsert?: UserUpsertWithoutDistributorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDistributorInput, UserUpdateWithoutDistributorInput>, UserUncheckedUpdateWithoutDistributorInput>
  }

  export type ShipmentUpdateManyWithoutDistributorNestedInput = {
    create?: XOR<ShipmentCreateWithoutDistributorInput, ShipmentUncheckedCreateWithoutDistributorInput> | ShipmentCreateWithoutDistributorInput[] | ShipmentUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDistributorInput | ShipmentCreateOrConnectWithoutDistributorInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutDistributorInput | ShipmentUpsertWithWhereUniqueWithoutDistributorInput[]
    createMany?: ShipmentCreateManyDistributorInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutDistributorInput | ShipmentUpdateWithWhereUniqueWithoutDistributorInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutDistributorInput | ShipmentUpdateManyWithWhereWithoutDistributorInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutDistributorNestedInput = {
    create?: XOR<ShipmentCreateWithoutDistributorInput, ShipmentUncheckedCreateWithoutDistributorInput> | ShipmentCreateWithoutDistributorInput[] | ShipmentUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutDistributorInput | ShipmentCreateOrConnectWithoutDistributorInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutDistributorInput | ShipmentUpsertWithWhereUniqueWithoutDistributorInput[]
    createMany?: ShipmentCreateManyDistributorInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutDistributorInput | ShipmentUpdateWithWhereUniqueWithoutDistributorInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutDistributorInput | ShipmentUpdateManyWithWhereWithoutDistributorInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutRetailerInput = {
    create?: XOR<UserCreateWithoutRetailerInput, UserUncheckedCreateWithoutRetailerInput>
    connectOrCreate?: UserCreateOrConnectWithoutRetailerInput
    connect?: UserWhereUniqueInput
  }

  export type InventoryCreateNestedManyWithoutRetailerInput = {
    create?: XOR<InventoryCreateWithoutRetailerInput, InventoryUncheckedCreateWithoutRetailerInput> | InventoryCreateWithoutRetailerInput[] | InventoryUncheckedCreateWithoutRetailerInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutRetailerInput | InventoryCreateOrConnectWithoutRetailerInput[]
    createMany?: InventoryCreateManyRetailerInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutRetailerInput = {
    create?: XOR<InventoryCreateWithoutRetailerInput, InventoryUncheckedCreateWithoutRetailerInput> | InventoryCreateWithoutRetailerInput[] | InventoryUncheckedCreateWithoutRetailerInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutRetailerInput | InventoryCreateOrConnectWithoutRetailerInput[]
    createMany?: InventoryCreateManyRetailerInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutRetailerNestedInput = {
    create?: XOR<UserCreateWithoutRetailerInput, UserUncheckedCreateWithoutRetailerInput>
    connectOrCreate?: UserCreateOrConnectWithoutRetailerInput
    upsert?: UserUpsertWithoutRetailerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRetailerInput, UserUpdateWithoutRetailerInput>, UserUncheckedUpdateWithoutRetailerInput>
  }

  export type InventoryUpdateManyWithoutRetailerNestedInput = {
    create?: XOR<InventoryCreateWithoutRetailerInput, InventoryUncheckedCreateWithoutRetailerInput> | InventoryCreateWithoutRetailerInput[] | InventoryUncheckedCreateWithoutRetailerInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutRetailerInput | InventoryCreateOrConnectWithoutRetailerInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutRetailerInput | InventoryUpsertWithWhereUniqueWithoutRetailerInput[]
    createMany?: InventoryCreateManyRetailerInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutRetailerInput | InventoryUpdateWithWhereUniqueWithoutRetailerInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutRetailerInput | InventoryUpdateManyWithWhereWithoutRetailerInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutRetailerNestedInput = {
    create?: XOR<InventoryCreateWithoutRetailerInput, InventoryUncheckedCreateWithoutRetailerInput> | InventoryCreateWithoutRetailerInput[] | InventoryUncheckedCreateWithoutRetailerInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutRetailerInput | InventoryCreateOrConnectWithoutRetailerInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutRetailerInput | InventoryUpsertWithWhereUniqueWithoutRetailerInput[]
    createMany?: InventoryCreateManyRetailerInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutRetailerInput | InventoryUpdateWithWhereUniqueWithoutRetailerInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutRetailerInput | InventoryUpdateManyWithWhereWithoutRetailerInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type FarmCreateNestedOneWithoutProductsInput = {
    create?: XOR<FarmCreateWithoutProductsInput, FarmUncheckedCreateWithoutProductsInput>
    connectOrCreate?: FarmCreateOrConnectWithoutProductsInput
    connect?: FarmWhereUniqueInput
  }

  export type InventoryCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FarmUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<FarmCreateWithoutProductsInput, FarmUncheckedCreateWithoutProductsInput>
    connectOrCreate?: FarmCreateOrConnectWithoutProductsInput
    upsert?: FarmUpsertWithoutProductsInput
    connect?: FarmWhereUniqueInput
    update?: XOR<XOR<FarmUpdateToOneWithWhereWithoutProductsInput, FarmUpdateWithoutProductsInput>, FarmUncheckedUpdateWithoutProductsInput>
  }

  export type InventoryUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutProductInput | InventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutProductInput | InventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutProductInput | InventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput> | InventoryCreateWithoutProductInput[] | InventoryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutProductInput | InventoryCreateOrConnectWithoutProductInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutProductInput | InventoryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: InventoryCreateManyProductInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutProductInput | InventoryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutProductInput | InventoryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput> | OrderItemCreateWithoutProductInput[] | OrderItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutProductInput | OrderItemCreateOrConnectWithoutProductInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutProductInput | OrderItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderItemCreateManyProductInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutProductInput | OrderItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutProductInput | OrderItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<ProductCreateWithoutInventoriesInput, ProductUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoriesInput
    connect?: ProductWhereUniqueInput
  }

  export type FarmCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<FarmCreateWithoutInventoriesInput, FarmUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: FarmCreateOrConnectWithoutInventoriesInput
    connect?: FarmWhereUniqueInput
  }

  export type RetailerCreateNestedOneWithoutInventoriesInput = {
    create?: XOR<RetailerCreateWithoutInventoriesInput, RetailerUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: RetailerCreateOrConnectWithoutInventoriesInput
    connect?: RetailerWhereUniqueInput
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ProductUpdateOneRequiredWithoutInventoriesNestedInput = {
    create?: XOR<ProductCreateWithoutInventoriesInput, ProductUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutInventoriesInput
    upsert?: ProductUpsertWithoutInventoriesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutInventoriesInput, ProductUpdateWithoutInventoriesInput>, ProductUncheckedUpdateWithoutInventoriesInput>
  }

  export type FarmUpdateOneWithoutInventoriesNestedInput = {
    create?: XOR<FarmCreateWithoutInventoriesInput, FarmUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: FarmCreateOrConnectWithoutInventoriesInput
    upsert?: FarmUpsertWithoutInventoriesInput
    disconnect?: FarmWhereInput | boolean
    delete?: FarmWhereInput | boolean
    connect?: FarmWhereUniqueInput
    update?: XOR<XOR<FarmUpdateToOneWithWhereWithoutInventoriesInput, FarmUpdateWithoutInventoriesInput>, FarmUncheckedUpdateWithoutInventoriesInput>
  }

  export type RetailerUpdateOneWithoutInventoriesNestedInput = {
    create?: XOR<RetailerCreateWithoutInventoriesInput, RetailerUncheckedCreateWithoutInventoriesInput>
    connectOrCreate?: RetailerCreateOrConnectWithoutInventoriesInput
    upsert?: RetailerUpsertWithoutInventoriesInput
    disconnect?: RetailerWhereInput | boolean
    delete?: RetailerWhereInput | boolean
    connect?: RetailerWhereUniqueInput
    update?: XOR<XOR<RetailerUpdateToOneWithWhereWithoutInventoriesInput, RetailerUpdateWithoutInventoriesInput>, RetailerUncheckedUpdateWithoutInventoriesInput>
  }

  export type UserCreateNestedOneWithoutOrdersAsBuyerInput = {
    create?: XOR<UserCreateWithoutOrdersAsBuyerInput, UserUncheckedCreateWithoutOrdersAsBuyerInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersAsBuyerInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersAsSellerInput = {
    create?: XOR<UserCreateWithoutOrdersAsSellerInput, UserUncheckedCreateWithoutOrdersAsSellerInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersAsSellerInput
    connect?: UserWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ShipmentCreateNestedOneWithoutOrderInput = {
    create?: XOR<ShipmentCreateWithoutOrderInput, ShipmentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutOrderInput
    connect?: ShipmentWhereUniqueInput
  }

  export type PaymentCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<ShipmentCreateWithoutOrderInput, ShipmentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutOrderInput
    connect?: ShipmentWhereUniqueInput
  }

  export type PaymentUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    connect?: PaymentWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type UserUpdateOneRequiredWithoutOrdersAsBuyerNestedInput = {
    create?: XOR<UserCreateWithoutOrdersAsBuyerInput, UserUncheckedCreateWithoutOrdersAsBuyerInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersAsBuyerInput
    upsert?: UserUpsertWithoutOrdersAsBuyerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersAsBuyerInput, UserUpdateWithoutOrdersAsBuyerInput>, UserUncheckedUpdateWithoutOrdersAsBuyerInput>
  }

  export type UserUpdateOneRequiredWithoutOrdersAsSellerNestedInput = {
    create?: XOR<UserCreateWithoutOrdersAsSellerInput, UserUncheckedCreateWithoutOrdersAsSellerInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersAsSellerInput
    upsert?: UserUpsertWithoutOrdersAsSellerInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersAsSellerInput, UserUpdateWithoutOrdersAsSellerInput>, UserUncheckedUpdateWithoutOrdersAsSellerInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ShipmentUpdateOneWithoutOrderNestedInput = {
    create?: XOR<ShipmentCreateWithoutOrderInput, ShipmentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutOrderInput
    upsert?: ShipmentUpsertWithoutOrderInput
    disconnect?: ShipmentWhereInput | boolean
    delete?: ShipmentWhereInput | boolean
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutOrderInput, ShipmentUpdateWithoutOrderInput>, ShipmentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<ShipmentCreateWithoutOrderInput, ShipmentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutOrderInput
    upsert?: ShipmentUpsertWithoutOrderInput
    disconnect?: ShipmentWhereInput | boolean
    delete?: ShipmentWhereInput | boolean
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutOrderInput, ShipmentUpdateWithoutOrderInput>, ShipmentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PaymentCreateOrConnectWithoutOrderInput
    upsert?: PaymentUpsertWithoutOrderInput
    disconnect?: PaymentWhereInput | boolean
    delete?: PaymentWhereInput | boolean
    connect?: PaymentWhereUniqueInput
    update?: XOR<XOR<PaymentUpdateToOneWithWhereWithoutOrderInput, PaymentUpdateWithoutOrderInput>, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderItemsInput
    upsert?: ProductUpsertWithoutOrderItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderItemsInput, ProductUpdateWithoutOrderItemsInput>, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderCreateNestedOneWithoutShipmentInput = {
    create?: XOR<OrderCreateWithoutShipmentInput, OrderUncheckedCreateWithoutShipmentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutShipmentInput
    connect?: OrderWhereUniqueInput
  }

  export type DistributorCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<DistributorCreateWithoutShipmentsInput, DistributorUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: DistributorCreateOrConnectWithoutShipmentsInput
    connect?: DistributorWhereUniqueInput
  }

  export type TrackingHistoryCreateNestedManyWithoutShipmentInput = {
    create?: XOR<TrackingHistoryCreateWithoutShipmentInput, TrackingHistoryUncheckedCreateWithoutShipmentInput> | TrackingHistoryCreateWithoutShipmentInput[] | TrackingHistoryUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: TrackingHistoryCreateOrConnectWithoutShipmentInput | TrackingHistoryCreateOrConnectWithoutShipmentInput[]
    createMany?: TrackingHistoryCreateManyShipmentInputEnvelope
    connect?: TrackingHistoryWhereUniqueInput | TrackingHistoryWhereUniqueInput[]
  }

  export type TrackingHistoryUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<TrackingHistoryCreateWithoutShipmentInput, TrackingHistoryUncheckedCreateWithoutShipmentInput> | TrackingHistoryCreateWithoutShipmentInput[] | TrackingHistoryUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: TrackingHistoryCreateOrConnectWithoutShipmentInput | TrackingHistoryCreateOrConnectWithoutShipmentInput[]
    createMany?: TrackingHistoryCreateManyShipmentInputEnvelope
    connect?: TrackingHistoryWhereUniqueInput | TrackingHistoryWhereUniqueInput[]
  }

  export type EnumShipmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.ShipmentStatus
  }

  export type OrderUpdateOneRequiredWithoutShipmentNestedInput = {
    create?: XOR<OrderCreateWithoutShipmentInput, OrderUncheckedCreateWithoutShipmentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutShipmentInput
    upsert?: OrderUpsertWithoutShipmentInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutShipmentInput, OrderUpdateWithoutShipmentInput>, OrderUncheckedUpdateWithoutShipmentInput>
  }

  export type DistributorUpdateOneWithoutShipmentsNestedInput = {
    create?: XOR<DistributorCreateWithoutShipmentsInput, DistributorUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: DistributorCreateOrConnectWithoutShipmentsInput
    upsert?: DistributorUpsertWithoutShipmentsInput
    disconnect?: DistributorWhereInput | boolean
    delete?: DistributorWhereInput | boolean
    connect?: DistributorWhereUniqueInput
    update?: XOR<XOR<DistributorUpdateToOneWithWhereWithoutShipmentsInput, DistributorUpdateWithoutShipmentsInput>, DistributorUncheckedUpdateWithoutShipmentsInput>
  }

  export type TrackingHistoryUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<TrackingHistoryCreateWithoutShipmentInput, TrackingHistoryUncheckedCreateWithoutShipmentInput> | TrackingHistoryCreateWithoutShipmentInput[] | TrackingHistoryUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: TrackingHistoryCreateOrConnectWithoutShipmentInput | TrackingHistoryCreateOrConnectWithoutShipmentInput[]
    upsert?: TrackingHistoryUpsertWithWhereUniqueWithoutShipmentInput | TrackingHistoryUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: TrackingHistoryCreateManyShipmentInputEnvelope
    set?: TrackingHistoryWhereUniqueInput | TrackingHistoryWhereUniqueInput[]
    disconnect?: TrackingHistoryWhereUniqueInput | TrackingHistoryWhereUniqueInput[]
    delete?: TrackingHistoryWhereUniqueInput | TrackingHistoryWhereUniqueInput[]
    connect?: TrackingHistoryWhereUniqueInput | TrackingHistoryWhereUniqueInput[]
    update?: TrackingHistoryUpdateWithWhereUniqueWithoutShipmentInput | TrackingHistoryUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: TrackingHistoryUpdateManyWithWhereWithoutShipmentInput | TrackingHistoryUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: TrackingHistoryScalarWhereInput | TrackingHistoryScalarWhereInput[]
  }

  export type TrackingHistoryUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<TrackingHistoryCreateWithoutShipmentInput, TrackingHistoryUncheckedCreateWithoutShipmentInput> | TrackingHistoryCreateWithoutShipmentInput[] | TrackingHistoryUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: TrackingHistoryCreateOrConnectWithoutShipmentInput | TrackingHistoryCreateOrConnectWithoutShipmentInput[]
    upsert?: TrackingHistoryUpsertWithWhereUniqueWithoutShipmentInput | TrackingHistoryUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: TrackingHistoryCreateManyShipmentInputEnvelope
    set?: TrackingHistoryWhereUniqueInput | TrackingHistoryWhereUniqueInput[]
    disconnect?: TrackingHistoryWhereUniqueInput | TrackingHistoryWhereUniqueInput[]
    delete?: TrackingHistoryWhereUniqueInput | TrackingHistoryWhereUniqueInput[]
    connect?: TrackingHistoryWhereUniqueInput | TrackingHistoryWhereUniqueInput[]
    update?: TrackingHistoryUpdateWithWhereUniqueWithoutShipmentInput | TrackingHistoryUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: TrackingHistoryUpdateManyWithWhereWithoutShipmentInput | TrackingHistoryUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: TrackingHistoryScalarWhereInput | TrackingHistoryScalarWhereInput[]
  }

  export type ShipmentCreateNestedOneWithoutTrackingHistoryInput = {
    create?: XOR<ShipmentCreateWithoutTrackingHistoryInput, ShipmentUncheckedCreateWithoutTrackingHistoryInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutTrackingHistoryInput
    connect?: ShipmentWhereUniqueInput
  }

  export type ShipmentUpdateOneRequiredWithoutTrackingHistoryNestedInput = {
    create?: XOR<ShipmentCreateWithoutTrackingHistoryInput, ShipmentUncheckedCreateWithoutTrackingHistoryInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutTrackingHistoryInput
    upsert?: ShipmentUpsertWithoutTrackingHistoryInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutTrackingHistoryInput, ShipmentUpdateWithoutTrackingHistoryInput>, ShipmentUncheckedUpdateWithoutTrackingHistoryInput>
  }

  export type OrderCreateNestedOneWithoutPaymentInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    connect?: OrderWhereUniqueInput
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type OrderUpdateOneRequiredWithoutPaymentNestedInput = {
    create?: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPaymentInput
    upsert?: OrderUpsertWithoutPaymentInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPaymentInput, OrderUpdateWithoutPaymentInput>, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedEnumShipmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusFilter<$PrismaModel> | $Enums.ShipmentStatus
  }

  export type NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ShipmentStatus | EnumShipmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ShipmentStatus[] | ListEnumShipmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumShipmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.ShipmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumShipmentStatusFilter<$PrismaModel>
    _max?: NestedEnumShipmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type FarmCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    city: string
    province: string
    postalCode?: string | null
    latitude?: number | null
    longitude?: number | null
    certifications?: FarmCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutFarmInput
    inventories?: InventoryCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    city: string
    province: string
    postalCode?: string | null
    latitude?: number | null
    longitude?: number | null
    certifications?: FarmCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutFarmInput
    inventories?: InventoryUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmCreateOrConnectWithoutUserInput = {
    where: FarmWhereUniqueInput
    create: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput>
  }

  export type RetailerCreateWithoutUserInput = {
    id?: string
    storeName: string
    address: string
    city: string
    province: string
    storeType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: InventoryCreateNestedManyWithoutRetailerInput
  }

  export type RetailerUncheckedCreateWithoutUserInput = {
    id?: string
    storeName: string
    address: string
    city: string
    province: string
    storeType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: InventoryUncheckedCreateNestedManyWithoutRetailerInput
  }

  export type RetailerCreateOrConnectWithoutUserInput = {
    where: RetailerWhereUniqueInput
    create: XOR<RetailerCreateWithoutUserInput, RetailerUncheckedCreateWithoutUserInput>
  }

  export type DistributorCreateWithoutUserInput = {
    id?: string
    companyName: string
    address: string
    city: string
    province: string
    licenseNumber?: string | null
    vehicleCount?: number
    warehouseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentCreateNestedManyWithoutDistributorInput
  }

  export type DistributorUncheckedCreateWithoutUserInput = {
    id?: string
    companyName: string
    address: string
    city: string
    province: string
    licenseNumber?: string | null
    vehicleCount?: number
    warehouseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutDistributorInput
  }

  export type DistributorCreateOrConnectWithoutUserInput = {
    where: DistributorWhereUniqueInput
    create: XOR<DistributorCreateWithoutUserInput, DistributorUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateWithoutBuyerInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    seller: UserCreateNestedOneWithoutOrdersAsSellerInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    shipment?: ShipmentCreateNestedOneWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutBuyerInput = {
    id?: string
    orderNumber: string
    sellerId: string
    status?: $Enums.OrderStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    shipment?: ShipmentUncheckedCreateNestedOneWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput>
  }

  export type OrderCreateManyBuyerInputEnvelope = {
    data: OrderCreateManyBuyerInput | OrderCreateManyBuyerInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutSellerInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    buyer: UserCreateNestedOneWithoutOrdersAsBuyerInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    shipment?: ShipmentCreateNestedOneWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutSellerInput = {
    id?: string
    orderNumber: string
    buyerId: string
    status?: $Enums.OrderStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    shipment?: ShipmentUncheckedCreateNestedOneWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutSellerInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput>
  }

  export type OrderCreateManySellerInputEnvelope = {
    data: OrderCreateManySellerInput | OrderCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type FarmUpsertWithoutUserInput = {
    update: XOR<FarmUpdateWithoutUserInput, FarmUncheckedUpdateWithoutUserInput>
    create: XOR<FarmCreateWithoutUserInput, FarmUncheckedCreateWithoutUserInput>
    where?: FarmWhereInput
  }

  export type FarmUpdateToOneWithWhereWithoutUserInput = {
    where?: FarmWhereInput
    data: XOR<FarmUpdateWithoutUserInput, FarmUncheckedUpdateWithoutUserInput>
  }

  export type FarmUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    certifications?: FarmUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutFarmNestedInput
    inventories?: InventoryUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    certifications?: FarmUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutFarmNestedInput
    inventories?: InventoryUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type RetailerUpsertWithoutUserInput = {
    update: XOR<RetailerUpdateWithoutUserInput, RetailerUncheckedUpdateWithoutUserInput>
    create: XOR<RetailerCreateWithoutUserInput, RetailerUncheckedCreateWithoutUserInput>
    where?: RetailerWhereInput
  }

  export type RetailerUpdateToOneWithWhereWithoutUserInput = {
    where?: RetailerWhereInput
    data: XOR<RetailerUpdateWithoutUserInput, RetailerUncheckedUpdateWithoutUserInput>
  }

  export type RetailerUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    storeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUpdateManyWithoutRetailerNestedInput
  }

  export type RetailerUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    storeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUncheckedUpdateManyWithoutRetailerNestedInput
  }

  export type DistributorUpsertWithoutUserInput = {
    update: XOR<DistributorUpdateWithoutUserInput, DistributorUncheckedUpdateWithoutUserInput>
    create: XOR<DistributorCreateWithoutUserInput, DistributorUncheckedCreateWithoutUserInput>
    where?: DistributorWhereInput
  }

  export type DistributorUpdateToOneWithWhereWithoutUserInput = {
    where?: DistributorWhereInput
    data: XOR<DistributorUpdateWithoutUserInput, DistributorUncheckedUpdateWithoutUserInput>
  }

  export type DistributorUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleCount?: IntFieldUpdateOperationsInput | number
    warehouseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleCount?: IntFieldUpdateOperationsInput | number
    warehouseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUncheckedUpdateManyWithoutDistributorNestedInput
  }

  export type OrderUpsertWithWhereUniqueWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutBuyerInput, OrderUncheckedUpdateWithoutBuyerInput>
    create: XOR<OrderCreateWithoutBuyerInput, OrderUncheckedCreateWithoutBuyerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutBuyerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutBuyerInput, OrderUncheckedUpdateWithoutBuyerInput>
  }

  export type OrderUpdateManyWithWhereWithoutBuyerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutBuyerInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    buyerId?: StringFilter<"Order"> | string
    sellerId?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    totalAmount?: FloatFilter<"Order"> | number
    notes?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutSellerInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutSellerInput, OrderUncheckedUpdateWithoutSellerInput>
    create: XOR<OrderCreateWithoutSellerInput, OrderUncheckedCreateWithoutSellerInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutSellerInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutSellerInput, OrderUncheckedUpdateWithoutSellerInput>
  }

  export type OrderUpdateManyWithWhereWithoutSellerInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutSellerInput>
  }

  export type UserCreateWithoutFarmInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    retailer?: RetailerCreateNestedOneWithoutUserInput
    distributor?: DistributorCreateNestedOneWithoutUserInput
    ordersAsBuyer?: OrderCreateNestedManyWithoutBuyerInput
    ordersAsSeller?: OrderCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutFarmInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    retailer?: RetailerUncheckedCreateNestedOneWithoutUserInput
    distributor?: DistributorUncheckedCreateNestedOneWithoutUserInput
    ordersAsBuyer?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    ordersAsSeller?: OrderUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutFarmInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFarmInput, UserUncheckedCreateWithoutFarmInput>
  }

  export type ProductCreateWithoutFarmInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    unit: string
    unitPrice: number
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: InventoryCreateNestedManyWithoutProductInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutFarmInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    unit: string
    unitPrice: number
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: InventoryUncheckedCreateNestedManyWithoutProductInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutFarmInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutFarmInput, ProductUncheckedCreateWithoutFarmInput>
  }

  export type ProductCreateManyFarmInputEnvelope = {
    data: ProductCreateManyFarmInput | ProductCreateManyFarmInput[]
    skipDuplicates?: boolean
  }

  export type InventoryCreateWithoutFarmInput = {
    id?: string
    quantity: number
    batchNumber: string
    harvestDate?: Date | string | null
    expiryDate?: Date | string | null
    qualityGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutInventoriesInput
    retailer?: RetailerCreateNestedOneWithoutInventoriesInput
  }

  export type InventoryUncheckedCreateWithoutFarmInput = {
    id?: string
    productId: string
    retailerId?: string | null
    quantity: number
    batchNumber: string
    harvestDate?: Date | string | null
    expiryDate?: Date | string | null
    qualityGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCreateOrConnectWithoutFarmInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutFarmInput, InventoryUncheckedCreateWithoutFarmInput>
  }

  export type InventoryCreateManyFarmInputEnvelope = {
    data: InventoryCreateManyFarmInput | InventoryCreateManyFarmInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutFarmInput = {
    update: XOR<UserUpdateWithoutFarmInput, UserUncheckedUpdateWithoutFarmInput>
    create: XOR<UserCreateWithoutFarmInput, UserUncheckedCreateWithoutFarmInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFarmInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFarmInput, UserUncheckedUpdateWithoutFarmInput>
  }

  export type UserUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    retailer?: RetailerUpdateOneWithoutUserNestedInput
    distributor?: DistributorUpdateOneWithoutUserNestedInput
    ordersAsBuyer?: OrderUpdateManyWithoutBuyerNestedInput
    ordersAsSeller?: OrderUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    retailer?: RetailerUncheckedUpdateOneWithoutUserNestedInput
    distributor?: DistributorUncheckedUpdateOneWithoutUserNestedInput
    ordersAsBuyer?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    ordersAsSeller?: OrderUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type ProductUpsertWithWhereUniqueWithoutFarmInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutFarmInput, ProductUncheckedUpdateWithoutFarmInput>
    create: XOR<ProductCreateWithoutFarmInput, ProductUncheckedCreateWithoutFarmInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutFarmInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutFarmInput, ProductUncheckedUpdateWithoutFarmInput>
  }

  export type ProductUpdateManyWithWhereWithoutFarmInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutFarmInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    farmId?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    description?: StringNullableFilter<"Product"> | string | null
    category?: StringFilter<"Product"> | string
    unit?: StringFilter<"Product"> | string
    unitPrice?: FloatFilter<"Product"> | number
    imageUrl?: StringNullableFilter<"Product"> | string | null
    isActive?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type InventoryUpsertWithWhereUniqueWithoutFarmInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutFarmInput, InventoryUncheckedUpdateWithoutFarmInput>
    create: XOR<InventoryCreateWithoutFarmInput, InventoryUncheckedCreateWithoutFarmInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutFarmInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutFarmInput, InventoryUncheckedUpdateWithoutFarmInput>
  }

  export type InventoryUpdateManyWithWhereWithoutFarmInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutFarmInput>
  }

  export type InventoryScalarWhereInput = {
    AND?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    OR?: InventoryScalarWhereInput[]
    NOT?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    id?: StringFilter<"Inventory"> | string
    productId?: StringFilter<"Inventory"> | string
    farmId?: StringNullableFilter<"Inventory"> | string | null
    retailerId?: StringNullableFilter<"Inventory"> | string | null
    quantity?: FloatFilter<"Inventory"> | number
    batchNumber?: StringFilter<"Inventory"> | string
    harvestDate?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"Inventory"> | Date | string | null
    qualityGrade?: StringNullableFilter<"Inventory"> | string | null
    createdAt?: DateTimeFilter<"Inventory"> | Date | string
    updatedAt?: DateTimeFilter<"Inventory"> | Date | string
  }

  export type UserCreateWithoutDistributorInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farm?: FarmCreateNestedOneWithoutUserInput
    retailer?: RetailerCreateNestedOneWithoutUserInput
    ordersAsBuyer?: OrderCreateNestedManyWithoutBuyerInput
    ordersAsSeller?: OrderCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutDistributorInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farm?: FarmUncheckedCreateNestedOneWithoutUserInput
    retailer?: RetailerUncheckedCreateNestedOneWithoutUserInput
    ordersAsBuyer?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    ordersAsSeller?: OrderUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutDistributorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDistributorInput, UserUncheckedCreateWithoutDistributorInput>
  }

  export type ShipmentCreateWithoutDistributorInput = {
    id?: string
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    pickupAddress: string
    deliveryAddress: string
    estimatedPickup?: Date | string | null
    actualPickup?: Date | string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    driverName?: string | null
    vehicleNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutShipmentInput
    trackingHistory?: TrackingHistoryCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutDistributorInput = {
    id?: string
    orderId: string
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    pickupAddress: string
    deliveryAddress: string
    estimatedPickup?: Date | string | null
    actualPickup?: Date | string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    driverName?: string | null
    vehicleNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trackingHistory?: TrackingHistoryUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutDistributorInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutDistributorInput, ShipmentUncheckedCreateWithoutDistributorInput>
  }

  export type ShipmentCreateManyDistributorInputEnvelope = {
    data: ShipmentCreateManyDistributorInput | ShipmentCreateManyDistributorInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDistributorInput = {
    update: XOR<UserUpdateWithoutDistributorInput, UserUncheckedUpdateWithoutDistributorInput>
    create: XOR<UserCreateWithoutDistributorInput, UserUncheckedCreateWithoutDistributorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDistributorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDistributorInput, UserUncheckedUpdateWithoutDistributorInput>
  }

  export type UserUpdateWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUpdateOneWithoutUserNestedInput
    retailer?: RetailerUpdateOneWithoutUserNestedInput
    ordersAsBuyer?: OrderUpdateManyWithoutBuyerNestedInput
    ordersAsSeller?: OrderUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUncheckedUpdateOneWithoutUserNestedInput
    retailer?: RetailerUncheckedUpdateOneWithoutUserNestedInput
    ordersAsBuyer?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    ordersAsSeller?: OrderUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type ShipmentUpsertWithWhereUniqueWithoutDistributorInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutDistributorInput, ShipmentUncheckedUpdateWithoutDistributorInput>
    create: XOR<ShipmentCreateWithoutDistributorInput, ShipmentUncheckedCreateWithoutDistributorInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutDistributorInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutDistributorInput, ShipmentUncheckedUpdateWithoutDistributorInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutDistributorInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutDistributorInput>
  }

  export type ShipmentScalarWhereInput = {
    AND?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    OR?: ShipmentScalarWhereInput[]
    NOT?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    id?: StringFilter<"Shipment"> | string
    orderId?: StringFilter<"Shipment"> | string
    distributorId?: StringNullableFilter<"Shipment"> | string | null
    trackingNumber?: StringFilter<"Shipment"> | string
    status?: EnumShipmentStatusFilter<"Shipment"> | $Enums.ShipmentStatus
    pickupAddress?: StringFilter<"Shipment"> | string
    deliveryAddress?: StringFilter<"Shipment"> | string
    estimatedPickup?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    actualPickup?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    estimatedDelivery?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    actualDelivery?: DateTimeNullableFilter<"Shipment"> | Date | string | null
    driverName?: StringNullableFilter<"Shipment"> | string | null
    vehicleNumber?: StringNullableFilter<"Shipment"> | string | null
    notes?: StringNullableFilter<"Shipment"> | string | null
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
  }

  export type UserCreateWithoutRetailerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farm?: FarmCreateNestedOneWithoutUserInput
    distributor?: DistributorCreateNestedOneWithoutUserInput
    ordersAsBuyer?: OrderCreateNestedManyWithoutBuyerInput
    ordersAsSeller?: OrderCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutRetailerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farm?: FarmUncheckedCreateNestedOneWithoutUserInput
    distributor?: DistributorUncheckedCreateNestedOneWithoutUserInput
    ordersAsBuyer?: OrderUncheckedCreateNestedManyWithoutBuyerInput
    ordersAsSeller?: OrderUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutRetailerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRetailerInput, UserUncheckedCreateWithoutRetailerInput>
  }

  export type InventoryCreateWithoutRetailerInput = {
    id?: string
    quantity: number
    batchNumber: string
    harvestDate?: Date | string | null
    expiryDate?: Date | string | null
    qualityGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    product: ProductCreateNestedOneWithoutInventoriesInput
    farm?: FarmCreateNestedOneWithoutInventoriesInput
  }

  export type InventoryUncheckedCreateWithoutRetailerInput = {
    id?: string
    productId: string
    farmId?: string | null
    quantity: number
    batchNumber: string
    harvestDate?: Date | string | null
    expiryDate?: Date | string | null
    qualityGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCreateOrConnectWithoutRetailerInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutRetailerInput, InventoryUncheckedCreateWithoutRetailerInput>
  }

  export type InventoryCreateManyRetailerInputEnvelope = {
    data: InventoryCreateManyRetailerInput | InventoryCreateManyRetailerInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutRetailerInput = {
    update: XOR<UserUpdateWithoutRetailerInput, UserUncheckedUpdateWithoutRetailerInput>
    create: XOR<UserCreateWithoutRetailerInput, UserUncheckedCreateWithoutRetailerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRetailerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRetailerInput, UserUncheckedUpdateWithoutRetailerInput>
  }

  export type UserUpdateWithoutRetailerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUpdateOneWithoutUserNestedInput
    distributor?: DistributorUpdateOneWithoutUserNestedInput
    ordersAsBuyer?: OrderUpdateManyWithoutBuyerNestedInput
    ordersAsSeller?: OrderUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutRetailerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUncheckedUpdateOneWithoutUserNestedInput
    distributor?: DistributorUncheckedUpdateOneWithoutUserNestedInput
    ordersAsBuyer?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
    ordersAsSeller?: OrderUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type InventoryUpsertWithWhereUniqueWithoutRetailerInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutRetailerInput, InventoryUncheckedUpdateWithoutRetailerInput>
    create: XOR<InventoryCreateWithoutRetailerInput, InventoryUncheckedCreateWithoutRetailerInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutRetailerInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutRetailerInput, InventoryUncheckedUpdateWithoutRetailerInput>
  }

  export type InventoryUpdateManyWithWhereWithoutRetailerInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutRetailerInput>
  }

  export type FarmCreateWithoutProductsInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    city: string
    province: string
    postalCode?: string | null
    latitude?: number | null
    longitude?: number | null
    certifications?: FarmCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFarmInput
    inventories?: InventoryCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateWithoutProductsInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    address: string
    city: string
    province: string
    postalCode?: string | null
    latitude?: number | null
    longitude?: number | null
    certifications?: FarmCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: InventoryUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmCreateOrConnectWithoutProductsInput = {
    where: FarmWhereUniqueInput
    create: XOR<FarmCreateWithoutProductsInput, FarmUncheckedCreateWithoutProductsInput>
  }

  export type InventoryCreateWithoutProductInput = {
    id?: string
    quantity: number
    batchNumber: string
    harvestDate?: Date | string | null
    expiryDate?: Date | string | null
    qualityGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    farm?: FarmCreateNestedOneWithoutInventoriesInput
    retailer?: RetailerCreateNestedOneWithoutInventoriesInput
  }

  export type InventoryUncheckedCreateWithoutProductInput = {
    id?: string
    farmId?: string | null
    retailerId?: string | null
    quantity: number
    batchNumber: string
    harvestDate?: Date | string | null
    expiryDate?: Date | string | null
    qualityGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCreateOrConnectWithoutProductInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>
  }

  export type InventoryCreateManyProductInputEnvelope = {
    data: InventoryCreateManyProductInput | InventoryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutProductInput = {
    id?: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutProductInput = {
    id?: string
    orderId: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemCreateManyProductInputEnvelope = {
    data: OrderItemCreateManyProductInput | OrderItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type FarmUpsertWithoutProductsInput = {
    update: XOR<FarmUpdateWithoutProductsInput, FarmUncheckedUpdateWithoutProductsInput>
    create: XOR<FarmCreateWithoutProductsInput, FarmUncheckedCreateWithoutProductsInput>
    where?: FarmWhereInput
  }

  export type FarmUpdateToOneWithWhereWithoutProductsInput = {
    where?: FarmWhereInput
    data: XOR<FarmUpdateWithoutProductsInput, FarmUncheckedUpdateWithoutProductsInput>
  }

  export type FarmUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    certifications?: FarmUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFarmNestedInput
    inventories?: InventoryUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    certifications?: FarmUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type InventoryUpsertWithWhereUniqueWithoutProductInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutProductInput, InventoryUncheckedUpdateWithoutProductInput>
    create: XOR<InventoryCreateWithoutProductInput, InventoryUncheckedCreateWithoutProductInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutProductInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutProductInput, InventoryUncheckedUpdateWithoutProductInput>
  }

  export type InventoryUpdateManyWithWhereWithoutProductInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
    create: XOR<OrderItemCreateWithoutProductInput, OrderItemUncheckedCreateWithoutProductInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutProductInput, OrderItemUncheckedUpdateWithoutProductInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutProductInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    orderId?: StringFilter<"OrderItem"> | string
    productId?: StringFilter<"OrderItem"> | string
    quantity?: FloatFilter<"OrderItem"> | number
    unitPrice?: FloatFilter<"OrderItem"> | number
    subtotal?: FloatFilter<"OrderItem"> | number
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
  }

  export type ProductCreateWithoutInventoriesInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    unit: string
    unitPrice: number
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farm: FarmCreateNestedOneWithoutProductsInput
    orderItems?: OrderItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutInventoriesInput = {
    id?: string
    farmId: string
    name: string
    description?: string | null
    category: string
    unit: string
    unitPrice: number
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutInventoriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutInventoriesInput, ProductUncheckedCreateWithoutInventoriesInput>
  }

  export type FarmCreateWithoutInventoriesInput = {
    id?: string
    name: string
    description?: string | null
    address: string
    city: string
    province: string
    postalCode?: string | null
    latitude?: number | null
    longitude?: number | null
    certifications?: FarmCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFarmInput
    products?: ProductCreateNestedManyWithoutFarmInput
  }

  export type FarmUncheckedCreateWithoutInventoriesInput = {
    id?: string
    userId: string
    name: string
    description?: string | null
    address: string
    city: string
    province: string
    postalCode?: string | null
    latitude?: number | null
    longitude?: number | null
    certifications?: FarmCreatecertificationsInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutFarmInput
  }

  export type FarmCreateOrConnectWithoutInventoriesInput = {
    where: FarmWhereUniqueInput
    create: XOR<FarmCreateWithoutInventoriesInput, FarmUncheckedCreateWithoutInventoriesInput>
  }

  export type RetailerCreateWithoutInventoriesInput = {
    id?: string
    storeName: string
    address: string
    city: string
    province: string
    storeType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutRetailerInput
  }

  export type RetailerUncheckedCreateWithoutInventoriesInput = {
    id?: string
    userId: string
    storeName: string
    address: string
    city: string
    province: string
    storeType?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RetailerCreateOrConnectWithoutInventoriesInput = {
    where: RetailerWhereUniqueInput
    create: XOR<RetailerCreateWithoutInventoriesInput, RetailerUncheckedCreateWithoutInventoriesInput>
  }

  export type ProductUpsertWithoutInventoriesInput = {
    update: XOR<ProductUpdateWithoutInventoriesInput, ProductUncheckedUpdateWithoutInventoriesInput>
    create: XOR<ProductCreateWithoutInventoriesInput, ProductUncheckedCreateWithoutInventoriesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutInventoriesInput, ProductUncheckedUpdateWithoutInventoriesInput>
  }

  export type ProductUpdateWithoutInventoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUpdateOneRequiredWithoutProductsNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutInventoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type FarmUpsertWithoutInventoriesInput = {
    update: XOR<FarmUpdateWithoutInventoriesInput, FarmUncheckedUpdateWithoutInventoriesInput>
    create: XOR<FarmCreateWithoutInventoriesInput, FarmUncheckedCreateWithoutInventoriesInput>
    where?: FarmWhereInput
  }

  export type FarmUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: FarmWhereInput
    data: XOR<FarmUpdateWithoutInventoriesInput, FarmUncheckedUpdateWithoutInventoriesInput>
  }

  export type FarmUpdateWithoutInventoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    certifications?: FarmUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFarmNestedInput
    products?: ProductUpdateManyWithoutFarmNestedInput
  }

  export type FarmUncheckedUpdateWithoutInventoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: NullableStringFieldUpdateOperationsInput | string | null
    latitude?: NullableFloatFieldUpdateOperationsInput | number | null
    longitude?: NullableFloatFieldUpdateOperationsInput | number | null
    certifications?: FarmUpdatecertificationsInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutFarmNestedInput
  }

  export type RetailerUpsertWithoutInventoriesInput = {
    update: XOR<RetailerUpdateWithoutInventoriesInput, RetailerUncheckedUpdateWithoutInventoriesInput>
    create: XOR<RetailerCreateWithoutInventoriesInput, RetailerUncheckedCreateWithoutInventoriesInput>
    where?: RetailerWhereInput
  }

  export type RetailerUpdateToOneWithWhereWithoutInventoriesInput = {
    where?: RetailerWhereInput
    data: XOR<RetailerUpdateWithoutInventoriesInput, RetailerUncheckedUpdateWithoutInventoriesInput>
  }

  export type RetailerUpdateWithoutInventoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    storeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutRetailerNestedInput
  }

  export type RetailerUncheckedUpdateWithoutInventoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    storeName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    storeType?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutOrdersAsBuyerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farm?: FarmCreateNestedOneWithoutUserInput
    retailer?: RetailerCreateNestedOneWithoutUserInput
    distributor?: DistributorCreateNestedOneWithoutUserInput
    ordersAsSeller?: OrderCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutOrdersAsBuyerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farm?: FarmUncheckedCreateNestedOneWithoutUserInput
    retailer?: RetailerUncheckedCreateNestedOneWithoutUserInput
    distributor?: DistributorUncheckedCreateNestedOneWithoutUserInput
    ordersAsSeller?: OrderUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutOrdersAsBuyerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersAsBuyerInput, UserUncheckedCreateWithoutOrdersAsBuyerInput>
  }

  export type UserCreateWithoutOrdersAsSellerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farm?: FarmCreateNestedOneWithoutUserInput
    retailer?: RetailerCreateNestedOneWithoutUserInput
    distributor?: DistributorCreateNestedOneWithoutUserInput
    ordersAsBuyer?: OrderCreateNestedManyWithoutBuyerInput
  }

  export type UserUncheckedCreateWithoutOrdersAsSellerInput = {
    id?: string
    email: string
    password: string
    firstName: string
    lastName: string
    phone?: string | null
    role: $Enums.UserRole
    isActive?: boolean
    emailVerified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farm?: FarmUncheckedCreateNestedOneWithoutUserInput
    retailer?: RetailerUncheckedCreateNestedOneWithoutUserInput
    distributor?: DistributorUncheckedCreateNestedOneWithoutUserInput
    ordersAsBuyer?: OrderUncheckedCreateNestedManyWithoutBuyerInput
  }

  export type UserCreateOrConnectWithoutOrdersAsSellerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersAsSellerInput, UserUncheckedCreateWithoutOrdersAsSellerInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type ShipmentCreateWithoutOrderInput = {
    id?: string
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    pickupAddress: string
    deliveryAddress: string
    estimatedPickup?: Date | string | null
    actualPickup?: Date | string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    driverName?: string | null
    vehicleNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    distributor?: DistributorCreateNestedOneWithoutShipmentsInput
    trackingHistory?: TrackingHistoryCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutOrderInput = {
    id?: string
    distributorId?: string | null
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    pickupAddress: string
    deliveryAddress: string
    estimatedPickup?: Date | string | null
    actualPickup?: Date | string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    driverName?: string | null
    vehicleNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trackingHistory?: TrackingHistoryUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutOrderInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutOrderInput, ShipmentUncheckedCreateWithoutOrderInput>
  }

  export type PaymentCreateWithoutOrderInput = {
    id?: string
    amount: number
    paymentMethod: string
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutOrderInput = {
    id?: string
    amount: number
    paymentMethod: string
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
  }

  export type UserUpsertWithoutOrdersAsBuyerInput = {
    update: XOR<UserUpdateWithoutOrdersAsBuyerInput, UserUncheckedUpdateWithoutOrdersAsBuyerInput>
    create: XOR<UserCreateWithoutOrdersAsBuyerInput, UserUncheckedCreateWithoutOrdersAsBuyerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersAsBuyerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersAsBuyerInput, UserUncheckedUpdateWithoutOrdersAsBuyerInput>
  }

  export type UserUpdateWithoutOrdersAsBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUpdateOneWithoutUserNestedInput
    retailer?: RetailerUpdateOneWithoutUserNestedInput
    distributor?: DistributorUpdateOneWithoutUserNestedInput
    ordersAsSeller?: OrderUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersAsBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUncheckedUpdateOneWithoutUserNestedInput
    retailer?: RetailerUncheckedUpdateOneWithoutUserNestedInput
    distributor?: DistributorUncheckedUpdateOneWithoutUserNestedInput
    ordersAsSeller?: OrderUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type UserUpsertWithoutOrdersAsSellerInput = {
    update: XOR<UserUpdateWithoutOrdersAsSellerInput, UserUncheckedUpdateWithoutOrdersAsSellerInput>
    create: XOR<UserCreateWithoutOrdersAsSellerInput, UserUncheckedCreateWithoutOrdersAsSellerInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersAsSellerInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersAsSellerInput, UserUncheckedUpdateWithoutOrdersAsSellerInput>
  }

  export type UserUpdateWithoutOrdersAsSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUpdateOneWithoutUserNestedInput
    retailer?: RetailerUpdateOneWithoutUserNestedInput
    distributor?: DistributorUpdateOneWithoutUserNestedInput
    ordersAsBuyer?: OrderUpdateManyWithoutBuyerNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersAsSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    emailVerified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUncheckedUpdateOneWithoutUserNestedInput
    retailer?: RetailerUncheckedUpdateOneWithoutUserNestedInput
    distributor?: DistributorUncheckedUpdateOneWithoutUserNestedInput
    ordersAsBuyer?: OrderUncheckedUpdateManyWithoutBuyerNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type ShipmentUpsertWithoutOrderInput = {
    update: XOR<ShipmentUpdateWithoutOrderInput, ShipmentUncheckedUpdateWithoutOrderInput>
    create: XOR<ShipmentCreateWithoutOrderInput, ShipmentUncheckedCreateWithoutOrderInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutOrderInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutOrderInput, ShipmentUncheckedUpdateWithoutOrderInput>
  }

  export type ShipmentUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    estimatedPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverName?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor?: DistributorUpdateOneWithoutShipmentsNestedInput
    trackingHistory?: TrackingHistoryUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    estimatedPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverName?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackingHistory?: TrackingHistoryUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type PaymentUpsertWithoutOrderInput = {
    update: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
    create: XOR<PaymentCreateWithoutOrderInput, PaymentUncheckedCreateWithoutOrderInput>
    where?: PaymentWhereInput
  }

  export type PaymentUpdateToOneWithWhereWithoutOrderInput = {
    where?: PaymentWhereInput
    data: XOR<PaymentUpdateWithoutOrderInput, PaymentUncheckedUpdateWithoutOrderInput>
  }

  export type PaymentUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: FloatFieldUpdateOperationsInput | number
    paymentMethod?: StringFieldUpdateOperationsInput | string
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateWithoutOrderItemsInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    buyer: UserCreateNestedOneWithoutOrdersAsBuyerInput
    seller: UserCreateNestedOneWithoutOrdersAsSellerInput
    shipment?: ShipmentCreateNestedOneWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    orderNumber: string
    buyerId: string
    sellerId: string
    status?: $Enums.OrderStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shipment?: ShipmentUncheckedCreateNestedOneWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type ProductCreateWithoutOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    unit: string
    unitPrice: number
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    farm: FarmCreateNestedOneWithoutProductsInput
    inventories?: InventoryCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    farmId: string
    name: string
    description?: string | null
    category: string
    unit: string
    unitPrice: number
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    inventories?: InventoryUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutOrdersAsBuyerNestedInput
    seller?: UserUpdateOneRequiredWithoutOrdersAsSellerNestedInput
    shipment?: ShipmentUpdateOneWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUncheckedUpdateOneWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type ProductUpsertWithoutOrderItemsInput = {
    update: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<ProductCreateWithoutOrderItemsInput, ProductUncheckedCreateWithoutOrderItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderItemsInput, ProductUncheckedUpdateWithoutOrderItemsInput>
  }

  export type ProductUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUpdateOneRequiredWithoutProductsNestedInput
    inventories?: InventoryUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUncheckedUpdateManyWithoutProductNestedInput
  }

  export type OrderCreateWithoutShipmentInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    buyer: UserCreateNestedOneWithoutOrdersAsBuyerInput
    seller: UserCreateNestedOneWithoutOrdersAsSellerInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    payment?: PaymentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutShipmentInput = {
    id?: string
    orderNumber: string
    buyerId: string
    sellerId: string
    status?: $Enums.OrderStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    payment?: PaymentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutShipmentInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutShipmentInput, OrderUncheckedCreateWithoutShipmentInput>
  }

  export type DistributorCreateWithoutShipmentsInput = {
    id?: string
    companyName: string
    address: string
    city: string
    province: string
    licenseNumber?: string | null
    vehicleCount?: number
    warehouseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutDistributorInput
  }

  export type DistributorUncheckedCreateWithoutShipmentsInput = {
    id?: string
    userId: string
    companyName: string
    address: string
    city: string
    province: string
    licenseNumber?: string | null
    vehicleCount?: number
    warehouseCount?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistributorCreateOrConnectWithoutShipmentsInput = {
    where: DistributorWhereUniqueInput
    create: XOR<DistributorCreateWithoutShipmentsInput, DistributorUncheckedCreateWithoutShipmentsInput>
  }

  export type TrackingHistoryCreateWithoutShipmentInput = {
    id?: string
    status: $Enums.ShipmentStatus
    location?: string | null
    notes?: string | null
    timestamp?: Date | string
  }

  export type TrackingHistoryUncheckedCreateWithoutShipmentInput = {
    id?: string
    status: $Enums.ShipmentStatus
    location?: string | null
    notes?: string | null
    timestamp?: Date | string
  }

  export type TrackingHistoryCreateOrConnectWithoutShipmentInput = {
    where: TrackingHistoryWhereUniqueInput
    create: XOR<TrackingHistoryCreateWithoutShipmentInput, TrackingHistoryUncheckedCreateWithoutShipmentInput>
  }

  export type TrackingHistoryCreateManyShipmentInputEnvelope = {
    data: TrackingHistoryCreateManyShipmentInput | TrackingHistoryCreateManyShipmentInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithoutShipmentInput = {
    update: XOR<OrderUpdateWithoutShipmentInput, OrderUncheckedUpdateWithoutShipmentInput>
    create: XOR<OrderCreateWithoutShipmentInput, OrderUncheckedCreateWithoutShipmentInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutShipmentInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutShipmentInput, OrderUncheckedUpdateWithoutShipmentInput>
  }

  export type OrderUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutOrdersAsBuyerNestedInput
    seller?: UserUpdateOneRequiredWithoutOrdersAsSellerNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type DistributorUpsertWithoutShipmentsInput = {
    update: XOR<DistributorUpdateWithoutShipmentsInput, DistributorUncheckedUpdateWithoutShipmentsInput>
    create: XOR<DistributorCreateWithoutShipmentsInput, DistributorUncheckedCreateWithoutShipmentsInput>
    where?: DistributorWhereInput
  }

  export type DistributorUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: DistributorWhereInput
    data: XOR<DistributorUpdateWithoutShipmentsInput, DistributorUncheckedUpdateWithoutShipmentsInput>
  }

  export type DistributorUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleCount?: IntFieldUpdateOperationsInput | number
    warehouseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDistributorNestedInput
  }

  export type DistributorUncheckedUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    licenseNumber?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleCount?: IntFieldUpdateOperationsInput | number
    warehouseCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingHistoryUpsertWithWhereUniqueWithoutShipmentInput = {
    where: TrackingHistoryWhereUniqueInput
    update: XOR<TrackingHistoryUpdateWithoutShipmentInput, TrackingHistoryUncheckedUpdateWithoutShipmentInput>
    create: XOR<TrackingHistoryCreateWithoutShipmentInput, TrackingHistoryUncheckedCreateWithoutShipmentInput>
  }

  export type TrackingHistoryUpdateWithWhereUniqueWithoutShipmentInput = {
    where: TrackingHistoryWhereUniqueInput
    data: XOR<TrackingHistoryUpdateWithoutShipmentInput, TrackingHistoryUncheckedUpdateWithoutShipmentInput>
  }

  export type TrackingHistoryUpdateManyWithWhereWithoutShipmentInput = {
    where: TrackingHistoryScalarWhereInput
    data: XOR<TrackingHistoryUpdateManyMutationInput, TrackingHistoryUncheckedUpdateManyWithoutShipmentInput>
  }

  export type TrackingHistoryScalarWhereInput = {
    AND?: TrackingHistoryScalarWhereInput | TrackingHistoryScalarWhereInput[]
    OR?: TrackingHistoryScalarWhereInput[]
    NOT?: TrackingHistoryScalarWhereInput | TrackingHistoryScalarWhereInput[]
    id?: StringFilter<"TrackingHistory"> | string
    shipmentId?: StringFilter<"TrackingHistory"> | string
    status?: EnumShipmentStatusFilter<"TrackingHistory"> | $Enums.ShipmentStatus
    location?: StringNullableFilter<"TrackingHistory"> | string | null
    notes?: StringNullableFilter<"TrackingHistory"> | string | null
    timestamp?: DateTimeFilter<"TrackingHistory"> | Date | string
  }

  export type ShipmentCreateWithoutTrackingHistoryInput = {
    id?: string
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    pickupAddress: string
    deliveryAddress: string
    estimatedPickup?: Date | string | null
    actualPickup?: Date | string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    driverName?: string | null
    vehicleNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutShipmentInput
    distributor?: DistributorCreateNestedOneWithoutShipmentsInput
  }

  export type ShipmentUncheckedCreateWithoutTrackingHistoryInput = {
    id?: string
    orderId: string
    distributorId?: string | null
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    pickupAddress: string
    deliveryAddress: string
    estimatedPickup?: Date | string | null
    actualPickup?: Date | string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    driverName?: string | null
    vehicleNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentCreateOrConnectWithoutTrackingHistoryInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutTrackingHistoryInput, ShipmentUncheckedCreateWithoutTrackingHistoryInput>
  }

  export type ShipmentUpsertWithoutTrackingHistoryInput = {
    update: XOR<ShipmentUpdateWithoutTrackingHistoryInput, ShipmentUncheckedUpdateWithoutTrackingHistoryInput>
    create: XOR<ShipmentCreateWithoutTrackingHistoryInput, ShipmentUncheckedCreateWithoutTrackingHistoryInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutTrackingHistoryInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutTrackingHistoryInput, ShipmentUncheckedUpdateWithoutTrackingHistoryInput>
  }

  export type ShipmentUpdateWithoutTrackingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    estimatedPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverName?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutShipmentNestedInput
    distributor?: DistributorUpdateOneWithoutShipmentsNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutTrackingHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    estimatedPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverName?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateWithoutPaymentInput = {
    id?: string
    orderNumber: string
    status?: $Enums.OrderStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    buyer: UserCreateNestedOneWithoutOrdersAsBuyerInput
    seller: UserCreateNestedOneWithoutOrdersAsSellerInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    shipment?: ShipmentCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPaymentInput = {
    id?: string
    orderNumber: string
    buyerId: string
    sellerId: string
    status?: $Enums.OrderStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    shipment?: ShipmentUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPaymentInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
  }

  export type OrderUpsertWithoutPaymentInput = {
    update: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
    create: XOR<OrderCreateWithoutPaymentInput, OrderUncheckedCreateWithoutPaymentInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPaymentInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPaymentInput, OrderUncheckedUpdateWithoutPaymentInput>
  }

  export type OrderUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutOrdersAsBuyerNestedInput
    seller?: UserUpdateOneRequiredWithoutOrdersAsSellerNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    shipment?: ShipmentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPaymentInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    shipment?: ShipmentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyBuyerInput = {
    id?: string
    orderNumber: string
    sellerId: string
    status?: $Enums.OrderStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManySellerInput = {
    id?: string
    orderNumber: string
    buyerId: string
    status?: $Enums.OrderStatus
    totalAmount: number
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneRequiredWithoutOrdersAsSellerNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    shipment?: ShipmentUpdateOneWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    shipment?: ShipmentUncheckedUpdateOneWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutOrdersAsBuyerNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    shipment?: ShipmentUpdateOneWithoutOrderNestedInput
    payment?: PaymentUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    shipment?: ShipmentUncheckedUpdateOneWithoutOrderNestedInput
    payment?: PaymentUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    totalAmount?: FloatFieldUpdateOperationsInput | number
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyFarmInput = {
    id?: string
    name: string
    description?: string | null
    category: string
    unit: string
    unitPrice: number
    imageUrl?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryCreateManyFarmInput = {
    id?: string
    productId: string
    retailerId?: string | null
    quantity: number
    batchNumber: string
    harvestDate?: Date | string | null
    expiryDate?: Date | string | null
    qualityGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    inventories?: InventoryUncheckedUpdateManyWithoutProductNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    unit?: StringFieldUpdateOperationsInput | string
    unitPrice?: FloatFieldUpdateOperationsInput | number
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualityGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutInventoriesNestedInput
    retailer?: RetailerUpdateOneWithoutInventoriesNestedInput
  }

  export type InventoryUncheckedUpdateWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    retailerId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualityGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyWithoutFarmInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    retailerId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualityGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentCreateManyDistributorInput = {
    id?: string
    orderId: string
    trackingNumber: string
    status?: $Enums.ShipmentStatus
    pickupAddress: string
    deliveryAddress: string
    estimatedPickup?: Date | string | null
    actualPickup?: Date | string | null
    estimatedDelivery?: Date | string | null
    actualDelivery?: Date | string | null
    driverName?: string | null
    vehicleNumber?: string | null
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentUpdateWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    estimatedPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverName?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutShipmentNestedInput
    trackingHistory?: TrackingHistoryUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    estimatedPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverName?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trackingHistory?: TrackingHistoryUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    pickupAddress?: StringFieldUpdateOperationsInput | string
    deliveryAddress?: StringFieldUpdateOperationsInput | string
    estimatedPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualPickup?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    estimatedDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    actualDelivery?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    driverName?: NullableStringFieldUpdateOperationsInput | string | null
    vehicleNumber?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateManyRetailerInput = {
    id?: string
    productId: string
    farmId?: string | null
    quantity: number
    batchNumber: string
    harvestDate?: Date | string | null
    expiryDate?: Date | string | null
    qualityGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryUpdateWithoutRetailerInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualityGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutInventoriesNestedInput
    farm?: FarmUpdateOneWithoutInventoriesNestedInput
  }

  export type InventoryUncheckedUpdateWithoutRetailerInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    farmId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualityGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyWithoutRetailerInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    farmId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualityGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateManyProductInput = {
    id?: string
    farmId?: string | null
    retailerId?: string | null
    quantity: number
    batchNumber: string
    harvestDate?: Date | string | null
    expiryDate?: Date | string | null
    qualityGrade?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateManyProductInput = {
    id?: string
    orderId: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
  }

  export type InventoryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualityGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    farm?: FarmUpdateOneWithoutInventoriesNestedInput
    retailer?: RetailerUpdateOneWithoutInventoriesNestedInput
  }

  export type InventoryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmId?: NullableStringFieldUpdateOperationsInput | string | null
    retailerId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualityGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    farmId?: NullableStringFieldUpdateOperationsInput | string | null
    retailerId?: NullableStringFieldUpdateOperationsInput | string | null
    quantity?: FloatFieldUpdateOperationsInput | number
    batchNumber?: StringFieldUpdateOperationsInput | string
    harvestDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    qualityGrade?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    productId: string
    quantity: number
    unitPrice: number
    subtotal: number
    createdAt?: Date | string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: FloatFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingHistoryCreateManyShipmentInput = {
    id?: string
    status: $Enums.ShipmentStatus
    location?: string | null
    notes?: string | null
    timestamp?: Date | string
  }

  export type TrackingHistoryUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingHistoryUncheckedUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TrackingHistoryUncheckedUpdateManyWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumShipmentStatusFieldUpdateOperationsInput | $Enums.ShipmentStatus
    location?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    timestamp?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}