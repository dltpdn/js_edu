<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
int op1 = Integer.parseInt(request.getParameter("op1"));
int op2 = Integer.parseInt(request.getParameter("op2"));
int result = op1 + op2;
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Form Example</title>
</head>
<body>
<form>
<input type="text" name="op1" value="<%=op1%>"/> + <input type="text" name="op2" value="<%=op2%>">
<input type="submit" value="="/>
<input type="text" name="result" readonly="readonly" value="<%=result%>"/>

</form>
</body>
</html>