async function insertionsort(a)
{
    if(sorting)
        return;
    sorting = 1;
    let n = a.length;
    var elem0, elem1 = document.getElementById("no0");
    for (i = 1; i < n; i++)
    {
        console.log(delay);
        var elemcur = document.getElementById("no" + i);
        elemcur.style.backgroundColor = "#12d4b4";
        await sleep(delay / 2);
        for (j = i - 1; j >= 0; j--)
        {
            if (a[j + 1] < a[j])
            {
                await sleep(delay / 2);

                let auxx = a[j + 1];
                a[j + 1] = a[j];
                a[j] = auxx;

                elem0 = document.getElementById("no" + (j + 1));
                elem1 = document.getElementById("no" + j);

                var aux1 = elem0.innerHTML;
                var aux2 = elem0.style.height;

                elem0.innerHTML = elem1.innerHTML;
                elem0.style.height = elem1.style.height;
                elem0.style.backgroundColor = "tomato";

                elem1.innerHTML = aux1;
                elem1.style.height = aux2;
                elem1.style.backgroundColor = "#12d4b4";
                await sleep(delay / 2);
            }
            //await sleep(delay / 2);
        }
        elem1.style.backgroundColor = "tomato";
        elemcur.style.backgroundColor = "tomato";
    }
    sorting = 0;
}