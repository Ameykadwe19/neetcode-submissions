class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        let map = {
            ")": "(",
            "}": "{",
            "]": "[",
        };

        for (let char of s) {
            if (char === "(" || char === "{" || char === "[") {
                stack.push(char);
            } else {
                if (stack.length === 0) {
                    return false;
                } else {
                    let top = stack[stack.length - 1];
                    if(top === map[char]){
                        stack.pop()
                    }else{
                        return false
                    }
                }
            }
            
        }
        return stack.length === 0
    }
}
