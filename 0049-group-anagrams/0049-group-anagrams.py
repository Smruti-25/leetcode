class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        res = collections.defaultdict(list)
        
        for s in strs:
            charCount = [0]*26
            
            for c in s:
                charCount[ord(c) - ord("a")] += 1
            
            #in python array cannot be a key in hashmap
            res[tuple(charCount)].append(s)
        
        return res.values()