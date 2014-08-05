## angular-duoshuo ![release](http://img.shields.io/github/release/duoshuo/angular-duoshuo.svg)&nbsp;![npm](http://img.shields.io/npm/v/angular-duoshuo.svg)

a duoshuo SDK for angular.js, pure front-end, cross-domain request supported.

### Installation

using bower:
```
$ bower install duoshuo
```
using NPM instead of bower:

```
$ npm install angular-duoshuo
```

### Example

See more examples in `./examples`, or just run `$ npm run example`

````javascript
angular.module('myApp',['duoshuo'])
.controller('myController', function($scope, $duoshuo){
  // high level api
  $duoshuo.post('threads/create', {
    title: 'new thread',
    content: 'blablablabla'
  }, function(err, data) {
    if (err) return console.error(err);
    console.log(data);
  });
});
````

### Contributing
- Fork this repo
- Clone your repo
- Install dependencies
- Checkout a feature branch
- Feel free to add your features
- Make sure your features are fully tested
- Open a pull request, and enjoy <3

### MIT license
Copyright (c) 2014 turing &lt;o.u.turing@gmail.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the &quot;Software&quot;), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

---
![docor](https://cdn1.iconfinder.com/data/icons/windows8_icons_iconpharm/26/doctor.png)
built upon love by [docor](https://github.com/turingou/docor.git) v0.1.3