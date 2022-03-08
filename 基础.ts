let a = 1;
let b : any = '1';
let c : unknown = '1';

/**
 * 知识点一：any 和 unknown区别 
 */
// unknown类型的变量，不能复制给其他变量，any可以
a = b;
// a = c; // 报错

/**
 * 知识点二：类型断言
 */
a = c as number;
a = <number>c
if(typeof c === 'number') {
  a = c;
}

/**
 * 知识点三： void和never
 */
function f1():void {
  // void表示空，函数可以没有返回值，也可以返回null、undefined
  // 在 "strictNullChecks": true时，返回null也会报错
  // return null;
  return undefined;
}

function f2():never {
  // never表示没有返回值，不可以return任何值，常使用于throw Error的场景
  throw Error('');
}

/**
 * 知识点四：对象类型添加任意属性
 * [xx:string]:any 表示任意类型的属性
 */
let d : {name: string, [xx:string]:any};
d = {name:'张三', age:12, sex:'男'}

/**
 * 知识点五：限制函数结构
 */
let f3: (a: number, b: number) => number;
f3 = function(n1,n2) {
  return n1 + n2
}

/**
 * 知识点五：限制数组存储类型
 */
let e: string[]; // 数组中只能存字符串
let f: Array<string> // 同上

/**
 * 知识点六：元组 tuple
 * 元组是固定长度的数组
 */
let g: [string, string];
g = ['hello','hello']
// g = [123, 123] // 报错
// g = ['hello'] // 报错

/**
 * 知识点七：枚举
 */
enum Gender {
  man,
  woman
}

let h: {name: string, gender: Gender};
h = {name:'张三', gender: Gender.man}


/**
 * 知识点八： 类型别名
 */
type bieMing = 1 | 2 | 3 | 4 | 5 | 6;
// let i: 1 | 2 | 3 | 4 | 5 | 6;
// let j: 1 | 2 | 3 | 4 | 5 | 6;
let i: bieMing;
let j: bieMing;


// noImplicitThis
function fn(this: any) {
  return this;
}