/* For this task, the client wanted to enforce character limits on two fields of a form. As it was a long form, they wanted to provide
feedback along the way. Next to each field, I provided a character count of how many characters could be added before reaching
the max limit. I used some in-line style to avoid making a whole child theme to the admin theme just for these two fields. I also
disabled the submit button if the character limit was exceeded and enabled it again once the character count was equal to or
lower than the max allowed.
*/

// Set character limit indicators on the Excerpt and the Content.
jQuery(function() {
  if (jQuery('#directory-submit-page').length) {
    // Set max length of the Value Statement, the WP Excerpt
    var maxExcerptLength = 150;
    // Add a field to display the number of characters remaining
    jQuery('div.acmedir-form-field-id-3').append('<span id="excerpt-chars" style="font-family: monospace; font-size: .75em; color: red;"></span>');
    // Do maths
    jQuery('#directory-field-3').keyup(function() {
      var length = jQuery(this).val().length;
      var length = maxExcerptLength - length;
      jQuery('#excerpt-chars').text(length + ' characters remaining.');
    });
    // Client-side form validation for character count of excerpt on submit
    jQuery('#directory-field-3').blur(function() {
      var excerptLength = jQuery('#directory-field-3').val().length;
      var excerptRemaining = maxExcerptLength - excerptLength;
      if (excerptRemaining < 0) {
        jQuery('#directory-listing-form-fields > div.acmedir-form-field.terms-and-conditions.required').append('<ul class="validation-errors excerpt"><li>Sorry. Your Value Statement is longer than the allowed 150 characters. Please edit your response.</li></ul>');
        jQuery('#directory-listing-form-fields > input[type="submit"]:nth-child(48)').attr('disabled', 'disabled');
      }
      if (excerptRemaining > -1) {
        jQuery('#directory-listing-form-fields > input[type="submit"]:nth-child(48)').removeAttr('disabled');
        jQuery('ul.validation-errors.excerpt').hide();
      }
    });
    // Set max length of the Offering, the WP Content
    var maxOfferingLength = 500;
    // Add a field to display the number of characters remaining
    jQuery('div.acmedir-form-field-id-4').append('<span id="offering-chars" style="font-family: monospace; font-size: .75em; color: red"></span>');
    // Do maths
    jQuery('#directory-field-4').keyup(function() {
      var length = jQuery(this).val().length;
      var length = maxOfferingLength - length;
      jQuery('#offering-chars').text(length + ' characters remaining.');
    });
    // Client-side form validation for character count of the content on submit
    jQuery('#directory-field-4').blur(function() {
      var offeringLength = jQuery('#directory-field-4').val().length;
      var offeringRemaining = maxOfferingLength - offeringLength;
      if (offeringRemaining < 0) {
        jQuery('#directory-listing-form-fields > div.acmedir-form-field.terms-and-conditions.required').append('<ul class="validation-errors offering"><li>Sorry. Your Offering is longer than the allowed 500 characters. Please edit your response.</li></ul>');
        jQuery('#directory-listing-form-fields > input[type="submit"]:nth-child(48)').attr('disabled', 'disabled');
      }
      if (offeringRemaining > -1) {
        jQuery('#directory-listing-form-fields > input[type="submit"]:nth-child(48)').removeAttr('disabled');
        jQuery('ul.validation-errors.offering').hide();
      }
    });
  }
});
