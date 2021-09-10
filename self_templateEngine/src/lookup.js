// const obj= {
//   a:{
//     b:{
//       c: 100
//     }
//   }
// }
// // js不支持 obj[a.b.c] underfined
// obj.a.b.b = 100

/*
* 函数功能：可以在dataObj对象中，寻找用连续点符号的keyName属性
* 比如， dataObj是
  dataObj = {
    a:{
       b: {
          c: 100
         }
     }
  }
* lookup(dataObj,'a.b.c')的结果是100
*/
export default function lookup (dataObj, keyName) {
  if(keyName.indexOf('.') != -1 && keyName != '.'){
    var keys = keyName.split('.')
    var temp = dataObj
    for (let i =0;i< keys.length; i++) {
      temp = temp[keys[i]]
    }
    return temp
  }
  return dataObj[keyName]
}
