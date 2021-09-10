/*
函数功能： 让 tokens 数组变为dom 字符串
# 标记的tokens,需要 递归 处理它的下标为2的小数组
*/
import lookup from './lookup'
/*
* 函数功能 处理数组
* 这个函数接收的参数是 token, 不是 tokens
* token 就是一个简单的 ['#',arr,[]]
* 函数要递归调用 renderTemplate， 调用次数由 data 决定
*
* 比如data的形式是
*  {
    arr:[
      { name: '王',hobbies: ['唱歌', '跳舞']},
      { name: '杨', hobbies: ['篮球'] },
      {name: '刘', hobbies: ['羽毛球', '打游戏']}
    ]
  }
* 那么 parseArray 函数需要递归调用 renderTemplate 函数 3次，因为数组长度为3
* */
function parseArray(token, data) {
  // 得到整体数据data中，这个数组要使用的大部分
  var v = lookup(data, token[1])
  // 结果字符串
  var resultStr = ''

  // 遍历数组v, 此模板引擎中 v 一定是数组
  // 注意： 此处是遍历数据，而不是遍历 tokens，数组中的数据有几条，就要遍历几条
  for(let i=0;i<v.length;i++) {
    // 这里要补一个’.‘属性
    resultStr += renderTemplate(token[2], {
      ...v[i],
      '.': v[i]
    })
  }
  return resultStr
}

export default function renderTemplate(tokens, data) {
  // 遍历 tokens
  // 结果字符串
  let result= ''
  for(let i =0; i< tokens.length; i++) {
    let token = tokens[i]
    if(token[0] == 'text') {
        result += token[1]
    } else if(token[0] == 'name') {
       result += lookup(data, token[1])
    } else if(token[0] == '#') {
      result += parseArray(token, data)
    }
  }
  return result
}
