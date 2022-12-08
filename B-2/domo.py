import functools
#defining a function to count tthe occurences of each word
def wordOccurences(f):
 #empty dictionary
 d={}
 #creating a list of each word
 L=f.read().split()
 #populating the dictionary with the occurences of each word
 for i in L:
     if i not in d:
        d[i]=1
     else:
        d[i]=d[i]+1
 print(d)
 #sorting the dictionary in reverse order by values
 sortedList=sorted(d.items(),key=lambda x:x[1])
 sortedList.reverse()
 #print(sortedList)
 #empty list for storing the occurences of top 10 words
 occurrences=[]
 for i in range(10):
    print(sortedList[i],end=" ")
    occurrences.append(sortedList[i][1])
 print()
 print(occurrences)
 print("Average of top 10 values:- ",end="")
 #find the sum of occurences using reduce function
 total=functools.reduce(lambda a,b:a+b, occurrences)
 print(total//10)
 #using list-comprehension to store the squares of odd values in occurences
 squaresOdd=[i*i for i in occurrences if i%2!=0]
 print(squaresOdd)
f=open("sample.txt",'r')
wordOccurences(f)
f.close()
