function ChangeStr(str)
{
    var new_string = "", capital_string="";
    var ch, ascii;

    for(var i = 0; i < str.length; i++)
    {
        ascii = str.charCodeAt(i);
        ascii += 1;
        ch = String.fromCharCode(ascii);
        new_string += ch;
    }


    for(var i = 0; i < str.length; i++)
    {
        if(new_string[i] == 'a'|| new_string[i] == 'e' || new_string[i] == 'i' || new_string[i] == 'o' || new_string[i] == 'u')
        {
            new_string[i].toUpperCase();
            capital_string += new_string[i];
        }

        capital_string += new_string[i];
    }

    return capital_string;
}

var str = prompt("Enter the string: ");
alert(ChangeStr(str));