async function selectionsort(a)
{
    if(sorting)
        return;
    sorting = 1;
    let n = a.length;
    let i, j, mindex;
    var elemcur = document.getElementById("no0");
    var elemswap;
    for (i = 0; i < n; i++)
    {
        mindex = i;
        elemcur = document.getElementById("no" + i);
        elemcur.style.backgroundColor = selectedColor;

        for (j = i + 1; j < n; j++)
            if (a[j] < a[mindex])
                mindex = j;

        if (mindex != i)
        {
            [a[i], a[mindex]] = [a[mindex], a[i]];
            elemswap = document.getElementById("no" + mindex);
            elemswap.style.backgroundColor = selectedColor;

            await sleep(delay);

            var aux1 = elemcur.innerHTML;
            var aux2 = elemcur.style.height;

            elemcur.innerHTML = elemswap.innerHTML;
            elemcur.style.height = elemswap.style.height;

            elemswap.innerHTML = aux1;
            elemswap.style.height = aux2;

            await sleep(delay);

            elemswap.style.backgroundColor = defaultColor;
        }
        elemcur.style.backgroundColor = defaultColor;
    }
    sorting = 0;
}