

$(function () {

function remaintime(){
	var date =new Date("may 2,2016 00:00:00") ;   //设置倒计时结束时间
	var nowdate =new Date()                                      //获取当前日期
	var remaintime=date.getTime()-nowdate.getTime();  //获取剩余时间的毫秒数
	var remainday=Math.floor(remaintime/(1000*60*60*24));  //计算天数
	var remainhour=Math.floor((remaintime-remainday*1000*60*60*24)/(1000*60*60));
	var remainminute=Math.floor((remaintime-remainday*1000*60*60*24-remainhour*1000*60*60)/(1000*60));
	var remainsecond=Math.floor((remaintime-remainday*1000*60*60*24-remainhour*1000*60*60-remainminute*1000*60)/(1000));
	//如果天，时 分 秒 小于10 在前面加0
	if(remainday<10){
		remainday="0"+remainday;
		
	}else{
		remainday+="";
	}
	if(remainhour<10){
		remainhour="0"+remainhour;
		
	}else{
		remainhour+="";
	}
	if(remainminute<10){
		remainminute="0"+remainminute;
		
	}else{
		remainminute+="";
	}
	if(remainsecond<10){
		remainsecond="0"+remainsecond;
		
	}else{
		remainsecond+="";
	}
	//分别设置两个<i>元素的内容。
	$(".the_days i:first-child").html(remainday.substr(0, 1));
	$(".the_days i:last-child").html(remainday.substr(1, 2));
	
	$(".the_hours i:first-child").html(remainhour.substr(0, 1));
	 $(".the_hours i:last-child").html(remainhour.substr(1, 2));
	 
	 $(".the_minutes i:first-child").html(remainminute.substr(0, 1));
	 $(".the_minutes i:last-child").html(remainminute.substr(1, 2));
	 
	 $(".the_seconds i:first-child").html(remainsecond.substr(0, 1));
	 $(".the_seconds i:last-child").html(remainsecond.substr(1, 2));
	
	}
	//定时器调用
	setInterval(remaintime,1000);

});


























