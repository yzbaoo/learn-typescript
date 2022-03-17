(() => {

  class Animal {
    name: string;
    constructor(name: string) {
      this.name = name;
    }

    sayHello() {
      console.log(this.name + '在叫！');
    }
  }

  class Dog extends Animal {
    // 【知识点一】当想要给子类增加自定义属性age时，势必要通过constructor参数赋值，如下：
    // age: number
    // constructor(age: number) {
    //   this.age = age;
    // }

    // 上边代码智能编辑器会有提示：派生类的构造函数必须调用super，这是为什么呢？
    // 答： 其实是因为上边的写法会覆盖父类的constructor，所以需要手动的调用一下父类的constructor。
    age: number
    constructor( name: string, age: number) {
      super(name);
      this.age = age;
    }

    sayHello() {
      // 【知识点二】super：当前类的父类
      super.sayHello();
    }
  }

  const D = new Dog('小美', 3);
  console.log(D.sayHello());












})()