#License#
@author Adam Eivy (antic | atomantic)  
@link [http://adameivy.com](http://adameivy.com) [http://intellectualpirates.net](http://intellectualpirates.net)  

@license Copyright (c) 2010 Adam Eivy (antic | atomantic) Dual licensed under the MIT and GPL licenses:  
 * [http://www.opensource.org/licenses/mit-license.php](http://www.opensource.org/licenses/mit-license.php)  
 * [http://www.gnu.org/licenses/gpl.html](http://www.gnu.org/licenses/gpl.html)

#Version#
1.0 - working/tested

#NOTE#
Google Chrome Frame will be retired on January 2014. Please read [Google's update](http://blog.chromium.org/2013/06/retiring-chrome-frame.html)

#What it does:#

This library detects versions of IE compatible with the [http://www.google.com/chromeframe](Google Chrome Frame) plugin and alerts the user that the plugin is available for install. It looks like the standard IE update bar.

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

View the demo page in IE to see a working sample:
[Demo](http://atomantic.github.com/jquery.ChromeFrameNotify)