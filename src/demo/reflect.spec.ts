/**
 * Reflect.apply(target, thisArg, args)
 * Reflect.construct(target, args)
 * Reflect.get(target, name, receiver)
 * Reflect.set(target, name, value, receiver)
 * Reflect.defineProperty(target, name, desc)
 * Reflect.deleteProperty(target, name)
 * Reflect.has(target, name)
 * Reflect.ownKeys(target)
 * Reflect.isExtensible(target)
 * Reflect.preventExtensions(target)
 * Reflect.getOwnPropertyDescriptor(target, name)
 * Reflect.getPrototypeOf(target)
 * Reflect.setPrototypeOf(target, prototype)
 */
import { Greeting } from './reflect';

describe('Reflect Api', () => {
  test('Reflect.get(target, name, receiver)', async () => {
    const myObject = {
      foo: 1,
      bar: 2,
      get baz() {
        return this.foo + this.bar;
      },
    };
    const myReceiverObject = {
      foo: 4,
      bar: 4,
    };
    expect(Reflect.get(myObject, 'foo')).toEqual(1);
    expect(Reflect.get(myObject, 'bar')).toEqual(2);
    expect(Reflect.get(myObject, 'baz')).toEqual(3);
    expect(Reflect.get(myObject, 'baz', myReceiverObject)).toEqual(8);
  });

  test('Reflect.set(target, name, value, receiver) ', async () => {
    const myObject = {
      foo: 1,
      set bar(value: number) {
        this.foo = value;
      },
    };
    expect(myObject.foo).toEqual(1);
    Reflect.set(myObject, 'foo', 2);
    expect(myObject.foo).toEqual(2);
    Reflect.set(myObject, 'bar', 3);
    expect(myObject.foo).toEqual(3);
  });

  test('Reflect.has(obj, name)', async () => {
    const myObject = {
      foo: 1,
    };
    expect('foo' in myObject).toEqual(true);
    expect(Reflect.has(myObject, 'foo')).toEqual(true);
  });

  test('Reflect.deleteProperty(obj, name) ', async () => {
    const myObj = { foo: 'bar' };
    const myObj2 = { foo: 'bar' };
    // @ts-ignore
    delete myObj.foo;
    expect(myObj.foo).toEqual(undefined);
    Reflect.deleteProperty(myObj2, 'foo');
    expect(myObj2.foo).toEqual(undefined);
  });

  test('Reflect.construct(target, args)', async () => {
    const instance1 = new Greeting('张三');
    const instance2 = Reflect.construct(Greeting, ['张三']);
    expect(instance1.name).toEqual('张三');
    expect(instance2.name).toEqual('张三');
  });

  test('Reflect.getPrototypeOf(obj) ', async () => {
    const instance = new Greeting('张三');
    console.log(Object.getPrototypeOf(instance));
    console.log(Reflect.getPrototypeOf(instance));
    console.log(Greeting.prototype);
    expect(Object.getPrototypeOf(instance) === Greeting.prototype).toEqual(true);
    expect(Reflect.getPrototypeOf(instance) === Greeting.prototype).toEqual(true);
  });

  test('Reflect.setPrototypeOf(obj, newProto) ', async () => {});

  test('Reflect.apply(func, thisArg, args)', async () => {});

  test('Reflect.defineProperty(target, propertyKey, attributes) ', async () => {});

  test('Reflect.getOwnPropertyDescriptor(target, propertyKey)  ', async () => {});

  test('Reflect.isExtensible (target)', async () => {});

  test('Reflect.preventExtensions(target)', async () => {});

  test('Reflect.ownKeys (target) ', async () => {});
});
