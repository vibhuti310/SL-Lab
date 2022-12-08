function LetterSurround(str)
{
    var j = 0;

    if(str == "" || str.length == 1)
        return false;

    for(var i = 0; i < str.length; i++)
    {
        if((/[a-zA-z]/).test(str[i]))
        {
            if(str[i-1] == '+' && str[i+1] == '+')
            {
                if(i != str.length-2)
                    continue;
                else
                    j = 1;
            }
        }
    }

    if(j == 1)
        return true;
    else
        return false;
}

var str = prompt("Enter the string: ");
alert(LetterSurround(str));