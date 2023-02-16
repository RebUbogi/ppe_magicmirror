
/* MagicMirror² Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/configuration/introduction.html
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror² is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: [], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "metric",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		//{
  		//	module: "MMM-Face-Recognition-SMAI",
 		//	position: "center",
  		//	config: {
    				//prompt: "Put in your own text"
  		//	}
		//},
{
    module: 'MMM-MotionControl',
    config: {
        // Delay to turn the TV off
        delay: 150000,
        // Interval to check modules
        interval: 3000,
        // Use the module MMM-Facial-Recognition-OCV3
        useFacialRecognitionOCV3: false,
        // Use the module MMM-Face-Reco-DNN
        useMMMFaceRecoDNN: true,
        // Array where tv should be on
        ontime: []
    }
},
{
    module: 'MMM-Face-Reco-DNN',
    config: {
      // Logout 15 seconds after user was not detected any more
      // If they are detected within this period, the delay will start again
      logoutDelay: 15000,
      // How often the recognition starts in milliseconds
      // With a Raspberry Pi 3+ it works well every 2 seconds
      checkInterval: 2000,
      // Module set used for when there is no face detected ie no one is in front of the camera
      noFaceClass: 'noface',
      // Module set used for when there is an unknown/unrecognised face detected
      unknownClass: 'unknown',
      // Module set used for when there is a known/recognised face detected
      knownClass: 'known',
      // Module set used for strangers and if no user is detected
      defaultClass: 'default',
      // Set of modules which should be shown for any user ie when there is any face detected
      everyoneClass: 'everyone',
      // Set of modules that are always shown - show if there is a face or no face detected
      alwaysClass: 'always',
      // XML to recognize with haarcascade
      cascade: 'modules/MMM-Face-Reco-DNN/tools/haarcascade_frontalface_default.xml',
      // Pre-encoded pickle with the faces
      encodings: 'modules/MMM-Face-Reco-DNN/tools/encodings.pickle',
      // Use Raspberry Pi camera or another type
      // 1 = RasPi camera, 0 = other camera
      usePiCamera: 1,
      // Brightness, negative is darker, positive is brighter
      brightness: 0,
      // Contrast, positive value for more contrast
      contrast: 0,
      // If using another type of camera, you can choose
      // i.e. 0 = /dev/video0 or 'http://link.to/live'
      source: 0,
      // Rotate camera
      rotateCamera: 0,
      // Method of facial recognition
      // dnn = deep neural network, haar = haarcascade
      method: 'dnn',
      // Which face detection model to use
      // "hog" is less accurate but faster on CPUs
      // "cnn" is a more accurate deep-learning model which is GPU/CUDA accelerated
      detectionMethod: 'hog',
      // How long in milliseconds modules take to hide and show
      animationSpeed: 0,
      // Path to Python to run the face recognition
      // null or '' means default path
      pythonPath: null,
      // Should a welcome message be shown using the MagicMirror alerts module?
      welcomeMessage: true,
      // Dictionary for person name mapping in welcome message
      // Allows for displaying name with complex character sets in welcome message e.g. jerome => Jérôme, hideyuki => 英之
      usernameDisplayMapping: null,
      // Capture new pictures of recognized people, if unknown we save it in folder "unknown"
      // So you can extend your dataset and retrain it afterwards for better recognitions
      extendDataset: false,
      // If extendDataset is true, you need to set the full path of the dataset
      dataset: 'modules/MMM-Face-Reco-DNN/dataset/',
      // How much distance between faces to consider it a match. Lower is more strict.
      tolerance: 2,
      // allow multiple concurrent user logins, 0=no, any other number is the maximum number of concurrent logins
      multiUser: 0,
    }
},
		{
			module: 'MMM-ProfileControl',
			position: 'bottom_bar',
			config: {
				profiles: [
					['1', '2' ,'3', '4', '5']
				],
	
				horizontalActiveIcon: 'fa-eye',
	
				notifications: {
					'1' : [
						{
							notification: 'HEY_THERE',
							payload: {
								nobody: 'will react'
							}
						}
					],
					'2'  : [
						{
						notification : 'NICE TO SEE YOU !!!',
						payload: {
							nobody: 'will react'
						}
					}
					],
					'3'  : [
						{
						notification : 'NICE TO SEE YOU !!!',
						payload: {
							nobody: 'will react'
						}
					}
					],
					'4'  : [
						{
						notification : 'NICE TO SEE YOU !!!',
						payload: {
							nobody: 'will react'
						}
					}
					],
					'5'  : [
						{						notification : 'NICE TO SEE YOU !!!',
						payload: {
							nobody: 'will react'
						}
					}
					]
					
				}
			}
		},
		{
			module: "alert",

		},
		
		{
			module: "updatenotification",
			position: "top_bar"
		},
{
  module: 'MMM-SmartTouch', 
  position: 'bottom_center',    // This can be any of the regions.(bottom-center Recommended)
  },
{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},

		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				location: "Paris",
				locationID: "2968815", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "87431710b8adabc7f31b15f827d5d645"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				location: "Paris",
				locationID: "2968815", //ID from http://bulk.openweathermap.org/sample/city.list.json.gz; unzip the gz file and find your city
				apiKey: "87431710b8adabc7f31b15f827d5d645"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "https://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},

	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
