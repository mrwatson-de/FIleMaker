var pairs =
{
"kanazenkaku":{"converts":1,"text":1,"japanese":1}
,"converts":{"hankaku":1}
,"hankaku":{"katakana":1,"1-byte":1}
,"katakana":{"zenkaku":1,"kanazenkaku":1,"characters":1}
,"zenkaku":{"katakana":1,"2-byte":1}
,"text":{"text":1,"-any":1,"expression":1,"field":1,"filemaker":1,"string":1}
,"-any":{"text":1}
,"expression":{"text":1}
,"field":{"text":1}
,"filemaker":{"pro":1}
,"pro":{"6.0":1}
,"6.0":{"earlier":1}
,"earlier":{"kanazenkaku":1}
,"japanese":{"text":1}
,"string":{"hankaku":1,"zenkaku":1}
,"1-byte":{"katakana":1}
,"characters":{"returns":1}
,"returns":{"japanese":1}
,"2-byte":{"katakana":1}
}
;Search.control.loadWordPairs(pairs);
