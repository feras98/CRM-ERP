var p4 = p4 || {};

var utilsModule = (function (p4) {


    function RGBtoHex(R, G, B) {
        return _toHex(R) + _toHex(G) + _toHex(B);
    }
    function _toHex(N) {
        if (N === null) return "00";
        N = parseInt(N);
        if (N === 0 || isNaN(N)) return "00";
        N = Math.max(0, N);
        N = Math.min(N, 255);
        N = Math.round(N);
        return "0123456789ABCDEF".charAt((N - N % 16) / 16)
            + "0123456789ABCDEF".charAt(N % 16);
    }
    function hsl2rgb(h, s, l) {
        var m1, m2, hue;
        var r, g, b;
        s /= 100;
        l /= 100;
        if (s === 0)
            r = g = b = (l * 255);
        else {
            if (l <= 0.5)
                m2 = l * (s + 1);
            else
                m2 = l + s - l * s;
            m1 = l * 2 - m2;
            hue = h / 360;
            r = _HueToRgb(m1, m2, hue + 1 / 3);
            g = _HueToRgb(m1, m2, hue);
            b = _HueToRgb(m1, m2, hue - 1 / 3);
        }
        return {
            r: r,
            g: g,
            b: b
        };
    }

    function _HueToRgb(m1, m2, hue) {
        var v;
        if (hue < 0)
            hue += 1;
        else if (hue > 1)
            hue -= 1;

        if (6 * hue < 1)
            v = m1 + (m2 - m1) * hue * 6;
        else if (2 * hue < 1)
            v = m2;
        else if (3 * hue < 2)
            v = m1 + (m2 - m1) * (2 / 3 - hue) * 6;
        else
            v = m1;

        return 255 * v;
    }

    function is_ctrl_key(event) {
        if (event.altKey)
            return true;
        if (event.ctrlKey)
            return true;
        if (event.metaKey)	// apple key opera
            return true;
        if (event.keyCode === 17)	// apple key opera
            return true;
        if (event.keyCode === 224)	// apple key mozilla
            return true;
        if (event.keyCode === 91)	// apple key safari
            return true;

        return false;
    }

    function is_shift_key(event) {
        if (event.shiftKey)
            return true;
        return false;
    }

    return {
        RGBtoHex: RGBtoHex,
        hsl2rgb: hsl2rgb,
        is_ctrl_key: is_ctrl_key,
        is_shift_key: is_shift_key
    };
}(p4));
;
var userModule = (function(){
    function setPref(name, value) {
        if (jQuery.data['pref_' + name] && jQuery.data['pref_' + name].abort) {
            jQuery.data['pref_' + name].abort();
            jQuery.data['pref_' + name] = false;
        }

        jQuery.data['pref_' + name] = $.ajax({
            type: "POST",
            url: "/user/preferences/",
            data: {
                prop: name,
                value: value
            },
            dataType: 'json',
            timeout: function () {
                jQuery.data['pref_' + name] = false;
            },
            error: function () {
                jQuery.data['pref_' + name] = false;
            },
            success: function (data) {
                if (data.success) {
                    humane.info(data.message);
                }
                else {
                    humane.error(data.message);
                }
                jQuery.data['pref_' + name] = false;
                return;
            }
        });
    }

    return {setPref: setPref}
})();


;/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */

(function($) {

var types = ['DOMMouseScroll', 'mousewheel'];

if ($.event.fixHooks) {
    for ( var i=types.length; i; ) {
        $.event.fixHooks[ types[--i] ] = $.event.mouseHooks;
    }
}

$.event.special.mousewheel = {
    setup: function() {
        if ( this.addEventListener ) {
            for ( var i=types.length; i; ) {
                this.addEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = handler;
        }
    },
    
    teardown: function() {
        if ( this.removeEventListener ) {
            for ( var i=types.length; i; ) {
                this.removeEventListener( types[--i], handler, false );
            }
        } else {
            this.onmousewheel = null;
        }
    }
};

$.fn.extend({
    mousewheel: function(fn) {
        return fn ? this.bind("mousewheel", fn) : this.trigger("mousewheel");
    },
    
    unmousewheel: function(fn) {
        return this.unbind("mousewheel", fn);
    }
});


function handler(event) {
    var orgEvent = event || window.event, args = [].slice.call( arguments, 1 ), delta = 0, returnValue = true, deltaX = 0, deltaY = 0;
    event = $.event.fix(orgEvent);
    event.type = "mousewheel";
    
    // Old school scrollwheel delta
    if ( orgEvent.wheelDelta ) { delta = orgEvent.wheelDelta/120; }
    if ( orgEvent.detail     ) { delta = -orgEvent.detail/3; }
    
    // New school multidimensional scroll (touchpads) deltas
    deltaY = delta;
    
    // Gecko
    if ( orgEvent.axis !== undefined && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
        deltaY = 0;
        deltaX = -1*delta;
    }
    
    // Webkit
    if ( orgEvent.wheelDeltaY !== undefined ) { deltaY = orgEvent.wheelDeltaY/120; }
    if ( orgEvent.wheelDeltaX !== undefined ) { deltaX = -1*orgEvent.wheelDeltaX/120; }
    
    // Add event and delta to the front of the arguments
    args.unshift(event, delta, deltaX, deltaY);
    
    return ($.event.dispatch || $.event.handle).apply(this, args);
}

})(jQuery);
;/* Arabic Translation for jQuery UI date picker plugin. */
/* Khaled Alhourani -- me@khaledalhourani.com */
/* NOTE: monthNames are the original months names and they are the Arabic names, not the new months name فبراير - يناير and there isn't any Arabic roots for these months */
jQuery(function($){
	$.datepicker.regional['ar'] = {
		closeText: 'إغلاق',
		prevText: '&#x3C;السابق',
		nextText: 'التالي&#x3E;',
		currentText: 'اليوم',
		monthNames: ['كانون الثاني', 'شباط', 'آذار', 'نيسان', 'مايو', 'حزيران',
		'تموز', 'آب', 'أيلول',	'تشرين الأول', 'تشرين الثاني', 'كانون الأول'],
		monthNamesShort: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
		dayNames: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
		dayNamesShort: ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'],
		dayNamesMin: ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
		weekHeader: 'أسبوع',
		dateFormat: 'dd/mm/yy',
		firstDay: 6,
  		isRTL: true,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['ar']);
});
;/* German initialisation for the jQuery UI date picker plugin. */
/* Written by Milian Wolff (mail@milianw.de). */
jQuery(function($){
	$.datepicker.regional['de'] = {
		closeText: 'Schließen',
		prevText: '&#x3C;Zurück',
		nextText: 'Vor&#x3E;',
		currentText: 'Heute',
		monthNames: ['Januar','Februar','März','April','Mai','Juni',
		'Juli','August','September','Oktober','November','Dezember'],
		monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun',
		'Jul','Aug','Sep','Okt','Nov','Dez'],
		dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
		dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
		weekHeader: 'KW',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['de']);
});
;/* Inicialización en español para la extensión 'UI date picker' para jQuery. */
/* Traducido por Vester (xvester@gmail.com). */
jQuery(function($){
	$.datepicker.regional['es'] = {
		closeText: 'Cerrar',
		prevText: '&#x3C;Ant',
		nextText: 'Sig&#x3E;',
		currentText: 'Hoy',
		monthNames: ['enero','febrero','marzo','abril','mayo','junio',
		'julio','agosto','septiembre','octubre','noviembre','diciembre'],
		monthNamesShort: ['ene','feb','mar','abr','may','jun',
		'jul','ogo','sep','oct','nov','dic'],
		dayNames: ['domingo','lunes','martes','miércoles','jueves','viernes','sábado'],
		dayNamesShort: ['dom','lun','mar','mié','juv','vie','sáb'],
		dayNamesMin: ['D','L','M','X','J','V','S'],
		weekHeader: 'Sm',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['es']);
});
;/* French initialisation for the jQuery UI date picker plugin. */
/* Written by Keith Wood (kbwood{at}iinet.com.au),
			  Stéphane Nahmani (sholby@sholby.net),
			  Stéphane Raimbault <stephane.raimbault@gmail.com> */
jQuery(function($){
	$.datepicker.regional['fr'] = {
		closeText: 'Fermer',
		prevText: 'Précédent',
		nextText: 'Suivant',
		currentText: 'Aujourd\'hui',
		monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
			'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
		monthNamesShort: ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin',
			'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
		dayNames: ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'],
		dayNamesShort: ['dim.', 'lun.', 'mar.', 'mer.', 'jeu.', 'ven.', 'sam.'],
		dayNamesMin: ['D','L','M','M','J','V','S'],
		weekHeader: 'Sem.',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['fr']);
});
;/* Dutch (UTF-8) initialisation for the jQuery UI date picker plugin. */
/* Written by Mathias Bynens <http://mathiasbynens.be/> */
jQuery(function($){
	$.datepicker.regional.nl = {
		closeText: 'Sluiten',
		prevText: '←',
		nextText: '→',
		currentText: 'Vandaag',
		monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
		'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
		monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun',
		'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
		dayNames: ['zondag', 'maandag', 'dinsdag', 'woensdag', 'donderdag', 'vrijdag', 'zaterdag'],
		dayNamesShort: ['zon', 'maa', 'din', 'woe', 'don', 'vri', 'zat'],
		dayNamesMin: ['zo', 'ma', 'di', 'wo', 'do', 'vr', 'za'],
		weekHeader: 'Wk',
		dateFormat: 'dd-mm-yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional.nl);
});
;/* English/UK initialisation for the jQuery UI date picker plugin. */
/* Written by Stuart. */
jQuery(function($){
	$.datepicker.regional['en-GB'] = {
		closeText: 'Done',
		prevText: 'Prev',
		nextText: 'Next',
		currentText: 'Today',
		monthNames: ['January','February','March','April','May','June',
		'July','August','September','October','November','December'],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		dayNamesMin: ['Su','Mo','Tu','We','Th','Fr','Sa'],
		weekHeader: 'Wk',
		dateFormat: 'dd/mm/yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['en-GB']);
});
;/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// CommonJS
		factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (value !== undefined && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setTime(+t + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {};

		// To prevent the for loop in the first place assign an empty array
		// in case there are no cookies at all. Also prevents odd result when
		// calling $.cookie().
		var cookies = document.cookie ? document.cookie.split('; ') : [];

		for (var i = 0, l = cookies.length; i < l; i++) {
			var parts = cookies[i].split('=');
			var name = decode(parts.shift());
			var cookie = parts.join('=');

			if (key && key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		if ($.cookie(key) === undefined) {
			return false;
		}

		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));
;/**
 * Copyright (c)2005-2009 Matt Kruse (javascripttoolbox.com)
 *
 * Dual licensed under the MIT and GPL licenses.
 * This basically means you can use this code however you want for
 * free, but don't claim to have written it yourself!
 * Donations always accepted: http://www.JavascriptToolbox.com/donate/
 *
 * Please do not link to the .js files on javascripttoolbox.com from
 * your site. Copy the files locally to your server instead.
 *
 */
/**
 * jquery.contextmenu.js
 * jQuery Plugin for Context Menus
 * http://www.JavascriptToolbox.com/lib/contextmenu/
 *
 * Copyright (c) 2008 Matt Kruse (javascripttoolbox.com)
 * Dual licensed under the MIT and GPL licenses.
 *
 * @version 1.0
 * @history 1.0 2008-10-20 Initial Release
 * @todo slideUp doesn't work in IE - because of iframe?
 * @todo Hide all other menus when contextmenu is shown?
 * @todo More themes
 * @todo Nested context menus
 */
;(function($){
	$.contextMenu = {
		// props add by Alchemy
		_showEvent:null,	// the original event the caused the menu to show (useful to find the original element clicked)
		_div:null,
		//
		openEvt:"contextmenu",	// ouverture sur right-click
		closeTimer:null,		// fermer le menu apres 100ms de mouseout

		shadow:true,
		dropDown:false,
		shadowOffset:0,
		shadowOffsetX:5,
		shadowOffsetY:5,
		shadowWidthAdjust:-3,
		shadowHeightAdjust:-3,
		shadowOpacity:.2,
		shadowClass:'context-menu-shadow',
		shadowColor:'black',

		offsetX:0,
		offsetY:0,
		appendTo:'body',
		direction:'down',
		constrainToScreen:true,

		showTransition:'show',
		hideTransition:'hide',
		showSpeed:'',
		hideSpeed:'',
		showCallback:null,
		hideCallback:null,

		className:'context-menu',
		itemClassName:'context-menu-item',
		itemHoverClassName:'context-menu-item-hover',
		disabledItemClassName:'context-menu-item-disabled',
		disabledItemHoverClassName:'context-menu-item-disabled-hover',
		separatorClassName:'context-menu-separator',
		innerDivClassName:'context-menu-item-inner',
		themePrefix:'context-menu-theme-',
		theme:'default',

		separator:'context-menu-separator', // A specific key to identify a separator
		target:null, // The target of the context click, to be populated when triggered
		menu:null, // The jQuery object containing the HTML object that is the menu itself
		shadowObj:null, // Shadow object
		bgiframe:null, // The iframe object for IE6
		shown:false, // Currently being shown?
		useIframe:/*@cc_on @*//*@if (@_win32) true, @else @*/false,/*@end @*/ // This is a better check than looking at userAgent!

		// Create the menu instance
		create: function(menu,opts) {
			var cmenu = $.extend({},this,opts); // Clone all default properties to created object

			// If a selector has been passed in, then use that as the menu
			if (typeof menu=="string") {
				cmenu.menu = $(menu);
			}
			// If a function has been passed in, call it each time the menu is shown to create the menu
			else if (typeof menu=="function") {
				cmenu.menuFunction = menu;
			}
			// Otherwise parse the Array passed in
			else {
				cmenu.menu = cmenu.createMenu(menu,cmenu);
			}
			if (cmenu.menu) {
				cmenu.menu.css({display:'none'});
				$(cmenu.appendTo).append(cmenu.menu);
			}

			// Create the shadow object if shadow is enabled
			if (cmenu.shadow) {
				cmenu.createShadow(cmenu); // Extracted to method for extensibility
				if (cmenu.shadowOffset) { cmenu.shadowOffsetX = cmenu.shadowOffsetY = cmenu.shadowOffset; }
			}
			$('body').bind(cmenu.openEvt,function(){cmenu.hide();}); // If right-clicked somewhere else in the document, hide this menu
			return cmenu;
		},

		// Create an iframe object to go behind the menu
		createIframe: function() {
		    return $('<iframe frameborder="0" tabindex="-1" src="javascript:false" style="display:block;position:absolute;z-index:-1;filter:Alpha(Opacity=0);"/>');
		},

		// Accept an Array representing a menu structure and turn it into HTML
		createMenu: function(menu,cmenu) {
			var className = cmenu.className;
			$.each(cmenu.theme.split(","),function(i,n){className+=' '+cmenu.themePrefix+n;});
//			var $t = $('<div style="background-color:#ffff00; xwidth:200px; height:200px"><table style="" cellspacing=0 cellpadding=0></table></div>').click(function(){cmenu.hide(); return false;}); // We wrap a table around it so width can be flexible
			var $t = $('<table style="" cellspacing="0" cellpadding="0"></table>').click(function(){cmenu.hide(); return false;}); // We wrap a table around it so width can be flexible
			var $tr = $('<tr></tr>');
			var $td = $('<td></td>');
			var $div = cmenu._div = $('<div class="'+className+'"></div>');

			cmenu._div.hover(
						function()
						{
							if(cmenu.closeTimer)
							{
								clearTimeout(cmenu.closeTimer);
								cmenu.closeTimer = null;
							}
						},
						function()
						{
							var myClass = cmenu;
							function timerRelay()
							{
								myClass.hide();
							}
							myClass.closeTimer = setTimeout(timerRelay, 500);
						}
					);

			// Each menu item is specified as either:
			//     title:function
			// or  title: { property:value ... }
/*
			for (var i=0; i<menu.length; i++) {
				var m = menu[i];
				if (m==$.contextMenu.separator) {
					$div.append(cmenu.createSeparator());
				}
				else {
					for (var opt in menu[i]) {
						$div.append(cmenu.createMenuItem(opt,menu[i][opt])); // Extracted to method for extensibility
					}
				}
			}
*/
			for (var i=0; i<menu.length; i++)
			{
				var m = menu[i];
				if (m==$.contextMenu.separator)
				{
					$div.append(cmenu.createSeparator());
				}
				else
				{
					$div.append(cmenu.createMenuItem(m)); // Extracted to method for extensibility
				}
			}
			if ( cmenu.useIframe ) {
				$td.append(cmenu.createIframe());
			}
			$t.append($tr.append($td.append($div)));
			return $t;
		},

		// Create an individual menu item
		createMenuItem: function(obj) {
			var cmenu = this;
			var label = obj.label;
			if (typeof obj=="function") { obj={onclick:obj}; } // If passed a simple function, turn it into a property of an object
			// Default properties, extended in case properties are passed
			var o = $.extend({
				onclick:function() { },
				className:'',
				hoverClassName:cmenu.itemHoverClassName,
				icon:'',
				disabled:false,
				title:'',
				hoverItem:cmenu.hoverItem,
				hoverItemOut:cmenu.hoverItemOut
			},obj);
			// If an icon is specified, hard-code the background-image style. Themes that don't show images should take this into account in their CSS
			var iconStyle = (o.icon)?'background-image:url('+o.icon+');':'';
			var $div = $('<div class="'+cmenu.itemClassName+' '+o.className+((o.disabled)?' '+cmenu.disabledItemClassName:'')+'" title="'+o.title+'"></div>')
							// If the item is disabled, don't do anything when it is clicked
							.click(
									function(e)
									{
										if(cmenu.isItemDisabled(this))
										{
											return false;
										}
										else
										{
											return o.onclick.call(cmenu.target, this, cmenu, e, label);
										}
									}
								)
							// Change the class of the item when hovered over
							.hover(
									function()
									{
										o.hoverItem.call(this,(cmenu.isItemDisabled(this))?cmenu.disabledItemHoverClassName:o.hoverClassName);
									}
									,function()
									{
										o.hoverItemOut.call(this,(cmenu.isItemDisabled(this))?cmenu.disabledItemHoverClassName:o.hoverClassName);
									}
								);
			var $idiv = $('<div class="'+cmenu.innerDivClassName+'" style="'+iconStyle+'">'+label+'</div>');
			$div.append($idiv);
			return $div;
		},

		// Create a separator row
		createSeparator: function() {
			return $('<div class="'+this.separatorClassName+'"></div>');
		},

		// Determine if an individual item is currently disabled. This is called each time the item is hovered or clicked because the disabled status may change at any time
		isItemDisabled: function(item) { return $(item).is('.'+this.disabledItemClassName); },

		// Functions to fire on hover. Extracted to methods for extensibility
		hoverItem: function(c) { $(this).addClass(c); },
		hoverItemOut: function(c) { $(this).removeClass(c); },

		// Create the shadow object
		createShadow: function(cmenu) {
			cmenu.shadowObj = $('<div class="'+cmenu.shadowClass+'"></div>').css( {display:'none',position:"absolute", zIndex:9998, opacity:cmenu.shadowOpacity, backgroundColor:cmenu.shadowColor } );
			$(cmenu.appendTo).append(cmenu.shadowObj);
		},

		// Display the shadow object, given the position of the menu itself
		showShadow: function(x,y,e) {
			var cmenu = this;
			if (cmenu.shadow) {
				cmenu.shadowObj.css( {
					width:(cmenu.menu.width()+cmenu.shadowWidthAdjust)+"px",
					height:(cmenu.menu.height()+cmenu.shadowHeightAdjust)+"px",
					top:(y+cmenu.shadowOffsetY)+"px",
					left:(x+cmenu.shadowOffsetX)+"px"
				}).addClass(cmenu.shadowClass)[cmenu.showTransition](cmenu.showSpeed);
			}
		},

		// A hook to call before the menu is shown, in case special processing needs to be done.
		// Return false to cancel the default show operation
		beforeShow: function() { return true; },

		// Show the context menu
		show: function(t,e) {
			var cmenu=this, x=e.pageX, y=e.pageY;

			if(cmenu._div)
				cmenu._div.css('height', 'auto').css('overflow-y', 'auto');

			cmenu.target = t; // Preserve the object that triggered this context menu so menu item click methods can see it
			cmenu._showEvent  = e; // Preserve the event that triggered this context menu so menu item click methods can see it
			if (cmenu.beforeShow()!==false) {
				// If the menu content is a function, call it to populate the menu each time it is displayed
				if (cmenu.menuFunction) {
					if (cmenu.menu) { $(cmenu.menu).remove(); }
					cmenu.menu = cmenu.createMenu(cmenu.menuFunction(cmenu,t),cmenu);
					cmenu.menu.css({display:'none'});
					$(cmenu.appendTo).append(cmenu.menu);
				}
				var $c = cmenu.menu;
				x+=cmenu.offsetX; y+=cmenu.offsetY;
				var pos = cmenu.getPosition(x,y,cmenu,e); // Extracted to method for extensibility
				cmenu.showShadow(pos.x,pos.y,e);
				// Resize the iframe if needed
				if (cmenu.useIframe) {
					$c.find('iframe').css({width:$c.width()+cmenu.shadowOffsetX+cmenu.shadowWidthAdjust,height:$c.height()+cmenu.shadowOffsetY+cmenu.shadowHeightAdjust});
				}
				if(cmenu.dropDown)
				{
					$c.css('visibility','hidden').show();

					var bodySize = {x:$(window).width(), y:$(window).height()};

					if($(t).offset().top+$(t).outerHeight()+$c.height()>bodySize.y)
					{
						if($(t).offset().left+$(t).outerWidth()+$c.width()>bodySize.x)
							$c.css( {top:($(t).offset().top-$c.outerHeight())+"px", left:($(t).offset().left-$c.outerWidth())+"px", position:"absolute",zIndex:9999} )[cmenu.showTransition](cmenu.showSpeed,((cmenu.showCallback)?function(){cmenu.showCallback.call(cmenu);}:null));
						else
							$c.css( {top:($(t).offset().top-$c.outerHeight())+"px", left:($(t).offset().left)+"px", position:"absolute",zIndex:9999} )[cmenu.showTransition](cmenu.showSpeed,((cmenu.showCallback)?function(){cmenu.showCallback.call(cmenu);}:null));
					}
					else
					{

						if($(t).offset().left+$(t).outerWidth()+$c.width()>bodySize.x)
							$c.css( {top:($(t).offset().top+$(t).outerHeight())+"px", left:($(t).offset().left-$c.outerWidth())+"px", position:"absolute",zIndex:9999} )[cmenu.showTransition](cmenu.showSpeed,((cmenu.showCallback)?function(){cmenu.showCallback.call(cmenu);}:null));
						else
							$c.css( {top:($(t).offset().top+$(t).outerHeight())+"px", left:($(t).offset().left)+"px", position:"absolute",zIndex:9999} )[cmenu.showTransition](cmenu.showSpeed,((cmenu.showCallback)?function(){cmenu.showCallback.call(cmenu);}:null));

					}$c.css('visibility','visible');
				}
				else
					$c.css( {top:pos.y+"px", left:pos.x+"px", position:"absolute",zIndex:9999} )[cmenu.showTransition](cmenu.showSpeed,((cmenu.showCallback)?function(){cmenu.showCallback.call(cmenu);}:null));
				cmenu.shown=true;
				$(document).one('click',null,function(){cmenu.hide();}); // Handle a single click to the document to hide the menu
			}
		},

		// Find the position where the menu should appear, given an x,y of the click event
		getPosition: function(clickX,clickY,cmenu,e) {
			var x = clickX+cmenu.offsetX;
			var y = clickY+cmenu.offsetY;
			var h = $(cmenu.menu).height();
			var w = $(cmenu.menu).width();
			var dir = cmenu.direction;
			if (cmenu.constrainToScreen)
			{
				var $w = $(window);
				var wh = $w.height();
				var ww = $w.width();
				var st = $w.scrollTop();
				var maxTop = y - st - 5;
				var maxBottom = wh+st - y - 5;
				if(h > maxBottom)
				{
					if(h > maxTop)
					{
						if(maxTop > maxBottom)
						{
							// scrollable en haut
							h = maxTop;
							cmenu._div.css('height', h+'px').css('overflow-y', 'scroll');
							y -= h;
						}
						else
						{
							// scrollable en bas
							h = maxBottom;
							cmenu._div.css('height', h+'px').css('overflow-y', 'scroll');
						}
					}
					else
					{
						// menu ok en haut
						y -= h;
					}
				}
				else
				{
					// menu ok en bas
				}

				var maxRight = x+w-$w.scrollLeft();
				if (maxRight > ww)
				{
					x -= (maxRight-ww);
				}
			}
			return {'x':x,'y':y};
		},

		// Hide the menu, of course
		hide: function() {
			var cmenu=this;
			if (cmenu.shown) {
				if (cmenu.iframe) { $(cmenu.iframe).hide(); }
				if (cmenu.menu) { cmenu.menu[cmenu.hideTransition](cmenu.hideSpeed,((cmenu.hideCallback)?function(){cmenu.hideCallback.call(cmenu);}:null)); }
				if (cmenu.shadow) { cmenu.shadowObj[cmenu.hideTransition](cmenu.hideSpeed); }
			}
			cmenu.shown = false;
		}
	};

	// This actually adds the .contextMenu() function to the jQuery namespace
	$.fn.contextMenu = function(menu,options) {
		var cmenu = $.contextMenu.create(menu,options);
		return this.each(function(){
			$(this).bind(cmenu.openEvt,function(e){
				if(cmenu.menu.is(':visible'))
					cmenu.hide();
				else
				{
					$('body').trigger(cmenu.openEvt);
					cmenu.show(this,e);
				}
				return false;
			}).bind('mouseover',function(){return false;});
		});
	};
})(jQuery);
;// import notifyLayout from "../../../../../Phraseanet-production-client/src/components/notify/notifyLayout";

var p4 = p4 || {};
var datepickerLang = [];

var commonModule = (function ($, p4) {
    $(document).ready(function () {
        $('input.input-button').hover(
            function () {
                $(this).addClass('hover');
            },
            function () {
                $(this).removeClass('hover');
            }
        );

        var locale = $.cookie('locale');

        var jq_date = p4.lng = typeof locale !== "undefined" ? locale.split('_').reverse().pop() : $('html').attr('lang');

        if (jq_date == 'en') {
            jq_date = 'en-GB';
        }

        $.datepicker.setDefaults({showMonthAfterYear: false});
        $.datepicker.setDefaults($.datepicker.regional[jq_date]);
        datepickerLang = $.datepicker.regional[jq_date];

        var cache = $('#mainMenu .helpcontextmenu');
        $('.context-menu-item', cache).hover(function () {
            $(this).addClass('context-menu-item-hover');
        }, function () {
            $(this).removeClass('context-menu-item-hover');
        });

        $('body').on('click', '.infoDialog', function (event) {
            infoDialog($(this));
        });
    });


    function showOverlay(n, appendto, callback, zIndex) {

        var div = "OVERLAY";
        if (typeof(n) != "undefined") {
            div += n;
        }
        if ($('#' + div).length === 0) {
            if (typeof(appendto) == 'undefined') {
                appendto = 'body';
            }
            $(appendto).append('<div id="' + div + '" style="display:none;">&nbsp;</div>');
        }

        var css = {
            display: 'block',
            opacity: 0,
            right: 0,
            bottom: 0,
            position: 'absolute',
            top: 0,
            zIndex: zIndex,
            left: 0
        };

        if (parseInt(zIndex) > 0) {
            css['zIndex'] = parseInt(zIndex);
        }

        if (typeof(callback) != 'function') {
            callback = function () {};
        }
        $('#' + div).css(css).addClass('overlay').fadeTo(500, 0.7).bind('click', function () {
            (callback)();
        });
        if (( navigator.userAgent.match(/msie/i) && navigator.userAgent.match(/6/) )) {
            $('select').css({
                visibility: 'hidden'
            });
        }
    }


    function hideOverlay(n) {
        if (( navigator.userAgent.match(/msie/i) && navigator.userAgent.match(/6/) )) {
            $('select').css({
                visibility: 'visible'
            });
        }
        var div = "OVERLAY";
        if (typeof(n) != "undefined") {
            div += n;
        }
        $('#' + div).hide().remove();
    }

    function infoDialog(el) {
        $("#DIALOG").attr('title', '')
            .empty()
            .append(el.attr('infos'))
            .dialog({
                title: 'About',
                autoOpen: false,
                closeOnEscape: true,
                resizable: false,
                draggable: false,
                width: 600,
                height: 400,
                modal: true,
                overlay: {
                    backgroundColor: '#000',
                    opacity: 0.7
                }
            }).dialog('open').css({'overflow-x': 'auto', 'overflow-y': 'hidden', 'padding': '0'});
    }

    /**
     * pool notifications on route /user/notifications
     *
     * @param usr_id        // the id of the user originally logged (immutable from twig)
     * @param update        // bool to refresh the counter/dropdown
     * @param recurse       // bool to re-run recursively (used by menubar)
     */
    function pollNotifications(usr_id, update, recurse) {
        var headers = {
            'update-session': recurse ? '0' : '1'       // polling should not maintain the session alive
                                                        // also : use lowercase as recomended / normalized
        };
        if(usr_id !== null) {
            headers['user-id'] = usr_id;
        }
        $.ajax({
            type: "GET",
            url: "/user/notifications/",
            dataType: 'json',
            data: {
                'offset': 0,
                'limit': 10,
                'what': 2,      // 2 : only unread
            },
            headers: headers,
            error: function (data) {
                if(data.getResponseHeader('x-phraseanet-end-session')) {
                    self.location.replace(self.location.href);  // refresh will redirect to login
                }
            },
            timeout: function () {
                if(recurse) {
                    window.setTimeout(function() { pollNotifications(usr_id, update, recurse); }, 10000);
                }
            },
            success: function (data) {
                // there is no notification bar nor a basket notification if not on prod module
                if (update) {
                    updateNotifications(data);
                }
                if(recurse) {
                    window.setTimeout(function() { pollNotifications(usr_id, update, recurse); }, 30000);
                }
            }
        })
    }

    /**
     * mark a notification as read
     *
     * @param notification_id
     * @returns {*}         // ajax promise, so the caller can add his own post-process
     */
    function markNotificationRead(notification_id) {
        return $.ajax({
            type: 'PATCH',
            url: '/user/notifications/' + notification_id + '/',
            data: {
                'read': 1
            },
            success: function () {
                // update the counter & dropdown
                pollNotifications(null, true, false);     // true:update ; false : do not recurse
            }
        });
    }

    function updateNotifications(data)
    {
        // add notification in bar

        // fill the dropdown with pre-formatted notifs (10 unread)
        //
        var $box = $('#notification_box');
        var $box_notifications = $('.notifications', $box);

        $box_notifications.empty();
        if(data.notifications.notifications.length === 0) {
            // no notification
            $('.no_notifications', $box).show();
        }
        else {
            $('.no_notifications', $box).hide();
            for (var n in data.notifications.notifications) {
                var notification = data.notifications.notifications[n];
                // add pre-formatted notif
                var $z = $(notification.html)
                // the "unread" icon is clickable to mark as read
                $('.icon_unread', $z).click(
                    notification.id,
                    function (event) {
                        markNotificationRead(event.data);
                    });
                $box_notifications.append($z);
            }
        }

        // fill the count of uread (red button)
        //
        var trigger = $('.notification_trigger');
        if(data.notifications.unread_count > 0) {
            $('.counter', trigger)
                .empty()
                .append(data.notifications.unread_count).show();
        }
        else {
            $('.counter', trigger)
                .hide()
                .empty();
        }

        // display notification about unread baskets
        //
        if (data.unread_basket_ids.length > 0) {
            var current_open = $('.SSTT.ui-state-active');
            var current_sstt = current_open.length > 0 ? current_open.attr('id').split('_').pop() : false;

            var main_open = false;
            for (var i = 0; i != data.unread_basket_ids.length; i++) {
                var sstt = $('#SSTT_' + data.unread_basket_ids[i]);
                if (sstt.size() === 0) {
                    if (main_open === false) {
                        $('#baskets .bloc').animate({'top': 30}, function () {
                            $('#baskets .alert_datas_changed:first').show()
                        });
                        main_open = true;
                    }
                }
                else {
                    if (!sstt.hasClass('active')) {
                        sstt.addClass('unread');
                    }
                    else {
                        $('.alert_datas_changed', $('#SSTT_content_' + data.unread_basket_ids[i])).show();
                    }
                }
            }
        }

        if ('' !== $.trim(data.message)) {
            if ($('#MESSAGE').length === 0) {
                $('body').append('<div id="#MESSAGE"></div>');
            }
            $('#MESSAGE')
                .empty()
                .append('<div style="margin:30px 10px;"><h4><b>' + data.message + '</b></h4></div><div style="margin:20px 0px 10px;"><label class="checkbox"><input type="checkbox" class="dialog_remove" />' + language.hideMessage + '</label></div>')
                .attr('title', 'Global Message')
                .dialog({
                    autoOpen: false,
                    closeOnEscape: true,
                    resizable: false,
                    draggable: false,
                    modal: true,
                    close: function () {
                        if ($('.dialog_remove:checked', $(this)).length > 0) {
                            // setTemporaryPref
                            $.ajax({
                                type: "POST",
                                url: "/user/preferences/temporary/",
                                data: {
                                    prop: 'message',
                                    value: 0
                                },
                                success: function (data) {
                                    return;
                                }
                            });
                        }
                    }
                })
                .dialog('open');
        }

        return true;
    }

    return {
        showOverlay: showOverlay,
        hideOverlay: hideOverlay,
        markNotificationRead: markNotificationRead,
        pollNotifications: pollNotifications,
    }

})(jQuery, p4);

;/*
 * jQuery Tooltip plugin 1.3
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-tooltip/
 * http://docs.jquery.com/Plugins/Tooltip
 *
 * Copyright (c) 2006 - 2008 J�rn Zaefferer
 *
 * $Id: jquery.tooltip.js 5741 2008-06-21 15:22:16Z joern.zaefferer $
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
/**
 * !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 * todo : find where this code is used (it's a close copy of Phraseanet-production-client/src/phraseanet-common/components/tooltip.js)
 */
(function ($) {

    // the tooltip element
    var helper = {},
    // the title of the current element, used for restoring
        title,
    // timeout id for delayed tooltips
        tID,
    // IE 5.5 or 6
        IE = ( navigator.userAgent.match(/msie/i) ) && (/MSIE\s(5\.5|6\.)/).test(navigator.userAgent),
    // flag for mouse tracking
        track = false;

    $.tooltip = {
        blocked: false,
        ajaxTimeout: false,
        ajaxRequest: false,
        ajaxEvent: false,
        current: null,
        visible: false,
        defaults: {
            delay: 700,
            fixable: false,
            fixableIndex: 100,
            fade: true,
            showURL: true,
            outside: true,
            isBrowsable: false,
            extraClass: "",
            top: 15,
            left: 15,
            id: "tooltip"
        },
        block: function () {
            $.tooltip.blocked = !$.tooltip.blocked;
        },

        delayAjax: function (a, b, c) {
            var options_serial = p4.tot_options;
            var query = p4.tot_query;
            var datas = {
                options_serial: options_serial,
                query: query
            };
            $.tooltip.ajaxRequest = $.ajax({
                url: $.tooltip.current.tooltipSrc,
                type: 'post',
                data: datas,
                success: function (data) {
                    title = data;
                    positioning($.tooltip.ajaxEvent);
                },
                "error": function () {
                    return;
                }
            });
        }
    };

    $.fn.extend({
        tooltip: function (settings) {
            settings = $.extend({}, $.tooltip.defaults, settings);
            createHelper(settings);
            return this.each(function () {
                    $.data(this, "tooltip", settings);
                    // copy tooltip into its own expando and remove the title
                    this.tooltipText = $(this).attr('title');
                    this.tooltipSrc = $(this).attr('tooltipsrc');

                    this.ajaxLoad = ($.trim(this.tooltipText) === '' && this.tooltipSrc !== '');
                    this.ajaxTimeout;

                    this.orEl = $(this);
                    $(this).removeAttr("title");
                    // also remove alt attribute to prevent default tooltip in IE
                    this.alt = "";
                })
                .mouseover(save)
                .mouseout(hide)
                .mouseleave(function () {
                    if (settings.isBrowsable) {
                        $.tooltip.currentHover = false;
                        // close caption container after a small delay
                        // (safe travel delay of the mouse between thumbnail and caption / allow user to cross
                        // boundaries without unexpected closing of the catpion)
                        setTimeout(function () {
                            hide();
                        }, 500);
                    }
                })
                .mousedown(fix);
        },
        fixPNG: IE ? function () {
            return this.each(function () {
                var image = $(this).css('backgroundImage');
                if (image.match(/^url\(["']?(.*\.png)["']?\)$/i)) {
                    image = RegExp.$1;
                    $(this).css({
                        'backgroundImage': 'none',
                        'filter': "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=crop, src='" + image + "')"
                    }).each(function () {
                        var position = $(this).css('position');
                        if (position != 'absolute' && position != 'relative')
                            $(this).css('position', 'relative');
                    });
                }
            });
        } : function () {
            return this;
        },
        unfixPNG: IE ? function () {
            return this.each(function () {
                $(this).css({
                    'filter': '',
                    backgroundImage: ''
                });
            });
        } : function () {
            return this;
        },
        hideWhenEmpty: function () {
            return this.each(function () {
                $(this)[$(this).html() ? "show" : "hide"]();
            });
        },
        url: function () {
            return this.attr('href') || this.attr('src');
        }
    });

    function createHelper(settings) {
        // there can be only one tooltip helper
        if (helper.parent)
            return;
        // create the helper, h3 for title, div for url
        helper.parent = $('<div id="' + settings.id + '"><div class="body"></div></div>')
        // add to document
            .appendTo(document.body)
            // hide it at first
            .hide();

        // apply bgiframe if available
        if ($.fn.bgiframe)
            helper.parent.bgiframe();

        // save references to title and url elements
        helper.title = $('h3', helper.parent);
        helper.body = $('div.body', helper.parent);
        helper.url = $('div.url', helper.parent);
    }

    function settings(element) {
        return $.data(element, "tooltip");
    }

    // main event handler to start showing tooltips
    function handle(event) {

        if ($($.tooltip.current).hasClass('SSTT') && $($.tooltip.current).hasClass('ui-state-active'))
            return;

        // show helper, either with timeout or on instant
        if (settings(this).delay)
            tID = setTimeout(visible, settings(this).delay);
        else
            visible();
        show();

        // if selected, update the helper position when the mouse moves
        track = !!settings(this).track;
        $(document.body).bind('mousemove', update);

        // update at least once
        update(event);
    }

    // save elements title before the tooltip is displayed
    function save(event) {
        // if this is the current source, or it has no title (occurs with click event), stop
        if (event.stopPropagation)
            event.stopPropagation();

        event.cancelBubble = true;

        if ($.tooltip.blocked || this == $.tooltip.current || (!this.tooltipText && !this.tooltipSrc && !settings(this).bodyHandler)) {
            return;
        }

        // save current
        $.tooltip.current = this;
        title = this.tooltipText;

        // if element has href or src, add and show it, otherwise hide it
        if (settings(this).showURL && $(this).url())
            helper.url.html($(this).url().replace('http://', '')).show();
        else
            helper.url.hide();

        // add an optional class for this tip
        helper.parent.removeClass();
        helper.parent.addClass(settings(this).extraClass);
        if (this.ajaxLoad) {
            clearTimeout($.tooltip.ajaxTimeout);
            $.tooltip.ajaxTimeout = setTimeout("$.tooltip.delayAjax()", 300);
            $.tooltip.ajaxEvent = event;
        }
        else {
            title = '<div class="popover" style="display:block;position:relative;">' +
                '<div class="arrow"></div>' +
                '<div class="popover-inner" style="width:auto;">' +
                '<div class="popover-content">' +
                title +
                '</div>' +
                '</div>' +
                '</div>';

            positioning.apply(this, arguments);
        }
        return;
    }


    function positioning(event) {
        helper.body.html(title);
        helper.body.show();
        var $this = $.tooltip.current;
        var tooltipSettings = settings($this) ? settings($this) : {};
        var fixedPosition = $.tooltip.blocked;
        // fix PNG background for IE
        if (tooltipSettings.fixPNG)
            helper.parent.fixPNG();
        if (tooltipSettings.outside) {
            var width = 'auto';
            var height = 'auto';
            var tooltipId = tooltipSettings.id;
            var $defaultTips = $('#' + tooltipId);
            var $audioTips = $('#' + tooltipId + ' .audioTips');
            var $imgTips = $('#' + tooltipId + ' .imgTips');
            var $videoTips = $('#' + tooltipId + ' .videoTips');
            var $documentTips = $('#' + tooltipId + ' .documentTips');
            var shouldResize = $('#' + tooltipId + ' .noToolTipResize').length === 0 ? true : false;

            // get image or video original dimensions
            var recordWidth = 260;
            var recordHeight = 0;
            var tooltipVerticalOffset = 75;
            var tooltipHorizontalOffset = 35;
            var maxWidthAllowed = 1024;
            var maxHeightAllowed = 768;
            var tooltipWidth = 0;
            var tooltipHeight = 0;
            var viewportDimensions = viewport();
            var left = 0;
            var top = 0;
            var recordWidthOffset = 0;
            var recordHeightOffset = 0;
            var topOffset = 0;
            var leftOffset = 0;
            var rightOffset = 0;
            var bottomOffset = 0;

            var $selector = $defaultTips;

            if ($imgTips[0] && shouldResize) {
                recordWidth = parseInt($imgTips[0].style.width);
                recordHeight = parseInt($imgTips[0].style.height);
                $imgTips.css({display: 'block', margin: '0 auto'});
                $selector = $imgTips;
            }

            else if ($documentTips[0] && shouldResize) {
                //add min width and height of 400 and 600 respectively
                recordWidth = $documentTips.data('original-width') > 400 ? $documentTips.data('original-width') : 400;
                recordHeight = $documentTips.data('original-width') > 400 ? $documentTips.data('original-height') : 600;
                $documentTips.css({display: 'block', margin: '0 auto'});
                $selector = $documentTips;
            }

            else if ($audioTips[0] && shouldResize) {
                recordWidth = 240;
                recordHeight = 240;
                $audioTips.css({display: 'block', margin: '0 auto'});
                $selector = $audioTips;
            }

            else if ($videoTips[0] && shouldResize) {
                recordWidth = $videoTips.data('original-width');
                recordHeight = $videoTips.data('original-height');
                // limit video to maxWidth:
                /*if( recordWidth > 720 ) {
                 var limitRatio = recordWidth/recordHeight;
                 recordWidth = 720;
                 recordHeight = recordWidth / limitRatio;
                 }*/
                $videoTips.css({display: 'block', margin: '0 auto'});
                $selector = $videoTips;
            }
            else {
                // handle captions
                var contentHeight = $selector.get(0).offsetHeight;
                shouldResize = false;
                tooltipVerticalOffset = 13;
                recordHeight = contentHeight > maxHeightAllowed ? maxHeightAllowed : contentHeight;
                $selector.css({height: 'auto'});
            }

            tooltipWidth = recordWidth + tooltipHorizontalOffset;
            tooltipHeight = recordHeight + tooltipVerticalOffset;

            var rescale = function (containerWidth, containerHeight, resourceWidth, resourceHeight, maxWidthAllowed, maxHeightAllowed, $selector) {
                var resourceRatio = resourceHeight / resourceWidth;
                var resizeW = resourceWidth;
                var resizeH = resourceHeight;

                if (resourceWidth > resourceHeight) {
                    // if width still too large:
                    if (resizeW > containerWidth) {
                        resizeW = containerWidth;
                        resizeH = containerWidth * resourceRatio;
                    }

                    if (resizeH > containerHeight) {
                        resizeW = containerHeight / resourceRatio;
                        resizeH = containerHeight;
                    }
                } else {
                    if (resizeH > containerHeight) {
                        resizeW = containerHeight / resourceRatio;
                        resizeH = containerHeight;
                    }
                }

                if (maxWidthAllowed !== undefined && maxHeightAllowed !== undefined) {
                    if (resizeW > maxWidthAllowed || resizeH > maxHeightAllowed) {
                        return rescale(maxWidthAllowed, maxHeightAllowed, resourceWidth, resourceHeight)
                    }
                }

                if ($selector !== undefined) {
                    $selector.css({width: Math.floor(resizeW), height: Math.floor(resizeH)});
                }

                return {width: Math.floor(resizeW), height: Math.floor(resizeH)};
            };


            if (event) {

                var $origEventTarget = $(event.target);

                // previewTips

                // since event target can have different positionning, try to get common closest parent:
                var $eventTarget = $origEventTarget.closest('.diapo');
                if ($eventTarget.length > 0) {
                    // tooltip from records answer
                    recordWidthOffset = $eventTarget.width()-2; // remove width with margin/2
                    recordHeightOffset = $eventTarget.height()+2; // remove height with margin/2
                    // change offsets:
                    topOffset = 14;
                    leftOffset = 1;
                    rightOffset = 2;
                    bottomOffset = -15;
                } else {
                    // tooltip from workzone (basket)
                    //tooltipVerticalOffset = 0;
                    tooltipHorizontalOffset = 0;
                    topOffset = 50;
                    // fallback on original target if nothing found:
                    $eventTarget = $origEventTarget;
                }

                var recordPosition = $eventTarget.offset();

                var totalViewportWidth = viewportDimensions.x;
                var totalViewportHeight = viewportDimensions.y;

                var leftAvailableSpace = recordPosition.left + leftOffset;
                var topAvailableSpace = recordPosition.top + topOffset;
                var rightAvailableSpace = (totalViewportWidth - leftAvailableSpace - recordWidthOffset) - rightOffset;
                var bottomAvailableSpace = (totalViewportHeight - topAvailableSpace - recordHeightOffset);

                var shouldBeOnTop = false;
                var availableHeight = bottomAvailableSpace;
                var tooltipSize = {width: tooltipWidth, height: tooltipHeight};
                var position = 'top';


                if (topAvailableSpace > bottomAvailableSpace) {
                    shouldBeOnTop = true;
                    availableHeight = topAvailableSpace;
                }

                if (leftAvailableSpace > rightAvailableSpace) {
                    position = 'left';
                } else {
                    position = 'right';
                }


                // prefer bottom position if tooltip is a small caption:
                if (bottomAvailableSpace > leftAvailableSpace && bottomAvailableSpace > rightAvailableSpace) {
                    position = 'bottom';
                } else if (shouldBeOnTop && availableHeight > leftAvailableSpace && availableHeight > rightAvailableSpace) {
                    position = 'top';
                }

                if (fixedPosition === true) {
                    leftAvailableSpace = totalViewportWidth;
                    topAvailableSpace = totalViewportHeight;
                    position = 'top';
                }

                switch (position) {
                    case 'top':
                        tooltipSize = rescale(totalViewportWidth, topAvailableSpace, tooltipWidth, tooltipHeight, maxWidthAllowed, maxHeightAllowed);
                        tooltipWidth = tooltipSize.width;
                        tooltipHeight = tooltipSize.height;
                        left = leftAvailableSpace - (tooltipSize.width / 2) + (recordWidthOffset / 2);
                        top = topAvailableSpace - tooltipSize.height;
                        break;
                    case 'bottom':
                        tooltipSize = rescale(totalViewportWidth, bottomAvailableSpace, tooltipWidth, tooltipHeight, maxWidthAllowed, maxHeightAllowed);
                        tooltipWidth = tooltipSize.width;
                        tooltipHeight = tooltipSize.height;
                        left = leftAvailableSpace - (tooltipSize.width / 2) + (recordWidthOffset / 2);
                        top = totalViewportHeight - bottomAvailableSpace + bottomOffset;
                        break;
                    case 'left':
                        tooltipSize = rescale(leftAvailableSpace, totalViewportHeight, tooltipWidth, tooltipHeight, maxWidthAllowed, maxHeightAllowed);

                        tooltipWidth = tooltipSize.width;
                        tooltipHeight = tooltipSize.height;
                        left = leftAvailableSpace - tooltipSize.width;
                        break;
                    case 'right':
                        tooltipSize = rescale(rightAvailableSpace, totalViewportHeight, tooltipWidth, tooltipHeight, maxWidthAllowed, maxHeightAllowed);
                        tooltipWidth = tooltipSize.width;
                        tooltipHeight = tooltipSize.height;
                        left = leftAvailableSpace + recordWidthOffset + rightOffset;
                        break;

                }

                // tooltipHeight = tooltipHeight + 18;
                // tooltipWidth = tooltipWidth + 28;
                if (fixedPosition === true) {
                    left = totalViewportWidth / 2 - (tooltipWidth / 2);
                    top = totalViewportHeight / 2 - (tooltipHeight / 2);
                } else {


                    // try to vertical center, relative to source:
                    if (position === 'left' || position === 'right') {
                        var verticalSpace = topAvailableSpace + (recordHeightOffset / 2) + (tooltipHeight / 2)
                        if (verticalSpace < totalViewportHeight) {
                            // tooltip can be aligned vertically
                            top = topAvailableSpace + (recordHeightOffset / 2) - (tooltipHeight / 2);
                        } else {
                            top = totalViewportHeight - tooltipHeight;
                        }
                        top = top < 0 ? 0 : top;
                    }

                    // try to horizontal center, relative to source:
                    if (position === 'top' || position === 'bottom') {
                        // push to left
                        // push to right
                        var takeLeftSpace = (tooltipWidth / 2) + leftAvailableSpace;
                        var takeRightSpace = (tooltipWidth / 2) + rightAvailableSpace;
                        // if centering on top or bottom and tooltip is offcanvas
                        if (takeLeftSpace > totalViewportWidth || takeRightSpace > totalViewportWidth) {

                            if (leftAvailableSpace > (totalViewportWidth / 2)) {
                                // push at left
                                left = 0;
                            } else {
                                // push at right
                                left = totalViewportWidth - tooltipWidth;
                            }
                        } else {
                            // center
                            left = leftAvailableSpace - (tooltipWidth / 2) + (recordWidthOffset / 2);
                        }
                    }
                }

                var resizeProperties = {
                    left: left,
                    top: top
                };

                if (shouldResize) {
                    // rescale $selector css:
                    rescale(tooltipWidth - tooltipHorizontalOffset, tooltipHeight - tooltipVerticalOffset, recordWidth, recordHeight, maxWidthAllowed, maxHeightAllowed, $selector);
                    // reset non used css properties:
                    resizeProperties['max-width'] = '';
                    resizeProperties['min-width'] = '';
                } else {
                    // ensure tooltip width match with left position
                    resizeProperties['max-width'] = Math.round(tooltipWidth);
                    resizeProperties['min-width'] = Math.round(tooltipWidth);
                }

                resizeProperties['width'] = shouldResize ? Math.round(tooltipWidth) : 'auto';
                resizeProperties['height'] = shouldResize ? Math.round(tooltipHeight) : 'auto';


                helper.parent.css(resizeProperties);
            }
        }
        handle.apply($this, arguments);
        return;
    }

    // delete timeout and show helper
    function show() {
        tID = null;
        var isBrowsable = false;
        if ($.tooltip.current !== null) {
            isBrowsable = settings($.tooltip.current).isBrowsable;
        }

        if ((!IE || !$.fn.bgiframe) && settings($.tooltip.current).fade) {
            if (helper.parent.is(":animated"))
                helper.parent.stop().show().fadeTo(settings($.tooltip.current).fade, 100);
            else
                helper.parent.is(':visible') ? helper.parent.fadeTo(settings($.tooltip.current).fade, 100) : helper.parent.fadeIn(settings($.tooltip.current).fade);
        } else {
            helper.parent.show();
        }

        $(helper.parent[0])
            .unbind('mouseenter')
            .unbind('mouseleave')
            .mouseenter(function () {
                if (isBrowsable) {
                    $.tooltip.currentHover = true;
                }
            })
            .mouseleave(function () {
                if (isBrowsable) {
                    // if tooltip has scrollable content or selectionnable text - should be closed on mouseleave:
                    $.tooltip.currentHover = false;
                    helper.parent.hide();
                }
            });

        update();
    }

    function fix(event) {
        if (!settings(this).fixable) {
            hide(event);
            return;
        }
        event.cancelBubble = true;
        if (event.stopPropagation)
            event.stopPropagation();
        commonModule.showOverlay('_tooltip', 'body', unfix_tooltip, settings(this).fixableIndex);
        $('#tooltip .tooltip_closer').show().bind('click', unfix_tooltip);
        $.tooltip.blocked = true;
        positioning.apply(this, arguments);
    }

    function visible() {
        $.tooltip.visible = true;
        helper.parent.css({
            visibility: 'visible'
        });
    }

    /**
     * callback for mousemove
     * updates the helper position
     * removes itself when no current element
     */
    function update(event) {

        if ($.tooltip.blocked)
            return;

        if (event && event.target.tagName == "OPTION") {
            return;
        }

        // stop updating when tracking is disabled and the tooltip is visible
        if (!track && helper.parent.is(":visible")) {
            $(document.body).unbind('mousemove', update);
            $.tooltip.currentHover = true;
        }

        // if no current element is available, remove this listener
        if ($.tooltip.current === null) {
            $(document.body).unbind('mousemove', update);
            $.tooltip.currentHover = false;
            return;
        }

        // remove position helper classes
        helper.parent.removeClass("viewport-right").removeClass("viewport-bottom");
        if (!settings($.tooltip.current).outside) {
            var left = helper.parent[0].offsetLeft;
            var top = helper.parent[0].offsetTop;
            helper.parent.width('auto');
            helper.parent.height('auto');
            if (event) {
                // position the helper 15 pixel to bottom right, starting from mouse position
                left = event.pageX + settings($.tooltip.current).left;
                top = event.pageY + settings($.tooltip.current).top;
                var right = 'auto';
                if (settings($.tooltip.current).positionLeft) {
                    right = $(window).width() - left;
                    left = 'auto';
                }
                helper.parent.css({
                    left: left,
                    right: right,
                    top: top
                });
            }

            var v = viewport(),
                h = helper.parent[0];
            // check horizontal position
            if (v.x + v.cx < h.offsetLeft + h.offsetWidth) {
                left -= h.offsetWidth + 20 + settings($.tooltip.current).left;
                helper.parent.css({
                    left: left + 'px'
                }).addClass("viewport-right");
            }
            // check vertical position
            if (v.y + v.cy < h.offsetTop + h.offsetHeight) {
                top -= h.offsetHeight + 20 + settings($.tooltip.current).top;
                helper.parent.css({
                    top: top + 'px'
                }).addClass("viewport-bottom");
            }
        }
    }

    function viewport() {
        return {
            x: $(window).width(),
            y: $(window).height(),

            cx: 0,
            cy: 0
        };
    }

    // hide helper and restore added classes and the title
    function hide(event) {
        var isBrowsable = false;
        if ($.tooltip.current !== null) {
            isBrowsable = settings($.tooltip.current).isBrowsable;
        }
        if ($.tooltip.currentHover && isBrowsable) {
            return;
        }

        if ($.tooltip.blocked || !$.tooltip.current)
            return;

        $(helper.parent[0])
            .unbind('mouseenter')
            .unbind('mouseleave');

        // clear timeout if possible
        if (tID)
            clearTimeout(tID);
        // no more current element
        $.tooltip.visible = false;
        var tsettings = settings($.tooltip.current);
        clearTimeout($.tooltip.ajaxTimeout);
        if ($.tooltip.ajaxRequest && $.tooltip.ajaxRequest.abort) {
            $.tooltip.ajaxRequest.abort();
        }

        helper.body.empty();
        $.tooltip.current = null;
        function complete() {
            helper.parent.removeClass(tsettings.extraClass).hide().css("opacity", "");
        }

        if ((!IE || !$.fn.bgiframe) && tsettings.fade) {
            if (helper.parent.is(':animated'))
                helper.parent.stop().fadeTo(tsettings.fade, 0, complete);
            else
                helper.parent.stop().fadeOut(tsettings.fade, complete);
        } else
            complete();

        if (tsettings.fixPNG)
            helper.parent.unfixPNG();
    }

})(jQuery);

function unfix_tooltip() {
    $.tooltip.blocked = false;
    $.tooltip.visible = false;
    $.tooltip.current = null;
    $('#tooltip').hide();
    $('#tooltip .tooltip_closer').hide();
    commonModule.hideOverlay('_tooltip');
}


$(document).bind('keydown', function (event) {
    if ($.tooltip === undefined) return;

    if (event.keyCode == 27 && $.tooltip.blocked === true) {
        unfix_tooltip();
    }
});
;;
var dialogModule = (function ($) {
    var $body = null;
    var bodySize = {};
    var _dialog = {};

    $('document').ready(function(){
        $body = $('body');

        $(window).on('resize', function () {
            bodySize.y = $body.height();
            bodySize.x = $body.width();

            //@TODO modal resize should be in a stream
            $('.overlay').height(bodySize.y).width(bodySize.x);
            //_resizeAll();
        });
    });


    function getLevel(level) {

        level = parseInt(level);

        if (isNaN(level) || level < 1) {
            return 1;
        }

        return level;
    };

    function getId(level) {
        return 'DIALOG' + getLevel(level);
    };

    function _addButtons(buttons, dialog) {
        if (dialog.options.closeButton === true) {
            buttons[language.fermer] = function () {
                dialog.close();
            };
        }
        if (dialog.options.cancelButton === true) {
            buttons[language.annuler] = function () {
                dialog.close();
            };
        }

        return buttons;
    }

    var _phraseaDialog = function (options, level) {

        var _createDialog = function (level) {

            var $dialog = $('#' + getId(level));

            if ($dialog.length > 0) {
                throw 'Dialog already exists at this level';
            }

            $dialog = $('<div style="display:none;" id="' + getId(level) + '"></div>');
            $('body').append($dialog);

            return $dialog;
        };

        var defaults = {
                size: 'Medium',
                buttons: {},
                loading: true,
                title: '',
                closeOnEscape: true,
                confirmExit: false,
                closeCallback: false,
                closeButton: false,
                cancelButton: false
            },
            options = typeof options === 'object' ? options : {},
            width,
            height,
            $dialog,
            $this = this;

        this.closing = false;

        this.options = $.extend(defaults, options);

        this.level = getLevel(level);

        this.options.buttons = _addButtons(this.options.buttons, this);

        if (/\d+x\d+/.test(this.options.size)) {
            var dimension = this.options.size.split('x');
            height = dimension[1];
            width = dimension[0];
        } else {

            bodySize.y = $body.height();
            bodySize.x = $body.width();

            switch (this.options.size) {
                case 'Full':
                    height = bodySize.y - 30;
                    width = bodySize.x - 30;
                    break;
                case 'Medium':
                    width = Math.min(bodySize.x - 30, 730);
                    height = Math.min(bodySize.y - 30, 520);
                    break;
                default:
                case 'Small':
                    width = Math.min(bodySize.x - 30, 420);
                    height = Math.min(bodySize.y - 30, 300);
                    break;
                case 'Alert':
                    width = Math.min(bodySize.x - 30, 300);
                    height = Math.min(bodySize.y - 30, 150);
                    break;
            }
        }

        /*
         * 3 avaailable dimensions :
         *
         *  - Full   | Full size ()
         *  - Medium | 420 x 450
         *  - Small  | 730 x 480
         *
         **/
        this.$dialog = _createDialog(this.level),
            zIndex = Math.min(this.level * 5000 + 5000, 32767);

        var _closeCallback = function () {
            if (typeof $this.options.closeCallback === 'function') {
                $this.options.closeCallback($this.$dialog);
            }

            if ($this.closing === false) {
                $this.closing = true;
                $this.close();
            }
        };

        if (this.$dialog.data('ui-dialog')) {
            this.$dialog.dialog('destroy');
        }

        this.$dialog.attr('title', this.options.title)
            .empty()
            .dialog({
                buttons: this.options.buttons,
                draggable: false,
                resizable: false,
                closeOnEscape: this.options.closeOnEscape,
                modal: true,
                width: width,
                height: height,
                open: function () {
                    $(this).dialog("widget").css("z-index", zIndex);
                },
                close: _closeCallback
            })
            .dialog('open').addClass('dialog-' + this.options.size);

        if (this.options.loading === true) {
            this.$dialog.addClass('loading');
        }

        if (this.options.size === 'Full') {
            var $this = this;
            $(window).unbind('resize.DIALOG' + getLevel(level))
                .bind('resize.DIALOG' + getLevel(level), function () {
                    if ($this.$dialog.data("ui-dialog")) {
                        $this.$dialog.dialog('option', {
                            width: bodySize.x - 30,
                            height: bodySize.y - 30
                        });
                    }
                });
        }

        return this;
    };

    _phraseaDialog.prototype = {
        close: function () {
            _dialog.close(this.level);
        },
        setContent: function (content) {
            this.$dialog.removeClass('loading').empty().append(content);
        },
        getId: function () {
            return this.$dialog.attr('id');
        },
        load: function (url, method, params) {
            var $this = this;
            this.loader = {
                url: url,
                method: typeof method === 'undefined' ? 'GET' : method,
                params: typeof params === 'undefined' ? {} : params
            };

            $.ajax({
                type: this.loader.method,
                url: this.loader.url,
                dataType: 'html',
                data: this.loader.params,
                beforeSend: function () {
                },
                success: function (data) {
                    $this.setContent(data);
                    return;
                },
                error: function () {
                    return;
                },
                timeout: function () {
                    return;
                }
            });
        },
        refresh: function () {
            if (typeof this.loader === 'undefined') {
                throw 'Nothing to refresh';
            }
            this.load(this.loader.url, this.loader.method, this.loader.params);
        },
        getDomElement: function () {
            return this.$dialog;
        },
        getOption: function (optionName) {
            if (this.$dialog.data("ui-dialog")) {
                return this.$dialog.dialog('option', optionName);
            }
            return null;
        },
        setOption: function (optionName, optionValue) {
            if (optionName === 'buttons') {
                optionValue = _addButtons(optionValue, this);
            }
            if (this.$dialog.data("ui-dialog")) {
                this.$dialog.dialog('option', optionName, optionValue);
            }
        }
    };

    var Dialog = function () {
        this.currentStack = {};
    };

    Dialog.prototype = {
        create: function (options, level) {

            if (this.get(level) instanceof _phraseaDialog) {
                this.get(level).close();
            }

            $dialog = new _phraseaDialog(options, level);

            this.currentStack[$dialog.getId()] = $dialog;

            return $dialog;
        },
        get: function (level) {

            var id = getId(level);

            if (id in this.currentStack) {
                return this.currentStack[id];
            }

            return null;
        },
        close: function (level) {

            $(window).unbind('resize.DIALOG' + getLevel(level));

            this.get(level).closing = true;
            var dialog = this.get(level).getDomElement();
            if (dialog.data('ui-dialog')) {
                dialog.dialog('close').dialog('destroy');
            }
            dialog.remove();

            var id = this.get(level).getId();

            if (id in this.currentStack) {
                delete this.currentStack.id;
            }
        }
    };

    _dialog = new Dialog();
    return {
        dialog: _dialog
    }

}(jQuery));
;//download.js v4.2, by dandavis; 2008-2016. [CCBY2] see http://danml.com/download.html for tests/usage
// v1 landed a FF+Chrome compat way of downloading strings to local un-named files, upgraded to use a hidden frame and optional mime
// v2 added named files via a[download], msSaveBlob, IE (10+) support, and window.URL support for larger+faster saves than dataURLs
// v3 added dataURL and Blob Input, bind-toggle arity, and legacy dataURL fallback was improved with force-download mime and base64 support. 3.1 improved safari handling.
// v4 adds AMD/UMD, commonJS, and plain browser support
// v4.1 adds url download capability via solo URL argument (same domain/CORS only)
// v4.2 adds semantic variable names, long (over 2MB) dataURL support, and hidden by default temp anchors
// https://github.com/rndme/download

(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define([], factory);
    } else if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like environments that support module.exports,
        // like Node.
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.download = factory();
    }
}(this, function () {

    return function download(data, strFileName, strMimeType) {

        var self = window, // this script is only for browsers anyway...
            defaultMime = "application/octet-stream", // this default mime also triggers iframe downloads
            mimeType = strMimeType || defaultMime,
            payload = data,
            url = !strFileName && !strMimeType && payload,
            anchor = document.createElement("a"),
            toString = function (a) {
                return String(a);
            },
            myBlob = (self.Blob || self.MozBlob || self.WebKitBlob || toString),
            fileName = strFileName || "download",
            blob,
            reader;
        myBlob = myBlob.call ? myBlob.bind(self) : Blob;

        if (String(this) === "true") { //reverse arguments, allowing download.bind(true, "text/xml", "export.xml") to act as a callback
            payload = [payload, mimeType];
            mimeType = payload[0];
            payload = payload[1];
        }


        if (url && url.length < 2048) { // if no filename and no mime, assume a url was passed as the only argument
            fileName = url.split("/").pop().split("?")[0];
            anchor.href = url; // assign href prop to temp anchor
            if (anchor.href.indexOf(url) !== -1) { // if the browser determines that it's a potentially valid url path:
                var ajax = new XMLHttpRequest();
                ajax.open("GET", url, true);
                ajax.responseType = 'blob';
                ajax.onload = function (e) {
                    download(e.target.response, fileName, defaultMime);
                };
                setTimeout(function () {
                    ajax.send();
                }, 0); // allows setting custom ajax headers using the return:
                return ajax;
            } // end if valid url?
        } // end if url?


        //go ahead and download dataURLs right away
        if (/^data\:[\w+\-]+\/[\w+\-]+[,;]/.test(payload)) {

            if (payload.length > (1024 * 1024 * 1.999) && myBlob !== toString) {
                payload = dataUrlToBlob(payload);
                mimeType = payload.type || defaultMime;
            } else {
                return navigator.msSaveBlob ?  // IE10 can't do a[download], only Blobs:
                    navigator.msSaveBlob(dataUrlToBlob(payload), fileName) :
                    saver(payload); // everyone else can save dataURLs un-processed
            }

        }//end if dataURL passed?

        blob = payload instanceof myBlob ?
            payload :
            new myBlob([payload], {type: mimeType});


        function dataUrlToBlob(strUrl) {
            var parts = strUrl.split(/[:;,]/),
                type = parts[1],
                decoder = parts[2] == "base64" ? atob : decodeURIComponent,
                binData = decoder(parts.pop()),
                mx = binData.length,
                i = 0,
                uiArr = new Uint8Array(mx);

            for (i; i < mx; ++i) uiArr[i] = binData.charCodeAt(i);

            return new myBlob([uiArr], {type: type});
        }

        function saver(url, winMode) {

            if ('download' in anchor) { //html5 A[download]
                anchor.href = url;
                anchor.setAttribute("download", fileName);
                anchor.className = "download-js-link";
                anchor.innerHTML = "downloading...";
                anchor.style.display = "none";
                document.body.appendChild(anchor);
                setTimeout(function () {
                    anchor.click();
                    document.body.removeChild(anchor);
                    if (winMode === true) {
                        setTimeout(function () {
                            self.URL.revokeObjectURL(anchor.href);
                        }, 250);
                    }
                }, 66);
                return true;
            }

            // handle non-a[download] safari as best we can:
            if (/(Version)\/(\d+)\.(\d+)(?:\.(\d+))?.*Safari\//.test(navigator.userAgent)) {
                url = url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
                if (!window.open(url)) { // popup blocked, offer direct download:
                    if (confirm("Displaying New Document\n\nUse Save As... to download, then click back to return to this page.")) {
                        location.href = url;
                    }
                }
                return true;
            }

            //do iframe dataURL download (old ch+FF):
            var f = document.createElement("iframe");
            document.body.appendChild(f);

            if (!winMode) { // force a mime that will download:
                url = "data:" + url.replace(/^data:([\w\/\-\+]+)/, defaultMime);
            }
            f.src = url;
            setTimeout(function () {
                document.body.removeChild(f);
            }, 333);

        }//end saver


        if (navigator.msSaveBlob) { // IE10+ : (has Blob, but not a[download] or URL)
            return navigator.msSaveBlob(blob, fileName);
        }

        if (self.URL) { // simple fast and modern way using Blob and URL:
            saver(self.URL.createObjectURL(blob), true);
        } else {
            // handle non-Blob()+non-URL browsers:
            if (typeof blob === "string" || blob.constructor === toString) {
                try {
                    return saver("data:" + mimeType + ";base64," + self.btoa(blob));
                } catch (y) {
                    return saver("data:" + mimeType + "," + encodeURIComponent(blob));
                }
            }

            // Blob but not URL support:
            reader = new FileReader();
            reader.onload = function (e) {
                saver(this.result);
            };
            reader.readAsDataURL(blob);
        }
        return true;
    };
    /* end download() */
}));;/*
 * bootstrap-tagsinput v0.8.0
 * 
 */

!function(a){"use strict";function b(b,c){this.isInit=!0,this.itemsArray=[],this.$element=a(b),this.$element.hide(),this.isSelect="SELECT"===b.tagName,this.multiple=this.isSelect&&b.hasAttribute("multiple"),this.objectItems=c&&c.itemValue,this.placeholderText=b.hasAttribute("placeholder")?this.$element.attr("placeholder"):"",this.inputSize=Math.max(1,this.placeholderText.length),this.$container=a('<div class="bootstrap-tagsinput"></div>'),this.$input=a('<input type="text" placeholder="'+this.placeholderText+'"/>').appendTo(this.$container),this.$element.before(this.$container),this.build(c),this.isInit=!1}function c(a,b){if("function"!=typeof a[b]){var c=a[b];a[b]=function(a){return a[c]}}}function d(a,b){if("function"!=typeof a[b]){var c=a[b];a[b]=function(){return c}}}function e(a){return a?i.text(a).html():""}function f(a){var b=0;if(document.selection){a.focus();var c=document.selection.createRange();c.moveStart("character",-a.value.length),b=c.text.length}else(a.selectionStart||"0"==a.selectionStart)&&(b=a.selectionStart);return b}function g(b,c){var d=!1;return a.each(c,function(a,c){if("number"==typeof c&&b.which===c)return d=!0,!1;if(b.which===c.which){var e=!c.hasOwnProperty("altKey")||b.altKey===c.altKey,f=!c.hasOwnProperty("shiftKey")||b.shiftKey===c.shiftKey,g=!c.hasOwnProperty("ctrlKey")||b.ctrlKey===c.ctrlKey;if(e&&f&&g)return d=!0,!1}}),d}var h={tagClass:function(a){return"label label-info"},focusClass:"focus",itemValue:function(a){return a?a.toString():a},itemText:function(a){return this.itemValue(a)},itemTitle:function(a){return null},freeInput:!0,addOnBlur:!0,maxTags:void 0,maxChars:void 0,confirmKeys:[13,44],delimiter:",",delimiterRegex:null,cancelConfirmKeysOnEmpty:!1,onTagExists:function(a,b){b.hide().fadeIn()},trimValue:!1,allowDuplicates:!1,triggerChange:!0};b.prototype={constructor:b,add:function(b,c,d){var f=this;if(!(f.options.maxTags&&f.itemsArray.length>=f.options.maxTags)&&(b===!1||b)){if("string"==typeof b&&f.options.trimValue&&(b=a.trim(b)),"object"==typeof b&&!f.objectItems)throw"Can't add objects when itemValue option is not set";if(!b.toString().match(/^\s*$/)){if(f.isSelect&&!f.multiple&&f.itemsArray.length>0&&f.remove(f.itemsArray[0]),"string"==typeof b&&"INPUT"===this.$element[0].tagName){var g=f.options.delimiterRegex?f.options.delimiterRegex:f.options.delimiter,h=b.split(g);if(h.length>1){for(var i=0;i<h.length;i++)this.add(h[i],!0);return void(c||f.pushVal(f.options.triggerChange))}}var j=f.options.itemValue(b),k=f.options.itemText(b),l=f.options.tagClass(b),m=f.options.itemTitle(b),n=a.grep(f.itemsArray,function(a){return f.options.itemValue(a)===j})[0];if(!n||f.options.allowDuplicates){if(!(f.items().toString().length+b.length+1>f.options.maxInputLength)){var o=a.Event("beforeItemAdd",{item:b,cancel:!1,options:d});if(f.$element.trigger(o),!o.cancel){f.itemsArray.push(b);var p=a('<span class="tag '+e(l)+(null!==m?'" title="'+m:"")+'">'+e(k)+'<span data-role="remove"></span></span>');p.data("item",b),f.findInputWrapper().before(p),p.after(" ");var q=a('option[value="'+encodeURIComponent(j)+'"]',f.$element).length||a('option[value="'+e(j)+'"]',f.$element).length;if(f.isSelect&&!q){var r=a("<option selected>"+e(k)+"</option>");r.data("item",b),r.attr("value",j),f.$element.append(r)}c||f.pushVal(f.options.triggerChange),(f.options.maxTags===f.itemsArray.length||f.items().toString().length===f.options.maxInputLength)&&f.$container.addClass("bootstrap-tagsinput-max"),a(".typeahead, .twitter-typeahead",f.$container).length&&f.$input.typeahead("val",""),this.isInit?f.$element.trigger(a.Event("itemAddedOnInit",{item:b,options:d})):f.$element.trigger(a.Event("itemAdded",{item:b,options:d}))}}}else if(f.options.onTagExists){var s=a(".tag",f.$container).filter(function(){return a(this).data("item")===n});f.options.onTagExists(b,s)}}}},remove:function(b,c,d){var e=this;if(e.objectItems&&(b="object"==typeof b?a.grep(e.itemsArray,function(a){return e.options.itemValue(a)==e.options.itemValue(b)}):a.grep(e.itemsArray,function(a){return e.options.itemValue(a)==b}),b=b[b.length-1]),b){var f=a.Event("beforeItemRemove",{item:b,cancel:!1,options:d});if(e.$element.trigger(f),f.cancel)return;a(".tag",e.$container).filter(function(){return a(this).data("item")===b}).remove(),a("option",e.$element).filter(function(){return a(this).data("item")===b}).remove(),-1!==a.inArray(b,e.itemsArray)&&e.itemsArray.splice(a.inArray(b,e.itemsArray),1)}c||e.pushVal(e.options.triggerChange),e.options.maxTags>e.itemsArray.length&&e.$container.removeClass("bootstrap-tagsinput-max"),e.$element.trigger(a.Event("itemRemoved",{item:b,options:d}))},removeAll:function(){var b=this;for(a(".tag",b.$container).remove(),a("option",b.$element).remove();b.itemsArray.length>0;)b.itemsArray.pop();b.pushVal(b.options.triggerChange)},refresh:function(){var b=this;a(".tag",b.$container).each(function(){var c=a(this),d=c.data("item"),f=b.options.itemValue(d),g=b.options.itemText(d),h=b.options.tagClass(d);if(c.attr("class",null),c.addClass("tag "+e(h)),c.contents().filter(function(){return 3==this.nodeType})[0].nodeValue=e(g),b.isSelect){var i=a("option",b.$element).filter(function(){return a(this).data("item")===d});i.attr("value",f)}})},items:function(){return this.itemsArray},pushVal:function(){var b=this,c=a.map(b.items(),function(a){return b.options.itemValue(a).toString()});b.$element.val(c,!0),b.options.triggerChange&&b.$element.trigger("change")},build:function(b){var e=this;if(e.options=a.extend({},h,b),e.objectItems&&(e.options.freeInput=!1),c(e.options,"itemValue"),c(e.options,"itemText"),d(e.options,"tagClass"),e.options.typeahead){var i=e.options.typeahead||{};d(i,"source"),e.$input.typeahead(a.extend({},i,{source:function(b,c){function d(a){for(var b=[],d=0;d<a.length;d++){var g=e.options.itemText(a[d]);f[g]=a[d],b.push(g)}c(b)}this.map={};var f=this.map,g=i.source(b);a.isFunction(g.success)?g.success(d):a.isFunction(g.then)?g.then(d):a.when(g).then(d)},updater:function(a){return e.add(this.map[a]),this.map[a]},matcher:function(a){return-1!==a.toLowerCase().indexOf(this.query.trim().toLowerCase())},sorter:function(a){return a.sort()},highlighter:function(a){var b=new RegExp("("+this.query+")","gi");return a.replace(b,"<strong>$1</strong>")}}))}if(e.options.typeaheadjs){var j=null,k={},l=e.options.typeaheadjs;a.isArray(l)?(j=l[0],k=l[1]):k=l,e.$input.typeahead(j,k).on("typeahead:selected",a.proxy(function(a,b){k.valueKey?e.add(b[k.valueKey]):e.add(b),e.$input.typeahead("val","")},e))}e.$container.on("click",a.proxy(function(a){e.$element.attr("disabled")||e.$input.removeAttr("disabled"),e.$input.focus()},e)),e.options.addOnBlur&&e.options.freeInput&&e.$input.on("focusout",a.proxy(function(b){0===a(".typeahead, .twitter-typeahead",e.$container).length&&(e.add(e.$input.val()),e.$input.val(""))},e)),e.$container.on({focusin:function(){e.$container.addClass(e.options.focusClass)},focusout:function(){e.$container.removeClass(e.options.focusClass)}}),e.$container.on("keydown","input",a.proxy(function(b){var c=a(b.target),d=e.findInputWrapper();if(e.$element.attr("disabled"))return void e.$input.attr("disabled","disabled");switch(b.which){case 8:if(0===f(c[0])){var g=d.prev();g.length&&e.remove(g.data("item"))}break;case 46:if(0===f(c[0])){var h=d.next();h.length&&e.remove(h.data("item"))}break;case 37:var i=d.prev();0===c.val().length&&i[0]&&(i.before(d),c.focus());break;case 39:var j=d.next();0===c.val().length&&j[0]&&(j.after(d),c.focus())}var k=c.val().length;Math.ceil(k/5);c.attr("size",Math.max(this.inputSize,c.val().length))},e)),e.$container.on("keypress","input",a.proxy(function(b){var c=a(b.target);if(e.$element.attr("disabled"))return void e.$input.attr("disabled","disabled");var d=c.val(),f=e.options.maxChars&&d.length>=e.options.maxChars;e.options.freeInput&&(g(b,e.options.confirmKeys)||f)&&(0!==d.length&&(e.add(f?d.substr(0,e.options.maxChars):d),c.val("")),e.options.cancelConfirmKeysOnEmpty===!1&&b.preventDefault());var h=c.val().length;Math.ceil(h/5);c.attr("size",Math.max(this.inputSize,c.val().length))},e)),e.$container.on("click","[data-role=remove]",a.proxy(function(b){e.$element.attr("disabled")||e.remove(a(b.target).closest(".tag").data("item"))},e)),e.options.itemValue===h.itemValue&&("INPUT"===e.$element[0].tagName?e.add(e.$element.val()):a("option",e.$element).each(function(){e.add(a(this).attr("value"),!0)}))},destroy:function(){var a=this;a.$container.off("keypress","input"),a.$container.off("click","[role=remove]"),a.$container.remove(),a.$element.removeData("tagsinput"),a.$element.show()},focus:function(){this.$input.focus()},input:function(){return this.$input},findInputWrapper:function(){for(var b=this.$input[0],c=this.$container[0];b&&b.parentNode!==c;)b=b.parentNode;return a(b)}},a.fn.tagsinput=function(c,d,e){var f=[];return this.each(function(){var g=a(this).data("tagsinput");if(g)if(c||d){if(void 0!==g[c]){if(3===g[c].length&&void 0!==e)var h=g[c](d,null,e);else var h=g[c](d);void 0!==h&&f.push(h)}}else f.push(g);else g=new b(this,c),a(this).data("tagsinput",g),f.push(g),"SELECT"===this.tagName&&a("option",a(this)).attr("selected","selected"),a(this).val(a(this).val())}),"string"==typeof c?f.length>1?f:f[0]:f},a.fn.tagsinput.Constructor=b;var i=a("<div />");a(function(){a("input[data-role=tagsinput], select[multiple][data-role=tagsinput]").tagsinput()})}(window.jQuery);
//# sourceMappingURL=bootstrap-tagsinput.min.js.map