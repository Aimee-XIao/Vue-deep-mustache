/*
* Scanner 扫描器类
*/
export default class Scanner {
  constructor(template) {
    // 将模板写入类中
    this.template = template
    // 指针
    this.pos = 0
    // 尾巴 初始为模板字符串,包括指针指向的一位
    this.tail = template
  }
  // 路过指定内容，没有返回值
  scan(tag) {
    if(this.tail.indexOf(tag) == 0) {
      // tag 有多长，比如 {{ 长度时2，就让指针后移多少位
      this.pos += tag.length
      // 尾巴改变
      this.tail = this.template.substring(this.pos)
    }
  }
  // 让指针进行扫描，直到遇见指定内容结束，并且返回结束之前路过的文字
  scanUtil(stopTag) {
    // 记录执行本方法是pos的值
    const pos_backup = this.pos
    // 当尾巴的开头不是 stopTag 的时候，就说明还没有扫描到stopTag
    // && this.pos < this.template.length 防止找不到，那么寻找到最后页要停止
    while (this.tail.indexOf(stopTag) !=0 && !this.eos()) {
      this.pos ++
      // 改变尾巴为从当前指针这个字符开始，到最后的全部字符
      this.tail = this.template.substr(this.pos)
    }
    return this.template.substring(pos_backup, this.pos)
  }
  // 指针是否已经到头， 返回布尔值
  eos() {
    return this.pos >= this.template.length
  }
}
