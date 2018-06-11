function hour(a, b){
    const sek = a + b;
    const h1 = sek / 3600;
    const h = Math.floor(h1);
    return result;
}

function minute(c, d){
    const m1 = (c + d - Math.floor((c + d)/3600) * 3600) / 60;
    const m = Math.floor(m1);
    return result;
}

function sekond(e, f){
    const s = e + f - Math.floor((e + f)/3600) * 3600 - Math.floor((e + f - Math.floor((e + f)/3600) * 3600) / 60) * 60;
    return result;
}

function plural(count, form1, form2, form3) {
    if ([1, 21, 31, 41, 51].includes(count)) {
        return form1;
    }
    if ([2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54].includes(count)) {
        return form2; 
    }
    return form3;
}

function hours(k) {
    return plural(k, "час", "часа", "часов");
}

function minutes(l) {
    return plural(l, "минута", "минуты", "минут");
}

function sekonds(n) {
    return plural(n, "секунда", "секунды", "секунд");
}

const paramT1 = process.argv[2];
const t1 = parseInt(paramT1, 10);
const paramT2 = process.argv[3];
const t2 = parseInt(paramT2, 10);
const h = hour(t1, t2);
const hr = hours(h);
const m = minute(t1, t2);
const mi = minutes(m);
const s = sekond(t1, t2);
const se = sekonds(s);
const result = [h, hr, m, mi, s, se].join(' ');
console.log(result);
