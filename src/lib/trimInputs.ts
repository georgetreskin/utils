import reduce from 'lodash/reduce';

type Obj = {
  [s: string]: any;
};

export default function trimInputs<T extends Obj>(obj: T): T {
  return reduce(Object.entries(obj), (acc, [key, value]) => {
    acc[key] = (typeof value === 'string') ? value.trim() : value;
    return acc;
  }, {} as T);
}
