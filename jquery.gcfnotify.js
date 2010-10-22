/**
 * jquery.gcfnotify Adds Compatibility for Google Chrome Frame (meta tag enabling plugin) and detects plugin installation, alerting the user that the plugin is available
 * 
 * @version 1.0
 * @requires jquery 1.4.2 or >
 * @usage: include the following in your head element
		<!--[if IE]>
			<meta http-equiv="X-UA-Compatible" content="chrome=1" />
		    <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js"></script>
			<script type="text/javascript">
				// optional overrides for config
				cfnConfig = {
					imgpath: '/js/lib/jquery.gcfnotify/img/',
					msgPre: 'Please install ',
					msgLink: 'Google Chrome Frame Plugin',
					msgAfter: ' for a better experience!'
				};
			</script>
		    <script type="text/javascript" src="jquery.gcfnotify.js"></script>
		<![endif]-->
 * @author Copyright (c) 2010 Adam Eivy (antic | atomantic)
 * @license Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 */
 (function(window,document,undefined){

	/**
	 * The core plugin object
	
	 * @param obj conf Configuration option overrides
	 *
	 * @return obj an instance of the constructed library object
	 */
    var gcfnotify = window.gcfnotify = function(conf) {
        var c = objExtend(gcfnotify.defaults, conf);
        if (! (this instanceof gcfnotify)) {
            return new gcfnotify(c);
        }
        this.conf = c;
        this.init();
        return this;
    };
	/**
	 * initializer
	 */
    gcfnotify.prototype.init = function() {
        var o = this.conf,
			state = getCookie('gcf');
	    if (state == null || state == "") {
	        CFInstall.check({
	            node: "gcfbar",
	            onmissing: function () {
	                $('body').prepend('<div id="gcfbar"><img src="'+o.imgpath+'icon.png" id="gcfupdate" />'+o.msgPre+'<a href="#" onclick="gcf.load();">'+o.msgLink+'</a>'+o.msgAfter+'<img src="'+o.imgpath+'close.png" id="gcfclose" onclick="gcf.hide();"/></div>');
					$('#gcfbar').click(function(){
						// load it if they click any part of the bar
						gcf.load();
					}).slideDown(500);
	            },
	            preventPrompt: true,
	            oninstall: function () {
	                window.location.reload();
	            }
	        })
	    }
		$('head').append('<style type="text/css">#gcfbar{width:100%;padding:5px 0px;border-bottom:1px solid #666;position:absolute;top:0;left:0;text-align:center;z-index:10000;font-family:Bitstream Vera Sans,verdana,sans-serif !important;font-size:11px !important;color:#000 !important;background:#FFFFE1;cursor:default}#gcfupdate{float:left}#gcfclose{position:absolute;top:3px;right:3px;float:right;cursor:pointer}</style>');
    };
    /**
     * send to EULA for install
     */
    gcfnotify.prototype.load = function() {
		window.open('http://www.google.com/chromeframe/eula.html', 'gcf', 'menubar=no,width=800,height=450,toolbar=no,scrollbars=yes');
    };

	gcfnotify.prototype.hide = function(){
		$('#gcfbar').slideUp(300);
	    setCookie('gcf', '1', 14); // remind in 2 weeks
	};
    /**
	 * configuration defaults
	 */
    gcfnotify.defaults = {
		imgpath:'img/',
		msgPre:'Please install ',
		msgLink: 'Google Chrome Frame Plugin',
		msgAfter: ' for a better experience!'
    };
    /*
     * Cookie getter
	 * @param string n The name of the cookie to fetch
     */
	function getCookie( n ) {
		var start = document.cookie.indexOf( n + "=" );
		var len = start + n.length + 1;
		if ( ( !start ) && ( n != document.cookie.substring( 0, n.length ) ) ) {
			return null;
		}
		if ( start == -1 ) return null;
		var end = document.cookie.indexOf( ";", len );
		if ( end == -1 ) end = document.cookie.length;
		return unescape( document.cookie.substring( len, end ) );
	}
	/**
	 * Simple cookie setter
	 * @param string n The name of the cooke
	 * @param string v The value
	 * @param int days The number of days to keep
	 */
    function setCookie(n, v, days) {
        var d = new Date();
        d.setDate(d.getDate() + days);
        document.cookie = n + "=" + escape(v) + ((days === null) ? "" : ";expires=" + d.toGMTString())
    }
	/*
	 * Simple cookie delete
	 * @param string n The name of the cookie to delete
	 */
	 /*
	function deleteCookie( n ) {
		if ( getCookie( n ) ) document.cookie = n + "=;expires=Thu, 01-Jan-1970 00:00:01 GMT";
	}*/
    /**
	 * Simple object extend to override default settings
	 */
    function objExtend(o, ex) {
        if (!ex) {
            return o;
        }
        for (p in ex) {
            o[p] = ex[p];
        }
        return o;
    }
	// run on load
	$(function(){
		gcf = new gcfnotify(typeof(gcfnConfig)!=='undefined'?gcfnConfig:null)\);
	});
})(this,this.document);
