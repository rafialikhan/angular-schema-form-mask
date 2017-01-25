# angular-schema-form-mask
An [angular schema form](https://github.com/json-schema-form/angular-schema-form) - [plugin](https://github.com/json-schema-form/angular-schema-form/blob/development/docs/extending.md) to display datefields. This plugin uses [ngMask] (http://candreoliveira.github.io/bower_components/angular-mask/examples/index.html#/), [Github] (https://github.com/candreoliveira/ngMask)

Installation
------------

The easiest way is to install is with bower, this will also include dependencies:

```bash
bower install angular-schema-form-mask --save
```

Important
---------
As this plugin depends on the ngMask, you will need to inject this dependency into your app.js

```
angular
  .module('otesFormsApp', [
    ...
    'ngMask'
  ])

```

The maks add-on adds a new form type, `mask`.

|   Form Type    |       Becomes       |
|:---------------|:-------------------:|
|   string       |  masked textfield         | 


| Schema             |   Default Form type  |
|:-------------------|:------------:|
| "type": "string" and "format": "mask"   |   masked textfield   |


Schema 
----------

```javascript
scope.schema = {
                    "type" : "object",
                    "properties": {
                        "PHONE_NUMBER":{
                            "type":"string",
                            "title":"Phone Number",
                            "format":"mask",
                            "description": "Provide your Phone number in XXX-XXX-XXX format",
                            "maskFormat": "111-111-111",
                            "maskRepeat": "0"
                        }
                    },
                    "required": ["PHONE_NUMBER"]
            };
```


## License
Released under the [MIT License](http://www.opensource.org/licenses/MIT).
