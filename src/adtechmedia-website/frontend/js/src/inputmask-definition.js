/* global Inputmask */

'use strict';

Inputmask.extendDefinitions({
  'l': { // letter
    validator: '[a-zA-Z]',
    cardinality: 1
  },
  'a': { // alphanumeric
    validator: '[a-zA-Z0-9]',
    cardinality: 1
  },
  'e': { // email allowed
    validator: '[a-zA-Z0-9!#$%&\'*+-/=?^_`{|}~]',
    cardinality: 1
  },
  'h': { // domain base name
    validator: '[a-zA-Z0-9_-]',
  }
});

Inputmask.extendAliases({
  'email': {
    mask: 'l{1,}[e{1,}]@h{2,}.l{2,}[.l{2,}]',
    greedy: false,
  },
  'full_name': {
    mask: 'a{1,}[ ][a{1,}][ ][a{1,}]',
    greedy: false,
  },
  'phone': {
    mask: '(999) 999-9999',
    greedy: false,
  }
});
