/*
*  函数功能： 折叠tokens,将 # 与 / 之间的tokens整合起来，作为它的下标为3的项
*/
export default function nestTokens (tokens) {
  // 结果数组
  let nestedTokens = []
  // 栈结构 存放小的tokens, 栈顶（靠近端口的，最新进入的）的tokens数组是当前操作的这个tokens小数组
  let sections = []
  // 收集器 初始指向nesteedTokens结果数组，引用类型值，所以指向的是同一个数组
  // 收集器的指向会变化，当遇见 # 时，收集器会指向这个token的下标为2的新数组
  let collector = nestedTokens
  for(let i= 0; i < tokens.length; i++) {
    let token = tokens[i]
    switch (token[0]) {
      case '#':
        // 收集器中放入这个token
        collector.push(token)
        // 入栈
        sections.push(token)
        // 收集器的指向发生改变，指向token下标为2的新数组
        collector = token[2] = []
        break;
      case '/':
        // 出栈 sections.pop会弹出刚刚出栈的结果
        sections.pop()
        // 改变收集器为栈结构队尾那项的下标为2的数组
        collector = sections.length > 0 ? sections[sections.length - 1][2] : nestedTokens
        break;
      default:
        collector.push(token)
        break

    }
  }
  return nestedTokens
}
