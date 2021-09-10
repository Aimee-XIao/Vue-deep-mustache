import Scanner from './Scanner'
import nestTokens from "./nestTokens";
/*
* 将模板字符串变为 tokens 数组
*/
export default function parseTemplateToTokens (template) {
  var tokens = []
  // 创建扫描器
  var scanner = new Scanner(template)
  let words
  // 让扫描器工作
  while (!scanner.eos()) {
    // 收集开始标记出现之前的文字
    words = scanner.scanUtil('{{')
    if(words != ''){

      // 去空格
      let isSpace = false
      // 空白字符串
      var _words = ''
      for (let i = 0; i < words.length; i++){
        if(words[i] == '<'){
          isSpace = true
        } else if(words[i] == '>') {
          isSpace = false
        }
        // 如果这样不是空格，拼接上
        if(!/\s/.test(words[i])) {
          _words += words[i]
        } else {
          // 如果时空格，只有当它在标签内的时候，才拼接上
          if (isSpace) {
            _words += ' '
          }
        }
      }

      // 存起来
      tokens.push(['text',_words])
    }
    // 过 双括号 {{
    scanner.scan('{{')
    // 收集开始标记出现之前的文字
    words = scanner.scanUtil('}}')
    if(words != '') {
      // 这个 words 就是 {{}} 中间的东西。判断一下首字符
      if(words[0] == '#') {
        // 存起来，从下标为1的项开始存
        tokens.push(['#', words.substring(1)])
      } else if(words[0] == '/') {
        // 存起来，从下标为1的项开始存
        tokens.push(['/', words.substring(1)])
      } else {
        // 存起来
        tokens.push(['name',words])
      }
    }
    // 过 双括号 }}
    scanner.scan('}}')

  }

 // 返回折叠收集的tokens
  return nestTokens(tokens)
}
