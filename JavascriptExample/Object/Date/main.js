/*getDay()-integer value of day of week (0-6)
 * getUTCDay()-integer value of day of week(0-6)
 * getDate()-day of month
 * getUTCDate()-day of month
 * getMonth()-month of year(0-11)
 * getUTCMonth()-month of year(0-11)
 * getFullYear()-four digit year
 * getUTCFullYear()-four digit year
 * getHours()-hour of day(0-23)
 * getUTCHours()-huor of day(0-23)
 * getMinutes()-minutes into the hour
 * getUTCMinutes()-minutes into the hour
 * getSeconds()-seconds into the minute
 * getUTCSeconds()-senconds into the minute
 * getMilliseconds()-thousandths of seconds into the second
 * getUTCMilliseconds()-thousandths of senconds into the second
 *
 * */
var today, past, txt;
today = new Date();
past = new Date(2017,06,08);
if (today > past)
    txt = 'it is after 1st December 2017.';
