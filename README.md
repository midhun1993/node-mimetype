# node-mimetype

Find mime type of a file, We are finding the mime type by analyzing the signature bits so it dont have any dependencies, More fast than other libraries,

** We can identify 250+ mime types**

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
