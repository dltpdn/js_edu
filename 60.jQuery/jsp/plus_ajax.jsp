<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
 int op1= Integer.parseInt(request.getParameter("op1"));
int op2 = Integer.parseInt(request.getParameter("op2"));
int result = op1 + op2;
%>
{ 
	"op1": <%=op1 %>,
	"op2" : <%=op2 %>,
"result" : <%=result%> }