var sortedNumberColor = "#1A8FE3";

async function partition(a, st, dr)
{
    console.log(st + " " + dr);
    var i, j;
    let pivot = randomIntFromInterval(st, dr);
    [a[st], a[pivot]] = [a[pivot], a[st]];

    var elempivot = document.getElementById("no" + pivot);
    var elemswap = document.getElementById("no" + st);
    elempivot.style.backgroundColor = secondaryColor;

    await sleep(delay);

    [elemswap.innerHTML, elempivot.innerHTML] = [elempivot.innerHTML, elemswap.innerHTML];
    [elemswap.style.height, elempivot.style.height] = [elempivot.style.height, elemswap.style.height];
    [elemswap.style.backgroundColor, elempivot.style.backgroundColor] = [elempivot.style.backgroundColor, elemswap.style.backgroundColor];

    await sleep(delay);

    for (i = st + 1, j = dr; i <= j;)
    {
        for (; a[i] <= a[st] && i <= j; i++);
        for (; a[j] >= a[st] && i <= j; j--);

        //console.log(i + ' ' + a[i] + ' ' + j + ' ' + a[j] + " el pivt " + a[st]);

        if (i <= j)
        {
            //console.log("---------");
            //for (let k = 0; k <= dr; k++)
            //console.log(a[k]);

            [a[i], a[j]] = [a[j], a[i]];

            var elemi = document.getElementById("no" + i);
            var elemj = document.getElementById("no" + j);

            elemi.style.backgroundColor = elemj.style.backgroundColor = selectedColor;
            [elemi.innerHTML, elemj.innerHTML] = [elemj.innerHTML, elemi.innerHTML];
            [elemi.style.height, elemj.style.height] = [elemj.style.height, elemi.style.height];

            await sleep(delay);

            elemi.style.backgroundColor = elemj.style.backgroundColor = defaultColor;

            i++;
            j--;
        }
    }
    i--;
    [a[st], a[i]] = [a[i], a[st]];

    elempivot = document.getElementById("no" + i);
    [elemswap.innerHTML, elempivot.innerHTML] = [elempivot.innerHTML, elemswap.innerHTML];
    [elemswap.style.height, elempivot.style.height] = [elempivot.style.height, elemswap.style.height];
    elemswap.style.backgroundColor = defaultColor;
    elempivot.style.backgroundColor = sortedNumberColor;

    return i;
}

async function quicksort(a, st, dr)
{
    var part = await partition(a, st, dr);
    if (st < part - 1)
        await sleep(delay), await quicksort(a, st, part - 1);
    else if (st == part - 1)
    {
        var elemcur = document.getElementById("no" + st);
        elemcur.style.backgroundColor = sortedNumberColor;
    }
    if (part + 1 < dr)
        await sleep(delay), await quicksort(a, part + 1, dr);
    else if (dr == part + 1)
    {
        var elemcur = document.getElementById("no" + dr);
        elemcur.style.backgroundColor = sortedNumberColor;
    }
    if (st == 0 && dr == a.length - 1)
    {
        await sleep(delay);
        for (let i = 0; i <= dr; i++)
        {
            var elemcur = document.getElementById("no" + i);
            elemcur.style.backgroundColor = defaultColor;
        }
    }
}

function randomIntFromInterval(min, max)
{
    return Math.floor(Math.random() * (max - min + 1) + min);
}

async function qsort()
{
    if(sorting)
        return;
    sorting = 1;
    await quicksort(numbers, 0, numbers.length - 1)
    sorting = 0;
}