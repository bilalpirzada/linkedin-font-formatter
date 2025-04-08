// Conversion Functions
function convertToBold(inputText) {
  const boldChars = {
      'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵',
      'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽',
      'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅',
      'y': '𝘆', 'z': '𝘇',
      'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛',
      'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣',
      'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫',
      'Y': '𝗬', 'Z': '𝗭'
  };
  return inputText.split('').map(char => boldChars[char] || char).join('');
}

function convertToItalic(inputText) {
  const italicChars = {
      'a': '𝑎', 'b': '𝑏', 'c': '𝑐', 'd': '𝑑', 'e': '𝑒', 'f': '𝑓', 'g': '𝑔', 'h': 'ℎ',
      'i': '𝑖', 'j': '𝑗', 'k': '𝑘', 'l': '𝑙', 'm': '𝑚', 'n': '𝑛', 'o': '𝑜', 'p': '𝑝',
      'q': '𝑞', 'r': '𝑟', 's': '𝑠', 't': '𝑡', 'u': '𝑢', 'v': '𝑣', 'w': '𝑤', 'x': '𝑥',
      'y': '𝑦', 'z': '𝑧',
      'A': '𝑎', 'B': '𝑏', 'C': '𝑐', 'D': '𝑑', 'E': '𝑒', 'F': '𝑓', 'G': '𝑔', 'H': '𝑎',
      'I': '𝑖', 'J': '𝑗', 'K': '𝑘', 'L': '𝑙', 'M': '𝑚', 'N': '𝑛', 'O': '𝑂', 'P': '𝑝',
      'Q': '𝑞', 'R': '𝑟', 'S': '𝑠', 'T': '𝑡', 'U': '𝑢', 'V': '𝑣', 'W': '𝑤', 'X': '𝑥',
      'Y': '𝑦', 'Z': '𝑧'
  };
  return inputText.split('').map(char => italicChars[char] || char).join('');
}

function convertToBoldItalic(inputText) {
  return convertToBold(convertToItalic(inputText));
}

function convertToBoldFraktur(inputText) {
  const boldFrakturChars = {
      'a': '𝖆', 'b': '𝖇', 'c': '𝖈', 'd': '𝖉', 'e': '𝖊', 'f': '𝖋', 'g': '𝖌', 'h': '𝖍',
      'i': '𝖎', 'j': '𝖏', 'k': '𝖐', 'l': '𝖑', 'm': '𝖒', 'n': '𝖓', 'o': '𝖔', 'p': '𝖕',
      'q': '𝖖', 'r': '𝖗', 's': '𝖘', 't': '𝖙', 'u': '𝖚', 'v': '𝖛', 'w': '𝖜', 'x': '𝖝',
      'y': '𝖞', 'z': '𝖟',
      'A': '𝖠', 'B': '𝖡', 'C': '𝖢', 'D': '𝖣', 'E': '𝖤', 'F': '𝖥', 'G': '𝖦', 'H': '𝖧',
      'I': '𝖨', 'J': '𝖩', 'K': '𝖪', 'L': '𝖬', 'M': '𝖬', 'N': '𝖭', 'O': '𝖮', 'P': '𝖯',
      'Q': '𝖰', 'R': '𝖱', 'S': '𝖲', 'T': '𝖳', 'U': '𝖴', 'V': '𝖵', 'W': '𝖶', 'X': '𝖷',
      'Y': '𝖸', 'Z': '𝖹'
  };
  return inputText.split('').map(char => boldFrakturChars[char] || char).join('');
}

function convertToItalicFraktur(inputText) {
  return convertToItalic(convertToBoldFraktur(inputText));
}

function convertToBoldSans(inputText) {
  const boldSansChars = {
      'a': '𝗮', 'b': '𝗯', 'c': '𝗰', 'd': '𝗱', 'e': '𝗲', 'f': '𝗳', 'g': '𝗴', 'h': '𝗵',
      'i': '𝗶', 'j': '𝗷', 'k': '𝗸', 'l': '𝗹', 'm': '𝗺', 'n': '𝗻', 'o': '𝗼', 'p': '𝗽',
      'q': '𝗾', 'r': '𝗿', 's': '𝘀', 't': '𝘁', 'u': '𝘂', 'v': '𝘃', 'w': '𝘄', 'x': '𝘅',
      'y': '𝘆', 'z': '𝘇',
      'A': '𝗔', 'B': '𝗕', 'C': '𝗖', 'D': '𝗗', 'E': '𝗘', 'F': '𝗙', 'G': '𝗚', 'H': '𝗛',
      'I': '𝗜', 'J': '𝗝', 'K': '𝗞', 'L': '𝗟', 'M': '𝗠', 'N': '𝗡', 'O': '𝗢', 'P': '𝗣',
      'Q': '𝗤', 'R': '𝗥', 'S': '𝗦', 'T': '𝗧', 'U': '𝗨', 'V': '𝗩', 'W': '𝗪', 'X': '𝗫',
      'Y': '𝗬', 'Z': '𝗭'
  };
  return inputText.split('').map(char => boldSansChars[char] || char).join('');
}

// Convert Text Function
function convertText() {
  let inputText = document.getElementById('normalInput').value;
  document.getElementById('boldOutput').value = convertToBold(inputText);
  document.getElementById('italicOutput').value = convertToItalic(inputText);
  document.getElementById('boldItalicOutput').value = convertToBoldItalic(inputText);
  document.getElementById('boldFrakturOutput').value = convertToBoldFraktur(inputText);
  document.getElementById('italicFrakturOutput').value = convertToItalicFraktur(inputText);
  document.getElementById('boldSansOutput').value = convertToBoldSans(inputText);
}