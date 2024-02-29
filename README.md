# node-mimetype

We can get the mime type of files by using this package, This package is using linux mimetype library.

## Usage


Install the dependencies.

```
npm i node-mimetype

const getMimetype = require("node-mimetype");

async getMimetype(filePath, returnPossibleExtensionsList)

```
### Options

| option | type | description|
|--|--|--|
| filePath | string | absolute path to the file|
| returnPossibleExtensionsList | boolean | if it's true then it will return the possible extensions list|


Example

```
const getMimetype = require("node-mimetype");

getMimetype(path.resolve('./sample.png'), true).then(res => console.log(res));

```
