{
  exampleDoc: {
    typeFilter: simpleTypeFilter,
    authorizedRoles: function(doc, oldDoc) {
      return {
        write: [ 'write-' + doc._id ]
      }
    },
    propertyValidators: {
      foo: {
        type: 'string',
        required: true,
        regexPattern: /^[a-z]{3}$/
      }
    }
  }
}
