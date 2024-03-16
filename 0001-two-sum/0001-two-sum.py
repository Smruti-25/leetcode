class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        complement = {} #num to index of num
        
        for i in range(0, len(nums)):
            diff = target - nums[i]
            if diff in complement:
                return [i, complement[diff]]
            else:
                complement[nums[i]] = i
                    