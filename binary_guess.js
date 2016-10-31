/**
 * Created by web on 10/31/16.
 */
n1=readline(),n2=readline();o="";
for(var i = 0;i<n2.length; i++){
    o+= n1[i] == 1 && n2[i] == n1[i] ? 1 : 0;
}
print(o);

