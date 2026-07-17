class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
          this.mergeSort(nums, 0, nums.length - 1);
        return nums;
    }

    mergeSort(nums, st, end) {
        if (st >= end) return;
        let mid = Math.floor(st + (end - st) / 2);
          this.mergeSort(nums, st, mid);
          this.mergeSort(nums, mid + 1, end);
          this.merging(nums, st, mid, end);
    }

    merging(nums, st, mid, end) {
        let temp = [];
        let i = st;
        let j = mid + 1;
        let k = 0;

        while (i <= mid && j <= end) {
            if (nums[i] < nums[j]) {
                temp[k] = nums[i];
                i++;
            } else {
                temp[k] = nums[j];
                j++;
            }
            k++;
        }
        while (i <= mid) {
            temp[k] = nums[i];
            i++;
            k++;
        }
        while (j <= end) {
            temp[k] = nums[j];
            j++;
            k++;
        }
        for (let x = 0; x < temp.length; x++) {
            nums[st + x] = temp[x];
        }
    }
}
