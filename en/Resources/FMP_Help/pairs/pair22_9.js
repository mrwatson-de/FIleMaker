var pairs =
{
"navigation":{"script":1}
,"script":{"steps":1}
,"steps":{"navigation":1,"move":1,"go":1}
,"move":{"database":1,"fields":1}
,"database":{"use":1}
,"use":{"navigation":1}
,"go":{"specific":1}
,"specific":{"record":1,"layout":1}
,"record":{"find":1}
,"find":{"request":1,"mode":1,"requests":1}
,"request":{"switch":1}
,"switch":{"specific":1,"browse":1,"find":1,"preview":1}
,"layout":{"move":1,"emulate":1}
,"fields":{"objects":1}
,"objects":{"layout":1}
,"emulate":{"pressing":1}
,"pressing":{"enter":1}
,"enter":{"tab":1}
,"tab":{"switch":1}
,"browse":{"mode":1}
,"mode":{"contents":1,"fill":1,"records":1}
,"contents":{"file":1}
,"file":{"switch":1}
,"fill":{"find":1}
,"requests":{"switch":1}
,"preview":{"mode":1}
,"records":{"forms":1}
,"forms":{"reports":1}
,"reports":{"printed":1}
}
;Search.control.loadWordPairs(pairs);