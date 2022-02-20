async function interclas(a, st, dr)
{
    let m = (st + dr) / 2;
    let b = [];
    let i, j, nr = 0;
    for (i = st, j = m + 1; i <= m && j <= dr;)
        if (a[i] > a[j])
            b[nr++] = a[i++];
        else
            b[nr++] = a[j++];
    for (; i <= m; b[nr++] = a[i++]);
    for (; j <= dr; b[nr++] = a[j++]);
    for (i = 0; i < b.length; a[i] = b[i], i++);
}

async function mergesort(a, st, dr)
{
    if (st < dr)
    {
        let m = (st + dr) / 2;
        await mergesort(a, st, m);
        await mergesort(a, m + 1, dr);
        await interclas(a, st, dr);
    }
}