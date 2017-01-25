angular.module("schemaForm").run(["$templateCache", function($templateCache) {$templateCache.put("directives/decorators/bootstrap/mask/angular-schema-form-mask.html","<div class=\"form-group\" ng-class=\"{\'has-error\': hasError()}\">\n	<label class=\"control-label\" ng-show=\"showTitle()\">{{form.title}}</label>\n    <div>\n\n		<input type=\'text\' ng-model=\'maskModel\' mask=\'{{form.schema.maskFormat}}\' repeat=\'{{form.schema.maskRepeat}}\' />\n\n    </div>\n    <span class=\"help-block\">{{ (hasError() && errorMessage(schemaError())) || (form.schema.description || form.description)}}</span>\n</div>");}]);
angular.module('schemaForm').config(
    ['schemaFormProvider', 'schemaFormDecoratorsProvider', 'sfPathProvider',
        function(schemaFormProvider,  schemaFormDecoratorsProvider, sfPathProvider) {

          var masks = function(name, schema, options) {
            if (schema.type === 'string' && schema.format === 'mask') {
              var f = schemaFormProvider.stdFormObj(name, schema, options);
              f.key  = options.path;
              f.type = 'mask';
              options.lookup[sfPathProvider.stringify(options.path)] = f;
              return f;
            }
          };

          schemaFormProvider.defaults.string.unshift(masks);
          //Add to the bootstrap directive
          schemaFormDecoratorsProvider.addMapping(
              'bootstrapDecorator',
              'mask',
              'directives/decorators/bootstrap/mask/angular-schema-form-mask.html'
          );
          schemaFormDecoratorsProvider.createDirective(
              'masks',
              'directives/decorators/bootstrap/mask/angular-schema-form-mask.html'
          );
        }
    ]);
