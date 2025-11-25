/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.nect = {
    attach: function (context, settings) {
      $('.campus-champions .hide-campus-champions').remove();
    }
  };

})(jQuery, Drupal);
