var numbers = [];
var elems = [];
var sorted = 0;
var start = 0;
var nonumbers;
var delay = 401;
var selectedColor = "#12d4b4";
var defaultColor = "tomato";
var secondaryColor = "#6610F2";
var minnumber, maxnumber;
var sorting;

verify();

function verify()
{
    if (!sorting)
    {
        nonumbers = document.getElementById("numbers").value;
        console.log(nonumbers);
        if (nonumbers < 10)
        {
            alert("numarul de elemente trebuie sa fie cel putin egal cu 10");
            return;
        }
        if (nonumbers > 55)
        {
            alert("numarul de elemente trebuie sa fie cel mult egal cu 55");
            return;
        }
        minnumber = document.getElementById("minnumber").value;
        maxnumber = document.getElementById("maxnumber").value;
        if (minnumber < 1)
        {
            alert("numarul minim trebuie sa fie cel putin egal cu 1");
            return;
        }
        if (maxnumber > 1000)
        {
            alert("numarul maxim trebuie sa fie cel mult egal cu 1000");
            return;
        }
        if (maxnumber < minnumber)
            [minnumber, maxnumber] = [maxnumber, minnumber];
        createElements(nonumbers, minnumber, maxnumber);
    }
}

function random(min, max)
{
    let x = Math.random() * (max - min + 1);
    x = parseFloat(x);
    return Math.floor(x + minnumber * 1.0);
}

function createElements(n, x, y)
{
    removeAllNumbers(numbers);
    let rand = 0;
    let maxvalue = minnumber, minvalue = maxnumber;
    for (let i = 0; i < n; i++)
    {
        rand = random(x, y);
        if (rand < minvalue)
            minvalue = rand;
        if (rand > maxvalue)
            maxvalue = rand;
        numbers.push(rand);
    }
    let raport = maxvalue - minvalue;
    for (let i = 0; i < n; i++)
    {
        rand = numbers[i];
        var elem = document.createElement("div");
        elem.id = "no" + i;
        elem.className = "number"
        elem.style.height = ((rand - minvalue) / raport * 96 + 3) + '%';
        elem.innerHTML = "<span>" + rand + "</span>";
        document.getElementById("main").appendChild(elem);
    }
    document.getElementById("main").style.width = (n * 34) + 'px';
}

function test()
{
    merge(numbers, 0, numbers.length - 1);
}

function sleep(ms)
{
    return new Promise(resolve => setTimeout(resolve, ms));
}

function modifyDelay(x = 1)
{
    if(delay + 100 * x > 0 && delay + 100 * x < 5000)
    delay += 100 * x;
}

function removeAllNumbers(a)
{
    for (let i = a.length - 1; i >= 0; i--)
    {
        var elemcur = document.getElementById("no" + i);
        elemcur.remove();
        a.pop();
    }
}