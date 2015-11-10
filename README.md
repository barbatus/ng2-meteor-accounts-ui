# accounts-ui packaged for Angular 2
Package contains one Angular 2 component-wrapper exported via "meteor-accounts-ui" System.js module.

This component simply wraps  "accounts-ui" package's _loginButtons_ view and recognizes one "align" attribute to support same name property of _loginButtons_ view (read [more](https://atmospherejs.com/meteor/accounts-ui)).

Component import line:

    import {AccountUI} from 'meteor-accounts-ui'
  
Directive usage line:
  
    <accounts-ui></accounts-ui>
