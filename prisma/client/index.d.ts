
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model Vehicle
 * 
 */
export type Vehicle = $Result.DefaultSelection<Prisma.$VehiclePayload>
/**
 * Model Preventive
 * 
 */
export type Preventive = $Result.DefaultSelection<Prisma.$PreventivePayload>
/**
 * Model Work
 * 
 */
export type Work = $Result.DefaultSelection<Prisma.$WorkPayload>
/**
 * Model Worktype
 * 
 */
export type Worktype = $Result.DefaultSelection<Prisma.$WorktypePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
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
   * `prisma.vehicle`: Exposes CRUD operations for the **Vehicle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Vehicles
    * const vehicles = await prisma.vehicle.findMany()
    * ```
    */
  get vehicle(): Prisma.VehicleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.preventive`: Exposes CRUD operations for the **Preventive** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Preventives
    * const preventives = await prisma.preventive.findMany()
    * ```
    */
  get preventive(): Prisma.PreventiveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.work`: Exposes CRUD operations for the **Work** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Works
    * const works = await prisma.work.findMany()
    * ```
    */
  get work(): Prisma.WorkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.worktype`: Exposes CRUD operations for the **Worktype** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Worktypes
    * const worktypes = await prisma.worktype.findMany()
    * ```
    */
  get worktype(): Prisma.WorktypeDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


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
    Vehicle: 'Vehicle',
    Preventive: 'Preventive',
    Work: 'Work',
    Worktype: 'Worktype'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "vehicle" | "preventive" | "work" | "worktype"
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
      Vehicle: {
        payload: Prisma.$VehiclePayload<ExtArgs>
        fields: Prisma.VehicleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VehicleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VehicleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findFirst: {
            args: Prisma.VehicleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VehicleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          findMany: {
            args: Prisma.VehicleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          create: {
            args: Prisma.VehicleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          createMany: {
            args: Prisma.VehicleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VehicleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          delete: {
            args: Prisma.VehicleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          update: {
            args: Prisma.VehicleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          deleteMany: {
            args: Prisma.VehicleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VehicleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VehicleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>[]
          }
          upsert: {
            args: Prisma.VehicleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VehiclePayload>
          }
          aggregate: {
            args: Prisma.VehicleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVehicle>
          }
          groupBy: {
            args: Prisma.VehicleGroupByArgs<ExtArgs>
            result: $Utils.Optional<VehicleGroupByOutputType>[]
          }
          count: {
            args: Prisma.VehicleCountArgs<ExtArgs>
            result: $Utils.Optional<VehicleCountAggregateOutputType> | number
          }
        }
      }
      Preventive: {
        payload: Prisma.$PreventivePayload<ExtArgs>
        fields: Prisma.PreventiveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PreventiveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreventivePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PreventiveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreventivePayload>
          }
          findFirst: {
            args: Prisma.PreventiveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreventivePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PreventiveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreventivePayload>
          }
          findMany: {
            args: Prisma.PreventiveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreventivePayload>[]
          }
          create: {
            args: Prisma.PreventiveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreventivePayload>
          }
          createMany: {
            args: Prisma.PreventiveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PreventiveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreventivePayload>[]
          }
          delete: {
            args: Prisma.PreventiveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreventivePayload>
          }
          update: {
            args: Prisma.PreventiveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreventivePayload>
          }
          deleteMany: {
            args: Prisma.PreventiveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PreventiveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PreventiveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreventivePayload>[]
          }
          upsert: {
            args: Prisma.PreventiveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PreventivePayload>
          }
          aggregate: {
            args: Prisma.PreventiveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePreventive>
          }
          groupBy: {
            args: Prisma.PreventiveGroupByArgs<ExtArgs>
            result: $Utils.Optional<PreventiveGroupByOutputType>[]
          }
          count: {
            args: Prisma.PreventiveCountArgs<ExtArgs>
            result: $Utils.Optional<PreventiveCountAggregateOutputType> | number
          }
        }
      }
      Work: {
        payload: Prisma.$WorkPayload<ExtArgs>
        fields: Prisma.WorkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findFirst: {
            args: Prisma.WorkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          findMany: {
            args: Prisma.WorkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          create: {
            args: Prisma.WorkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          createMany: {
            args: Prisma.WorkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          delete: {
            args: Prisma.WorkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          update: {
            args: Prisma.WorkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          deleteMany: {
            args: Prisma.WorkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>[]
          }
          upsert: {
            args: Prisma.WorkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkPayload>
          }
          aggregate: {
            args: Prisma.WorkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWork>
          }
          groupBy: {
            args: Prisma.WorkGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkCountArgs<ExtArgs>
            result: $Utils.Optional<WorkCountAggregateOutputType> | number
          }
        }
      }
      Worktype: {
        payload: Prisma.$WorktypePayload<ExtArgs>
        fields: Prisma.WorktypeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorktypeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorktypePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorktypeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorktypePayload>
          }
          findFirst: {
            args: Prisma.WorktypeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorktypePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorktypeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorktypePayload>
          }
          findMany: {
            args: Prisma.WorktypeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorktypePayload>[]
          }
          create: {
            args: Prisma.WorktypeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorktypePayload>
          }
          createMany: {
            args: Prisma.WorktypeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorktypeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorktypePayload>[]
          }
          delete: {
            args: Prisma.WorktypeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorktypePayload>
          }
          update: {
            args: Prisma.WorktypeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorktypePayload>
          }
          deleteMany: {
            args: Prisma.WorktypeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorktypeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorktypeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorktypePayload>[]
          }
          upsert: {
            args: Prisma.WorktypeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorktypePayload>
          }
          aggregate: {
            args: Prisma.WorktypeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorktype>
          }
          groupBy: {
            args: Prisma.WorktypeGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorktypeGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorktypeCountArgs<ExtArgs>
            result: $Utils.Optional<WorktypeCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    vehicle?: VehicleOmit
    preventive?: PreventiveOmit
    work?: WorkOmit
    worktype?: WorktypeOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
    vehicles: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | UserCountOutputTypeCountVehiclesArgs
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
  export type UserCountOutputTypeCountVehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
  }


  /**
   * Count Type VehicleCountOutputType
   */

  export type VehicleCountOutputType = {
    preventives: number
  }

  export type VehicleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preventives?: boolean | VehicleCountOutputTypeCountPreventivesArgs
  }

  // Custom InputTypes
  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VehicleCountOutputType
     */
    select?: VehicleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VehicleCountOutputType without action
   */
  export type VehicleCountOutputTypeCountPreventivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreventiveWhereInput
  }


  /**
   * Count Type WorktypeCountOutputType
   */

  export type WorktypeCountOutputType = {
    work: number
  }

  export type WorktypeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | WorktypeCountOutputTypeCountWorkArgs
  }

  // Custom InputTypes
  /**
   * WorktypeCountOutputType without action
   */
  export type WorktypeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorktypeCountOutputType
     */
    select?: WorktypeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorktypeCountOutputType without action
   */
  export type WorktypeCountOutputTypeCountWorkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
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
    phone: string | null
    username: string | null
    password: string | null
    license_code: string | null
    license_expiration_date: Date | null
    first_name: string | null
    last_name: string | null
    municipality_residence: string | null
    fiscal_code: string | null
    status: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    username: string | null
    password: string | null
    license_code: string | null
    license_expiration_date: Date | null
    first_name: string | null
    last_name: string | null
    municipality_residence: string | null
    fiscal_code: string | null
    status: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    username: number
    password: number
    license_code: number
    license_expiration_date: number
    first_name: number
    last_name: number
    municipality_residence: number
    fiscal_code: number
    status: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    username?: true
    password?: true
    license_code?: true
    license_expiration_date?: true
    first_name?: true
    last_name?: true
    municipality_residence?: true
    fiscal_code?: true
    status?: true
    updated_at?: true
    created_at?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    username?: true
    password?: true
    license_code?: true
    license_expiration_date?: true
    first_name?: true
    last_name?: true
    municipality_residence?: true
    fiscal_code?: true
    status?: true
    updated_at?: true
    created_at?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    username?: true
    password?: true
    license_code?: true
    license_expiration_date?: true
    first_name?: true
    last_name?: true
    municipality_residence?: true
    fiscal_code?: true
    status?: true
    updated_at?: true
    created_at?: true
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
    phone: string
    username: string
    password: string
    license_code: string
    license_expiration_date: Date
    first_name: string
    last_name: string
    municipality_residence: string
    fiscal_code: string
    status: string
    updated_at: Date
    created_at: Date
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
    phone?: boolean
    username?: boolean
    password?: boolean
    license_code?: boolean
    license_expiration_date?: boolean
    first_name?: boolean
    last_name?: boolean
    municipality_residence?: boolean
    fiscal_code?: boolean
    status?: boolean
    updated_at?: boolean
    created_at?: boolean
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    username?: boolean
    password?: boolean
    license_code?: boolean
    license_expiration_date?: boolean
    first_name?: boolean
    last_name?: boolean
    municipality_residence?: boolean
    fiscal_code?: boolean
    status?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    username?: boolean
    password?: boolean
    license_code?: boolean
    license_expiration_date?: boolean
    first_name?: boolean
    last_name?: boolean
    municipality_residence?: boolean
    fiscal_code?: boolean
    status?: boolean
    updated_at?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    username?: boolean
    password?: boolean
    license_code?: boolean
    license_expiration_date?: boolean
    first_name?: boolean
    last_name?: boolean
    municipality_residence?: boolean
    fiscal_code?: boolean
    status?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "username" | "password" | "license_code" | "license_expiration_date" | "first_name" | "last_name" | "municipality_residence" | "fiscal_code" | "status" | "updated_at" | "created_at", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicles?: boolean | User$vehiclesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      vehicles: Prisma.$VehiclePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      phone: string
      username: string
      password: string
      license_code: string
      license_expiration_date: Date
      first_name: string
      last_name: string
      municipality_residence: string
      fiscal_code: string
      status: string
      updated_at: Date
      created_at: Date
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
    vehicles<T extends User$vehiclesArgs<ExtArgs> = {}>(args?: Subset<T, User$vehiclesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly phone: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly license_code: FieldRef<"User", 'String'>
    readonly license_expiration_date: FieldRef<"User", 'DateTime'>
    readonly first_name: FieldRef<"User", 'String'>
    readonly last_name: FieldRef<"User", 'String'>
    readonly municipality_residence: FieldRef<"User", 'String'>
    readonly fiscal_code: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly updated_at: FieldRef<"User", 'DateTime'>
    readonly created_at: FieldRef<"User", 'DateTime'>
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
   * User.vehicles
   */
  export type User$vehiclesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    cursor?: VehicleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
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
   * Model Vehicle
   */

  export type AggregateVehicle = {
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  export type VehicleAvgAggregateOutputType = {
    km: number | null
  }

  export type VehicleSumAggregateOutputType = {
    km: number | null
  }

  export type VehicleMinAggregateOutputType = {
    id: string | null
    userId: string | null
    plate: string | null
    model: string | null
    brand: string | null
    km: number | null
  }

  export type VehicleMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    plate: string | null
    model: string | null
    brand: string | null
    km: number | null
  }

  export type VehicleCountAggregateOutputType = {
    id: number
    userId: number
    plate: number
    model: number
    brand: number
    km: number
    _all: number
  }


  export type VehicleAvgAggregateInputType = {
    km?: true
  }

  export type VehicleSumAggregateInputType = {
    km?: true
  }

  export type VehicleMinAggregateInputType = {
    id?: true
    userId?: true
    plate?: true
    model?: true
    brand?: true
    km?: true
  }

  export type VehicleMaxAggregateInputType = {
    id?: true
    userId?: true
    plate?: true
    model?: true
    brand?: true
    km?: true
  }

  export type VehicleCountAggregateInputType = {
    id?: true
    userId?: true
    plate?: true
    model?: true
    brand?: true
    km?: true
    _all?: true
  }

  export type VehicleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicle to aggregate.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Vehicles
    **/
    _count?: true | VehicleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VehicleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VehicleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VehicleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VehicleMaxAggregateInputType
  }

  export type GetVehicleAggregateType<T extends VehicleAggregateArgs> = {
        [P in keyof T & keyof AggregateVehicle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVehicle[P]>
      : GetScalarType<T[P], AggregateVehicle[P]>
  }




  export type VehicleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VehicleWhereInput
    orderBy?: VehicleOrderByWithAggregationInput | VehicleOrderByWithAggregationInput[]
    by: VehicleScalarFieldEnum[] | VehicleScalarFieldEnum
    having?: VehicleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VehicleCountAggregateInputType | true
    _avg?: VehicleAvgAggregateInputType
    _sum?: VehicleSumAggregateInputType
    _min?: VehicleMinAggregateInputType
    _max?: VehicleMaxAggregateInputType
  }

  export type VehicleGroupByOutputType = {
    id: string
    userId: string
    plate: string
    model: string
    brand: string
    km: number
    _count: VehicleCountAggregateOutputType | null
    _avg: VehicleAvgAggregateOutputType | null
    _sum: VehicleSumAggregateOutputType | null
    _min: VehicleMinAggregateOutputType | null
    _max: VehicleMaxAggregateOutputType | null
  }

  type GetVehicleGroupByPayload<T extends VehicleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VehicleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VehicleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VehicleGroupByOutputType[P]>
            : GetScalarType<T[P], VehicleGroupByOutputType[P]>
        }
      >
    >


  export type VehicleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plate?: boolean
    model?: boolean
    brand?: boolean
    km?: boolean
    preventives?: boolean | Vehicle$preventivesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plate?: boolean
    model?: boolean
    brand?: boolean
    km?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    plate?: boolean
    model?: boolean
    brand?: boolean
    km?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["vehicle"]>

  export type VehicleSelectScalar = {
    id?: boolean
    userId?: boolean
    plate?: boolean
    model?: boolean
    brand?: boolean
    km?: boolean
  }

  export type VehicleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "plate" | "model" | "brand" | "km", ExtArgs["result"]["vehicle"]>
  export type VehicleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preventives?: boolean | Vehicle$preventivesArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | VehicleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type VehicleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $VehiclePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Vehicle"
    objects: {
      preventives: Prisma.$PreventivePayload<ExtArgs>[]
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      plate: string
      model: string
      brand: string
      km: number
    }, ExtArgs["result"]["vehicle"]>
    composites: {}
  }

  type VehicleGetPayload<S extends boolean | null | undefined | VehicleDefaultArgs> = $Result.GetResult<Prisma.$VehiclePayload, S>

  type VehicleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VehicleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VehicleCountAggregateInputType | true
    }

  export interface VehicleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Vehicle'], meta: { name: 'Vehicle' } }
    /**
     * Find zero or one Vehicle that matches the filter.
     * @param {VehicleFindUniqueArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VehicleFindUniqueArgs>(args: SelectSubset<T, VehicleFindUniqueArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Vehicle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VehicleFindUniqueOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VehicleFindUniqueOrThrowArgs>(args: SelectSubset<T, VehicleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VehicleFindFirstArgs>(args?: SelectSubset<T, VehicleFindFirstArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Vehicle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindFirstOrThrowArgs} args - Arguments to find a Vehicle
     * @example
     * // Get one Vehicle
     * const vehicle = await prisma.vehicle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VehicleFindFirstOrThrowArgs>(args?: SelectSubset<T, VehicleFindFirstOrThrowArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Vehicles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Vehicles
     * const vehicles = await prisma.vehicle.findMany()
     * 
     * // Get first 10 Vehicles
     * const vehicles = await prisma.vehicle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VehicleFindManyArgs>(args?: SelectSubset<T, VehicleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Vehicle.
     * @param {VehicleCreateArgs} args - Arguments to create a Vehicle.
     * @example
     * // Create one Vehicle
     * const Vehicle = await prisma.vehicle.create({
     *   data: {
     *     // ... data to create a Vehicle
     *   }
     * })
     * 
     */
    create<T extends VehicleCreateArgs>(args: SelectSubset<T, VehicleCreateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Vehicles.
     * @param {VehicleCreateManyArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VehicleCreateManyArgs>(args?: SelectSubset<T, VehicleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Vehicles and returns the data saved in the database.
     * @param {VehicleCreateManyAndReturnArgs} args - Arguments to create many Vehicles.
     * @example
     * // Create many Vehicles
     * const vehicle = await prisma.vehicle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VehicleCreateManyAndReturnArgs>(args?: SelectSubset<T, VehicleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Vehicle.
     * @param {VehicleDeleteArgs} args - Arguments to delete one Vehicle.
     * @example
     * // Delete one Vehicle
     * const Vehicle = await prisma.vehicle.delete({
     *   where: {
     *     // ... filter to delete one Vehicle
     *   }
     * })
     * 
     */
    delete<T extends VehicleDeleteArgs>(args: SelectSubset<T, VehicleDeleteArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Vehicle.
     * @param {VehicleUpdateArgs} args - Arguments to update one Vehicle.
     * @example
     * // Update one Vehicle
     * const vehicle = await prisma.vehicle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VehicleUpdateArgs>(args: SelectSubset<T, VehicleUpdateArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Vehicles.
     * @param {VehicleDeleteManyArgs} args - Arguments to filter Vehicles to delete.
     * @example
     * // Delete a few Vehicles
     * const { count } = await prisma.vehicle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VehicleDeleteManyArgs>(args?: SelectSubset<T, VehicleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VehicleUpdateManyArgs>(args: SelectSubset<T, VehicleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Vehicles and returns the data updated in the database.
     * @param {VehicleUpdateManyAndReturnArgs} args - Arguments to update many Vehicles.
     * @example
     * // Update many Vehicles
     * const vehicle = await prisma.vehicle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Vehicles and only return the `id`
     * const vehicleWithIdOnly = await prisma.vehicle.updateManyAndReturn({
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
    updateManyAndReturn<T extends VehicleUpdateManyAndReturnArgs>(args: SelectSubset<T, VehicleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Vehicle.
     * @param {VehicleUpsertArgs} args - Arguments to update or create a Vehicle.
     * @example
     * // Update or create a Vehicle
     * const vehicle = await prisma.vehicle.upsert({
     *   create: {
     *     // ... data to create a Vehicle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Vehicle we want to update
     *   }
     * })
     */
    upsert<T extends VehicleUpsertArgs>(args: SelectSubset<T, VehicleUpsertArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Vehicles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleCountArgs} args - Arguments to filter Vehicles to count.
     * @example
     * // Count the number of Vehicles
     * const count = await prisma.vehicle.count({
     *   where: {
     *     // ... the filter for the Vehicles we want to count
     *   }
     * })
    **/
    count<T extends VehicleCountArgs>(
      args?: Subset<T, VehicleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VehicleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VehicleAggregateArgs>(args: Subset<T, VehicleAggregateArgs>): Prisma.PrismaPromise<GetVehicleAggregateType<T>>

    /**
     * Group by Vehicle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VehicleGroupByArgs} args - Group by arguments.
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
      T extends VehicleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VehicleGroupByArgs['orderBy'] }
        : { orderBy?: VehicleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VehicleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVehicleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Vehicle model
   */
  readonly fields: VehicleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Vehicle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VehicleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preventives<T extends Vehicle$preventivesArgs<ExtArgs> = {}>(args?: Subset<T, Vehicle$preventivesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreventivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Vehicle model
   */
  interface VehicleFieldRefs {
    readonly id: FieldRef<"Vehicle", 'String'>
    readonly userId: FieldRef<"Vehicle", 'String'>
    readonly plate: FieldRef<"Vehicle", 'String'>
    readonly model: FieldRef<"Vehicle", 'String'>
    readonly brand: FieldRef<"Vehicle", 'String'>
    readonly km: FieldRef<"Vehicle", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Vehicle findUnique
   */
  export type VehicleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findUniqueOrThrow
   */
  export type VehicleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle findFirst
   */
  export type VehicleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findFirstOrThrow
   */
  export type VehicleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicle to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Vehicles.
     */
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle findMany
   */
  export type VehicleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter, which Vehicles to fetch.
     */
    where?: VehicleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Vehicles to fetch.
     */
    orderBy?: VehicleOrderByWithRelationInput | VehicleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Vehicles.
     */
    cursor?: VehicleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Vehicles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Vehicles.
     */
    skip?: number
    distinct?: VehicleScalarFieldEnum | VehicleScalarFieldEnum[]
  }

  /**
   * Vehicle create
   */
  export type VehicleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to create a Vehicle.
     */
    data: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
  }

  /**
   * Vehicle createMany
   */
  export type VehicleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Vehicle createManyAndReturn
   */
  export type VehicleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to create many Vehicles.
     */
    data: VehicleCreateManyInput | VehicleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle update
   */
  export type VehicleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The data needed to update a Vehicle.
     */
    data: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
    /**
     * Choose, which Vehicle to update.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle updateMany
   */
  export type VehicleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
  }

  /**
   * Vehicle updateManyAndReturn
   */
  export type VehicleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * The data used to update Vehicles.
     */
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyInput>
    /**
     * Filter which Vehicles to update
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Vehicle upsert
   */
  export type VehicleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * The filter to search for the Vehicle to update in case it exists.
     */
    where: VehicleWhereUniqueInput
    /**
     * In case the Vehicle found by the `where` argument doesn't exist, create a new Vehicle with this data.
     */
    create: XOR<VehicleCreateInput, VehicleUncheckedCreateInput>
    /**
     * In case the Vehicle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VehicleUpdateInput, VehicleUncheckedUpdateInput>
  }

  /**
   * Vehicle delete
   */
  export type VehicleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
    /**
     * Filter which Vehicle to delete.
     */
    where: VehicleWhereUniqueInput
  }

  /**
   * Vehicle deleteMany
   */
  export type VehicleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Vehicles to delete
     */
    where?: VehicleWhereInput
    /**
     * Limit how many Vehicles to delete.
     */
    limit?: number
  }

  /**
   * Vehicle.preventives
   */
  export type Vehicle$preventivesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preventive
     */
    select?: PreventiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preventive
     */
    omit?: PreventiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreventiveInclude<ExtArgs> | null
    where?: PreventiveWhereInput
    orderBy?: PreventiveOrderByWithRelationInput | PreventiveOrderByWithRelationInput[]
    cursor?: PreventiveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PreventiveScalarFieldEnum | PreventiveScalarFieldEnum[]
  }

  /**
   * Vehicle without action
   */
  export type VehicleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Vehicle
     */
    select?: VehicleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Vehicle
     */
    omit?: VehicleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VehicleInclude<ExtArgs> | null
  }


  /**
   * Model Preventive
   */

  export type AggregatePreventive = {
    _count: PreventiveCountAggregateOutputType | null
    _avg: PreventiveAvgAggregateOutputType | null
    _sum: PreventiveSumAggregateOutputType | null
    _min: PreventiveMinAggregateOutputType | null
    _max: PreventiveMaxAggregateOutputType | null
  }

  export type PreventiveAvgAggregateOutputType = {
    cost: number | null
    discount: number | null
  }

  export type PreventiveSumAggregateOutputType = {
    cost: number | null
    discount: number | null
  }

  export type PreventiveMinAggregateOutputType = {
    id: string | null
    idVehicle: string | null
    description: string | null
    cost: number | null
    discount: number | null
    e_end_date: Date | null
    additional_notes: string | null
    type: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type PreventiveMaxAggregateOutputType = {
    id: string | null
    idVehicle: string | null
    description: string | null
    cost: number | null
    discount: number | null
    e_end_date: Date | null
    additional_notes: string | null
    type: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type PreventiveCountAggregateOutputType = {
    id: number
    idVehicle: number
    description: number
    cost: number
    discount: number
    e_end_date: number
    additional_notes: number
    type: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type PreventiveAvgAggregateInputType = {
    cost?: true
    discount?: true
  }

  export type PreventiveSumAggregateInputType = {
    cost?: true
    discount?: true
  }

  export type PreventiveMinAggregateInputType = {
    id?: true
    idVehicle?: true
    description?: true
    cost?: true
    discount?: true
    e_end_date?: true
    additional_notes?: true
    type?: true
    updated_at?: true
    created_at?: true
  }

  export type PreventiveMaxAggregateInputType = {
    id?: true
    idVehicle?: true
    description?: true
    cost?: true
    discount?: true
    e_end_date?: true
    additional_notes?: true
    type?: true
    updated_at?: true
    created_at?: true
  }

  export type PreventiveCountAggregateInputType = {
    id?: true
    idVehicle?: true
    description?: true
    cost?: true
    discount?: true
    e_end_date?: true
    additional_notes?: true
    type?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type PreventiveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preventive to aggregate.
     */
    where?: PreventiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preventives to fetch.
     */
    orderBy?: PreventiveOrderByWithRelationInput | PreventiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PreventiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preventives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preventives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Preventives
    **/
    _count?: true | PreventiveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PreventiveAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PreventiveSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PreventiveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PreventiveMaxAggregateInputType
  }

  export type GetPreventiveAggregateType<T extends PreventiveAggregateArgs> = {
        [P in keyof T & keyof AggregatePreventive]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePreventive[P]>
      : GetScalarType<T[P], AggregatePreventive[P]>
  }




  export type PreventiveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PreventiveWhereInput
    orderBy?: PreventiveOrderByWithAggregationInput | PreventiveOrderByWithAggregationInput[]
    by: PreventiveScalarFieldEnum[] | PreventiveScalarFieldEnum
    having?: PreventiveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PreventiveCountAggregateInputType | true
    _avg?: PreventiveAvgAggregateInputType
    _sum?: PreventiveSumAggregateInputType
    _min?: PreventiveMinAggregateInputType
    _max?: PreventiveMaxAggregateInputType
  }

  export type PreventiveGroupByOutputType = {
    id: string
    idVehicle: string
    description: string
    cost: number
    discount: number
    e_end_date: Date
    additional_notes: string
    type: string
    updated_at: Date
    created_at: Date
    _count: PreventiveCountAggregateOutputType | null
    _avg: PreventiveAvgAggregateOutputType | null
    _sum: PreventiveSumAggregateOutputType | null
    _min: PreventiveMinAggregateOutputType | null
    _max: PreventiveMaxAggregateOutputType | null
  }

  type GetPreventiveGroupByPayload<T extends PreventiveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PreventiveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PreventiveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PreventiveGroupByOutputType[P]>
            : GetScalarType<T[P], PreventiveGroupByOutputType[P]>
        }
      >
    >


  export type PreventiveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idVehicle?: boolean
    description?: boolean
    cost?: boolean
    discount?: boolean
    e_end_date?: boolean
    additional_notes?: boolean
    type?: boolean
    updated_at?: boolean
    created_at?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    work?: boolean | Preventive$workArgs<ExtArgs>
  }, ExtArgs["result"]["preventive"]>

  export type PreventiveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idVehicle?: boolean
    description?: boolean
    cost?: boolean
    discount?: boolean
    e_end_date?: boolean
    additional_notes?: boolean
    type?: boolean
    updated_at?: boolean
    created_at?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preventive"]>

  export type PreventiveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idVehicle?: boolean
    description?: boolean
    cost?: boolean
    discount?: boolean
    e_end_date?: boolean
    additional_notes?: boolean
    type?: boolean
    updated_at?: boolean
    created_at?: boolean
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["preventive"]>

  export type PreventiveSelectScalar = {
    id?: boolean
    idVehicle?: boolean
    description?: boolean
    cost?: boolean
    discount?: boolean
    e_end_date?: boolean
    additional_notes?: boolean
    type?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type PreventiveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idVehicle" | "description" | "cost" | "discount" | "e_end_date" | "additional_notes" | "type" | "updated_at" | "created_at", ExtArgs["result"]["preventive"]>
  export type PreventiveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
    work?: boolean | Preventive$workArgs<ExtArgs>
  }
  export type PreventiveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }
  export type PreventiveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    vehicle?: boolean | VehicleDefaultArgs<ExtArgs>
  }

  export type $PreventivePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Preventive"
    objects: {
      vehicle: Prisma.$VehiclePayload<ExtArgs>
      work: Prisma.$WorkPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idVehicle: string
      description: string
      cost: number
      discount: number
      e_end_date: Date
      additional_notes: string
      type: string
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["preventive"]>
    composites: {}
  }

  type PreventiveGetPayload<S extends boolean | null | undefined | PreventiveDefaultArgs> = $Result.GetResult<Prisma.$PreventivePayload, S>

  type PreventiveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PreventiveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PreventiveCountAggregateInputType | true
    }

  export interface PreventiveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Preventive'], meta: { name: 'Preventive' } }
    /**
     * Find zero or one Preventive that matches the filter.
     * @param {PreventiveFindUniqueArgs} args - Arguments to find a Preventive
     * @example
     * // Get one Preventive
     * const preventive = await prisma.preventive.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PreventiveFindUniqueArgs>(args: SelectSubset<T, PreventiveFindUniqueArgs<ExtArgs>>): Prisma__PreventiveClient<$Result.GetResult<Prisma.$PreventivePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Preventive that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PreventiveFindUniqueOrThrowArgs} args - Arguments to find a Preventive
     * @example
     * // Get one Preventive
     * const preventive = await prisma.preventive.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PreventiveFindUniqueOrThrowArgs>(args: SelectSubset<T, PreventiveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PreventiveClient<$Result.GetResult<Prisma.$PreventivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preventive that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreventiveFindFirstArgs} args - Arguments to find a Preventive
     * @example
     * // Get one Preventive
     * const preventive = await prisma.preventive.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PreventiveFindFirstArgs>(args?: SelectSubset<T, PreventiveFindFirstArgs<ExtArgs>>): Prisma__PreventiveClient<$Result.GetResult<Prisma.$PreventivePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Preventive that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreventiveFindFirstOrThrowArgs} args - Arguments to find a Preventive
     * @example
     * // Get one Preventive
     * const preventive = await prisma.preventive.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PreventiveFindFirstOrThrowArgs>(args?: SelectSubset<T, PreventiveFindFirstOrThrowArgs<ExtArgs>>): Prisma__PreventiveClient<$Result.GetResult<Prisma.$PreventivePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Preventives that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreventiveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Preventives
     * const preventives = await prisma.preventive.findMany()
     * 
     * // Get first 10 Preventives
     * const preventives = await prisma.preventive.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const preventiveWithIdOnly = await prisma.preventive.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PreventiveFindManyArgs>(args?: SelectSubset<T, PreventiveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreventivePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Preventive.
     * @param {PreventiveCreateArgs} args - Arguments to create a Preventive.
     * @example
     * // Create one Preventive
     * const Preventive = await prisma.preventive.create({
     *   data: {
     *     // ... data to create a Preventive
     *   }
     * })
     * 
     */
    create<T extends PreventiveCreateArgs>(args: SelectSubset<T, PreventiveCreateArgs<ExtArgs>>): Prisma__PreventiveClient<$Result.GetResult<Prisma.$PreventivePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Preventives.
     * @param {PreventiveCreateManyArgs} args - Arguments to create many Preventives.
     * @example
     * // Create many Preventives
     * const preventive = await prisma.preventive.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PreventiveCreateManyArgs>(args?: SelectSubset<T, PreventiveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Preventives and returns the data saved in the database.
     * @param {PreventiveCreateManyAndReturnArgs} args - Arguments to create many Preventives.
     * @example
     * // Create many Preventives
     * const preventive = await prisma.preventive.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Preventives and only return the `id`
     * const preventiveWithIdOnly = await prisma.preventive.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PreventiveCreateManyAndReturnArgs>(args?: SelectSubset<T, PreventiveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreventivePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Preventive.
     * @param {PreventiveDeleteArgs} args - Arguments to delete one Preventive.
     * @example
     * // Delete one Preventive
     * const Preventive = await prisma.preventive.delete({
     *   where: {
     *     // ... filter to delete one Preventive
     *   }
     * })
     * 
     */
    delete<T extends PreventiveDeleteArgs>(args: SelectSubset<T, PreventiveDeleteArgs<ExtArgs>>): Prisma__PreventiveClient<$Result.GetResult<Prisma.$PreventivePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Preventive.
     * @param {PreventiveUpdateArgs} args - Arguments to update one Preventive.
     * @example
     * // Update one Preventive
     * const preventive = await prisma.preventive.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PreventiveUpdateArgs>(args: SelectSubset<T, PreventiveUpdateArgs<ExtArgs>>): Prisma__PreventiveClient<$Result.GetResult<Prisma.$PreventivePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Preventives.
     * @param {PreventiveDeleteManyArgs} args - Arguments to filter Preventives to delete.
     * @example
     * // Delete a few Preventives
     * const { count } = await prisma.preventive.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PreventiveDeleteManyArgs>(args?: SelectSubset<T, PreventiveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preventives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreventiveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Preventives
     * const preventive = await prisma.preventive.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PreventiveUpdateManyArgs>(args: SelectSubset<T, PreventiveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Preventives and returns the data updated in the database.
     * @param {PreventiveUpdateManyAndReturnArgs} args - Arguments to update many Preventives.
     * @example
     * // Update many Preventives
     * const preventive = await prisma.preventive.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Preventives and only return the `id`
     * const preventiveWithIdOnly = await prisma.preventive.updateManyAndReturn({
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
    updateManyAndReturn<T extends PreventiveUpdateManyAndReturnArgs>(args: SelectSubset<T, PreventiveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PreventivePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Preventive.
     * @param {PreventiveUpsertArgs} args - Arguments to update or create a Preventive.
     * @example
     * // Update or create a Preventive
     * const preventive = await prisma.preventive.upsert({
     *   create: {
     *     // ... data to create a Preventive
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Preventive we want to update
     *   }
     * })
     */
    upsert<T extends PreventiveUpsertArgs>(args: SelectSubset<T, PreventiveUpsertArgs<ExtArgs>>): Prisma__PreventiveClient<$Result.GetResult<Prisma.$PreventivePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Preventives.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreventiveCountArgs} args - Arguments to filter Preventives to count.
     * @example
     * // Count the number of Preventives
     * const count = await prisma.preventive.count({
     *   where: {
     *     // ... the filter for the Preventives we want to count
     *   }
     * })
    **/
    count<T extends PreventiveCountArgs>(
      args?: Subset<T, PreventiveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PreventiveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Preventive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreventiveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PreventiveAggregateArgs>(args: Subset<T, PreventiveAggregateArgs>): Prisma.PrismaPromise<GetPreventiveAggregateType<T>>

    /**
     * Group by Preventive.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PreventiveGroupByArgs} args - Group by arguments.
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
      T extends PreventiveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PreventiveGroupByArgs['orderBy'] }
        : { orderBy?: PreventiveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PreventiveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPreventiveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Preventive model
   */
  readonly fields: PreventiveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Preventive.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PreventiveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    vehicle<T extends VehicleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VehicleDefaultArgs<ExtArgs>>): Prisma__VehicleClient<$Result.GetResult<Prisma.$VehiclePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    work<T extends Preventive$workArgs<ExtArgs> = {}>(args?: Subset<T, Preventive$workArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Preventive model
   */
  interface PreventiveFieldRefs {
    readonly id: FieldRef<"Preventive", 'String'>
    readonly idVehicle: FieldRef<"Preventive", 'String'>
    readonly description: FieldRef<"Preventive", 'String'>
    readonly cost: FieldRef<"Preventive", 'Int'>
    readonly discount: FieldRef<"Preventive", 'Int'>
    readonly e_end_date: FieldRef<"Preventive", 'DateTime'>
    readonly additional_notes: FieldRef<"Preventive", 'String'>
    readonly type: FieldRef<"Preventive", 'String'>
    readonly updated_at: FieldRef<"Preventive", 'DateTime'>
    readonly created_at: FieldRef<"Preventive", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Preventive findUnique
   */
  export type PreventiveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preventive
     */
    select?: PreventiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preventive
     */
    omit?: PreventiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreventiveInclude<ExtArgs> | null
    /**
     * Filter, which Preventive to fetch.
     */
    where: PreventiveWhereUniqueInput
  }

  /**
   * Preventive findUniqueOrThrow
   */
  export type PreventiveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preventive
     */
    select?: PreventiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preventive
     */
    omit?: PreventiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreventiveInclude<ExtArgs> | null
    /**
     * Filter, which Preventive to fetch.
     */
    where: PreventiveWhereUniqueInput
  }

  /**
   * Preventive findFirst
   */
  export type PreventiveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preventive
     */
    select?: PreventiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preventive
     */
    omit?: PreventiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreventiveInclude<ExtArgs> | null
    /**
     * Filter, which Preventive to fetch.
     */
    where?: PreventiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preventives to fetch.
     */
    orderBy?: PreventiveOrderByWithRelationInput | PreventiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preventives.
     */
    cursor?: PreventiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preventives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preventives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preventives.
     */
    distinct?: PreventiveScalarFieldEnum | PreventiveScalarFieldEnum[]
  }

  /**
   * Preventive findFirstOrThrow
   */
  export type PreventiveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preventive
     */
    select?: PreventiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preventive
     */
    omit?: PreventiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreventiveInclude<ExtArgs> | null
    /**
     * Filter, which Preventive to fetch.
     */
    where?: PreventiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preventives to fetch.
     */
    orderBy?: PreventiveOrderByWithRelationInput | PreventiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Preventives.
     */
    cursor?: PreventiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preventives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preventives.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Preventives.
     */
    distinct?: PreventiveScalarFieldEnum | PreventiveScalarFieldEnum[]
  }

  /**
   * Preventive findMany
   */
  export type PreventiveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preventive
     */
    select?: PreventiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preventive
     */
    omit?: PreventiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreventiveInclude<ExtArgs> | null
    /**
     * Filter, which Preventives to fetch.
     */
    where?: PreventiveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Preventives to fetch.
     */
    orderBy?: PreventiveOrderByWithRelationInput | PreventiveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Preventives.
     */
    cursor?: PreventiveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Preventives from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Preventives.
     */
    skip?: number
    distinct?: PreventiveScalarFieldEnum | PreventiveScalarFieldEnum[]
  }

  /**
   * Preventive create
   */
  export type PreventiveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preventive
     */
    select?: PreventiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preventive
     */
    omit?: PreventiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreventiveInclude<ExtArgs> | null
    /**
     * The data needed to create a Preventive.
     */
    data: XOR<PreventiveCreateInput, PreventiveUncheckedCreateInput>
  }

  /**
   * Preventive createMany
   */
  export type PreventiveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Preventives.
     */
    data: PreventiveCreateManyInput | PreventiveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Preventive createManyAndReturn
   */
  export type PreventiveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preventive
     */
    select?: PreventiveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preventive
     */
    omit?: PreventiveOmit<ExtArgs> | null
    /**
     * The data used to create many Preventives.
     */
    data: PreventiveCreateManyInput | PreventiveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreventiveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preventive update
   */
  export type PreventiveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preventive
     */
    select?: PreventiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preventive
     */
    omit?: PreventiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreventiveInclude<ExtArgs> | null
    /**
     * The data needed to update a Preventive.
     */
    data: XOR<PreventiveUpdateInput, PreventiveUncheckedUpdateInput>
    /**
     * Choose, which Preventive to update.
     */
    where: PreventiveWhereUniqueInput
  }

  /**
   * Preventive updateMany
   */
  export type PreventiveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Preventives.
     */
    data: XOR<PreventiveUpdateManyMutationInput, PreventiveUncheckedUpdateManyInput>
    /**
     * Filter which Preventives to update
     */
    where?: PreventiveWhereInput
    /**
     * Limit how many Preventives to update.
     */
    limit?: number
  }

  /**
   * Preventive updateManyAndReturn
   */
  export type PreventiveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preventive
     */
    select?: PreventiveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Preventive
     */
    omit?: PreventiveOmit<ExtArgs> | null
    /**
     * The data used to update Preventives.
     */
    data: XOR<PreventiveUpdateManyMutationInput, PreventiveUncheckedUpdateManyInput>
    /**
     * Filter which Preventives to update
     */
    where?: PreventiveWhereInput
    /**
     * Limit how many Preventives to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreventiveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Preventive upsert
   */
  export type PreventiveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preventive
     */
    select?: PreventiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preventive
     */
    omit?: PreventiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreventiveInclude<ExtArgs> | null
    /**
     * The filter to search for the Preventive to update in case it exists.
     */
    where: PreventiveWhereUniqueInput
    /**
     * In case the Preventive found by the `where` argument doesn't exist, create a new Preventive with this data.
     */
    create: XOR<PreventiveCreateInput, PreventiveUncheckedCreateInput>
    /**
     * In case the Preventive was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PreventiveUpdateInput, PreventiveUncheckedUpdateInput>
  }

  /**
   * Preventive delete
   */
  export type PreventiveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preventive
     */
    select?: PreventiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preventive
     */
    omit?: PreventiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreventiveInclude<ExtArgs> | null
    /**
     * Filter which Preventive to delete.
     */
    where: PreventiveWhereUniqueInput
  }

  /**
   * Preventive deleteMany
   */
  export type PreventiveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Preventives to delete
     */
    where?: PreventiveWhereInput
    /**
     * Limit how many Preventives to delete.
     */
    limit?: number
  }

  /**
   * Preventive.work
   */
  export type Preventive$workArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    where?: WorkWhereInput
  }

  /**
   * Preventive without action
   */
  export type PreventiveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Preventive
     */
    select?: PreventiveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Preventive
     */
    omit?: PreventiveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PreventiveInclude<ExtArgs> | null
  }


  /**
   * Model Work
   */

  export type AggregateWork = {
    _count: WorkCountAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  export type WorkMinAggregateOutputType = {
    id: string | null
    idPreventive: string | null
    idWorkType: string | null
    start_date: Date | null
    end_date: Date | null
    status: string | null
    additional_notes: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type WorkMaxAggregateOutputType = {
    id: string | null
    idPreventive: string | null
    idWorkType: string | null
    start_date: Date | null
    end_date: Date | null
    status: string | null
    additional_notes: string | null
    updated_at: Date | null
    created_at: Date | null
  }

  export type WorkCountAggregateOutputType = {
    id: number
    idPreventive: number
    idWorkType: number
    start_date: number
    end_date: number
    status: number
    additional_notes: number
    updated_at: number
    created_at: number
    _all: number
  }


  export type WorkMinAggregateInputType = {
    id?: true
    idPreventive?: true
    idWorkType?: true
    start_date?: true
    end_date?: true
    status?: true
    additional_notes?: true
    updated_at?: true
    created_at?: true
  }

  export type WorkMaxAggregateInputType = {
    id?: true
    idPreventive?: true
    idWorkType?: true
    start_date?: true
    end_date?: true
    status?: true
    additional_notes?: true
    updated_at?: true
    created_at?: true
  }

  export type WorkCountAggregateInputType = {
    id?: true
    idPreventive?: true
    idWorkType?: true
    start_date?: true
    end_date?: true
    status?: true
    additional_notes?: true
    updated_at?: true
    created_at?: true
    _all?: true
  }

  export type WorkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Work to aggregate.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Works
    **/
    _count?: true | WorkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkMaxAggregateInputType
  }

  export type GetWorkAggregateType<T extends WorkAggregateArgs> = {
        [P in keyof T & keyof AggregateWork]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWork[P]>
      : GetScalarType<T[P], AggregateWork[P]>
  }




  export type WorkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithAggregationInput | WorkOrderByWithAggregationInput[]
    by: WorkScalarFieldEnum[] | WorkScalarFieldEnum
    having?: WorkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkCountAggregateInputType | true
    _min?: WorkMinAggregateInputType
    _max?: WorkMaxAggregateInputType
  }

  export type WorkGroupByOutputType = {
    id: string
    idPreventive: string
    idWorkType: string | null
    start_date: Date
    end_date: Date
    status: string
    additional_notes: string
    updated_at: Date
    created_at: Date
    _count: WorkCountAggregateOutputType | null
    _min: WorkMinAggregateOutputType | null
    _max: WorkMaxAggregateOutputType | null
  }

  type GetWorkGroupByPayload<T extends WorkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkGroupByOutputType[P]>
            : GetScalarType<T[P], WorkGroupByOutputType[P]>
        }
      >
    >


  export type WorkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPreventive?: boolean
    idWorkType?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    additional_notes?: boolean
    updated_at?: boolean
    created_at?: boolean
    preventive?: boolean | PreventiveDefaultArgs<ExtArgs>
    worktype?: boolean | Work$worktypeArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPreventive?: boolean
    idWorkType?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    additional_notes?: boolean
    updated_at?: boolean
    created_at?: boolean
    preventive?: boolean | PreventiveDefaultArgs<ExtArgs>
    worktype?: boolean | Work$worktypeArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    idPreventive?: boolean
    idWorkType?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    additional_notes?: boolean
    updated_at?: boolean
    created_at?: boolean
    preventive?: boolean | PreventiveDefaultArgs<ExtArgs>
    worktype?: boolean | Work$worktypeArgs<ExtArgs>
  }, ExtArgs["result"]["work"]>

  export type WorkSelectScalar = {
    id?: boolean
    idPreventive?: boolean
    idWorkType?: boolean
    start_date?: boolean
    end_date?: boolean
    status?: boolean
    additional_notes?: boolean
    updated_at?: boolean
    created_at?: boolean
  }

  export type WorkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "idPreventive" | "idWorkType" | "start_date" | "end_date" | "status" | "additional_notes" | "updated_at" | "created_at", ExtArgs["result"]["work"]>
  export type WorkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preventive?: boolean | PreventiveDefaultArgs<ExtArgs>
    worktype?: boolean | Work$worktypeArgs<ExtArgs>
  }
  export type WorkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preventive?: boolean | PreventiveDefaultArgs<ExtArgs>
    worktype?: boolean | Work$worktypeArgs<ExtArgs>
  }
  export type WorkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    preventive?: boolean | PreventiveDefaultArgs<ExtArgs>
    worktype?: boolean | Work$worktypeArgs<ExtArgs>
  }

  export type $WorkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Work"
    objects: {
      preventive: Prisma.$PreventivePayload<ExtArgs>
      worktype: Prisma.$WorktypePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      idPreventive: string
      idWorkType: string | null
      start_date: Date
      end_date: Date
      status: string
      additional_notes: string
      updated_at: Date
      created_at: Date
    }, ExtArgs["result"]["work"]>
    composites: {}
  }

  type WorkGetPayload<S extends boolean | null | undefined | WorkDefaultArgs> = $Result.GetResult<Prisma.$WorkPayload, S>

  type WorkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkCountAggregateInputType | true
    }

  export interface WorkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Work'], meta: { name: 'Work' } }
    /**
     * Find zero or one Work that matches the filter.
     * @param {WorkFindUniqueArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkFindUniqueArgs>(args: SelectSubset<T, WorkFindUniqueArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Work that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkFindUniqueOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkFindFirstArgs>(args?: SelectSubset<T, WorkFindFirstArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Work that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindFirstOrThrowArgs} args - Arguments to find a Work
     * @example
     * // Get one Work
     * const work = await prisma.work.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Works that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Works
     * const works = await prisma.work.findMany()
     * 
     * // Get first 10 Works
     * const works = await prisma.work.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workWithIdOnly = await prisma.work.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkFindManyArgs>(args?: SelectSubset<T, WorkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Work.
     * @param {WorkCreateArgs} args - Arguments to create a Work.
     * @example
     * // Create one Work
     * const Work = await prisma.work.create({
     *   data: {
     *     // ... data to create a Work
     *   }
     * })
     * 
     */
    create<T extends WorkCreateArgs>(args: SelectSubset<T, WorkCreateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Works.
     * @param {WorkCreateManyArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkCreateManyArgs>(args?: SelectSubset<T, WorkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Works and returns the data saved in the database.
     * @param {WorkCreateManyAndReturnArgs} args - Arguments to create many Works.
     * @example
     * // Create many Works
     * const work = await prisma.work.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Works and only return the `id`
     * const workWithIdOnly = await prisma.work.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Work.
     * @param {WorkDeleteArgs} args - Arguments to delete one Work.
     * @example
     * // Delete one Work
     * const Work = await prisma.work.delete({
     *   where: {
     *     // ... filter to delete one Work
     *   }
     * })
     * 
     */
    delete<T extends WorkDeleteArgs>(args: SelectSubset<T, WorkDeleteArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Work.
     * @param {WorkUpdateArgs} args - Arguments to update one Work.
     * @example
     * // Update one Work
     * const work = await prisma.work.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkUpdateArgs>(args: SelectSubset<T, WorkUpdateArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Works.
     * @param {WorkDeleteManyArgs} args - Arguments to filter Works to delete.
     * @example
     * // Delete a few Works
     * const { count } = await prisma.work.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkDeleteManyArgs>(args?: SelectSubset<T, WorkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkUpdateManyArgs>(args: SelectSubset<T, WorkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Works and returns the data updated in the database.
     * @param {WorkUpdateManyAndReturnArgs} args - Arguments to update many Works.
     * @example
     * // Update many Works
     * const work = await prisma.work.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Works and only return the `id`
     * const workWithIdOnly = await prisma.work.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorkUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Work.
     * @param {WorkUpsertArgs} args - Arguments to update or create a Work.
     * @example
     * // Update or create a Work
     * const work = await prisma.work.upsert({
     *   create: {
     *     // ... data to create a Work
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Work we want to update
     *   }
     * })
     */
    upsert<T extends WorkUpsertArgs>(args: SelectSubset<T, WorkUpsertArgs<ExtArgs>>): Prisma__WorkClient<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Works.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkCountArgs} args - Arguments to filter Works to count.
     * @example
     * // Count the number of Works
     * const count = await prisma.work.count({
     *   where: {
     *     // ... the filter for the Works we want to count
     *   }
     * })
    **/
    count<T extends WorkCountArgs>(
      args?: Subset<T, WorkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkAggregateArgs>(args: Subset<T, WorkAggregateArgs>): Prisma.PrismaPromise<GetWorkAggregateType<T>>

    /**
     * Group by Work.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkGroupByArgs} args - Group by arguments.
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
      T extends WorkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkGroupByArgs['orderBy'] }
        : { orderBy?: WorkGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Work model
   */
  readonly fields: WorkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Work.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    preventive<T extends PreventiveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PreventiveDefaultArgs<ExtArgs>>): Prisma__PreventiveClient<$Result.GetResult<Prisma.$PreventivePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    worktype<T extends Work$worktypeArgs<ExtArgs> = {}>(args?: Subset<T, Work$worktypeArgs<ExtArgs>>): Prisma__WorktypeClient<$Result.GetResult<Prisma.$WorktypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Work model
   */
  interface WorkFieldRefs {
    readonly id: FieldRef<"Work", 'String'>
    readonly idPreventive: FieldRef<"Work", 'String'>
    readonly idWorkType: FieldRef<"Work", 'String'>
    readonly start_date: FieldRef<"Work", 'DateTime'>
    readonly end_date: FieldRef<"Work", 'DateTime'>
    readonly status: FieldRef<"Work", 'String'>
    readonly additional_notes: FieldRef<"Work", 'String'>
    readonly updated_at: FieldRef<"Work", 'DateTime'>
    readonly created_at: FieldRef<"Work", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Work findUnique
   */
  export type WorkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findUniqueOrThrow
   */
  export type WorkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work findFirst
   */
  export type WorkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findFirstOrThrow
   */
  export type WorkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Work to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Works.
     */
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work findMany
   */
  export type WorkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter, which Works to fetch.
     */
    where?: WorkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Works to fetch.
     */
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Works.
     */
    cursor?: WorkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Works from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Works.
     */
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Work create
   */
  export type WorkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to create a Work.
     */
    data: XOR<WorkCreateInput, WorkUncheckedCreateInput>
  }

  /**
   * Work createMany
   */
  export type WorkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Work createManyAndReturn
   */
  export type WorkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * The data used to create many Works.
     */
    data: WorkCreateManyInput | WorkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Work update
   */
  export type WorkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The data needed to update a Work.
     */
    data: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
    /**
     * Choose, which Work to update.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work updateMany
   */
  export type WorkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
  }

  /**
   * Work updateManyAndReturn
   */
  export type WorkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * The data used to update Works.
     */
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyInput>
    /**
     * Filter which Works to update
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Work upsert
   */
  export type WorkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * The filter to search for the Work to update in case it exists.
     */
    where: WorkWhereUniqueInput
    /**
     * In case the Work found by the `where` argument doesn't exist, create a new Work with this data.
     */
    create: XOR<WorkCreateInput, WorkUncheckedCreateInput>
    /**
     * In case the Work was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkUpdateInput, WorkUncheckedUpdateInput>
  }

  /**
   * Work delete
   */
  export type WorkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    /**
     * Filter which Work to delete.
     */
    where: WorkWhereUniqueInput
  }

  /**
   * Work deleteMany
   */
  export type WorkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Works to delete
     */
    where?: WorkWhereInput
    /**
     * Limit how many Works to delete.
     */
    limit?: number
  }

  /**
   * Work.worktype
   */
  export type Work$worktypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worktype
     */
    select?: WorktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worktype
     */
    omit?: WorktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorktypeInclude<ExtArgs> | null
    where?: WorktypeWhereInput
  }

  /**
   * Work without action
   */
  export type WorkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
  }


  /**
   * Model Worktype
   */

  export type AggregateWorktype = {
    _count: WorktypeCountAggregateOutputType | null
    _avg: WorktypeAvgAggregateOutputType | null
    _sum: WorktypeSumAggregateOutputType | null
    _min: WorktypeMinAggregateOutputType | null
    _max: WorktypeMaxAggregateOutputType | null
  }

  export type WorktypeAvgAggregateOutputType = {
    estimate_cost: number | null
    standard_duration: number | null
  }

  export type WorktypeSumAggregateOutputType = {
    estimate_cost: number | null
    standard_duration: number | null
  }

  export type WorktypeMinAggregateOutputType = {
    id: string | null
    estimate_cost: number | null
    standard_duration: number | null
    name: string | null
    description: string | null
  }

  export type WorktypeMaxAggregateOutputType = {
    id: string | null
    estimate_cost: number | null
    standard_duration: number | null
    name: string | null
    description: string | null
  }

  export type WorktypeCountAggregateOutputType = {
    id: number
    estimate_cost: number
    standard_duration: number
    name: number
    description: number
    _all: number
  }


  export type WorktypeAvgAggregateInputType = {
    estimate_cost?: true
    standard_duration?: true
  }

  export type WorktypeSumAggregateInputType = {
    estimate_cost?: true
    standard_duration?: true
  }

  export type WorktypeMinAggregateInputType = {
    id?: true
    estimate_cost?: true
    standard_duration?: true
    name?: true
    description?: true
  }

  export type WorktypeMaxAggregateInputType = {
    id?: true
    estimate_cost?: true
    standard_duration?: true
    name?: true
    description?: true
  }

  export type WorktypeCountAggregateInputType = {
    id?: true
    estimate_cost?: true
    standard_duration?: true
    name?: true
    description?: true
    _all?: true
  }

  export type WorktypeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worktype to aggregate.
     */
    where?: WorktypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worktypes to fetch.
     */
    orderBy?: WorktypeOrderByWithRelationInput | WorktypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorktypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worktypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worktypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Worktypes
    **/
    _count?: true | WorktypeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WorktypeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WorktypeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorktypeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorktypeMaxAggregateInputType
  }

  export type GetWorktypeAggregateType<T extends WorktypeAggregateArgs> = {
        [P in keyof T & keyof AggregateWorktype]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorktype[P]>
      : GetScalarType<T[P], AggregateWorktype[P]>
  }




  export type WorktypeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorktypeWhereInput
    orderBy?: WorktypeOrderByWithAggregationInput | WorktypeOrderByWithAggregationInput[]
    by: WorktypeScalarFieldEnum[] | WorktypeScalarFieldEnum
    having?: WorktypeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorktypeCountAggregateInputType | true
    _avg?: WorktypeAvgAggregateInputType
    _sum?: WorktypeSumAggregateInputType
    _min?: WorktypeMinAggregateInputType
    _max?: WorktypeMaxAggregateInputType
  }

  export type WorktypeGroupByOutputType = {
    id: string
    estimate_cost: number
    standard_duration: number
    name: string
    description: string
    _count: WorktypeCountAggregateOutputType | null
    _avg: WorktypeAvgAggregateOutputType | null
    _sum: WorktypeSumAggregateOutputType | null
    _min: WorktypeMinAggregateOutputType | null
    _max: WorktypeMaxAggregateOutputType | null
  }

  type GetWorktypeGroupByPayload<T extends WorktypeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorktypeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorktypeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorktypeGroupByOutputType[P]>
            : GetScalarType<T[P], WorktypeGroupByOutputType[P]>
        }
      >
    >


  export type WorktypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estimate_cost?: boolean
    standard_duration?: boolean
    name?: boolean
    description?: boolean
    work?: boolean | Worktype$workArgs<ExtArgs>
    _count?: boolean | WorktypeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["worktype"]>

  export type WorktypeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estimate_cost?: boolean
    standard_duration?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["worktype"]>

  export type WorktypeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    estimate_cost?: boolean
    standard_duration?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["worktype"]>

  export type WorktypeSelectScalar = {
    id?: boolean
    estimate_cost?: boolean
    standard_duration?: boolean
    name?: boolean
    description?: boolean
  }

  export type WorktypeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "estimate_cost" | "standard_duration" | "name" | "description", ExtArgs["result"]["worktype"]>
  export type WorktypeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    work?: boolean | Worktype$workArgs<ExtArgs>
    _count?: boolean | WorktypeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorktypeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WorktypeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorktypePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Worktype"
    objects: {
      work: Prisma.$WorkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      estimate_cost: number
      standard_duration: number
      name: string
      description: string
    }, ExtArgs["result"]["worktype"]>
    composites: {}
  }

  type WorktypeGetPayload<S extends boolean | null | undefined | WorktypeDefaultArgs> = $Result.GetResult<Prisma.$WorktypePayload, S>

  type WorktypeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorktypeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorktypeCountAggregateInputType | true
    }

  export interface WorktypeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Worktype'], meta: { name: 'Worktype' } }
    /**
     * Find zero or one Worktype that matches the filter.
     * @param {WorktypeFindUniqueArgs} args - Arguments to find a Worktype
     * @example
     * // Get one Worktype
     * const worktype = await prisma.worktype.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorktypeFindUniqueArgs>(args: SelectSubset<T, WorktypeFindUniqueArgs<ExtArgs>>): Prisma__WorktypeClient<$Result.GetResult<Prisma.$WorktypePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Worktype that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorktypeFindUniqueOrThrowArgs} args - Arguments to find a Worktype
     * @example
     * // Get one Worktype
     * const worktype = await prisma.worktype.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorktypeFindUniqueOrThrowArgs>(args: SelectSubset<T, WorktypeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorktypeClient<$Result.GetResult<Prisma.$WorktypePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worktype that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorktypeFindFirstArgs} args - Arguments to find a Worktype
     * @example
     * // Get one Worktype
     * const worktype = await prisma.worktype.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorktypeFindFirstArgs>(args?: SelectSubset<T, WorktypeFindFirstArgs<ExtArgs>>): Prisma__WorktypeClient<$Result.GetResult<Prisma.$WorktypePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Worktype that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorktypeFindFirstOrThrowArgs} args - Arguments to find a Worktype
     * @example
     * // Get one Worktype
     * const worktype = await prisma.worktype.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorktypeFindFirstOrThrowArgs>(args?: SelectSubset<T, WorktypeFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorktypeClient<$Result.GetResult<Prisma.$WorktypePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Worktypes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorktypeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Worktypes
     * const worktypes = await prisma.worktype.findMany()
     * 
     * // Get first 10 Worktypes
     * const worktypes = await prisma.worktype.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const worktypeWithIdOnly = await prisma.worktype.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorktypeFindManyArgs>(args?: SelectSubset<T, WorktypeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorktypePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Worktype.
     * @param {WorktypeCreateArgs} args - Arguments to create a Worktype.
     * @example
     * // Create one Worktype
     * const Worktype = await prisma.worktype.create({
     *   data: {
     *     // ... data to create a Worktype
     *   }
     * })
     * 
     */
    create<T extends WorktypeCreateArgs>(args: SelectSubset<T, WorktypeCreateArgs<ExtArgs>>): Prisma__WorktypeClient<$Result.GetResult<Prisma.$WorktypePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Worktypes.
     * @param {WorktypeCreateManyArgs} args - Arguments to create many Worktypes.
     * @example
     * // Create many Worktypes
     * const worktype = await prisma.worktype.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorktypeCreateManyArgs>(args?: SelectSubset<T, WorktypeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Worktypes and returns the data saved in the database.
     * @param {WorktypeCreateManyAndReturnArgs} args - Arguments to create many Worktypes.
     * @example
     * // Create many Worktypes
     * const worktype = await prisma.worktype.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Worktypes and only return the `id`
     * const worktypeWithIdOnly = await prisma.worktype.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorktypeCreateManyAndReturnArgs>(args?: SelectSubset<T, WorktypeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorktypePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Worktype.
     * @param {WorktypeDeleteArgs} args - Arguments to delete one Worktype.
     * @example
     * // Delete one Worktype
     * const Worktype = await prisma.worktype.delete({
     *   where: {
     *     // ... filter to delete one Worktype
     *   }
     * })
     * 
     */
    delete<T extends WorktypeDeleteArgs>(args: SelectSubset<T, WorktypeDeleteArgs<ExtArgs>>): Prisma__WorktypeClient<$Result.GetResult<Prisma.$WorktypePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Worktype.
     * @param {WorktypeUpdateArgs} args - Arguments to update one Worktype.
     * @example
     * // Update one Worktype
     * const worktype = await prisma.worktype.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorktypeUpdateArgs>(args: SelectSubset<T, WorktypeUpdateArgs<ExtArgs>>): Prisma__WorktypeClient<$Result.GetResult<Prisma.$WorktypePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Worktypes.
     * @param {WorktypeDeleteManyArgs} args - Arguments to filter Worktypes to delete.
     * @example
     * // Delete a few Worktypes
     * const { count } = await prisma.worktype.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorktypeDeleteManyArgs>(args?: SelectSubset<T, WorktypeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worktypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorktypeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Worktypes
     * const worktype = await prisma.worktype.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorktypeUpdateManyArgs>(args: SelectSubset<T, WorktypeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Worktypes and returns the data updated in the database.
     * @param {WorktypeUpdateManyAndReturnArgs} args - Arguments to update many Worktypes.
     * @example
     * // Update many Worktypes
     * const worktype = await prisma.worktype.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Worktypes and only return the `id`
     * const worktypeWithIdOnly = await prisma.worktype.updateManyAndReturn({
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
    updateManyAndReturn<T extends WorktypeUpdateManyAndReturnArgs>(args: SelectSubset<T, WorktypeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorktypePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Worktype.
     * @param {WorktypeUpsertArgs} args - Arguments to update or create a Worktype.
     * @example
     * // Update or create a Worktype
     * const worktype = await prisma.worktype.upsert({
     *   create: {
     *     // ... data to create a Worktype
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Worktype we want to update
     *   }
     * })
     */
    upsert<T extends WorktypeUpsertArgs>(args: SelectSubset<T, WorktypeUpsertArgs<ExtArgs>>): Prisma__WorktypeClient<$Result.GetResult<Prisma.$WorktypePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Worktypes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorktypeCountArgs} args - Arguments to filter Worktypes to count.
     * @example
     * // Count the number of Worktypes
     * const count = await prisma.worktype.count({
     *   where: {
     *     // ... the filter for the Worktypes we want to count
     *   }
     * })
    **/
    count<T extends WorktypeCountArgs>(
      args?: Subset<T, WorktypeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorktypeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Worktype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorktypeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorktypeAggregateArgs>(args: Subset<T, WorktypeAggregateArgs>): Prisma.PrismaPromise<GetWorktypeAggregateType<T>>

    /**
     * Group by Worktype.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorktypeGroupByArgs} args - Group by arguments.
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
      T extends WorktypeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorktypeGroupByArgs['orderBy'] }
        : { orderBy?: WorktypeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorktypeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorktypeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Worktype model
   */
  readonly fields: WorktypeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Worktype.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorktypeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    work<T extends Worktype$workArgs<ExtArgs> = {}>(args?: Subset<T, Worktype$workArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Worktype model
   */
  interface WorktypeFieldRefs {
    readonly id: FieldRef<"Worktype", 'String'>
    readonly estimate_cost: FieldRef<"Worktype", 'Int'>
    readonly standard_duration: FieldRef<"Worktype", 'Int'>
    readonly name: FieldRef<"Worktype", 'String'>
    readonly description: FieldRef<"Worktype", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Worktype findUnique
   */
  export type WorktypeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worktype
     */
    select?: WorktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worktype
     */
    omit?: WorktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorktypeInclude<ExtArgs> | null
    /**
     * Filter, which Worktype to fetch.
     */
    where: WorktypeWhereUniqueInput
  }

  /**
   * Worktype findUniqueOrThrow
   */
  export type WorktypeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worktype
     */
    select?: WorktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worktype
     */
    omit?: WorktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorktypeInclude<ExtArgs> | null
    /**
     * Filter, which Worktype to fetch.
     */
    where: WorktypeWhereUniqueInput
  }

  /**
   * Worktype findFirst
   */
  export type WorktypeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worktype
     */
    select?: WorktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worktype
     */
    omit?: WorktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorktypeInclude<ExtArgs> | null
    /**
     * Filter, which Worktype to fetch.
     */
    where?: WorktypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worktypes to fetch.
     */
    orderBy?: WorktypeOrderByWithRelationInput | WorktypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worktypes.
     */
    cursor?: WorktypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worktypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worktypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worktypes.
     */
    distinct?: WorktypeScalarFieldEnum | WorktypeScalarFieldEnum[]
  }

  /**
   * Worktype findFirstOrThrow
   */
  export type WorktypeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worktype
     */
    select?: WorktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worktype
     */
    omit?: WorktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorktypeInclude<ExtArgs> | null
    /**
     * Filter, which Worktype to fetch.
     */
    where?: WorktypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worktypes to fetch.
     */
    orderBy?: WorktypeOrderByWithRelationInput | WorktypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Worktypes.
     */
    cursor?: WorktypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worktypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worktypes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Worktypes.
     */
    distinct?: WorktypeScalarFieldEnum | WorktypeScalarFieldEnum[]
  }

  /**
   * Worktype findMany
   */
  export type WorktypeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worktype
     */
    select?: WorktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worktype
     */
    omit?: WorktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorktypeInclude<ExtArgs> | null
    /**
     * Filter, which Worktypes to fetch.
     */
    where?: WorktypeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Worktypes to fetch.
     */
    orderBy?: WorktypeOrderByWithRelationInput | WorktypeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Worktypes.
     */
    cursor?: WorktypeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Worktypes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Worktypes.
     */
    skip?: number
    distinct?: WorktypeScalarFieldEnum | WorktypeScalarFieldEnum[]
  }

  /**
   * Worktype create
   */
  export type WorktypeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worktype
     */
    select?: WorktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worktype
     */
    omit?: WorktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorktypeInclude<ExtArgs> | null
    /**
     * The data needed to create a Worktype.
     */
    data: XOR<WorktypeCreateInput, WorktypeUncheckedCreateInput>
  }

  /**
   * Worktype createMany
   */
  export type WorktypeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Worktypes.
     */
    data: WorktypeCreateManyInput | WorktypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worktype createManyAndReturn
   */
  export type WorktypeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worktype
     */
    select?: WorktypeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Worktype
     */
    omit?: WorktypeOmit<ExtArgs> | null
    /**
     * The data used to create many Worktypes.
     */
    data: WorktypeCreateManyInput | WorktypeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Worktype update
   */
  export type WorktypeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worktype
     */
    select?: WorktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worktype
     */
    omit?: WorktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorktypeInclude<ExtArgs> | null
    /**
     * The data needed to update a Worktype.
     */
    data: XOR<WorktypeUpdateInput, WorktypeUncheckedUpdateInput>
    /**
     * Choose, which Worktype to update.
     */
    where: WorktypeWhereUniqueInput
  }

  /**
   * Worktype updateMany
   */
  export type WorktypeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Worktypes.
     */
    data: XOR<WorktypeUpdateManyMutationInput, WorktypeUncheckedUpdateManyInput>
    /**
     * Filter which Worktypes to update
     */
    where?: WorktypeWhereInput
    /**
     * Limit how many Worktypes to update.
     */
    limit?: number
  }

  /**
   * Worktype updateManyAndReturn
   */
  export type WorktypeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worktype
     */
    select?: WorktypeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Worktype
     */
    omit?: WorktypeOmit<ExtArgs> | null
    /**
     * The data used to update Worktypes.
     */
    data: XOR<WorktypeUpdateManyMutationInput, WorktypeUncheckedUpdateManyInput>
    /**
     * Filter which Worktypes to update
     */
    where?: WorktypeWhereInput
    /**
     * Limit how many Worktypes to update.
     */
    limit?: number
  }

  /**
   * Worktype upsert
   */
  export type WorktypeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worktype
     */
    select?: WorktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worktype
     */
    omit?: WorktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorktypeInclude<ExtArgs> | null
    /**
     * The filter to search for the Worktype to update in case it exists.
     */
    where: WorktypeWhereUniqueInput
    /**
     * In case the Worktype found by the `where` argument doesn't exist, create a new Worktype with this data.
     */
    create: XOR<WorktypeCreateInput, WorktypeUncheckedCreateInput>
    /**
     * In case the Worktype was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorktypeUpdateInput, WorktypeUncheckedUpdateInput>
  }

  /**
   * Worktype delete
   */
  export type WorktypeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worktype
     */
    select?: WorktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worktype
     */
    omit?: WorktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorktypeInclude<ExtArgs> | null
    /**
     * Filter which Worktype to delete.
     */
    where: WorktypeWhereUniqueInput
  }

  /**
   * Worktype deleteMany
   */
  export type WorktypeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Worktypes to delete
     */
    where?: WorktypeWhereInput
    /**
     * Limit how many Worktypes to delete.
     */
    limit?: number
  }

  /**
   * Worktype.work
   */
  export type Worktype$workArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Work
     */
    select?: WorkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Work
     */
    omit?: WorkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkInclude<ExtArgs> | null
    where?: WorkWhereInput
    orderBy?: WorkOrderByWithRelationInput | WorkOrderByWithRelationInput[]
    cursor?: WorkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkScalarFieldEnum | WorkScalarFieldEnum[]
  }

  /**
   * Worktype without action
   */
  export type WorktypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Worktype
     */
    select?: WorktypeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Worktype
     */
    omit?: WorktypeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorktypeInclude<ExtArgs> | null
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
    phone: 'phone',
    username: 'username',
    password: 'password',
    license_code: 'license_code',
    license_expiration_date: 'license_expiration_date',
    first_name: 'first_name',
    last_name: 'last_name',
    municipality_residence: 'municipality_residence',
    fiscal_code: 'fiscal_code',
    status: 'status',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VehicleScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    plate: 'plate',
    model: 'model',
    brand: 'brand',
    km: 'km'
  };

  export type VehicleScalarFieldEnum = (typeof VehicleScalarFieldEnum)[keyof typeof VehicleScalarFieldEnum]


  export const PreventiveScalarFieldEnum: {
    id: 'id',
    idVehicle: 'idVehicle',
    description: 'description',
    cost: 'cost',
    discount: 'discount',
    e_end_date: 'e_end_date',
    additional_notes: 'additional_notes',
    type: 'type',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type PreventiveScalarFieldEnum = (typeof PreventiveScalarFieldEnum)[keyof typeof PreventiveScalarFieldEnum]


  export const WorkScalarFieldEnum: {
    id: 'id',
    idPreventive: 'idPreventive',
    idWorkType: 'idWorkType',
    start_date: 'start_date',
    end_date: 'end_date',
    status: 'status',
    additional_notes: 'additional_notes',
    updated_at: 'updated_at',
    created_at: 'created_at'
  };

  export type WorkScalarFieldEnum = (typeof WorkScalarFieldEnum)[keyof typeof WorkScalarFieldEnum]


  export const WorktypeScalarFieldEnum: {
    id: 'id',
    estimate_cost: 'estimate_cost',
    standard_duration: 'standard_duration',
    name: 'name',
    description: 'description'
  };

  export type WorktypeScalarFieldEnum = (typeof WorktypeScalarFieldEnum)[keyof typeof WorktypeScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    license_code?: StringFilter<"User"> | string
    license_expiration_date?: DateTimeFilter<"User"> | Date | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    municipality_residence?: StringFilter<"User"> | string
    fiscal_code?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    created_at?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehicleListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    password?: SortOrder
    license_code?: SortOrder
    license_expiration_date?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    municipality_residence?: SortOrder
    fiscal_code?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    vehicles?: VehicleOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    phone?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    license_code?: StringFilter<"User"> | string
    license_expiration_date?: DateTimeFilter<"User"> | Date | string
    first_name?: StringFilter<"User"> | string
    last_name?: StringFilter<"User"> | string
    municipality_residence?: StringFilter<"User"> | string
    fiscal_code?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    updated_at?: DateTimeFilter<"User"> | Date | string
    created_at?: DateTimeFilter<"User"> | Date | string
    vehicles?: VehicleListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    password?: SortOrder
    license_code?: SortOrder
    license_expiration_date?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    municipality_residence?: SortOrder
    fiscal_code?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
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
    phone?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    license_code?: StringWithAggregatesFilter<"User"> | string
    license_expiration_date?: DateTimeWithAggregatesFilter<"User"> | Date | string
    first_name?: StringWithAggregatesFilter<"User"> | string
    last_name?: StringWithAggregatesFilter<"User"> | string
    municipality_residence?: StringWithAggregatesFilter<"User"> | string
    fiscal_code?: StringWithAggregatesFilter<"User"> | string
    status?: StringWithAggregatesFilter<"User"> | string
    updated_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type VehicleWhereInput = {
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    userId?: StringFilter<"Vehicle"> | string
    plate?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    km?: IntFilter<"Vehicle"> | number
    preventives?: PreventiveListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type VehicleOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    plate?: SortOrder
    model?: SortOrder
    brand?: SortOrder
    km?: SortOrder
    preventives?: PreventiveOrderByRelationAggregateInput
    user?: UserOrderByWithRelationInput
  }

  export type VehicleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    plate?: string
    AND?: VehicleWhereInput | VehicleWhereInput[]
    OR?: VehicleWhereInput[]
    NOT?: VehicleWhereInput | VehicleWhereInput[]
    userId?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    km?: IntFilter<"Vehicle"> | number
    preventives?: PreventiveListRelationFilter
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "plate">

  export type VehicleOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    plate?: SortOrder
    model?: SortOrder
    brand?: SortOrder
    km?: SortOrder
    _count?: VehicleCountOrderByAggregateInput
    _avg?: VehicleAvgOrderByAggregateInput
    _max?: VehicleMaxOrderByAggregateInput
    _min?: VehicleMinOrderByAggregateInput
    _sum?: VehicleSumOrderByAggregateInput
  }

  export type VehicleScalarWhereWithAggregatesInput = {
    AND?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    OR?: VehicleScalarWhereWithAggregatesInput[]
    NOT?: VehicleScalarWhereWithAggregatesInput | VehicleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Vehicle"> | string
    userId?: StringWithAggregatesFilter<"Vehicle"> | string
    plate?: StringWithAggregatesFilter<"Vehicle"> | string
    model?: StringWithAggregatesFilter<"Vehicle"> | string
    brand?: StringWithAggregatesFilter<"Vehicle"> | string
    km?: IntWithAggregatesFilter<"Vehicle"> | number
  }

  export type PreventiveWhereInput = {
    AND?: PreventiveWhereInput | PreventiveWhereInput[]
    OR?: PreventiveWhereInput[]
    NOT?: PreventiveWhereInput | PreventiveWhereInput[]
    id?: StringFilter<"Preventive"> | string
    idVehicle?: StringFilter<"Preventive"> | string
    description?: StringFilter<"Preventive"> | string
    cost?: IntFilter<"Preventive"> | number
    discount?: IntFilter<"Preventive"> | number
    e_end_date?: DateTimeFilter<"Preventive"> | Date | string
    additional_notes?: StringFilter<"Preventive"> | string
    type?: StringFilter<"Preventive"> | string
    updated_at?: DateTimeFilter<"Preventive"> | Date | string
    created_at?: DateTimeFilter<"Preventive"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    work?: XOR<WorkNullableScalarRelationFilter, WorkWhereInput> | null
  }

  export type PreventiveOrderByWithRelationInput = {
    id?: SortOrder
    idVehicle?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    discount?: SortOrder
    e_end_date?: SortOrder
    additional_notes?: SortOrder
    type?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    vehicle?: VehicleOrderByWithRelationInput
    work?: WorkOrderByWithRelationInput
  }

  export type PreventiveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PreventiveWhereInput | PreventiveWhereInput[]
    OR?: PreventiveWhereInput[]
    NOT?: PreventiveWhereInput | PreventiveWhereInput[]
    idVehicle?: StringFilter<"Preventive"> | string
    description?: StringFilter<"Preventive"> | string
    cost?: IntFilter<"Preventive"> | number
    discount?: IntFilter<"Preventive"> | number
    e_end_date?: DateTimeFilter<"Preventive"> | Date | string
    additional_notes?: StringFilter<"Preventive"> | string
    type?: StringFilter<"Preventive"> | string
    updated_at?: DateTimeFilter<"Preventive"> | Date | string
    created_at?: DateTimeFilter<"Preventive"> | Date | string
    vehicle?: XOR<VehicleScalarRelationFilter, VehicleWhereInput>
    work?: XOR<WorkNullableScalarRelationFilter, WorkWhereInput> | null
  }, "id">

  export type PreventiveOrderByWithAggregationInput = {
    id?: SortOrder
    idVehicle?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    discount?: SortOrder
    e_end_date?: SortOrder
    additional_notes?: SortOrder
    type?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: PreventiveCountOrderByAggregateInput
    _avg?: PreventiveAvgOrderByAggregateInput
    _max?: PreventiveMaxOrderByAggregateInput
    _min?: PreventiveMinOrderByAggregateInput
    _sum?: PreventiveSumOrderByAggregateInput
  }

  export type PreventiveScalarWhereWithAggregatesInput = {
    AND?: PreventiveScalarWhereWithAggregatesInput | PreventiveScalarWhereWithAggregatesInput[]
    OR?: PreventiveScalarWhereWithAggregatesInput[]
    NOT?: PreventiveScalarWhereWithAggregatesInput | PreventiveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Preventive"> | string
    idVehicle?: StringWithAggregatesFilter<"Preventive"> | string
    description?: StringWithAggregatesFilter<"Preventive"> | string
    cost?: IntWithAggregatesFilter<"Preventive"> | number
    discount?: IntWithAggregatesFilter<"Preventive"> | number
    e_end_date?: DateTimeWithAggregatesFilter<"Preventive"> | Date | string
    additional_notes?: StringWithAggregatesFilter<"Preventive"> | string
    type?: StringWithAggregatesFilter<"Preventive"> | string
    updated_at?: DateTimeWithAggregatesFilter<"Preventive"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Preventive"> | Date | string
  }

  export type WorkWhereInput = {
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    id?: StringFilter<"Work"> | string
    idPreventive?: StringFilter<"Work"> | string
    idWorkType?: StringNullableFilter<"Work"> | string | null
    start_date?: DateTimeFilter<"Work"> | Date | string
    end_date?: DateTimeFilter<"Work"> | Date | string
    status?: StringFilter<"Work"> | string
    additional_notes?: StringFilter<"Work"> | string
    updated_at?: DateTimeFilter<"Work"> | Date | string
    created_at?: DateTimeFilter<"Work"> | Date | string
    preventive?: XOR<PreventiveScalarRelationFilter, PreventiveWhereInput>
    worktype?: XOR<WorktypeNullableScalarRelationFilter, WorktypeWhereInput> | null
  }

  export type WorkOrderByWithRelationInput = {
    id?: SortOrder
    idPreventive?: SortOrder
    idWorkType?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    additional_notes?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    preventive?: PreventiveOrderByWithRelationInput
    worktype?: WorktypeOrderByWithRelationInput
  }

  export type WorkWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    idPreventive?: string
    AND?: WorkWhereInput | WorkWhereInput[]
    OR?: WorkWhereInput[]
    NOT?: WorkWhereInput | WorkWhereInput[]
    idWorkType?: StringNullableFilter<"Work"> | string | null
    start_date?: DateTimeFilter<"Work"> | Date | string
    end_date?: DateTimeFilter<"Work"> | Date | string
    status?: StringFilter<"Work"> | string
    additional_notes?: StringFilter<"Work"> | string
    updated_at?: DateTimeFilter<"Work"> | Date | string
    created_at?: DateTimeFilter<"Work"> | Date | string
    preventive?: XOR<PreventiveScalarRelationFilter, PreventiveWhereInput>
    worktype?: XOR<WorktypeNullableScalarRelationFilter, WorktypeWhereInput> | null
  }, "id" | "idPreventive">

  export type WorkOrderByWithAggregationInput = {
    id?: SortOrder
    idPreventive?: SortOrder
    idWorkType?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    additional_notes?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
    _count?: WorkCountOrderByAggregateInput
    _max?: WorkMaxOrderByAggregateInput
    _min?: WorkMinOrderByAggregateInput
  }

  export type WorkScalarWhereWithAggregatesInput = {
    AND?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    OR?: WorkScalarWhereWithAggregatesInput[]
    NOT?: WorkScalarWhereWithAggregatesInput | WorkScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Work"> | string
    idPreventive?: StringWithAggregatesFilter<"Work"> | string
    idWorkType?: StringNullableWithAggregatesFilter<"Work"> | string | null
    start_date?: DateTimeWithAggregatesFilter<"Work"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"Work"> | Date | string
    status?: StringWithAggregatesFilter<"Work"> | string
    additional_notes?: StringWithAggregatesFilter<"Work"> | string
    updated_at?: DateTimeWithAggregatesFilter<"Work"> | Date | string
    created_at?: DateTimeWithAggregatesFilter<"Work"> | Date | string
  }

  export type WorktypeWhereInput = {
    AND?: WorktypeWhereInput | WorktypeWhereInput[]
    OR?: WorktypeWhereInput[]
    NOT?: WorktypeWhereInput | WorktypeWhereInput[]
    id?: StringFilter<"Worktype"> | string
    estimate_cost?: IntFilter<"Worktype"> | number
    standard_duration?: IntFilter<"Worktype"> | number
    name?: StringFilter<"Worktype"> | string
    description?: StringFilter<"Worktype"> | string
    work?: WorkListRelationFilter
  }

  export type WorktypeOrderByWithRelationInput = {
    id?: SortOrder
    estimate_cost?: SortOrder
    standard_duration?: SortOrder
    name?: SortOrder
    description?: SortOrder
    work?: WorkOrderByRelationAggregateInput
  }

  export type WorktypeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorktypeWhereInput | WorktypeWhereInput[]
    OR?: WorktypeWhereInput[]
    NOT?: WorktypeWhereInput | WorktypeWhereInput[]
    estimate_cost?: IntFilter<"Worktype"> | number
    standard_duration?: IntFilter<"Worktype"> | number
    name?: StringFilter<"Worktype"> | string
    description?: StringFilter<"Worktype"> | string
    work?: WorkListRelationFilter
  }, "id">

  export type WorktypeOrderByWithAggregationInput = {
    id?: SortOrder
    estimate_cost?: SortOrder
    standard_duration?: SortOrder
    name?: SortOrder
    description?: SortOrder
    _count?: WorktypeCountOrderByAggregateInput
    _avg?: WorktypeAvgOrderByAggregateInput
    _max?: WorktypeMaxOrderByAggregateInput
    _min?: WorktypeMinOrderByAggregateInput
    _sum?: WorktypeSumOrderByAggregateInput
  }

  export type WorktypeScalarWhereWithAggregatesInput = {
    AND?: WorktypeScalarWhereWithAggregatesInput | WorktypeScalarWhereWithAggregatesInput[]
    OR?: WorktypeScalarWhereWithAggregatesInput[]
    NOT?: WorktypeScalarWhereWithAggregatesInput | WorktypeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Worktype"> | string
    estimate_cost?: IntWithAggregatesFilter<"Worktype"> | number
    standard_duration?: IntWithAggregatesFilter<"Worktype"> | number
    name?: StringWithAggregatesFilter<"Worktype"> | string
    description?: StringWithAggregatesFilter<"Worktype"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    phone: string
    username: string
    password: string
    license_code: string
    license_expiration_date: Date | string
    first_name: string
    last_name: string
    municipality_residence: string
    fiscal_code: string
    status: string
    updated_at?: Date | string
    created_at?: Date | string
    vehicles?: VehicleCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    phone: string
    username: string
    password: string
    license_code: string
    license_expiration_date: Date | string
    first_name: string
    last_name: string
    municipality_residence: string
    fiscal_code: string
    status: string
    updated_at?: Date | string
    created_at?: Date | string
    vehicles?: VehicleUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    license_code?: StringFieldUpdateOperationsInput | string
    license_expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    municipality_residence?: StringFieldUpdateOperationsInput | string
    fiscal_code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    license_code?: StringFieldUpdateOperationsInput | string
    license_expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    municipality_residence?: StringFieldUpdateOperationsInput | string
    fiscal_code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicles?: VehicleUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    phone: string
    username: string
    password: string
    license_code: string
    license_expiration_date: Date | string
    first_name: string
    last_name: string
    municipality_residence: string
    fiscal_code: string
    status: string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    license_code?: StringFieldUpdateOperationsInput | string
    license_expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    municipality_residence?: StringFieldUpdateOperationsInput | string
    fiscal_code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    license_code?: StringFieldUpdateOperationsInput | string
    license_expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    municipality_residence?: StringFieldUpdateOperationsInput | string
    fiscal_code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateInput = {
    id?: string
    plate: string
    model: string
    brand: string
    km: number
    preventives?: PreventiveCreateNestedManyWithoutVehicleInput
    user: UserCreateNestedOneWithoutVehiclesInput
  }

  export type VehicleUncheckedCreateInput = {
    id?: string
    userId: string
    plate: string
    model: string
    brand: string
    km: number
    preventives?: PreventiveUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    preventives?: PreventiveUpdateManyWithoutVehicleNestedInput
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type VehicleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    preventives?: PreventiveUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleCreateManyInput = {
    id?: string
    userId: string
    plate: string
    model: string
    brand: string
    km: number
  }

  export type VehicleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
  }

  export type VehicleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
  }

  export type PreventiveCreateInput = {
    id?: string
    description: string
    cost: number
    discount: number
    e_end_date: Date | string
    additional_notes: string
    type: string
    updated_at?: Date | string
    created_at?: Date | string
    vehicle: VehicleCreateNestedOneWithoutPreventivesInput
    work?: WorkCreateNestedOneWithoutPreventiveInput
  }

  export type PreventiveUncheckedCreateInput = {
    id?: string
    idVehicle: string
    description: string
    cost: number
    discount: number
    e_end_date: Date | string
    additional_notes: string
    type: string
    updated_at?: Date | string
    created_at?: Date | string
    work?: WorkUncheckedCreateNestedOneWithoutPreventiveInput
  }

  export type PreventiveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    e_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutPreventivesNestedInput
    work?: WorkUpdateOneWithoutPreventiveNestedInput
  }

  export type PreventiveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idVehicle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    e_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUncheckedUpdateOneWithoutPreventiveNestedInput
  }

  export type PreventiveCreateManyInput = {
    id?: string
    idVehicle: string
    description: string
    cost: number
    discount: number
    e_end_date: Date | string
    additional_notes: string
    type: string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type PreventiveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    e_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreventiveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idVehicle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    e_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkCreateInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    status: string
    additional_notes: string
    updated_at?: Date | string
    created_at?: Date | string
    preventive: PreventiveCreateNestedOneWithoutWorkInput
    worktype?: WorktypeCreateNestedOneWithoutWorkInput
  }

  export type WorkUncheckedCreateInput = {
    id?: string
    idPreventive: string
    idWorkType?: string | null
    start_date: Date | string
    end_date: Date | string
    status: string
    additional_notes: string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type WorkUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    preventive?: PreventiveUpdateOneRequiredWithoutWorkNestedInput
    worktype?: WorktypeUpdateOneWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    idPreventive?: StringFieldUpdateOperationsInput | string
    idWorkType?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkCreateManyInput = {
    id?: string
    idPreventive: string
    idWorkType?: string | null
    start_date: Date | string
    end_date: Date | string
    status: string
    additional_notes: string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type WorkUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    idPreventive?: StringFieldUpdateOperationsInput | string
    idWorkType?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorktypeCreateInput = {
    id?: string
    estimate_cost: number
    standard_duration: number
    name: string
    description: string
    work?: WorkCreateNestedManyWithoutWorktypeInput
  }

  export type WorktypeUncheckedCreateInput = {
    id?: string
    estimate_cost: number
    standard_duration: number
    name: string
    description: string
    work?: WorkUncheckedCreateNestedManyWithoutWorktypeInput
  }

  export type WorktypeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    estimate_cost?: IntFieldUpdateOperationsInput | number
    standard_duration?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    work?: WorkUpdateManyWithoutWorktypeNestedInput
  }

  export type WorktypeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    estimate_cost?: IntFieldUpdateOperationsInput | number
    standard_duration?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    work?: WorkUncheckedUpdateManyWithoutWorktypeNestedInput
  }

  export type WorktypeCreateManyInput = {
    id?: string
    estimate_cost: number
    standard_duration: number
    name: string
    description: string
  }

  export type WorktypeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    estimate_cost?: IntFieldUpdateOperationsInput | number
    standard_duration?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WorktypeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    estimate_cost?: IntFieldUpdateOperationsInput | number
    standard_duration?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
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

  export type VehicleListRelationFilter = {
    every?: VehicleWhereInput
    some?: VehicleWhereInput
    none?: VehicleWhereInput
  }

  export type VehicleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    password?: SortOrder
    license_code?: SortOrder
    license_expiration_date?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    municipality_residence?: SortOrder
    fiscal_code?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    password?: SortOrder
    license_code?: SortOrder
    license_expiration_date?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    municipality_residence?: SortOrder
    fiscal_code?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    username?: SortOrder
    password?: SortOrder
    license_code?: SortOrder
    license_expiration_date?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    municipality_residence?: SortOrder
    fiscal_code?: SortOrder
    status?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
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

  export type PreventiveListRelationFilter = {
    every?: PreventiveWhereInput
    some?: PreventiveWhereInput
    none?: PreventiveWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PreventiveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VehicleCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plate?: SortOrder
    model?: SortOrder
    brand?: SortOrder
    km?: SortOrder
  }

  export type VehicleAvgOrderByAggregateInput = {
    km?: SortOrder
  }

  export type VehicleMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plate?: SortOrder
    model?: SortOrder
    brand?: SortOrder
    km?: SortOrder
  }

  export type VehicleMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    plate?: SortOrder
    model?: SortOrder
    brand?: SortOrder
    km?: SortOrder
  }

  export type VehicleSumOrderByAggregateInput = {
    km?: SortOrder
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

  export type VehicleScalarRelationFilter = {
    is?: VehicleWhereInput
    isNot?: VehicleWhereInput
  }

  export type WorkNullableScalarRelationFilter = {
    is?: WorkWhereInput | null
    isNot?: WorkWhereInput | null
  }

  export type PreventiveCountOrderByAggregateInput = {
    id?: SortOrder
    idVehicle?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    discount?: SortOrder
    e_end_date?: SortOrder
    additional_notes?: SortOrder
    type?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type PreventiveAvgOrderByAggregateInput = {
    cost?: SortOrder
    discount?: SortOrder
  }

  export type PreventiveMaxOrderByAggregateInput = {
    id?: SortOrder
    idVehicle?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    discount?: SortOrder
    e_end_date?: SortOrder
    additional_notes?: SortOrder
    type?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type PreventiveMinOrderByAggregateInput = {
    id?: SortOrder
    idVehicle?: SortOrder
    description?: SortOrder
    cost?: SortOrder
    discount?: SortOrder
    e_end_date?: SortOrder
    additional_notes?: SortOrder
    type?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type PreventiveSumOrderByAggregateInput = {
    cost?: SortOrder
    discount?: SortOrder
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

  export type PreventiveScalarRelationFilter = {
    is?: PreventiveWhereInput
    isNot?: PreventiveWhereInput
  }

  export type WorktypeNullableScalarRelationFilter = {
    is?: WorktypeWhereInput | null
    isNot?: WorktypeWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkCountOrderByAggregateInput = {
    id?: SortOrder
    idPreventive?: SortOrder
    idWorkType?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    additional_notes?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type WorkMaxOrderByAggregateInput = {
    id?: SortOrder
    idPreventive?: SortOrder
    idWorkType?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    additional_notes?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
  }

  export type WorkMinOrderByAggregateInput = {
    id?: SortOrder
    idPreventive?: SortOrder
    idWorkType?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    status?: SortOrder
    additional_notes?: SortOrder
    updated_at?: SortOrder
    created_at?: SortOrder
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

  export type WorkListRelationFilter = {
    every?: WorkWhereInput
    some?: WorkWhereInput
    none?: WorkWhereInput
  }

  export type WorkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorktypeCountOrderByAggregateInput = {
    id?: SortOrder
    estimate_cost?: SortOrder
    standard_duration?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type WorktypeAvgOrderByAggregateInput = {
    estimate_cost?: SortOrder
    standard_duration?: SortOrder
  }

  export type WorktypeMaxOrderByAggregateInput = {
    id?: SortOrder
    estimate_cost?: SortOrder
    standard_duration?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type WorktypeMinOrderByAggregateInput = {
    id?: SortOrder
    estimate_cost?: SortOrder
    standard_duration?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type WorktypeSumOrderByAggregateInput = {
    estimate_cost?: SortOrder
    standard_duration?: SortOrder
  }

  export type VehicleCreateNestedManyWithoutUserInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type VehicleUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VehicleUpdateManyWithoutUserNestedInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutUserInput | VehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutUserInput | VehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutUserInput | VehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type VehicleUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput> | VehicleCreateWithoutUserInput[] | VehicleUncheckedCreateWithoutUserInput[]
    connectOrCreate?: VehicleCreateOrConnectWithoutUserInput | VehicleCreateOrConnectWithoutUserInput[]
    upsert?: VehicleUpsertWithWhereUniqueWithoutUserInput | VehicleUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: VehicleCreateManyUserInputEnvelope
    set?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    disconnect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    delete?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    connect?: VehicleWhereUniqueInput | VehicleWhereUniqueInput[]
    update?: VehicleUpdateWithWhereUniqueWithoutUserInput | VehicleUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: VehicleUpdateManyWithWhereWithoutUserInput | VehicleUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
  }

  export type PreventiveCreateNestedManyWithoutVehicleInput = {
    create?: XOR<PreventiveCreateWithoutVehicleInput, PreventiveUncheckedCreateWithoutVehicleInput> | PreventiveCreateWithoutVehicleInput[] | PreventiveUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: PreventiveCreateOrConnectWithoutVehicleInput | PreventiveCreateOrConnectWithoutVehicleInput[]
    createMany?: PreventiveCreateManyVehicleInputEnvelope
    connect?: PreventiveWhereUniqueInput | PreventiveWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutVehiclesInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    connect?: UserWhereUniqueInput
  }

  export type PreventiveUncheckedCreateNestedManyWithoutVehicleInput = {
    create?: XOR<PreventiveCreateWithoutVehicleInput, PreventiveUncheckedCreateWithoutVehicleInput> | PreventiveCreateWithoutVehicleInput[] | PreventiveUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: PreventiveCreateOrConnectWithoutVehicleInput | PreventiveCreateOrConnectWithoutVehicleInput[]
    createMany?: PreventiveCreateManyVehicleInputEnvelope
    connect?: PreventiveWhereUniqueInput | PreventiveWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type PreventiveUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<PreventiveCreateWithoutVehicleInput, PreventiveUncheckedCreateWithoutVehicleInput> | PreventiveCreateWithoutVehicleInput[] | PreventiveUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: PreventiveCreateOrConnectWithoutVehicleInput | PreventiveCreateOrConnectWithoutVehicleInput[]
    upsert?: PreventiveUpsertWithWhereUniqueWithoutVehicleInput | PreventiveUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: PreventiveCreateManyVehicleInputEnvelope
    set?: PreventiveWhereUniqueInput | PreventiveWhereUniqueInput[]
    disconnect?: PreventiveWhereUniqueInput | PreventiveWhereUniqueInput[]
    delete?: PreventiveWhereUniqueInput | PreventiveWhereUniqueInput[]
    connect?: PreventiveWhereUniqueInput | PreventiveWhereUniqueInput[]
    update?: PreventiveUpdateWithWhereUniqueWithoutVehicleInput | PreventiveUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: PreventiveUpdateManyWithWhereWithoutVehicleInput | PreventiveUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: PreventiveScalarWhereInput | PreventiveScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutVehiclesNestedInput = {
    create?: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    connectOrCreate?: UserCreateOrConnectWithoutVehiclesInput
    upsert?: UserUpsertWithoutVehiclesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutVehiclesInput, UserUpdateWithoutVehiclesInput>, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type PreventiveUncheckedUpdateManyWithoutVehicleNestedInput = {
    create?: XOR<PreventiveCreateWithoutVehicleInput, PreventiveUncheckedCreateWithoutVehicleInput> | PreventiveCreateWithoutVehicleInput[] | PreventiveUncheckedCreateWithoutVehicleInput[]
    connectOrCreate?: PreventiveCreateOrConnectWithoutVehicleInput | PreventiveCreateOrConnectWithoutVehicleInput[]
    upsert?: PreventiveUpsertWithWhereUniqueWithoutVehicleInput | PreventiveUpsertWithWhereUniqueWithoutVehicleInput[]
    createMany?: PreventiveCreateManyVehicleInputEnvelope
    set?: PreventiveWhereUniqueInput | PreventiveWhereUniqueInput[]
    disconnect?: PreventiveWhereUniqueInput | PreventiveWhereUniqueInput[]
    delete?: PreventiveWhereUniqueInput | PreventiveWhereUniqueInput[]
    connect?: PreventiveWhereUniqueInput | PreventiveWhereUniqueInput[]
    update?: PreventiveUpdateWithWhereUniqueWithoutVehicleInput | PreventiveUpdateWithWhereUniqueWithoutVehicleInput[]
    updateMany?: PreventiveUpdateManyWithWhereWithoutVehicleInput | PreventiveUpdateManyWithWhereWithoutVehicleInput[]
    deleteMany?: PreventiveScalarWhereInput | PreventiveScalarWhereInput[]
  }

  export type VehicleCreateNestedOneWithoutPreventivesInput = {
    create?: XOR<VehicleCreateWithoutPreventivesInput, VehicleUncheckedCreateWithoutPreventivesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutPreventivesInput
    connect?: VehicleWhereUniqueInput
  }

  export type WorkCreateNestedOneWithoutPreventiveInput = {
    create?: XOR<WorkCreateWithoutPreventiveInput, WorkUncheckedCreateWithoutPreventiveInput>
    connectOrCreate?: WorkCreateOrConnectWithoutPreventiveInput
    connect?: WorkWhereUniqueInput
  }

  export type WorkUncheckedCreateNestedOneWithoutPreventiveInput = {
    create?: XOR<WorkCreateWithoutPreventiveInput, WorkUncheckedCreateWithoutPreventiveInput>
    connectOrCreate?: WorkCreateOrConnectWithoutPreventiveInput
    connect?: WorkWhereUniqueInput
  }

  export type VehicleUpdateOneRequiredWithoutPreventivesNestedInput = {
    create?: XOR<VehicleCreateWithoutPreventivesInput, VehicleUncheckedCreateWithoutPreventivesInput>
    connectOrCreate?: VehicleCreateOrConnectWithoutPreventivesInput
    upsert?: VehicleUpsertWithoutPreventivesInput
    connect?: VehicleWhereUniqueInput
    update?: XOR<XOR<VehicleUpdateToOneWithWhereWithoutPreventivesInput, VehicleUpdateWithoutPreventivesInput>, VehicleUncheckedUpdateWithoutPreventivesInput>
  }

  export type WorkUpdateOneWithoutPreventiveNestedInput = {
    create?: XOR<WorkCreateWithoutPreventiveInput, WorkUncheckedCreateWithoutPreventiveInput>
    connectOrCreate?: WorkCreateOrConnectWithoutPreventiveInput
    upsert?: WorkUpsertWithoutPreventiveInput
    disconnect?: WorkWhereInput | boolean
    delete?: WorkWhereInput | boolean
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutPreventiveInput, WorkUpdateWithoutPreventiveInput>, WorkUncheckedUpdateWithoutPreventiveInput>
  }

  export type WorkUncheckedUpdateOneWithoutPreventiveNestedInput = {
    create?: XOR<WorkCreateWithoutPreventiveInput, WorkUncheckedCreateWithoutPreventiveInput>
    connectOrCreate?: WorkCreateOrConnectWithoutPreventiveInput
    upsert?: WorkUpsertWithoutPreventiveInput
    disconnect?: WorkWhereInput | boolean
    delete?: WorkWhereInput | boolean
    connect?: WorkWhereUniqueInput
    update?: XOR<XOR<WorkUpdateToOneWithWhereWithoutPreventiveInput, WorkUpdateWithoutPreventiveInput>, WorkUncheckedUpdateWithoutPreventiveInput>
  }

  export type PreventiveCreateNestedOneWithoutWorkInput = {
    create?: XOR<PreventiveCreateWithoutWorkInput, PreventiveUncheckedCreateWithoutWorkInput>
    connectOrCreate?: PreventiveCreateOrConnectWithoutWorkInput
    connect?: PreventiveWhereUniqueInput
  }

  export type WorktypeCreateNestedOneWithoutWorkInput = {
    create?: XOR<WorktypeCreateWithoutWorkInput, WorktypeUncheckedCreateWithoutWorkInput>
    connectOrCreate?: WorktypeCreateOrConnectWithoutWorkInput
    connect?: WorktypeWhereUniqueInput
  }

  export type PreventiveUpdateOneRequiredWithoutWorkNestedInput = {
    create?: XOR<PreventiveCreateWithoutWorkInput, PreventiveUncheckedCreateWithoutWorkInput>
    connectOrCreate?: PreventiveCreateOrConnectWithoutWorkInput
    upsert?: PreventiveUpsertWithoutWorkInput
    connect?: PreventiveWhereUniqueInput
    update?: XOR<XOR<PreventiveUpdateToOneWithWhereWithoutWorkInput, PreventiveUpdateWithoutWorkInput>, PreventiveUncheckedUpdateWithoutWorkInput>
  }

  export type WorktypeUpdateOneWithoutWorkNestedInput = {
    create?: XOR<WorktypeCreateWithoutWorkInput, WorktypeUncheckedCreateWithoutWorkInput>
    connectOrCreate?: WorktypeCreateOrConnectWithoutWorkInput
    upsert?: WorktypeUpsertWithoutWorkInput
    disconnect?: WorktypeWhereInput | boolean
    delete?: WorktypeWhereInput | boolean
    connect?: WorktypeWhereUniqueInput
    update?: XOR<XOR<WorktypeUpdateToOneWithWhereWithoutWorkInput, WorktypeUpdateWithoutWorkInput>, WorktypeUncheckedUpdateWithoutWorkInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type WorkCreateNestedManyWithoutWorktypeInput = {
    create?: XOR<WorkCreateWithoutWorktypeInput, WorkUncheckedCreateWithoutWorktypeInput> | WorkCreateWithoutWorktypeInput[] | WorkUncheckedCreateWithoutWorktypeInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutWorktypeInput | WorkCreateOrConnectWithoutWorktypeInput[]
    createMany?: WorkCreateManyWorktypeInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type WorkUncheckedCreateNestedManyWithoutWorktypeInput = {
    create?: XOR<WorkCreateWithoutWorktypeInput, WorkUncheckedCreateWithoutWorktypeInput> | WorkCreateWithoutWorktypeInput[] | WorkUncheckedCreateWithoutWorktypeInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutWorktypeInput | WorkCreateOrConnectWithoutWorktypeInput[]
    createMany?: WorkCreateManyWorktypeInputEnvelope
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
  }

  export type WorkUpdateManyWithoutWorktypeNestedInput = {
    create?: XOR<WorkCreateWithoutWorktypeInput, WorkUncheckedCreateWithoutWorktypeInput> | WorkCreateWithoutWorktypeInput[] | WorkUncheckedCreateWithoutWorktypeInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutWorktypeInput | WorkCreateOrConnectWithoutWorktypeInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutWorktypeInput | WorkUpsertWithWhereUniqueWithoutWorktypeInput[]
    createMany?: WorkCreateManyWorktypeInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutWorktypeInput | WorkUpdateWithWhereUniqueWithoutWorktypeInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutWorktypeInput | WorkUpdateManyWithWhereWithoutWorktypeInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
  }

  export type WorkUncheckedUpdateManyWithoutWorktypeNestedInput = {
    create?: XOR<WorkCreateWithoutWorktypeInput, WorkUncheckedCreateWithoutWorktypeInput> | WorkCreateWithoutWorktypeInput[] | WorkUncheckedCreateWithoutWorktypeInput[]
    connectOrCreate?: WorkCreateOrConnectWithoutWorktypeInput | WorkCreateOrConnectWithoutWorktypeInput[]
    upsert?: WorkUpsertWithWhereUniqueWithoutWorktypeInput | WorkUpsertWithWhereUniqueWithoutWorktypeInput[]
    createMany?: WorkCreateManyWorktypeInputEnvelope
    set?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    disconnect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    delete?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    connect?: WorkWhereUniqueInput | WorkWhereUniqueInput[]
    update?: WorkUpdateWithWhereUniqueWithoutWorktypeInput | WorkUpdateWithWhereUniqueWithoutWorktypeInput[]
    updateMany?: WorkUpdateManyWithWhereWithoutWorktypeInput | WorkUpdateManyWithWhereWithoutWorktypeInput[]
    deleteMany?: WorkScalarWhereInput | WorkScalarWhereInput[]
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

  export type VehicleCreateWithoutUserInput = {
    id?: string
    plate: string
    model: string
    brand: string
    km: number
    preventives?: PreventiveCreateNestedManyWithoutVehicleInput
  }

  export type VehicleUncheckedCreateWithoutUserInput = {
    id?: string
    plate: string
    model: string
    brand: string
    km: number
    preventives?: PreventiveUncheckedCreateNestedManyWithoutVehicleInput
  }

  export type VehicleCreateOrConnectWithoutUserInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
  }

  export type VehicleCreateManyUserInputEnvelope = {
    data: VehicleCreateManyUserInput | VehicleCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type VehicleUpsertWithWhereUniqueWithoutUserInput = {
    where: VehicleWhereUniqueInput
    update: XOR<VehicleUpdateWithoutUserInput, VehicleUncheckedUpdateWithoutUserInput>
    create: XOR<VehicleCreateWithoutUserInput, VehicleUncheckedCreateWithoutUserInput>
  }

  export type VehicleUpdateWithWhereUniqueWithoutUserInput = {
    where: VehicleWhereUniqueInput
    data: XOR<VehicleUpdateWithoutUserInput, VehicleUncheckedUpdateWithoutUserInput>
  }

  export type VehicleUpdateManyWithWhereWithoutUserInput = {
    where: VehicleScalarWhereInput
    data: XOR<VehicleUpdateManyMutationInput, VehicleUncheckedUpdateManyWithoutUserInput>
  }

  export type VehicleScalarWhereInput = {
    AND?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    OR?: VehicleScalarWhereInput[]
    NOT?: VehicleScalarWhereInput | VehicleScalarWhereInput[]
    id?: StringFilter<"Vehicle"> | string
    userId?: StringFilter<"Vehicle"> | string
    plate?: StringFilter<"Vehicle"> | string
    model?: StringFilter<"Vehicle"> | string
    brand?: StringFilter<"Vehicle"> | string
    km?: IntFilter<"Vehicle"> | number
  }

  export type PreventiveCreateWithoutVehicleInput = {
    id?: string
    description: string
    cost: number
    discount: number
    e_end_date: Date | string
    additional_notes: string
    type: string
    updated_at?: Date | string
    created_at?: Date | string
    work?: WorkCreateNestedOneWithoutPreventiveInput
  }

  export type PreventiveUncheckedCreateWithoutVehicleInput = {
    id?: string
    description: string
    cost: number
    discount: number
    e_end_date: Date | string
    additional_notes: string
    type: string
    updated_at?: Date | string
    created_at?: Date | string
    work?: WorkUncheckedCreateNestedOneWithoutPreventiveInput
  }

  export type PreventiveCreateOrConnectWithoutVehicleInput = {
    where: PreventiveWhereUniqueInput
    create: XOR<PreventiveCreateWithoutVehicleInput, PreventiveUncheckedCreateWithoutVehicleInput>
  }

  export type PreventiveCreateManyVehicleInputEnvelope = {
    data: PreventiveCreateManyVehicleInput | PreventiveCreateManyVehicleInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutVehiclesInput = {
    id?: string
    email: string
    phone: string
    username: string
    password: string
    license_code: string
    license_expiration_date: Date | string
    first_name: string
    last_name: string
    municipality_residence: string
    fiscal_code: string
    status: string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type UserUncheckedCreateWithoutVehiclesInput = {
    id?: string
    email: string
    phone: string
    username: string
    password: string
    license_code: string
    license_expiration_date: Date | string
    first_name: string
    last_name: string
    municipality_residence: string
    fiscal_code: string
    status: string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type UserCreateOrConnectWithoutVehiclesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
  }

  export type PreventiveUpsertWithWhereUniqueWithoutVehicleInput = {
    where: PreventiveWhereUniqueInput
    update: XOR<PreventiveUpdateWithoutVehicleInput, PreventiveUncheckedUpdateWithoutVehicleInput>
    create: XOR<PreventiveCreateWithoutVehicleInput, PreventiveUncheckedCreateWithoutVehicleInput>
  }

  export type PreventiveUpdateWithWhereUniqueWithoutVehicleInput = {
    where: PreventiveWhereUniqueInput
    data: XOR<PreventiveUpdateWithoutVehicleInput, PreventiveUncheckedUpdateWithoutVehicleInput>
  }

  export type PreventiveUpdateManyWithWhereWithoutVehicleInput = {
    where: PreventiveScalarWhereInput
    data: XOR<PreventiveUpdateManyMutationInput, PreventiveUncheckedUpdateManyWithoutVehicleInput>
  }

  export type PreventiveScalarWhereInput = {
    AND?: PreventiveScalarWhereInput | PreventiveScalarWhereInput[]
    OR?: PreventiveScalarWhereInput[]
    NOT?: PreventiveScalarWhereInput | PreventiveScalarWhereInput[]
    id?: StringFilter<"Preventive"> | string
    idVehicle?: StringFilter<"Preventive"> | string
    description?: StringFilter<"Preventive"> | string
    cost?: IntFilter<"Preventive"> | number
    discount?: IntFilter<"Preventive"> | number
    e_end_date?: DateTimeFilter<"Preventive"> | Date | string
    additional_notes?: StringFilter<"Preventive"> | string
    type?: StringFilter<"Preventive"> | string
    updated_at?: DateTimeFilter<"Preventive"> | Date | string
    created_at?: DateTimeFilter<"Preventive"> | Date | string
  }

  export type UserUpsertWithoutVehiclesInput = {
    update: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
    create: XOR<UserCreateWithoutVehiclesInput, UserUncheckedCreateWithoutVehiclesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutVehiclesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutVehiclesInput, UserUncheckedUpdateWithoutVehiclesInput>
  }

  export type UserUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    license_code?: StringFieldUpdateOperationsInput | string
    license_expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    municipality_residence?: StringFieldUpdateOperationsInput | string
    fiscal_code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutVehiclesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    license_code?: StringFieldUpdateOperationsInput | string
    license_expiration_date?: DateTimeFieldUpdateOperationsInput | Date | string
    first_name?: StringFieldUpdateOperationsInput | string
    last_name?: StringFieldUpdateOperationsInput | string
    municipality_residence?: StringFieldUpdateOperationsInput | string
    fiscal_code?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VehicleCreateWithoutPreventivesInput = {
    id?: string
    plate: string
    model: string
    brand: string
    km: number
    user: UserCreateNestedOneWithoutVehiclesInput
  }

  export type VehicleUncheckedCreateWithoutPreventivesInput = {
    id?: string
    userId: string
    plate: string
    model: string
    brand: string
    km: number
  }

  export type VehicleCreateOrConnectWithoutPreventivesInput = {
    where: VehicleWhereUniqueInput
    create: XOR<VehicleCreateWithoutPreventivesInput, VehicleUncheckedCreateWithoutPreventivesInput>
  }

  export type WorkCreateWithoutPreventiveInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    status: string
    additional_notes: string
    updated_at?: Date | string
    created_at?: Date | string
    worktype?: WorktypeCreateNestedOneWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutPreventiveInput = {
    id?: string
    idWorkType?: string | null
    start_date: Date | string
    end_date: Date | string
    status: string
    additional_notes: string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type WorkCreateOrConnectWithoutPreventiveInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutPreventiveInput, WorkUncheckedCreateWithoutPreventiveInput>
  }

  export type VehicleUpsertWithoutPreventivesInput = {
    update: XOR<VehicleUpdateWithoutPreventivesInput, VehicleUncheckedUpdateWithoutPreventivesInput>
    create: XOR<VehicleCreateWithoutPreventivesInput, VehicleUncheckedCreateWithoutPreventivesInput>
    where?: VehicleWhereInput
  }

  export type VehicleUpdateToOneWithWhereWithoutPreventivesInput = {
    where?: VehicleWhereInput
    data: XOR<VehicleUpdateWithoutPreventivesInput, VehicleUncheckedUpdateWithoutPreventivesInput>
  }

  export type VehicleUpdateWithoutPreventivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutVehiclesNestedInput
  }

  export type VehicleUncheckedUpdateWithoutPreventivesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
  }

  export type WorkUpsertWithoutPreventiveInput = {
    update: XOR<WorkUpdateWithoutPreventiveInput, WorkUncheckedUpdateWithoutPreventiveInput>
    create: XOR<WorkCreateWithoutPreventiveInput, WorkUncheckedCreateWithoutPreventiveInput>
    where?: WorkWhereInput
  }

  export type WorkUpdateToOneWithWhereWithoutPreventiveInput = {
    where?: WorkWhereInput
    data: XOR<WorkUpdateWithoutPreventiveInput, WorkUncheckedUpdateWithoutPreventiveInput>
  }

  export type WorkUpdateWithoutPreventiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    worktype?: WorktypeUpdateOneWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutPreventiveInput = {
    id?: StringFieldUpdateOperationsInput | string
    idWorkType?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PreventiveCreateWithoutWorkInput = {
    id?: string
    description: string
    cost: number
    discount: number
    e_end_date: Date | string
    additional_notes: string
    type: string
    updated_at?: Date | string
    created_at?: Date | string
    vehicle: VehicleCreateNestedOneWithoutPreventivesInput
  }

  export type PreventiveUncheckedCreateWithoutWorkInput = {
    id?: string
    idVehicle: string
    description: string
    cost: number
    discount: number
    e_end_date: Date | string
    additional_notes: string
    type: string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type PreventiveCreateOrConnectWithoutWorkInput = {
    where: PreventiveWhereUniqueInput
    create: XOR<PreventiveCreateWithoutWorkInput, PreventiveUncheckedCreateWithoutWorkInput>
  }

  export type WorktypeCreateWithoutWorkInput = {
    id?: string
    estimate_cost: number
    standard_duration: number
    name: string
    description: string
  }

  export type WorktypeUncheckedCreateWithoutWorkInput = {
    id?: string
    estimate_cost: number
    standard_duration: number
    name: string
    description: string
  }

  export type WorktypeCreateOrConnectWithoutWorkInput = {
    where: WorktypeWhereUniqueInput
    create: XOR<WorktypeCreateWithoutWorkInput, WorktypeUncheckedCreateWithoutWorkInput>
  }

  export type PreventiveUpsertWithoutWorkInput = {
    update: XOR<PreventiveUpdateWithoutWorkInput, PreventiveUncheckedUpdateWithoutWorkInput>
    create: XOR<PreventiveCreateWithoutWorkInput, PreventiveUncheckedCreateWithoutWorkInput>
    where?: PreventiveWhereInput
  }

  export type PreventiveUpdateToOneWithWhereWithoutWorkInput = {
    where?: PreventiveWhereInput
    data: XOR<PreventiveUpdateWithoutWorkInput, PreventiveUncheckedUpdateWithoutWorkInput>
  }

  export type PreventiveUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    e_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    vehicle?: VehicleUpdateOneRequiredWithoutPreventivesNestedInput
  }

  export type PreventiveUncheckedUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    idVehicle?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    e_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorktypeUpsertWithoutWorkInput = {
    update: XOR<WorktypeUpdateWithoutWorkInput, WorktypeUncheckedUpdateWithoutWorkInput>
    create: XOR<WorktypeCreateWithoutWorkInput, WorktypeUncheckedCreateWithoutWorkInput>
    where?: WorktypeWhereInput
  }

  export type WorktypeUpdateToOneWithWhereWithoutWorkInput = {
    where?: WorktypeWhereInput
    data: XOR<WorktypeUpdateWithoutWorkInput, WorktypeUncheckedUpdateWithoutWorkInput>
  }

  export type WorktypeUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    estimate_cost?: IntFieldUpdateOperationsInput | number
    standard_duration?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WorktypeUncheckedUpdateWithoutWorkInput = {
    id?: StringFieldUpdateOperationsInput | string
    estimate_cost?: IntFieldUpdateOperationsInput | number
    standard_duration?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type WorkCreateWithoutWorktypeInput = {
    id?: string
    start_date: Date | string
    end_date: Date | string
    status: string
    additional_notes: string
    updated_at?: Date | string
    created_at?: Date | string
    preventive: PreventiveCreateNestedOneWithoutWorkInput
  }

  export type WorkUncheckedCreateWithoutWorktypeInput = {
    id?: string
    idPreventive: string
    start_date: Date | string
    end_date: Date | string
    status: string
    additional_notes: string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type WorkCreateOrConnectWithoutWorktypeInput = {
    where: WorkWhereUniqueInput
    create: XOR<WorkCreateWithoutWorktypeInput, WorkUncheckedCreateWithoutWorktypeInput>
  }

  export type WorkCreateManyWorktypeInputEnvelope = {
    data: WorkCreateManyWorktypeInput | WorkCreateManyWorktypeInput[]
    skipDuplicates?: boolean
  }

  export type WorkUpsertWithWhereUniqueWithoutWorktypeInput = {
    where: WorkWhereUniqueInput
    update: XOR<WorkUpdateWithoutWorktypeInput, WorkUncheckedUpdateWithoutWorktypeInput>
    create: XOR<WorkCreateWithoutWorktypeInput, WorkUncheckedCreateWithoutWorktypeInput>
  }

  export type WorkUpdateWithWhereUniqueWithoutWorktypeInput = {
    where: WorkWhereUniqueInput
    data: XOR<WorkUpdateWithoutWorktypeInput, WorkUncheckedUpdateWithoutWorktypeInput>
  }

  export type WorkUpdateManyWithWhereWithoutWorktypeInput = {
    where: WorkScalarWhereInput
    data: XOR<WorkUpdateManyMutationInput, WorkUncheckedUpdateManyWithoutWorktypeInput>
  }

  export type WorkScalarWhereInput = {
    AND?: WorkScalarWhereInput | WorkScalarWhereInput[]
    OR?: WorkScalarWhereInput[]
    NOT?: WorkScalarWhereInput | WorkScalarWhereInput[]
    id?: StringFilter<"Work"> | string
    idPreventive?: StringFilter<"Work"> | string
    idWorkType?: StringNullableFilter<"Work"> | string | null
    start_date?: DateTimeFilter<"Work"> | Date | string
    end_date?: DateTimeFilter<"Work"> | Date | string
    status?: StringFilter<"Work"> | string
    additional_notes?: StringFilter<"Work"> | string
    updated_at?: DateTimeFilter<"Work"> | Date | string
    created_at?: DateTimeFilter<"Work"> | Date | string
  }

  export type VehicleCreateManyUserInput = {
    id?: string
    plate: string
    model: string
    brand: string
    km: number
  }

  export type VehicleUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    preventives?: PreventiveUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
    preventives?: PreventiveUncheckedUpdateManyWithoutVehicleNestedInput
  }

  export type VehicleUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    plate?: StringFieldUpdateOperationsInput | string
    model?: StringFieldUpdateOperationsInput | string
    brand?: StringFieldUpdateOperationsInput | string
    km?: IntFieldUpdateOperationsInput | number
  }

  export type PreventiveCreateManyVehicleInput = {
    id?: string
    description: string
    cost: number
    discount: number
    e_end_date: Date | string
    additional_notes: string
    type: string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type PreventiveUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    e_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUpdateOneWithoutPreventiveNestedInput
  }

  export type PreventiveUncheckedUpdateWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    e_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    work?: WorkUncheckedUpdateOneWithoutPreventiveNestedInput
  }

  export type PreventiveUncheckedUpdateManyWithoutVehicleInput = {
    id?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    cost?: IntFieldUpdateOperationsInput | number
    discount?: IntFieldUpdateOperationsInput | number
    e_end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkCreateManyWorktypeInput = {
    id?: string
    idPreventive: string
    start_date: Date | string
    end_date: Date | string
    status: string
    additional_notes: string
    updated_at?: Date | string
    created_at?: Date | string
  }

  export type WorkUpdateWithoutWorktypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    preventive?: PreventiveUpdateOneRequiredWithoutWorkNestedInput
  }

  export type WorkUncheckedUpdateWithoutWorktypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    idPreventive?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkUncheckedUpdateManyWithoutWorktypeInput = {
    id?: StringFieldUpdateOperationsInput | string
    idPreventive?: StringFieldUpdateOperationsInput | string
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: StringFieldUpdateOperationsInput | string
    additional_notes?: StringFieldUpdateOperationsInput | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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