<!DOCTYPE HTML>
<%
String path = request.getContextPath();  
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";  
%>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <title>seaJsDemo</title>
</head>
<body>
    <p class="content"></p>
    <script src="<%=basePath %>statics/js/jquery-1.11.0.min.js"></script>
    <script type="text/javascript">
		(function ($) {
			 $.basePath = function() {
				 return "<%=basePath %>";
		    }
		 })(jQuery); 
	</script>
    <script src="<%=basePath %>statics/js/sea.js"></script>
    <script src="<%=basePath %>statics/js/sea-config.js"></script>
    <script>
        seajs.use('<%=basePath %>statics/modules/init', function(init) {
            init.initPage();
        });
    </script>
</body>
</html>
