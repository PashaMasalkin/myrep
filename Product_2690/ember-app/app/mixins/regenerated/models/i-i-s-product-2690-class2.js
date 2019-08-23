import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  per21: DS.attr('string'),
  per22: DS.attr('string')
});

export let ValidationRules = {
  per21: {
    descriptionKey: 'models.i-i-s-product-2690-class2.validations.per21.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  per22: {
    descriptionKey: 'models.i-i-s-product-2690-class2.validations.per22.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Class2E', 'i-i-s-product-2690-class2', {
    per21: attr('Per21', { index: 0 }),
    per22: attr('Per22', { index: 1 })
  });

  modelClass.defineProjection('Class2L', 'i-i-s-product-2690-class2', {
    per21: attr('Per21', { index: 0 }),
    per22: attr('Per22', { index: 1 })
  });
};
