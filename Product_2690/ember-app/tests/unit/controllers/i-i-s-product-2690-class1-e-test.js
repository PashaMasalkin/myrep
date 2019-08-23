import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:i-i-s-product-2690-class1-e', 'Unit | Controller | i-i-s-product-2690-class1-e', {
  // Specify the other units that are required for this test.
  needs: [
    'controller:flexberry-file-view-dialog',
    'controller:lookup-dialog',
    'service:detail-interaction',
    'service:objectlistview-events',
    'service:user-settings',
    'service:app-state',
  ],
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
