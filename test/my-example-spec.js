// Import the couchster test-fixture-maker module and the error message formatter to ease the process of writing test cases
var testFixtureMaker = require('couchster').testFixtureMaker;

describe('my example document definitions', function() {
  // Need to initialize the test fixture module the document definitions under test before every test case
  var testFixture;
  beforeEach(function() {
    testFixture = testFixtureMaker.initFromDocumentDefinitions('src/my-example-doc-definitions.js');
  });

  it('should consider the document valid when all constraints are met', function() {
    var doc = {
      _id: 'my-document-id',
      type: 'exampleDoc',
      foo: 'bar'
    }

    testFixture.verifyDocumentCreated(doc, [ 'write-' + doc._id ]);
  });

  it('should consider a value of foo that is not three letters invalid', function() {
    var doc = {
      _id: 'my-document-id',
      type: 'exampleDoc',
      foo: 'invalid'
    }

    testFixture.verifyDocumentNotCreated(
      doc,
      doc.type,
      [ testFixture.validationErrorFormatter.regexPatternItemViolation('foo', /^[a-z]{3}$/) ],
      [ 'write-' + doc._id ]);
  });
});
