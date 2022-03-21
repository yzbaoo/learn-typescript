/**
 * 【知识点一】泛型：在定义类或函数时，如果遇到类型不明确时，就可以使用泛型
 */
// 不推荐写法
function fn1(a: any): any{
  return a;
}
// 推荐写法： T就表示任意类型，定义时类型不确定，但可以明确的是，参数和返回值类型相同
function fn2<T>(a: T): T{
  return a;
}

fn2(10); // ts会在执行时推断
fn2<string>('123'); // 也可在明确类型的情况下手动指定

//   -------   ------- divider -------   -------

/**
 * 【知识点二】也可以同时使用多个泛型
 */
function fn3<T, K>(a: T, b: K): T{
  return a;
}
fn3(123, '123');

//   -------   ------- divider -------   -------

/**
 * 【知识点三】可以指定泛型的范围
 */
interface MyInter {
  length: number,
}
// T的类型是MyInter接口的子集
function fn4<T extends MyInter>(a: T): number {
  return a.length;
}

fn4('123'); // 通过编译：字符串有length属性
fn4({length: 123}); // 通过编译：自定义有length属性的对象
fn4(123); // 未通过编译：数字没有length属性