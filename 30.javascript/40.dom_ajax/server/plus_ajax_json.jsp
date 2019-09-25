<%@ page language="java" contentType="application/json; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
int p1 = Integer.parseInt(request.getParameter("p1"));
int p2 = Integer.parseInt(request.getParameter("p2"));
int res = p1 + p2;
%>
{
	"p1" :<%=p1%>,
	"p2" : <%=p2%>,
	"res" :<%=res%>
}