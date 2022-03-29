/**
 * 以下两个例子，表示类型系统也有不可靠的时候，11行和26行得到的a并不是number类型
 */
(() => {
  // 举例一：
  async function fn1(bar: { baz: number | string }) {
    if (typeof bar.baz === 'number') {
        await new Promise(cb => setTimeout(cb, 0));
        // 这时bar.baz实际上并不能被推断为number
        const a: number = bar.baz;
        console.log(a);
    }
  }
  
  // const bar: { baz: number | string } = { baz: 1 };
  // setTimeout(() => bar.baz = 'asdf');
  // fn1(bar);

  // 举例二：
  async function fn2(bar: { baz: number | string }) {
    if (typeof bar.baz === 'number') {
        // await new Promise(cb => setTimeout(cb, 0));
        sideEffect();
        // 这时bar.baz实际上并不能被推断为number
        const a: number = bar.baz;
        console.log(a);
    }
  }

  const bar: { baz: number | string } = { baz: 1 };
  function sideEffect() {
      bar.baz = 'asdf';
  }
  fn2(bar);
})()
