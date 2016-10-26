s=readline();
s.match(/[)]/g).length==s.match(/[(]/g).length?print(true):print(false);