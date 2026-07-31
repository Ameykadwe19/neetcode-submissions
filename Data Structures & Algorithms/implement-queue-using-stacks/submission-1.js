class MyQueue {
    constructor() {
        this.st1 = [];
        this.st2 = [];
    }

    /**
     * @param {number} x
     * @return {void}
     */
    push(x) {
        while (this.st1.length) {
            this.st2.push(this.st1.pop());
        }
        this.st1.push(x);
        while (this.st2.length) {
            this.st1.push(this.st2.pop());
        }
    }

    /**
     * @return {number}
     */
    pop() {
        return this.st1.pop();
    }

    /**
     * @return {number}
     */
    peek() {
        return this.st1[this.st1.length - 1];
    }

    /**
     * @return {boolean}
     */
    empty() {
        return this.st1.length === 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
