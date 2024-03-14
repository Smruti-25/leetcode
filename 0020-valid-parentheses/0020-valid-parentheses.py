class Solution:
    def isValid(self, s: str) -> bool:
        complements = {
            ")" : "(",
            "}" : "{",
            "]" : "["
        }
        
        stack = []
        
        for c in s:
            if c in complements:
                if stack and stack[-1] == complements[c]:
                    stack.pop()
                else:
                    return False
            else:
                stack.append(c)
        
        if stack:
            return False
        else:
            return True
        