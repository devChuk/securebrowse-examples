'use strict'
console.log('c.js is present');

function extractHostname(url) {
    let hostname;
    if (url.indexOf('://') > -1) {
        hostname = url.split('/')[2];
    }
    else {
        hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname;
}

function extractRootDomain(url) {
    let domain = extractHostname(url),
        splitArr = domain.split('.'),
        arrLen = splitArr.length;
    // extracting the root domain here
    // if there is a subdomain
    if (arrLen > 2) {
        domain = splitArr[arrLen - 2] + '.' + splitArr[arrLen - 1];
        // check to see if it's using a Country Code Top Level Domain (ccTLD) (i.e. ".me.uk")
        if (splitArr[arrLen - 2].length == 2 && splitArr[arrLen - 1].length == 2) {
            // this is using a ccTLD
            domain = splitArr[arrLen - 3] + '.' + domain;
        }
    }
    return domain;
}

const domain = extractRootDomain(document.URL)
fetch(`https://dns.google.com/resolve?name=${domain}&type=16`, {mode: 'cors'})
    .then(r => r.json())
    .then(response => {
        document.getElementById('json').innerHTML = JSON.stringify(response, null, 4);
    });
document.getElementById('doc').innerText = document.documentElement.innerHTML;
