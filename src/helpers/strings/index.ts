export function camelToSnake(str: string) {
  return str.replace(/([A-Z])/g, match => `_${match.toLowerCase()}`);
}

export function toSnakeCaseObject(object: { [key: string]: unknown }) {
  const entries = Object.entries(object);
  const newObject: { [key: string]: unknown } = {};
  entries.forEach(([key, value]) => {
    newObject[camelToSnake(key)] = value;
  });
  return newObject;
}
