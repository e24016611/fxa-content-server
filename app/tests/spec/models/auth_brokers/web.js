/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

define(function (require, exports, module) {
  'use strict';

  const { assert } = require('chai');
  const WebBroker = require('models/auth_brokers/web');

  describe('models/auth_brokers/web', function () {
    let broker;

    beforeEach(() => {
      broker = new WebBroker({});
    });

    describe('afterSignInConfirmationPoll', () => {
      it('returns a NavigateBehavior to settings', () => {
        return broker.afterSignInConfirmationPoll({})
          .then((behavior) => {
            assert.equal(behavior.type, 'navigate');
            assert.equal(behavior.endpoint, 'settings');
          });
      });
    });

    describe('afterSignUpConfirmationPoll', () => {
      it('returns a NavigateBehavior to settings', () => {
        return broker.afterSignUpConfirmationPoll({})
          .then((behavior) => {
            assert.equal(behavior.type, 'navigate');
            assert.equal(behavior.endpoint, 'settings');
          });
      });
    });
  });
});


