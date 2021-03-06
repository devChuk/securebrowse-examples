module.exports = {
    maxTXTLength: 255,
    sriHashingAlgorithm: 'sha256',
    source: '.',
    destination: '.',
    txtRecords: [
        {
            urlPath: 'testsecurebrowse.org/a.css',
            filePaths: ['a.css']
        },
        {
            urlPath: 'testsecurebrowse.org/a.js',
            filePaths: ['a.js']
        },
        {
            urlPath: 'testsecurebrowse.org/b.js',
            filePaths: ['./b.js']
        },
        {
            urlPath: 'testsecurebrowse.org/c.js',
            filePaths: ['./c.js']
        },
        {
            urlPath: 'testsecurebrowse.org/d.js',
            filePaths: ['./d.js']
        },
        {
            urlPath: 'testsecurebrowse.org/',
            filePaths: ['./index.html']
        },
        {
            urlPath: 'testsecurebrowse.org/good.html',
            filePaths: ['./good.html']
        },
        {
            urlPath: 'testsecurebrowse.org/non-matching-sri/insecure-html.html',
            filePaths: ['./non-matching-sri/insecure-html.html']
        },
        {
            urlPath: 'testsecurebrowse.org/non-matching-sri/insecure-js.html',
            filePaths: ['./non-matching-sri/insecure-js.html']
        },
        {
            urlPath: 'testsecurebrowse.org/non-matching-sri/a.js',
            filePaths: ['./non-matching-sri/a.js']
        }
    ]
};
