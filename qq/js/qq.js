$(function(){
    // setInterval("alert('这是进入网页执行，每隔3秒执行一次！')", 3000) 
	$(".sub").click(function(){
		$.ajax({
			type:"get",
			url:"http://test.zhituteam.com/chat/index.php?c=chat&a=chatlist",
			dataType:'json',  
	        data:'',   
	        success:function(data){
	        	console.log(data)
	        	for(var i=0;i<data.result.length;i++){
	        		var content = data.result[i].content;
		        	var result_name=data.result[i].user_name;
		        	var create_time=data.result[i].create_time;
					var name="王鹏鉴";
					if(content==""){
						alert("输入不能为空")
					}else if(result_name==name){			
						var str = "<li class='new float'><p class='detail'><span class='name'>"+result_name+"</span><span class='number'>"+create_time+"</span></p><p class='content'>"+content+"</p></li>";
				        $('.showbox ul').append(str);
				        $('.write_content').val('');
					}
					else{
						var str = "<li class='new'><p class='detail'><span class='name'>"+result_name+"</span><span class='number'>"+create_time+"</span></p><p class='content'>"+content+"</p></li>";
				        $('.showbox ul').append(str);
				        $('.write_content').val('');
					}
	        	}
	        }
		});
	})
	$.ajax({
		type:"get",
		url:"http://test.zhituteam.com/chat/index.php?c=chat&a=newChatList",
		dataType:'json',  
        data:'', 
        success:function(res){
        	alert("1")
        }  
	})
})
