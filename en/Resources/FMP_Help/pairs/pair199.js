var pairs =
{
"get":{"allowabort":1,"allowabortstate":1,"allow":1,"abort":1}
,"allowabort":{"state":1}
,"state":{"returns":1,"get":1,"allow":1}
,"returns":{"true":1,"false":1,"if":1}
,"true":{"if":1}
,"if":{"allow":1}
,"allow":{"user":1,"abort":1}
,"user":{"abort":1}
,"abort":{"script":1,"state":1,"allow":1,"abort":1}
,"script":{"step":1}
,"step":{"returns":1,"get":1,"allow":1}
,"false":{"get":1}
,"allowabortstate":{"none":1,"get":1}
,"none":{"number":1}
,"number":{"filemaker":1}
,"filemaker":{"pro":1}
,"pro":{"7.0":1}
,"7.0":{"returns":1}
}
;Search.control.loadWordPairs(pairs);
