import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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

  'application-name': 'Paa',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Paa',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Paa',
          title: 'Paa'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        paa: {
          caption: 'Paa',
          title: 'Paa',
          'i-i-s-product-2690-class2-l': {
            caption: 'Class2',
            title: ''
          },
          'i-i-s-product-2690-class1-l': {
            caption: 'Class1',
            title: ''
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-product-2690-class1-l': IISProduct_2690Class1LForm,
    'i-i-s-product-2690-class2-l': IISProduct_2690Class2LForm,
    'i-i-s-product-2690-class1-e': IISProduct_2690Class1EForm,
    'i-i-s-product-2690-class2-e': IISProduct_2690Class2EForm,
  },

});

export default translations;
