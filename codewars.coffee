vowelIndices = (n) ->
  vowels = ['a', 'e', 'i', 'o', 'u']
  ret = []
  for ch, i in n
    if ch in vowels
      ret.push i+1
  return ret

listEqual = (a, b) ->
  a.length is b.length and a.every (elem, i) -> elem is b[i]

