<%@ page language="java" contentType="text/html; charset=EUC-KR"
    pageEncoding="EUC-KR"%>
<%
int p1 = Integer.parseInt(request.getParameter("p1"));
int p2 = Integer.parseInt(request.getParameter("p2"));
int res = p1 + p2;
%>
<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title>Insert title here</title>
</head>
<body>
    <h1>Plus Form</h1>
    <form action="./plus_form" method="get">
        <input type="text" id="p1" name="p1" value="<%=p1%>">+
        <input type="text" id="p2" name="p2" value="<%=p2%>">
        <input type="submit" value="=" id="exe">
        <input type="text" id="result"  value="<%=res%>">
    </form>
</body>
</html>