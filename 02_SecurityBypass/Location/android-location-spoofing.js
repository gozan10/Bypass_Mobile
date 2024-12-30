/* 
    Description: Android GPS Location Spoofing
    Usage: frida -U -f XXXX -l android-location-spoofing.js
    Credit: @rsenet

	Link:
    	https://developer.android.com/reference/android/location/Location
*/

const lat = 10.0000000;
const lng = 10.0000000;
const alt = 10.0000000;

Java.perform(function () 
{
	var Location = Java.use("android.location.Location");

	Location.getLatitude.implementation = function() 
	{
		send("Changing Latitude to " + lat);
		return lat;
	}

	Location.getLongitude.implementation = function() 
	{
		send("Changing Longitude to " + lng);
		return lng;
	}

	Location.getAltitude.implementation = function() 
	{
		send("Changing Altitude to " + alt);
		return alt;
	}
})