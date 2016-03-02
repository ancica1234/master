<%@ taglib uri="/tags/struts-tiles" prefix="tiles" %>
<%@ taglib uri="/tags/struts-html" prefix="html" %>
<%@ taglib uri="/tags/struts-bean" prefix="bean" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="/tags/bidshiftTag" prefix="bs" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<%@include file="meta.jsp"%>
<meta http-equiv="pragma" content="no-cache">
	<title>
		API Healthcare - <bean:message key="PROGRAM_TITLE"/>
	</title>
<html:base/>

<link rel="icon" href="/images/favicon.ico" type="image/x-icon">
<link href="<html:rewrite page='/common/yui/css/menu/menu.css'/>" rel="stylesheet" type="text/css" />
<c:if test="${currentUser == null || currentUser.role == null || currentUser.role.id == 0 }">
	<bean:define id="noUser" value="true"/>
	<link href="<html:rewrite forward="oldBidderCss"/>" rel="stylesheet" type="text/css" />
	<link href="<html:rewrite forward="oldCustomBidderCss"/>" rel="stylesheet" type="text/css" />
	<link href="<html:rewrite forward="sharedCss"/>" rel="stylesheet" type="text/css" />
	<link href="<html:rewrite forward="customBidderCss"/>" rel="stylesheet" type="text/css" />
</c:if>
<c:if test="${noUser != 'true'}">
	<c:if test="${currentUser.role.adminRole || currentUser.role.monitorRole}">
		<link href="<html:rewrite forward="oldAdminCss"/>" rel="stylesheet" type="text/css" />
		<link href="<html:rewrite forward="oldCustomAdminCss"/>" rel="stylesheet" type="text/css" />
		<link href="<html:rewrite forward="sharedCss"/>" rel="stylesheet" type="text/css" />
		<link href="<html:rewrite forward="customAdminCss"/>" rel="stylesheet" type="text/css" />
	</c:if>
	<c:if test="${currentUser.role.bidderRole || currentUser.role.agencyRole}">
		<link href="<html:rewrite forward="oldBidderCss"/>" rel="stylesheet" type="text/css" />
		<link href="<html:rewrite forward="oldCustomBidderCss"/>" rel="stylesheet" type="text/css" />
		<link href="<html:rewrite forward="sharedCss"/>" rel="stylesheet" type="text/css" />
		<link href="<html:rewrite forward="customBidderCss"/>" rel="stylesheet" type="text/css" />
	</c:if>
</c:if>

<script type="text/javascript" src="<html:rewrite page='/common/FormCheck.js' />"></script>
<script type="text/javascript" src="<html:rewrite page='/common/javascripts/jquery-1.7.1.min.js' />"></script>
<script type="text/javascript" src="<html:rewrite page='/common/javascripts/jquery-ui-1.8.16.custom.min.js' />"></script>

</head>

<body bgcolor="#FFFFFF" topmargin="0" leftmargin="0" marginwidth="0" marginheight="0" onLoad='<tiles:getAsString name="onload"/>'>

	<tiles:insert beanName="header"/>

	<div id="mainContent">
		<table width="100%" border="0" cellspacing="0" cellpadding="0" align="center">
			<tr>
				<td valign="top" id="mainCell" align="center">
					<tiles:get name="message"/>
					<tiles:get name="content"/>
				</td>
			</tr>
		</table>
	</div>

	<%-- this was first created here so we can have a popup div outside
	     the content <TD> so that it doesn't get broken up by the rest of the
	     table and the footer. --%>
	<tiles:get name="extraContent"/>

	<%@include file="eccPopupBox.jsp"%>

	<tiles:get name="footer"/>

<c:if test="${noUser != 'true'}">
	<bs:AdminType roleId="${currentUser.role.id}">
		<c:set var="liveChatEnabled"><bean:message bundle="confStrings" key="bidshift.liveChatEnabled"/></c:set>
			<c:if test="${liveChatEnabled == 'true'}">
<!-- BEGIN LivePerson Monitor. --><script language='javascript'> var lpMTagConfig = {'lpServer' : "server.iad.liveperson.net",'lpNumber' : "6619818",'lpProtocol' : (document.location.toString().indexOf('https:')==0) ? 'https' : 'http'}; function lpAddMonitorTag(src){if(typeof(src)=='undefined'||typeof(src)=='object'){src=lpMTagConfig.lpMTagSrc?lpMTagConfig.lpMTagSrc:'/hcp/html/mTag.js';}if(src.indexOf('http')!=0){src=lpMTagConfig.lpProtocol+"://"+lpMTagConfig.lpServer+src+'?site='+lpMTagConfig.lpNumber;}else{if(src.indexOf('site=')<0){if(src.indexOf('?')<0)src=src+'?';else src=src+'&';src=src+'site='+lpMTagConfig.lpNumber;}};var s=document.createElement('script');s.setAttribute('type','text/javascript');s.setAttribute('charset','iso-8859-1');s.setAttribute('src',src);document.getElementsByTagName('head').item(0).appendChild(s);} if (window.attachEvent) window.attachEvent('onload',lpAddMonitorTag); else window.addEventListener("load",lpAddMonitorTag,false);</script><!-- END LivePerson Monitor. -->
	</c:if></bs:AdminType></c:if>
</body>
<head><meta http-equiv="pragma" content="no-cache"></head>
</html>
