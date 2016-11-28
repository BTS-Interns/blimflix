/**
 * Separate configuration file for modules; wrap all code in closures
 *   https://github.com/johnpapa/angular-styleguide#style-y128
 *   https://github.com/johnpapa/angular-styleguide#style-y127
 *   https://github.com/johnpapa/angular-styleguide#style-y010
 */
(function () {
  'use strict';

  /**
   * Thin app module; place global dependencies you install in blimFlix.core; this should only contain
   * feature modules + blimFlix.core. Each sub-module (core included) needs to maintain its own list
   * of dependencies
   *   https://github.com/johnpapa/angular-styleguide#style-y161
   *   https://github.com/johnpapa/angular-styleguide#style-y162
   */

   angular.module('blimFlix', ['blimFlix.core', 'blimFlix.all', 'blimFlix.favorites', 'blimFlix.watchlist']);

})();
