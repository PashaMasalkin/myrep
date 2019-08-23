import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  per11: DS.attr('string'),
  per12: DS.attr('string'),
  class2: DS.belongsTo('i-i-s-product-2690-class2', { inverse: null, async: false })
});

export let ValidationRules = {
  per11: {
    descriptionKey: 'models.i-i-s-product-2690-class1.validations.per11.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  per12: {
    descriptionKey: 'models.i-i-s-product-2690-class1.validations.per12.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  class2: {
    descriptionKey: 'models.i-i-s-product-2690-class1.validations.class2.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('Class1E', 'i-i-s-product-2690-class1', {
    per11: attr('Пер11', { index: 0 }),
    per12: attr('Пер12', { index: 1 }),
    class2: belongsTo('i-i-s-product-2690-class2', 'Класс2', {
      per21: attr('Пер21', { index: 3 }),
      per22: attr('Пер22', { index: 4 })
    }, { index: 2 })
  });

  modelClass.defineProjection('Class1L', 'i-i-s-product-2690-class1', {
    per11: attr('Per11', { index: 0 }),
    per12: attr('Per12', { index: 1 }),
    class2: belongsTo('i-i-s-product-2690-class2', '', {
      per21: attr('Per21', { index: 3 })
    }, { index: 2 })
  });
};
