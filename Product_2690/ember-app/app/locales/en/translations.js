import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISProduct_2690Class1LForm from './forms/i-i-s-product-2690-class1-l';
import IISProduct_2690Class2LForm from './forms/i-i-s-product-2690-class2-l';
import IISProduct_2690Class1EForm from './forms/i-i-s-product-2690-class1-e';
import IISProduct_2690Class2EForm from './forms/i-i-s-product-2690-class2-e';
import IISProduct_2690Class1Model from './models/i-i-s-product-2690-class1';
import IISProduct_2690Class2Model from './models/i-i-s-product-2690-class2';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-product-2690-class1': IISProduct_2690Class1Model,
    'i-i-s-product-2690-class2': IISProduct_2690Class2Model,
  },

  'application-name': 'Application caption',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please have a cold beer...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Application caption',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Application caption',
          title: 'Application title'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        paa: {
          caption: 'paa',
          title: 'paa',
          'i-i-s-product-2690-class2-l': {
            caption: 'i-i-s-product-2690-class2-l',
            title: 'i-i-s-product-2690-class2-l'
          },
          'i-i-s-product-2690-class1-l': {
            caption: 'i-i-s-product-2690-class1-l',
            title: 'i-i-s-product-2690-class1-l'
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-product-2690-class1-l': IISProduct_2690Class1LForm,
    'i-i-s-product-2690-class2-l': IISProduct_2690Class2LForm,
    'i-i-s-product-2690-class1-e': IISProduct_2690Class1EForm,
    'i-i-s-product-2690-class2-e': IISProduct_2690Class2EForm,
  },

});

export default translations;
