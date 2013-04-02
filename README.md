# keychest 

An application for generating keys and managing keys.

## Usage

```
var keychest = require('keychest');
keychest.createcertreq(nameofnode, function(nameofkeysandcertswithnoExstension){}

```

The default configuration for the cert request is.

```
{
  "C":"EE",
  "ST":"Harjumaa",
  "L":"Tallinn",
  "O":"Example",
  "OU":"Unit",
  "emailAddress":"admin@email.address"
}
```

If you wish to change that then create a file called ```keynames.json``` in the current working directory where your module code is creating the keychest object. 

The code will generate the key and certificate signing request in a folder called certs. 

## Tests 

```
node test/test.js
```