function rotateImage(a) {
    var n = a.length;
    console.log(a)
    for (var i = 0; i < Math.floor(n/2); i++){
        for (var j = 0; j < Math.ceil(n/2); j++){
            var tmp = a[i][j];
            // a[i][j] = a[j][n - i - 1];
            // a[j][n - i - 1] = a[n - i - 1][n - j - 1];
            // a[n - i - 1][n - j - 1] = a[n - j - 1][i];
            // a[n - j - 1][i] = tmp;
            a[i][j] = a[n - j - 1][i];
            a[n - j - 1][i] = a[n - i - 1][n - j - 1];
            a[n - i - 1][n - j - 1] = a[j][n - i - 1];
            a[j][n - i - 1] = tmp;
            console.log(a)
        }
    }
    return a;
}
