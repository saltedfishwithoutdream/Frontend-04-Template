function kmp (source, pattern) {
    let i = 0
    let j = 0
    const table = next(pattern)
    while (i < source.length) {
        if (pattern[j] === source[i]) {
            i++
            j++
        } else {
            if (j > 0) {
                j = table[j]
            } else {
                i++
            }
        }
        if (j === pattern.length) {
            // return i - j  // 匹配到的位置
            return true
        }
    }
    // return -1 // 没有匹配到返回-1
    return false
}

function next (pattern) {
    let next = [-1]
    let k = -1
    let j = 0
    while (j < pattern.length - 1) {
        if (k === -1 || pattern[j] === pattern[k]) {
            ++j
            ++k
            next[j] = k
        } else {
            k = next[k]
        }
    }
    return next
}