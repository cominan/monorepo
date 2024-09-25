import resources from './@type/resource';

type IsNested<T> = T extends string ? false : true;

type PathImpl<K extends string, V> = V extends string
  ? `${K}`
  : `${K}:${Path<V>}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type TupleKeys<T extends Readonly<any>> = Exclude<keyof T, keyof any[]>;

type Path<T> =
  T extends Readonly<infer V>
    ? IsNested<T> extends true
      ? {
          [K in TupleKeys<T>]: PathImpl<K & string, T[K]>;
        }[TupleKeys<T>]
      : PathImpl<string, V>
    : never;

type ResourceType = typeof resources;

export type I18nKeys = Path<ResourceType[keyof ResourceType]>;
