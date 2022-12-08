'''

                            Online Python Compiler.
                Code, Compile, Run and Debug python program online.
Write your code in this editor and press "Run" button to execute it.

'''
class Prog:
    def __init__(self):
        self.new_string = ""
        
    def reverse_string(self):
        self.new_string = input("Enter the string: ")
        print("Reversed string: ", self.new_string[::-1])
        
    
    def sortVowels(self):
        vowels = ""
        n = len(self.new_string)
        s = self.new_string
        
        for i in range(0,n):
            if s[i] == 'a' or s[i] == 'e' or s[i] == 'i' or s[i] == 'o' or s[i] == 'u' or s[i] == 'A' or s[i] == 'E' or s[i] == 'I' or s[i] == 'O' or s[i] == 'U':
                vowels += s[i]
                
        vowels = list(vowels)
        vowels.sort()
        vowels.reverse()
        
        s = list(s)
        s.reverse()
        
        j = 0
        
        for i in range(0, n):
            if s[i] == 'a' or s[i] == 'e' or s[i] == 'o' or s[i] == 'u' or s[i] == 'i' or s[i] == 'A' or s[i] == 'E' or s[i] == 'I' or 'O' == s[i] or s[i] == 'U':
                vowels += s[i]
                s[i] = vowels[j]
                j += 1
                
        str1 = ""
        print(str1.join(s), end="")


object_class = Prog()
object_class.reverse_string()
print("After sorting vowels: ")
object_class.sortVowels()
        
        
        
        
