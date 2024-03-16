class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        map = collections.defaultdict(list)
        for word in strs:
            charCount = [0]*26
            for char in word:
                charCount[ord(char) - ord("a")] += 1
            map[tuple(charCount)].append(word)
        return map.values()
            