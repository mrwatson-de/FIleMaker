var pairs =
{
"romanzenkaku":{"converts":1,"text":1,"macintosh":1}
,"converts":{"hankaku":1}
,"hankaku":{"alphanumeric":1}
,"alphanumeric":{"symbols":1}
,"symbols":{"zenkaku":1,"romanzenkaku":1}
,"zenkaku":{"alphanumeric":1}
,"text":{"text":1,"-any":1,"expression":1,"field":1,"filemaker":1}
,"-any":{"text":1}
,"expression":{"text":1}
,"field":{"text":1}
,"filemaker":{"pro":1}
,"pro":{"6.0":1}
,"6.0":{"earlier":1}
,"earlier":{"romanzenkaku":1}
,"macintosh":{"returns":1}
}
;Search.control.loadWordPairs(pairs);
