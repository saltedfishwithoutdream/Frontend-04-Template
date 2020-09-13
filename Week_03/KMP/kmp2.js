
/**
 * 
 * 基于有限自动机实现的kmp算法
 * 
 */
function kmp2 (txt, pattern) {
    let m= pattern.length
    let n = txt.length
    let i, j
    const dfa = createDfa(pattern, txt)
    for (i = 0, j = 0; i < n && j < m; i++) {
        if (pattern[j] === txt[i]) {
            j++
        } else {
            j = dfa[txt[i]][j]
        }
    }

    if (j === m) {
        return i - j  // 匹配到的位置
    } else {
        return -1 // 没有匹配到返回-1
    }
}

// 计算字符集，因为计算字符集需要遍历整个文本串，所以这一步一般不需要，可以直接指定字符集
function getChars (txt, pattern) {
    let chars = new Set()
    for (let i = 0; i < txt.length; i++) {
        chars.add(txt[i])
    }
    for (let j = 0; j < pattern.length; j++) {
        chars.add(pattern[j])
    }
    chars = new Array(...chars).sort().join('')
    return chars
}


/**
 * 
 * @param {String} pattern 模式串
 * @param {String} txt 文本串
 * @desc 创建dfa
 *      0   1   2   3   4   5    状态（输入第j个字符前的状态）
 *      A   B   A   B   A   C    pattern
 * A    1   1   3   1   5   1    (状态转换表，在当前状态下输入字符集中的每个字符得到的不同状态，
 * B    0   2   0   4   0   4     前提是前j-1个字符输入的都匹配了  
 * C    0   0   0   0   0   6    )
 * 
 * dfa表的每一项代表的含义就比较清晰了，如dfa.A[3] = 1表示的是在状态3下，输入的下一个字符是A会转移到状态1
 */
function createDfa (pattern, txt) {
    let chars = getChars(pattern, txt) // 字符集（模式串和文本串用到的所有字符的集合）
    let pLength = pattern.length
    let cLength = chars.length
    let dfa = {}

    for (let i = 0; i < cLength; i++) {
        dfa[chars[i]] = []
        for (let j = 0; j < pLength; j++) {
            dfa[chars[i]][j] = 0   // 初始化dfa表格
        }
    }

    dfa[pattern[0]][0] = 1 // 表示在0状态，输入A字符会将状态变为1

    for (let x = 0, j = 1; j < pLength; j++) {
        for (let c = 0; c < cLength; c++) {
            /**
             * 如果第j（从0开始计数）个字符匹配失败，应该回退到x状态
             * 如第3个字符匹配失败，就会回退到1状态，所以状态表的第4列就是1，2，0
             * */ 
            dfa[chars[c]][j] = dfa[chars[c]][x]
        }
        /**
         * 如果第j个字符匹配到了，状态转移到j+1
         * 这是对前面匹配失败情况的一个补充，还是以第3个字符为例
         * 前面说状态会变成1，2，0，但是如果遇到正确的字符B，状态会变成4
         * 所以更新状态为1，4，0
         */
        dfa[pattern[j]][j] = j + 1 
        /**
         * x是1到j能到达的最终状态，为下一次循环做准备
         * 为什么是从1开始，因为这里认为下一次匹配失败，所以至少要右移一位，所以跳过第0个字符
         * 如本次j = 2, x = 0,
         * 1到j的字符串为BA，BA能到达的状态时1，
         * 所以下次循环j = 3时，需要先复制状态1下的转移，与上面互应
         * 然后更新匹配成功后的状态转移值
         * 
         * 既然x是1到j的能到达的状态，而我们有了前面的状态表，当j自增时，我们就能通过1到j-1的状态推断出新的x的值
         * 即x = dfa[pattern[j]][x] 新x表示第1到j字符能到达的状态，旧x表示第1到j-1字符能到达的状态
         */
        x = dfa[pattern[j]][x]
    }

    return dfa
}
