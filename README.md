# accounts-ui packaged for Angular 2
Package contains one Angular 2 component-wrapper exported via "meteor-accounts-ui" System.js module.

This component simply wraps around "accounts-ui" package's _loginButtons_ template and has one "align" attribute, same as the _loginButtons_ template. For more information about "accounts-ui", please read [docs](https://atmospherejs.com/meteor/accounts-ui).

Component import line:

    import {AccountUI} from 'meteor-accounts-ui'
  
Directive usage line:
  
    <accounts-ui></accounts-ui>
