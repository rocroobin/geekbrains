const SECONDS_IN_HOUR = 3600;
const SECONDS_IN_MINUTES = 60;

function getHoursCount(a){
    return Math.floor(a / SECONDS_IN_HOUR);
}

function getMinutesCount(b){
// в restMinutes я найду остаток минут, которые не попали в целый час
    const restMinutes = b % SECONDS_IN_HOUR;
    return Math.floor(restMinutes / SECONDS_IN_MINUTES);
}

function getSecondsCount(c){
    return c % SECONDS_IN_MINUTES;
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

function getHoursText(k) {
    return plural(k, "час", "часа", "часов");
}

function getMinutesText(l) {
    return plural(l, "минута", "минуты", "минут");
}

function getSecondsText(n) {
    return plural(n, "секунда", "секунды", "секунд");
}

const paramT1 = process.argv[2];
const t1 = parseInt(paramT1, 10);
const paramT2 = process.argv[3];
const t2 = parseInt(paramT2, 10);
const sum = t1 + t2;
const h = getHoursCount(sum);
const hr = getHoursText(h);
const m = getMinutesCount(sum);
const mi = getMinutesText(m);
const s = getSecondsCount(sum);
const se = getSecondsText(s);
const result = [h, hr, m, mi, s, se].join(' ');
console.log(result);
