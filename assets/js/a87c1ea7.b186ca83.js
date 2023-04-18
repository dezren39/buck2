"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[173],{3905:(e,n,a)=>{a.r(n),a.d(n,{MDXContext:()=>s,MDXProvider:()=>u,mdx:()=>g,useMDXComponents:()=>m,withMDXComponents:()=>p});var t=a(67294);function l(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},r.apply(this,arguments)}function d(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?d(Object(a),!0).forEach((function(n){l(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function o(e,n){if(null==e)return{};var a,t,l=function(e,n){if(null==e)return{};var a,t,l={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(l[a]=e[a]);return l}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=t.createContext({}),p=function(e){return function(n){var a=m(n.components);return t.createElement(e,r({},n,{components:a}))}},m=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},u=function(e){var n=m(e.components);return t.createElement(s.Provider,{value:n},e.children)},x="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},h=t.forwardRef((function(e,n){var a=e.components,l=e.mdxType,r=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=m(a),u=l,x=p["".concat(d,".").concat(u)]||p[u]||c[u]||r;return a?t.createElement(x,i(i({ref:n},s),{},{components:a})):t.createElement(x,i({ref:n},s))}));function g(e,n){var a=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var r=a.length,d=new Array(r);d[0]=h;var i={};for(var o in n)hasOwnProperty.call(n,o)&&(i[o]=n[o]);i.originalType=e,i[x]="string"==typeof e?e:l,d[1]=i;for(var s=2;s<r;s++)d[s]=a[s];return t.createElement.apply(null,d)}return t.createElement.apply(null,a)}h.displayName="MDXCreateElement"},57614:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>m,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var t=a(87462),l=(a(67294),a(3905));const r={id:"builtins"},d="builtins",i={unversionedId:"api/starlark/builtins",id:"api/starlark/builtins",title:"builtins",description:"False",source:"@site/../docs/api/starlark/builtins.generated.md",sourceDirName:"api/starlark",slug:"/api/starlark/builtins",permalink:"/docs/api/starlark/builtins",draft:!1,tags:[],version:"current",frontMatter:{id:"builtins"},sidebar:"manualSidebar",previous:{title:"Rules",permalink:"/docs/api/rules"},next:{title:"dict type",permalink:"/docs/api/starlark/dict"}},o={},s=[{value:"False",id:"false",level:2},{value:"None",id:"none",level:2},{value:"True",id:"true",level:2},{value:"abs",id:"abs",level:2},{value:"all",id:"all",level:2},{value:"Details",id:"details",level:4},{value:"any",id:"any",level:2},{value:"Details",id:"details-1",level:4},{value:"bool",id:"bool",level:2},{value:"Details",id:"details-2",level:4},{value:"breakpoint",id:"breakpoint",level:2},{value:"chr",id:"chr",level:2},{value:"Details",id:"details-3",level:4},{value:"debug",id:"debug",level:2},{value:"dict",id:"dict",level:2},{value:"Details",id:"details-4",level:4},{value:"dir",id:"dir",level:2},{value:"Details",id:"details-5",level:4},{value:"enum",id:"enum",level:2},{value:"enumerate",id:"enumerate",level:2},{value:"Details",id:"details-6",level:4},{value:"experimental_regex",id:"experimental_regex",level:2},{value:"fail",id:"fail",level:2},{value:"Details",id:"details-7",level:4},{value:"field",id:"field",level:2},{value:"Details",id:"details-8",level:4},{value:"filter",id:"filter",level:2},{value:"float",id:"float",level:2},{value:"Details",id:"details-9",level:4},{value:"getattr",id:"getattr",level:2},{value:"Details",id:"details-10",level:4},{value:"hasattr",id:"hasattr",level:2},{value:"Details",id:"details-11",level:4},{value:"hash",id:"hash",level:2},{value:"Details",id:"details-12",level:4},{value:"int",id:"int",level:2},{value:"Details",id:"details-13",level:4},{value:"json",id:"json",level:2},{value:"len",id:"len",level:2},{value:"Details",id:"details-14",level:4},{value:"list",id:"list",level:2},{value:"Details",id:"details-15",level:4},{value:"map",id:"map",level:2},{value:"max",id:"max",level:2},{value:"Details",id:"details-16",level:4},{value:"min",id:"min",level:2},{value:"Details",id:"details-17",level:4},{value:"ord",id:"ord",level:2},{value:"Details",id:"details-18",level:4},{value:"partial",id:"partial",level:2},{value:"pprint",id:"pprint",level:2},{value:"print",id:"print",level:2},{value:"range",id:"range",level:2},{value:"Details",id:"details-19",level:4},{value:"record",id:"record",level:2},{value:"repr",id:"repr",level:2},{value:"Details",id:"details-20",level:4},{value:"reversed",id:"reversed",level:2},{value:"Details",id:"details-21",level:4},{value:"sorted",id:"sorted",level:2},{value:"Details",id:"details-22",level:4},{value:"str",id:"str",level:2},{value:"Details",id:"details-23",level:4},{value:"struct",id:"struct",level:2},{value:"tuple",id:"tuple",level:2},{value:"Details",id:"details-24",level:4},{value:"type",id:"type",level:2},{value:"Details",id:"details-25",level:4},{value:"zip",id:"zip",level:2},{value:"Details",id:"details-26",level:4}],p={toc:s};function m(e){let{components:n,...a}=e;return(0,l.mdx)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.mdx)("h1",{id:"builtins"},"builtins"),(0,l.mdx)("h2",{id:"false"},"False"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"False: bool.type\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"none"},"None"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"None: None\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"true"},"True"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"True: bool.type\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"abs"},"abs"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def abs(x: int.type) -> int.type\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"all"},"all"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def all(x: iter("")) -> bool.type\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#all"},"all"),": returns true if all values in the iterable object have a truth value of true."),(0,l.mdx)("h4",{id:"details"},"Details"),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"all([1, True]) == True\nall([1, 1]) == True\nall([0, 1, True]) == False\nall([True, 1, True]) == True\nall([0, 0]) == False\nall([0, False]) == False\nall([True, 0]) == False\nall([1, False]) == False\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"any"},"any"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def any(x: iter("")) -> bool.type\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#any"},"any"),": returns true if any value in the iterable object have a truth value of true."),(0,l.mdx)("h4",{id:"details-1"},"Details"),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"any([0, True]) == True\nany([0, 1]) == True\nany([0, 1, True]) == True\nany([0, 0]) == False\nany([0, False]) == False\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"bool"},"bool"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def bool(x: [None, ""] = None) -> bool.type\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#bool"},"bool"),": returns the truth value of any starlark value."),(0,l.mdx)("h4",{id:"details-2"},"Details"),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'bool() == False\nbool([]) == False\nbool([1]) == True\nbool(True) == True\nbool(False) == False\nbool(None) == False\nbool(bool) == True\nbool(1) == True\nbool(0) == False\nbool({}) == False\nbool({1:2}) == True\nbool(()) == False\nbool((1,)) == True\nbool("") == False\nbool("1") == True\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"breakpoint"},"breakpoint"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def breakpoint() -> None\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"chr"},"chr"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def chr(i: [int.type, bool.type]) -> str.type\n")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#bool"},"chr"),": returns a string encoding a codepoint."),(0,l.mdx)("h4",{id:"details-3"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"chr(i)")," returns a returns a string that encodes the single Unicode code\npoint whose value is specified by the integer ",(0,l.mdx)("inlineCode",{parentName:"p"},"i"),". ",(0,l.mdx)("inlineCode",{parentName:"p"},"chr")," fails\nunless ",(0,l.mdx)("inlineCode",{parentName:"p"},"0 \u2264 i \u2264 0x10FFFF"),"."),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"chr(65) == 'A'\nchr(1049) == '\u0419'\nchr(0x1F63F) == '\ud83d\ude3f'\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"debug"},"debug"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def debug(val: "") -> str.type\n')),(0,l.mdx)("p",null,"Print the value with full debug formatting. The result may not be stable over time, mostly intended for debugging purposes."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"dict"},"dict"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def dict(*args, **kwargs) -> {"": ""}\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#dict"},"dict"),": creates a dictionary."),(0,l.mdx)("h4",{id:"details-4"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"dict")," creates a dictionary. It accepts up to one positional argument,\nwhich is interpreted as an iterable of two-element sequences\n(pairs), each specifying a key/value pair in the\nresulting dictionary."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"dict")," also accepts any number of keyword arguments, each of which\nspecifies a key/value pair in the resulting dictionary; each keyword\nis treated as a string."),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"dict() == {}\ndict(**{'a': 1}) == {'a': 1}\ndict({'a': 1}) == {'a': 1}\ndict([(1, 2), (3, 4)]) == {1: 2, 3: 4}\ndict([(1, 2), ['a', 'b']]) == {1: 2, 'a': 'b'}\ndict(one=1, two=2) == {'one': 1, 'two': 2}\ndict([(1, 2)], x=3) == {1: 2, 'x': 3}\ndict([('x', 2)], x=3) == {'x': 3}\nx = {'a': 1}\ny = dict([('x', 2)], **x)\nx == {'a': 1} and y == {'x': 2, 'a': 1}\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"dir"},"dir"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def dir(x: "") -> [str.type]\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#dir"},"dir"),": list attributes of a value."),(0,l.mdx)("h4",{id:"details-5"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"dir(x)")," returns a list of the names of the attributes (fields and\nmethods) of its operand. The attributes of a value ",(0,l.mdx)("inlineCode",{parentName:"p"},"x")," are the names\n",(0,l.mdx)("inlineCode",{parentName:"p"},"f")," such that ",(0,l.mdx)("inlineCode",{parentName:"p"},"x.f")," is a valid expression."),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'"capitalize" in dir("abc")\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"enum"},"enum"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def enum(*args) -> ""\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"enumerate"},"enumerate"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def enumerate(it: iter(""), start: int.type = None) -> [(int.type, "")]\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#enumerate"},"enumerate"),": return a list of (index, element) from an iterable."),(0,l.mdx)("h4",{id:"details-6"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"enumerate(x)")," returns a list of ",(0,l.mdx)("inlineCode",{parentName:"p"},"(index, value)")," pairs, each containing\nsuccessive values of the iterable sequence and the index of the\nvalue within the sequence."),(0,l.mdx)("p",null,"The optional second parameter, ",(0,l.mdx)("inlineCode",{parentName:"p"},"start"),", specifies an integer value to\nadd to each index."),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'enumerate(["zero", "one", "two"]) == [(0, "zero"), (1, "one"), (2, "two")]\nenumerate(["one", "two"], 1) == [(1, "one"), (2, "two")]\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"experimental_regex"},"experimental_regex"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def experimental_regex(regex: str.type) -> "regex"\n')),(0,l.mdx)("p",null,"Creates a regex which can be used for matching"),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"fail"},"fail"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def fail(*args) -> None\n")),(0,l.mdx)("p",null,"fail: fail the execution"),(0,l.mdx)("h4",{id:"details-7"},"Details"),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'fail("this is an error")  # fail: this is an error\nfail("oops", 1, False)  # fail: oops 1 False\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"field"},"field"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def field(typ: "", default: [None, ""] = None) -> "field"\n')),(0,l.mdx)("p",null,"Creates a field record."),(0,l.mdx)("h4",{id:"details-8"},"Details"),(0,l.mdx)("p",null,"Examples:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'rec_type = record(host=field(str.type), port=field(int.type), mask=field(int.type, default=255))\nrec = rec_type(host="localhost", port=80)\nrec.port == 80\nrec.mask == 255\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"filter"},"filter"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def filter(func: "", seq: iter("")) -> [""]\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"float"},"float"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def float(a: [str.type, int.type, float.type, bool.type] = None) -> float.type\n")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a5f7082aabed29c0e429c722292c66ec8ecf9591/doc/spec.md#float"},"float"),": interprets its argument as a floating-point number."),(0,l.mdx)("h4",{id:"details-9"},"Details"),(0,l.mdx)("p",null,"If x is a ",(0,l.mdx)("inlineCode",{parentName:"p"},"float"),", the result is x.\nif x is an ",(0,l.mdx)("inlineCode",{parentName:"p"},"int"),", the result is the nearest floating point value to x.\nIf x is a string, the string is interpreted as a floating-point literal.\nWith no arguments, ",(0,l.mdx)("inlineCode",{parentName:"p"},"float()")," returns ",(0,l.mdx)("inlineCode",{parentName:"p"},"0.0"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"float() == 0.0\nfloat(1) == 1.0\nfloat('1') == 1.0\nfloat('1.0') == 1.0\nfloat('.25') == 0.25\nfloat('1e2') == 100.0\nfloat(False) == 0.0\nfloat(True) == 1.0\nfloat(\"hello\")   # error: not a valid number\nfloat([])   # error: argument must be a string, a number, or a boolean\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"getattr"},"getattr"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def getattr(a: "", attr: str.type, default: [None, ""] = None) -> ""\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#getattr"},"getattr"),": returns the value of an attribute"),(0,l.mdx)("h4",{id:"details-10"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"getattr(x, name)")," returns the value of the attribute (field or method)\nof x named ",(0,l.mdx)("inlineCode",{parentName:"p"},"name"),". It is a dynamic error if x has no such attribute."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},'getattr(x, "f")')," is equivalent to ",(0,l.mdx)("inlineCode",{parentName:"p"},"x.f"),"."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'getattr("banana", "split")("a") == ["b", "n", "n", ""] # equivalent to "banana".split("a")\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"hasattr"},"hasattr"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def hasattr(a: "", attr: str.type) -> bool.type\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#hasattr"},"hasattr"),": test if an object has an attribute"),(0,l.mdx)("h4",{id:"details-11"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"hasattr(x, name)")," reports whether x has an attribute (field or method)\nnamed ",(0,l.mdx)("inlineCode",{parentName:"p"},"name"),"."),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"hash"},"hash"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def hash(a: str.type) -> int.type\n")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#hash"},"hash"),": returns the hash number of a value."),(0,l.mdx)("h4",{id:"details-12"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"hash(x)`` returns an integer hash value for x such that "),"x == y",(0,l.mdx)("inlineCode",{parentName:"p"},"implies"),"hash(x) == hash(y)``."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"hash")," fails if x, or any value upon which its hash depends, is\nunhashable."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'hash("hello") != hash("world")\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"int"},"int"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def int(a: [None, ""] = None, base: [int.type, bool.type] = None) -> int.type\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#int"},"int"),": convert a value to integer."),(0,l.mdx)("h4",{id:"details-13"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"int(x[, base])")," interprets its argument as an integer."),(0,l.mdx)("p",null,"If x is an ",(0,l.mdx)("inlineCode",{parentName:"p"},"int"),", the result is x.\nIf x is a ",(0,l.mdx)("inlineCode",{parentName:"p"},"float"),", the result is the integer value nearest to x,\ntruncating towards zero; it is an error if x is not finite (",(0,l.mdx)("inlineCode",{parentName:"p"},"NaN"),",\n",(0,l.mdx)("inlineCode",{parentName:"p"},"+Inf"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"-Inf"),").\nIf x is a ",(0,l.mdx)("inlineCode",{parentName:"p"},"bool"),", the result is 0 for ",(0,l.mdx)("inlineCode",{parentName:"p"},"False")," or 1 for ",(0,l.mdx)("inlineCode",{parentName:"p"},"True"),"."),(0,l.mdx)("p",null,"If x is a string, it is interpreted like a string literal;\nan optional base prefix (",(0,l.mdx)("inlineCode",{parentName:"p"},"0"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"0b"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"0B"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"0x"),", ",(0,l.mdx)("inlineCode",{parentName:"p"},"0X"),") determines which\nbase to use. The string may specify an arbitrarily large integer,\nwhereas true integer literals are restricted to 64 bits.\nIf a non-zero ",(0,l.mdx)("inlineCode",{parentName:"p"},"base")," argument is provided, the string is interpreted\nin that base and no base prefix is permitted; the base argument may\nspecified by name."),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"int()")," with no arguments returns 0."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"int() == 0\nint(1) == 1\nint(False) == 0\nint(True) == 1\nint('1') == 1\nint('16') == 16\nint('16', 10) == 16\nint('16', 8) == 14\nint('16', 16) == 22\nint(0.0) == 0\nint(3.14) == 3\nint(-12345.6789) == -12345\nint(2e9) == 2000000000\nint(\"hello\")   # error: not a valid number\nint(1e100)   # error: overflow\nint(float(\"nan\"))   # error: cannot convert NaN to int\nint(float(\"inf\"))   # error: cannot convert infinity to int\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"json"},"json"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'json: "struct"\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"len"},"len"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def len(a: "") -> int.type\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#len"},"len"),": get the length of a sequence"),(0,l.mdx)("h4",{id:"details-14"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"len(x)")," returns the number of elements in its argument."),(0,l.mdx)("p",null,"It is a dynamic error if its argument is not a sequence."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"len(()) == 0\nlen({}) == 0\nlen([]) == 0\nlen([1]) == 1\nlen([1,2]) == 2\nlen({'16': 10}) == 1\nlen(True)    # error: not supported\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"list"},"list"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def list(a: iter("") = None) -> [""]\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#list"},"list"),": construct a list."),(0,l.mdx)("h4",{id:"details-15"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"list(x)")," returns a new list containing the elements of the\niterable sequence x."),(0,l.mdx)("p",null,"With no argument, ",(0,l.mdx)("inlineCode",{parentName:"p"},"list()")," returns a new empty list."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'list()        == []\nlist((1,2,3)) == [1, 2, 3]\nlist("strings are not iterable") # error: not supported\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"map"},"map"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def map(func: "", seq: iter("")) -> [""]\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"max"},"max"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def max(*args, key: [None, ""] = None) -> ""\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#max"},"max"),": returns the maximum of a sequence."),(0,l.mdx)("h4",{id:"details-16"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"max(x)")," returns the greatest element in the iterable sequence x."),(0,l.mdx)("p",null,"It is an error if any element does not support ordered comparison,\nor if the sequence is empty."),(0,l.mdx)("p",null,"The optional named parameter ",(0,l.mdx)("inlineCode",{parentName:"p"},"key")," specifies a function to be applied\nto each element prior to comparison."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'max([3, 1, 4, 1, 5, 9])               == 9\nmax("two", "three", "four")           == "two"    # the lexicographically greatest\nmax("two", "three", "four", key=len)  == "three"  # the longest\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"min"},"min"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def min(*args, key: [None, ""] = None) -> ""\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#min"},"min"),": returns the minimum of a sequence."),(0,l.mdx)("h4",{id:"details-17"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"min(x)")," returns the least element in the iterable sequence x."),(0,l.mdx)("p",null,"It is an error if any element does not support ordered comparison,\nor if the sequence is empty."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'min([3, 1, 4, 1, 5, 9])                 == 1\nmin("two", "three", "four")             == "four"  # the lexicographically least\nmin("two", "three", "four", key=len)    == "two"   # the shortest\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"ord"},"ord"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def ord(a: str.type) -> int.type\n")),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.mdord"},"ord"),": returns the codepoint of a character"),(0,l.mdx)("h4",{id:"details-18"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"ord(s)")," returns the integer value of the sole Unicode code point\nencoded by the string ",(0,l.mdx)("inlineCode",{parentName:"p"},"s"),"."),(0,l.mdx)("p",null,"If ",(0,l.mdx)("inlineCode",{parentName:"p"},"s")," does not encode exactly one Unicode code point, ",(0,l.mdx)("inlineCode",{parentName:"p"},"ord")," fails.\nEach invalid code within the string is treated as if it encodes the\nUnicode replacement character, U+FFFD."),(0,l.mdx)("p",null,"Example:"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'ord("A")                                == 65\nord("\u0419")                                == 1049\nord("\ud83d\ude3f")                               == 0x1F63F\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"partial"},"partial"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def partial(func: "", *args, **kwargs: {"": ""}) -> "function"\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"pprint"},"pprint"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def pprint(*args) -> None\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"print"},"print"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"def print(*args) -> None\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"range"},"range"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def range(a1: int.type, a2: [None, int.type] = None, step: int.type = None) -> "range"\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#range"},"range"),": return a range of integers"),(0,l.mdx)("h4",{id:"details-19"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"range")," returns a tuple of integers defined by the specified interval\nand stride."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},"range(stop)                             # equivalent to range(0, stop)\nrange(start, stop)                      # equivalent to range(start, stop, 1)\nrange(start, stop, step)\n")),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"range")," requires between one and three integer arguments.\nWith one argument, ",(0,l.mdx)("inlineCode",{parentName:"p"},"range(stop)")," returns the ascending sequence of\nnon-negative integers less than ",(0,l.mdx)("inlineCode",{parentName:"p"},"stop"),".\nWith two arguments, ",(0,l.mdx)("inlineCode",{parentName:"p"},"range(start, stop)")," returns only integers not less\nthan ",(0,l.mdx)("inlineCode",{parentName:"p"},"start"),"."),(0,l.mdx)("p",null,"With three arguments, ",(0,l.mdx)("inlineCode",{parentName:"p"},"range(start, stop, step)")," returns integers\nformed by successively adding ",(0,l.mdx)("inlineCode",{parentName:"p"},"step")," to ",(0,l.mdx)("inlineCode",{parentName:"p"},"start")," until the value meets or\npasses ",(0,l.mdx)("inlineCode",{parentName:"p"},"stop"),". A call to ",(0,l.mdx)("inlineCode",{parentName:"p"},"range")," fails if the value of ",(0,l.mdx)("inlineCode",{parentName:"p"},"step")," is\nzero."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"list(range(10))                         == [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\nlist(range(3, 10))                      == [3, 4, 5, 6, 7, 8, 9]\nlist(range(3, 10, 2))                   == [3, 5, 7, 9]\nlist(range(10, 3, -2))                  == [10, 8, 6, 4]\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"record"},"record"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def record(**kwargs: {str.type: ""}) -> "function"\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"repr"},"repr"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def repr(a: "") -> str.type\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#repr"},"repr"),": formats its argument as a string."),(0,l.mdx)("h4",{id:"details-20"},"Details"),(0,l.mdx)("p",null,"All strings in the result are double-quoted."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'repr(1)                 == \'1\'\nrepr("x")               == "\\"x\\""\nrepr([1, "x"])          == "[1, \\"x\\"]"\nrepr("test \\"\'")        == "\\"test \\\\\\"\'\\""\nrepr("x\\"y\ud83d\ude3f \\\\\'")      == "\\"x\\\\\\"y\\\\U0001f63f \\\\\\\\\'\\""\n"#);\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"reversed"},"reversed"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def reversed(a: iter("")) -> [""]\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#reversed"},"reversed"),": reverse a sequence"),(0,l.mdx)("h4",{id:"details-21"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"reversed(x)")," returns a new list containing the elements of the iterable\nsequence x in reverse order."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'reversed([\'a\', \'b\', \'c\'])              == [\'c\', \'b\', \'a\']\nreversed(range(5))                     == [4, 3, 2, 1, 0]\nreversed("stressed".elems())           == ["d", "e", "s", "s", "e", "r", "t", "s"]\nreversed({"one": 1, "two": 2}.keys())  == ["two", "one"]\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"sorted"},"sorted"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def sorted(\n    x: iter(""),\n    *,\n    key: [None, ""] = None,\n    reverse: bool.type = None\n) -> [""]\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#sorted"},"sorted"),": sort a sequence"),(0,l.mdx)("h4",{id:"details-22"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"sorted(x)")," returns a new list containing the elements of the iterable\nsequence x, in sorted order.  The sort algorithm is stable."),(0,l.mdx)("p",null,"The optional named parameter ",(0,l.mdx)("inlineCode",{parentName:"p"},"reverse"),", if true, causes ",(0,l.mdx)("inlineCode",{parentName:"p"},"sorted")," to\nreturn results in reverse sorted order."),(0,l.mdx)("p",null,"The optional named parameter ",(0,l.mdx)("inlineCode",{parentName:"p"},"key")," specifies a function of one\nargument to apply to obtain the value's sort key.\nThe default behavior is the identity function."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'sorted([3, 1, 4, 1, 5, 9])                               == [1, 1, 3, 4, 5, 9]\nsorted([3, 1, 4, 1, 5, 9], reverse=True)                 == [9, 5, 4, 3, 1, 1]\nsorted(["two", "three", "four"], key=len)                == ["two", "four", "three"] # shortest to longest\nsorted(["two", "three", "four"], key=len, reverse=True)  == ["three", "four", "two"] # longest to shortest\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"str"},"str"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def str(a: "") -> str.type\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#str"},"str"),": formats its argument as a string."),(0,l.mdx)("h4",{id:"details-23"},"Details"),(0,l.mdx)("p",null,"If x is a string, the result is x (without quotation).\nAll other strings, such as elements of a list of strings, are\ndouble-quoted."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'str(1)                          == \'1\'\nstr("x")                        == \'x\'\nstr([1, "x"])                   == "[1, \\"x\\"]"\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"struct"},"struct"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def struct(*args, **kwargs) -> "struct"\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"tuple"},"tuple"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def tuple(a: iter("") = None) -> ""\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#tuple"},"tuple"),": returns a tuple containing the elements of the iterable x."),(0,l.mdx)("h4",{id:"details-24"},"Details"),(0,l.mdx)("p",null,"With no arguments, ",(0,l.mdx)("inlineCode",{parentName:"p"},"tuple()")," returns the empty tuple."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},"tuple() == ()\ntuple([1,2,3]) == (1, 2, 3)\n")),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"type"},"type"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def type(a: "") -> str.type\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#type"},"type"),": returns a string describing the type of its operand."),(0,l.mdx)("h4",{id:"details-25"},"Details"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'type(None)              == "NoneType"\ntype(0)                 == "int"\ntype(1)                 == "int"\ntype(())                == "tuple"\ntype("hello")           == "string"\n')),(0,l.mdx)("hr",null),(0,l.mdx)("h2",{id:"zip"},"zip"),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre",className:"language-python"},'def zip(*args) -> [""]\n')),(0,l.mdx)("p",null,(0,l.mdx)("a",{parentName:"p",href:"https://github.com/google/skylark/blob/a0e5de7e63b47e716cca7226662a4c95d47bf873/doc/spec.md#zip"},"zip"),": zip several iterables together"),(0,l.mdx)("h4",{id:"details-26"},"Details"),(0,l.mdx)("p",null,(0,l.mdx)("inlineCode",{parentName:"p"},"zip()")," returns a new list of n-tuples formed from corresponding\nelements of each of the n iterable sequences provided as arguments to\n",(0,l.mdx)("inlineCode",{parentName:"p"},"zip"),".  That is, the first tuple contains the first element of each of\nthe sequences, the second element contains the second element of each\nof the sequences, and so on.  The result list is only as long as the\nshortest of the input sequences."),(0,l.mdx)("pre",null,(0,l.mdx)("code",{parentName:"pre"},'zip()                           == []\nzip(range(5))                   == [(0,), (1,), (2,), (3,), (4,)]\nzip(range(5), "abc".elems())    == [(0, "a"), (1, "b"), (2, "c")]\n')))}m.isMDXComponent=!0}}]);