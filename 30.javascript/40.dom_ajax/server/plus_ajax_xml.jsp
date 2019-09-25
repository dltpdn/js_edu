<?xml version="1.0" encoding="UTF-8"?>
<%@ page language="java" contentType="application/xml; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
int p1 = Integer.parseInt(request.getParameter("p1"));
int p2 = Integer.parseInt(request.getParameter("p2"));
int res = p1 + p2;
%>
<data>
	<p1 value="<%=p1%>"/>
	<p2 value="<%=p2%>"/>
	<res value="<%=res%>"/>
</data>