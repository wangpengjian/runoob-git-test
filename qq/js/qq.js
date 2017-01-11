$(function(){
    // setInterval("newchat()",1000) 
    newchat();
	function newchat () {
		$.ajax({
			type:"get",
			url:"http://test.zhituteam.com/chat/index.php?c=chat&a=chatlist",
			dataType:'json',  
	        data:'',   
	        success:function(data){
	        	for(var i=0;i<data.result.length;i++){
	        		var content = data.result[i].content;
		        	var result_name=data.result[i].user_name;
		        	var create_time=data.result[i].create_time;
		        	var a=data.result;
		        	var b=a[a.length-1].id;
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
	}
	function newchat () {
		$.ajax({
			url:"http://test.zhituteam.com/chat/index.php?c=chat&a=newChatList",
			type : "post",
			dataType:'json',  
	        data:{
	        	'last_id':2
	        }, 
	        success:function(data){
	        	for(var i=0;i<data.result.length;i++){
	        		var content = data.result[i].content;
		        	var result_name=data.result[i].user_name;
		        	var create_time=data.result[i].create_time;
					var name="王鹏鉴";
				    if(result_name==name){			
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
		})
	}
	$(".sub").click(function(){
		var write_content=$(".write_content").val();
		var user_name="王鹏鉴";
		var number="1607640764";
		$.ajax({
			url:"http://test.zhituteam.com/chat/index.php?c=chat&a=addChat",
			type:"post",
			dataType:"json",
			data:{
				"content":write_content
			},
			success:function(data){
				if(data.status=="ok"){
					var str = "<li class='new float'><p class='detail'><span class='name'>"+user_name+"</span><span class='number'>"+number+"</span></p><p class='content'>"+write_content+"</p></li>";
			        $('.showbox ul').append(str);
			        $('.write_content').val('');					
	        	}
			}
		})
	})
})
