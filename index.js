const emailLog = require('./email_log.json');

function countUniqueEmails(emailFile) {
    debugger;
return emailLog.emails.reduce(function (acc,cur) {
  if(cur.email in acc){
    acc[cur.email]++
} else {
    acc[cur.email] = 1
}
return acc
},{})
}

console.log(countUniqueEmails(emailLog));
