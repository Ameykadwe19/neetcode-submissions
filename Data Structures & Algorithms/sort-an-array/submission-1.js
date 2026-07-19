class Solution {
    /**
     * @param {number[]}
     * @return {number[]}
     */
    sortArray(nums) {
        this.mergeSort(nums, 0, nums.length - 1);
        return nums;
    }

    mergeSort(nums, start, end) {
        if (start >= end) return;

        let mid = start + Math.floor((end - start) / 2);
        this.mergeSort(nums, start, mid);
        this.mergeSort(nums, mid + 1, end);
        this.merge(nums, start, mid, end);
    }

    merge(nums, start, mid, end) {
        let temp = [];
        let left = start;
        let right = mid + 1;

        while (left <= mid && right <= end) {
            if (nums[left] < nums[right]) {
                temp.push(nums[left]);
                left++;
            } else {
                temp.push(nums[right]);
                right++;
            }
        }

        while (left <= mid) {
            temp.push(nums[left]);
            left++;
        }
        while (right <= end) {
            temp.push(nums[right]);
            right++;
        }

        for(let x = 0; x < temp.length; x++){
              nums[start + x] = temp[x];
        }
    }
}