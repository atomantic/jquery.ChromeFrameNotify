#License#
@author Adam Eivy (antic | atomantic)  
@link [http://adameivy.com](http://adameivy.com) [http://intellectualpirates.net](http://intellectualpirates.net)  

@license Copyright (c) 2010 Adam Eivy (antic | atomantic) Dual licensed under the MIT and GPL licenses:  
 * [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)  
 * [http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html)

#Version#
1.0 - working/tested

#What it does:#

This library detects versions of IE compatible with the [http://www.google.com/chromeframe](Google Chrome Frame) plugin and alerts the user that the plugin is available for download.

#TODO:#
* Make Localization Friendly

#Usage:#

Add the following to your page:
	<!--[if IE]>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    	<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/chrome-frame/1/CFInstall.min.js"></script>
		<script type="text/javascript">
			// optional overrides for config
			gcfnConfig = {
				imgpath: '/js/lib/jquery.gcfnotify/img/',
				msgPre: 'Please install ',
				msgLink: 'Google Chrome Frame Plugin',
				msgAfter: ' for a better experience!'
			};
			</script>
    		<script type="text/javascript" src="/js/jquery.gcfnotify.js"></script>
	<![endif]-->

This plugin requires the latest version of [http://jquery.com/](jQuery). I highly recommend using the [http://code.google.com/apis/libraries/devguide.html#jquery](Google Hosted Library)

View the demo source for some more examples:
[Demo](http://atomantic.github.com/jquery.ChromeFrameNotify)