module.exports = { 
	maxset: function(A) {
        if (!A || A.length === 0) {
            return [];
        }
        var maxIdx = 0;
        var maxSum = 0;
        var maxLen = 0;
        var curId = -1;
        var curLen = 0; 
        var curSum = 0;
        
        for (var i = 0; i < A.length; i++) {
            if (A[i] < 0) {
                if (curSum > maxSum || (curSum === maxSum && curLen > maxLen)) {
                    maxSum = curSum; 
                    maxIdx = curId;
                    maxLen = curLen;
                }
                curLen = 0;
                curSum = 0;
                curId = -1;
            } else {
                curSum += A[i];
                curLen += 1;
                curId = curId === -1 ? i : curId;
            }
        }
        if (curSum > maxSum || (curSum === maxSum && curLen > maxLen)) {
            maxSum = curSum; 
            maxIdx = curId;
            maxLen = curLen;
        }
        return A.slice(maxIdx, maxIdx + maxLen);
	},
};
