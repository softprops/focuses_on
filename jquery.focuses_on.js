/*
 * Focuses on
 * version: 1.0
 *
 * Licensed under the MIT:
 *   http://www.opensource.org/licenses/mit-license.php
 * 
 * Doug Tangren [ d.tangren@gmail.com ]
 *
 * Usage:
 *  
 *  jQuery(document).ready(function() {
 *    jQuery('*.focuses').focuses_on() 
 *  })
 *
 *  <label for="login" class="focuses">Login</textArea>
 *  <input name="login" type="text" />
 *
 *  <label for="publish" class="focuses">Publish</textArea>
 *  <input name="publish" type="checkbox" />
 *
 *  <label for="private" class="focuses">Private</textArea>
 *  <input name="private" type="radio" />
 *    
 */
(function(jQuery) {
	jQuery.fn.focuses_on = function(o) {
	  return this.each(function() {
			new jQuery.focuses_on(this, o);
		});
	};
	jQuery.focuses_on = function (e, o) { 
	  this.options = o || {}; /* if no options are provided use defaults */
	  this.label = jQuery(e);
		this.init();
	};
	
	/*
   * Public, $.focuses_on methods
   */
	jQuery.focuses_on.fn = jQuery.focuses_on.prototype = {};
 	jQuery.focuses_on.fn.extend = jQuery.focuses_on.extend = jQuery.extend;
	jQuery.focuses_on.fn.extend({
	  /*
	   * bind click event to focusing element
	   */
		init: function() {	
		    var self = this;
		    this.label.click( function(e) {
		      self.obtain(self.label);
		    });
		},
		/*
	   * forces next element whose name is the same as target
	   * element's for attritbute value to obtain focus
	   */
		obtain: function(label) {
		  var selector = '*[name='+label.attr('for')+']';
		  var focusable = jQuery(selector);
		  focusable.each( function() {
		    switch(this.type) {
		    case "checkbox":
		    case "radio":
		      jQuery(this).attr("checked",(!this.checked));
		      break;
		    default :
		      jQuery(this).focus();
		    }
		  });
  	}
	});
})(jQuery);