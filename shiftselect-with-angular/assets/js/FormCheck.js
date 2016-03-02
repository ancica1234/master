var reSignedInteger = /^(\+|\-)?\d+$/

var reWhitespace = /^\s+$/

var reLetter = /^[a-zA-Z]$/

var reAlphabetic = /^[a-zA-Z]+$/

var reAlphanumeric = /^[a-zA-Z0-9]+$/

var reDigit = /^\d/

var reLetterOrDigit = /^([a-zA-Z]|\d)$/

var reCurrency = /^([0-9]*(\.)?[0-9]+)$/

var reInteger = /^\d+$/

//var reFloat = /^((d+(\.d*)?)|((d*\.)?d+))$/
var reFloat = /^\d+(\.\d+)?$/

var reEmail = /^.+\@.+\..+$/

var digits = "0123456789";

var whitespace = " \t\n\r";

var phoneNumberDelimiters = "()- ";

var validUSPhoneChars = digits + phoneNumberDelimiters;

var digitsInUSPhoneNumber = 10;

var ZIPCodeDelimiters = "-";

var ZIPCodeDelimeter = "-"

var validZIPCodeChars = digits + ZIPCodeDelimiters

var digitsInZIPCode1 = 5
var digitsInZIPCode2 = 9

var defaultEmptyOK = false

var timeSeparator = ':';


function isCurrency(c)
{   return reCurrency.test(c)
}

function isEmpty(s)
{   return ((s == null) || (s.length == 0))
}

function isWhitespace (s) {
    return (isEmpty(s) || reWhitespace.test(s));
}

function stripCharsInRE (s, bag)
{       return s.replace(bag, "")
}

function stripCharsInBag (s, bag)
{   var i;
    var returnString = "";


    for (i = 0; i < s.length; i++)
    {
        var c = s.charAt(i);
        if (bag.indexOf(c) == -1) returnString += c;
    }

    return returnString;
}

function stripCharsNotInBag (s, bag)
{   var i;
    var returnString = "";


    for (i = 0; i < s.length; i++)
    {
        var c = s.charAt(i);
        if (bag.indexOf(c) != -1) returnString += c;
    }

    return returnString;
}

function stripWhitespace (s)
{   return stripCharsInBag (s, whitespace)
}

function stripInitialWhitespace (s)
{   var i = 0;

    while ((i < s.length) && (whitespaceindexOf(s.charAt(i)) != -1))
       i++;

    return s.substring (i, s.length);
}

//jQuery function
function trimAllTextBoxes() {
	//get only non-empty text inputs
	$(":text").filter(function(){ return $(this).val() }).each(function(){
		var input_field = $(this);
		
		//trim the leading and trailing spaces
		input_field.val($.trim(input_field.val()));
	});
}


function isLetter (c)
{   return reLetter.test(c)
}

function isDigit (c)
{   return reDigit.test(c)
}

function isLetterOrDigit (c)
{   return reLetterOrDigit.test(c)
}

function isInteger (s)
{   var i;

    if (isEmpty(s))
       if (isInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isInteger.arguments[1] == true);

    return reInteger.test(s)
}

function isSignedInteger (s)
{   if (isEmpty(s))
       if (isSignedInteger.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedInteger.arguments[1] == true);


    else {
       return reSignedInteger.test(s)
    }
}

function isPositiveInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isPositiveInteger.arguments.length > 1)
        secondArg = isPositiveInteger.arguments[1];

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) > 0) ) );
}

function isNonnegativeInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNonnegativeInteger.arguments.length > 1)
        secondArg = isNonnegativeInteger.arguments[1];

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) >= 0) ) );
}

function isNegativeInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNegativeInteger.arguments.length > 1)
        secondArg = isNegativeInteger.arguments[1];

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) < 0) ) );
}

function isNonpositiveInteger (s)
{   var secondArg = defaultEmptyOK;

    if (isNonpositiveInteger.arguments.length > 1)
        secondArg = isNonpositiveInteger.arguments[1];

    return (isSignedInteger(s, secondArg)
         && ( (isEmpty(s) && secondArg)  || (parseInt (s) <= 0) ) );
}

function isFloat (s) {
	if (isEmpty(s)) {
		if (isFloat.arguments.length == 1) 
			return defaultEmptyOK;
		else 
			return (isFloat.arguments[1] == true);
	}
    return reFloat.test(s);
}

function isSignedFloat (s)
{   if (isEmpty(s))
       if (isSignedFloat.arguments.length == 1) return defaultEmptyOK;
       else return (isSignedFloat.arguments[1] == true);

    else {
       return reSignedFloat.test(s)
    }
}

function isAlphabetic (s)
{   var i;

    if (isEmpty(s))
       if (isAlphabetic.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphabetic.arguments[1] == true);

    else {
       return reAlphabetic.test(s)
    }
}

function isAlphanumeric (s)
{   var i;

    if (isEmpty(s))
       if (isAlphanumeric.arguments.length == 1) return defaultEmptyOK;
       else return (isAlphanumeric.arguments[1] == true);

    else {
       return reAlphanumeric.test(s)
    }
}

function reformat (s)
{   var arg;
    var sPos = 0;
    var resultString = "";

    for (var i = 1; i < reformat.arguments.length; i++) {
       arg = reformat.arguments[i];
       if (i % 2 == 1) resultString += arg;
       else {
           resultString += s.substring(sPos, sPos + arg);
           sPos += arg;
       }
    }
    return resultString;
}

function isUSPhoneNumber (s)
{   if (isEmpty(s))
       if (isUSPhoneNumber.arguments.length == 1) return defaultEmptyOK;
       else return (isUSPhoneNumber.arguments[1] == true);
    return (isInteger(s) && s.length == digitsInUSPhoneNumber)
}

function isZIPCode (s)
{  if (isEmpty(s))
       if (isZIPCode.arguments.length == 1) return defaultEmptyOK;
       else return (isZIPCode.arguments[1] == true);
   return (isInteger(s) &&
            ((s.length == digitsInZIPCode1) ||
             (s.length == digitsInZIPCode2)))
}

function isStateCode(s)
{   if (isEmpty(s))
       if (isStateCode.arguments.length == 1) return defaultEmptyOK;
       else return (isStateCode.arguments[1] == true);
    return ( (USStateCodes.indexOf(s) != -1) &&
             (s.indexOf(USStateCodeDelimiter) == -1) )
}

function isEmail (s)
{   if (isEmpty(s))
       if (isEmail.arguments.length == 1) return defaultEmptyOK;
       else return (isEmail.arguments[1] == true);

    else {
       return reEmail.test(s)
    }
}

function isIntegerInRange (s, a, b)
{   if (isEmpty(s))
       if (isIntegerInRange.arguments.length == 1) return defaultEmptyOK;
       else return (isIntegerInRange.arguments[1] == true);

    if (!isInteger(s, false)) return false;

    var num = parseInt (s);
    return ((num >= a) && (num <= b));
}

function reformatZIPCode (ZIPString)
{   if (ZIPString.length == 5) return ZIPString;
    else return (reformat (ZIPString, "", 9));
}

function checkZIPCode (theField, emptyOK) {
    var normalizedZIP = stripCharsInBag(theField, ZIPCodeDelimiters)
	return isZIPCode(normalizedZIP, false);
}

function reformatUSPhone (USPhone) {
	return (reformat (USPhone, 10))
}

function checkUSPhone (theField, emptyOK) {
    var normalizedPhone = stripCharsInBag(theField, phoneNumberDelimiters)
	return isUSPhoneNumber(normalizedPhone, false);
}

function y2k(number) { return (number < 1000) ? number + 1900 : number; }

function checkDateStr(dateString, separator) {
	var separator = '/';
	var datestrarray = dateString.split(separator);

	if (datestrarray.length != 3) {
		return false;
	}

	var month  = datestrarray[0];
	var date = datestrarray[1];
	var year  = datestrarray[2];

	var dateCheck = new Date(year, month-1, date);

	if (year != y2k(dateCheck.getYear()) || (month-1 != dateCheck.getMonth()) || (date != dateCheck.getDate())) {
		return false;
	}
	return true;
}

function checkemployeeID(idString) {
    return  idString.length >= 4 && idString.length <= 6;
}

function padstring(str, padchar, cnt) {
	var padstr = '';

	for (var i=0; i < cnt; i++) {
		padstr += padchar;
	}

	return padstr+str;
}


function formatTimeStr(val) {
	var timeStr = stripWhitespace(val);
	var hour, min;
	if (!checkTime(timeStr)) {
		alert('Incomplete or invalid time');
		return val;
	}
	if (timeStr.length >= 3 && timeStr.indexOf(timeSeparator) == -1) {
		if (timeStr.length == 3) {
			hour = timeStr.substring(0,1);
			min = timeStr.substring(1, 3);
		} else if (timeStr.length == 4) {
			hour = timeStr.substring(0,2);
			min = timeStr.substring(2, 4);
		}
	} else {
		var timeArr = timeStr.split(timeSeparator);
		hour = timeArr[0];
		min = timeArr[1];
	}
	if (hour.length < 2) {
		hour = '0' + hour;
	}
	if (min.length < 2) {
		min = '0' + min;
	}
	return hour+timeSeparator+min;
}

function checkTime(time) {
	if (isEmpty(time)) {
    	return false;
    }

	var hour;
	var min;

	if (time.indexOf(timeSeparator) != -1) {
		var timestrarray = time.split(timeSeparator);

		if (timestrarray.length != 2) {
			return false;
		}

		hour = timestrarray[0];
		min = timestrarray[1];
	} else if (time.indexOf(timeSeparator) == -1) {
		if (time.length == 3) {
			hour = time.substring(0,1);
			min = time.substring(1, 3);
		} else if (time.length == 4) {
			hour = time.substring(0,2);
			min = time.substring(2,4);
		} else {
			return false;
		}
	}

	if (!hour.match(/^([0-2]?)[0-9]$/)) {
		return false;
	}
	if (!min.match(/^[0-5][0-9]$/)) {
		return false;
	}
	if (hour > 23) {
		return false;
	}
	if (min > 59) {
		return false;
	}

	return true;
}

function checkCurrency(amount) {
	return amount.match(/^(\$)?\d+\.\d{2}$/);
}

function checkPercentage(amount) {
	return amount.match(/^\d+$/);
}

function popWin(page, name, w, h) {
        window.open(page, name, 'scrollbars=yes,resizable=yes,width='+w+',height='+h);
}

function openWindow(theURL,winName,features) {
    window.open(theURL,winName,features);
}

function popWindow(url,name,options) {
	var ContextWindow = window.open(url,name,options);
	ContextWindow.opener = this;
	ContextWindow.focus();
	}

function compareTimes (startTimeString, endTimeString, dateString) {

	var datestrarray = dateString.split('/');
	var month  = datestrarray[0];
	var date = datestrarray[1];
	var year  = datestrarray[2];

	var starttimestrarray = startTimeString.split(':');
	var starthour = starttimestrarray[0];
	var startmin = starttimestrarray[1];

	var endtimestrarray = endTimeString.split(':');
	var endhour = endtimestrarray[0];
	var endmin = endtimestrarray[1];

	var startDate = new Date(year, month-1, date, starthour, startmin);
	var endDate;
	if (Number(starthour) > Number(endhour)) {
		date++;
	}
	endDate = new Date(year, month-1, date, endhour, endmin);

	var differenceHours = (endDate - startDate)/(1000*60*60);


	if (differenceHours < 1) {
		return false;
	}

	return true;
}

function highlite(item) {
	menuItemSelected = item;
}
