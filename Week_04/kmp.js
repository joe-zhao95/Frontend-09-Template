function kmp(source, pattern) {
  // 计算跳转表格
  let table = new Array(pattern.length).fill(0);

  {
    let i = 1, // 开始位置
      j = 0; // 已重复次数
    while (i < pattern.length) {
      if (pattern[i] === pattern[j]) {
        ++j, ++i;
        table[i] = j;
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          ++i;
        }
      }
    }
  }

  console.log(table);

  // 匹配
  {
    let i = 0, // source
      j = 0; // pattern
    while (i < source.length) {
      if (pattern[j] === source[i]) {
        ++i, ++j;
      } else {
        if (j > 0) {
          j = table[j];
        } else {
          ++i;
        }
      }
      if (j === pattern.length) {
        return true;
      }
    }
    return false;
  }
}

console.log(kmp("bbc abcdab abcdabcdabde", "ababac"));

// a b c d a b c e
// 0 0 0 0 0 1 2 3

// a a b a a a c
// 0 0 1 0 1 2 2

// ababcabaa
