// 针对浏览器
import parseTemplateToTokens from './parseTemplateToTokens'
import renderTemplate from "./renderTemplate";


// 全局提供 Self_templateEngine 对象
window.Self_templateEngine = {
  // 渲染方法
  render(template, data){
    // 调用 parseTemplateToTokens 函数，让模板字符串变为 tokens 数组
    var tokens =  parseTemplateToTokens(template)
    // 调用 renderTemplate 函数，让tokens数组变为dom字符串
    var domStr =  renderTemplate(tokens, data)
    return domStr

  // 单元测试 scanner
    // 实例化一个扫描器，构造函数提供一个参数， 这个参数就是模板字符串
    // 也就是说这个扫描器就是针对模板字符串服务工作的
    // var scanner = new Scanner(template)

    //  scanUtil
    // var words = scanner.scanUtil('{{')
    // console.log(scanner.pos)
    // console.log(words)

    // 测试 scan
    // scanner.scan('{{')
    // console.log(scanner.pos)
    // let word
    // // 当 指针 没有到头
    // while (!scanner.eos()) {
    //   word =  scanner.scanUtil('{{')
    //   console.log(word)
    //   scanner.scan('{{')
    //   word =  scanner.scanUtil('}}')
    //   console.log(word)
    //   scanner.scan('}}')
    //
    // }


  },

}
