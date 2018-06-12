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
    if ([11, 12, 13, 14].includes(count % 100)){
        return form3;
    }
    if ((count % 10) === 1) {
        return form1;
    }
    if ([2, 3, 4].includes(count % 10)) {
        return form2; 
    }
    return form3;
}

function getHoursText(d) {
    return plural(d, "час", "часа", "часов");
}

function getMinutesText(e) {
    return plural(e, "минута", "минуты", "минут");
}

function getSecondsText(f) {
    return plural(f, "секунда", "секунды", "секунд");
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
const result = [
    h !== 0 ? h : '',
    h !== 0 ? hr : '',
    m !== 0 ? m : '',
    m !== 0 ? mi : '',
    s !== 0 ? s : '',
    s !== 0 ? se : '',
    ].join(' ');
console.log(result);