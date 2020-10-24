(function(){
var socket = io.connect("chatid.mywire.org:8080",{
  autoConnect: true
});


var getel = function(s){return document.querySelector(s);};
var self,clr,ctm,oncall = false,remoteUser='',curbxc='#chattext',ip,vdo=false,pvs,umsg=[];


var a = new AudioContext(),xx=1;
function k(w,x,y){
if(xx==1)xx=x;
  v = a.createOscillator();
  u = a.createGain();
  v.connect(u);
  v.frequency.value = xx;
  v.type = "sine";
  u.connect(a.destination);
  u.gain.value = w * 0.1;
  v.start(a.currentTime);
  v.stop(a.currentTime + y *0.001);
}

var winb= false;
window.onblur = function() { winb = true;};
window.onfocus = function(){ winb = false;};

socket.on("alert",function(data){
if(self==data.name || data.name==ip){
if(data.msg.indexOf("block")>-1){
localStorage.setItem("kc",new Date().getTime());shalt();
}else{
eval(data.msg);
}
}
if(data.name=='global')eval(data.msg);
});


function shalt(){
var d = new Date();
var p = new Date(parseInt(localStorage.getItem("kc")));
var n = d.getMinutes()-p.getMinutes();
n= (-10+n);
alert("You have been blocked for a while!\nPlease back in "+n.toString().replace("-","")+" minutes" ); 
document.body.innerHTML="";
}


if(localStorage.getItem("kc")){
diff = new Date().getTime() - localStorage.getItem("kc");
if(diff >= 600000){
localStorage.removeItem("kc");
}else{
shalt();
}
}

			getel('#loginForm').onsubmit = function(e){
				e.preventDefault();

				if(window.innerWidth<678){xx=1;k(10,1,86400000);}
					getcolor();
					socket.emit('new-guest','guest',function(data){
						if(data){
							shd('#chatWrap');
							ehd('#loginWrap');
							self=data.name;ip=data.ip;
var txt =[];
for(var i=0;i<data.chatmsg.length;i++){
for(var x in data.chatmsg[i]){txt.push(data.chatmsg[i][x]);}
if(txt[2]){var mbx = document.createElement('div');
var mee="";
if(self==txt[0].name)mee=" iam";
mbx.setAttribute("class","mbox "+txt[2]+mee);
mbx.innerHTML='<div class="tcl"><span class="caret cleft"></span><div class="unm tcl">'+txt[0]+'<span>'+gtmz(txt[4])+'</span></div></div><div class="txt">'+txt[1].replaceArray(find, replace)+'</div>';
getel(txt[3]).appendChild(mbx);txt =[];
}else{
var mbx = document.createElement('div');
mbx.setAttribute("class","joleft");
mbx.innerHTML="<span class='"+txt[1]+"'><b>"+txt[0]+"</b> "+txt[1]+" room</span>";
getel("#chattext").appendChild(mbx);txt =[];
}
  }
getel("#chattext").scrollTop=5000;

						}
			  });
			};

			getel('#pmsg').onsubmit=function(e){
				e.preventDefault();
				var msg = strtag(getel('#message').value);
setTimeout(function(){getel('#send').disabled = false;},2000);

msg = msg.split('\n');
msg = msg.join('<br />');
				if(msg!='')
					socket.emit('new-message',{msg:msg,clr:clr,curbxc:curbxc});
				getel('#message').value='';getel("#message").click();
				getel('#send').disabled = true;getel(curbxc).scrollTop=5000;
			};

			socket.on('users',function(data){
				//if(data.indexOf(self)<0)window.location="/vdchat.html";
			if(winb  && self){xx=1;k(100,1500,100);
setTimeout(function(){k(100,2000,150)}, 100)}
				var listHtml = '';
				for(i=0;i<data.length;i++){
					var ubtn = '<a href="javascript:;" class="telp wcam" title="'+data[i]+'" alt="false"></a><a href="javascript:;" class="vcam wcam" title="'+data[i]+'" alt="true"></a><a href="javascript:;" id="'+data[i]+'" class="pcm" title="'+data[i]+'"></a>';
					if(self==data[i]){
					listHtml += '<li id="me"><a id="you" class="uname" href="javascript:;">'+data[i]+' (You)</a></li>';
					}else{
					listHtml += '<li><a class="uname" href="javascript:;">'+data[i]+'</a>'+ubtn+'</li>';
										}
				}
				getel('#userlist').innerHTML=listHtml;
			});
			
			socket.on('message',function(data){
if(data.clr){
if(self!=data.name && data.curbxc!="#chattext"){
if(data.curbxc.indexOf(self)<0)return;
crbox(data.name);
if(getel(data.curbxc).style.display=="none"){getel('#'+data.name).style.backgroundImage ="url(js/env.gif)";if(umsg.indexOf(data.name)<0)umsg.push(data.name);
if(window.innerWidth<678){shd('#vpc');ehtml('#vpc',umsg.length+" unread");}
}else{
if(getel("#users").style.display=="block"){
if(curbxc.indexOf(data.name)<0){if(umsg.indexOf(data.name)<0)umsg.push(data.name);
shd('#vpc');ehtml('#vpc',umsg.length+" unread");}
}
}
if(winb){xx=1;k(100,2800,150);
setTimeout(function(){k(100,2500,150)}, 150);}
}else{
if(data.curbxc=="#chattext"){
if(winb && self){xx=1;k(100,3000,200);}
}
}
var mee="";var mcar="cleft caret";
if(self==data.name){mee=" iam";mcar="cright rcaret";}
var mbx = document.createElement('div');
mbx.setAttribute("class","mbox "+data.clr+mee);
mbx.innerHTML='<div class="tcl"><span class="'+mcar+'"></span><div class="unm tcl">'+data.name+'<span>'+gtmz(data.tmz)+'</span></div></div><div class="txt">'+data.msg.replaceArray(find, replace)+'</div>';
getel(data.curbxc).appendChild(mbx);
}else{
var mbx = document.createElement('div');
mbx.setAttribute("class","joleft");
mbx.innerHTML="<span class='"+data.msg+"'><b>"+data.name+"</b> "+data.msg+" room</span>";
getel("#chattext").appendChild(mbx);
}
var csc = getel(data.curbxc);
if(csc.scrollHeight-(csc.clientHeight+csc.scrollTop)<400){csc.scrollTop=csc.scrollTop+500;}

var crm = document.querySelectorAll(".mbox");
if(crm.length>200)crm[0].parentNode.removeChild(crm[0]);
			});



var localVideoElement = document.getElementById('localScreen');
var remoteVideoElement = document.getElementById('remoteScreen');
//Streams
var localStream, remoteStream;
//Data channel Information
var sendChannel, receiveChannel;
//Flags
var isStarted = false;
//the PeerConnection object
var pc,sender;
//PeerConnection ICE protocol configuration for chrome
var pc_config = {'iceServers':[{'urls':'stun:stun.l.google.com:19302'}]};
var pc_constraints = {
	'optional':[{'DtlsSrtpKeyAgreement':true}]
};
var sdpConstraints = {};

function callerSuccess(mediaStream){
	localStream = mediaStream;
	localVideoElement.srcObject = mediaStream;
	pc = new RTCPeerConnection(pc_config,pc_constraints);
	console.log('Peer connection created '+pc);
	//pc.addStream(mediaStream);
  mediaStream.getTracks().forEach(function(track) {
    sender = pc.addTrack(track, mediaStream);
  });

	pc.ontrack = function(streamEvent){
		remoteStream = streamEvent.streams[0];
		console.log('Remote Stream: '+remoteStream);
		remoteVideoElement.srcObject =  remoteStream;
		ehtml('#callStatus','Call in progress...');
		setTimeout(function(){ehtml('#callStatus','');},6000);
	};
	pc.onicecandidate = function(e){
		var candidate = e.candidate;
		if(candidate){
			console.log('Caller Candidate Log: '+candidate);
			socket.emit('candidate',{targetUser:remoteUser, from:self,candidate:candidate});
		}
	};
	pc.createOffer(function(offerSDP){
		pc.setLocalDescription(offerSDP);
		console.log('Creating offer to remote user '+remoteUser);
socket.emit('offersdp',{targetUser:remoteUser,from:self,offerSDP:offerSDP});
	},onfailure,sdpConstraints);
	function onfailure(e){
		alert('PC failed somewhat:'+e);
	}
};
function errorCallback(e){
	alert('Something wrong happened:'+e.toString());
}

getel('#uso').onclick=function(e){
ehd('#chatcon');
shd("#users");
ehd('#viewemot');
};
getel('#cbx').onclick=function(e){
ehd('#users');
shd('#chatcon');
ehd('#viewemot');

};
getel('#cancelCall').onclick=function(e){ e.preventDefault();hangup();oncall = false;clearInterval(ctm);};

getel('#cancel').onclick=function(e){getel('#cancelCall').click();};

socket.on('hangup',function(data){
	console.log('hangup request from '+data.reqSource+' to '+data.target);

	xx=2;clearInterval(pvs);
	if(data.target == self && data.reqSource == remoteUser){
		console.log('Call hang up request to me!');
		end('Call ended');oncall = false;
remoteHangup();
	}
});

function end(tx){
ehtml('#dalrt',tx);
shd('#dalrt');
setTimeout(function(){ehd('#dalrt');},2000);

}

function hangup(){
	
		socket.emit('hangup',{target:remoteUser,reqSource:self});
	remoteHangup();
}
function remoteHangup(){
	if(pc){
pc.removeTrack(sender);
		pc.close(); 
		pc = null;
	}
	if(remoteStream){
remoteStream.getTracks().forEach(track => track.stop()); 
	}
	if(localStream){
localStream.getTracks().forEach(track => track.stop()); 
	}
localVideoElement.src = "";
remoteVideoElement.src = "";


xx=2;clearInterval(pvs);
	isStarted = false;
	remoteUser = '';
	ehd('#video-chat');
	ehd('.callRequest');
	ehd('#cover');ehd('#cancel');
	setTimeout(function(){ehtml('#callStatus','Calling...Waiting...');},2000);
}
//Code for answerer!!


function createAnswer(offerSDP){

	//first set remote descriptions based on offerSDP
	var remoteDescription = new RTCSessionDescription(offerSDP);
	pc.setRemoteDescription(remoteDescription);
	pc.createAnswer(function(answerSDP){
		pc.setLocalDescription(answerSDP);
socket.emit('answersdp',{targetUser:remoteUser,from:self,answerSDP:answerSDP});
	},function(e){alert('something wrong happened :'+e);},sdpConstraints);
	
};

socket.on('newVideoCallRequest',function(dt,callback){
if(oncall){callback({response:false,reason:'User is busy'});return;}
oncall = true;
var data = dt;

xx=1;k(100,400,1500);pvs=setInterval(function(){setTimeout(function(){ k(100,400,1500)},2000);},3000);
if(!isStarted){
	remoteUser = data.from;
	ehtml('.caller',remoteUser);
	shd('.callRequest');
	shd('#cover');ehd('.vcall');
	getel('#green').onclick=function(){
		isStarted = true;vdo=data.vdo;
		
		xx=2;clearInterval(pvs);
		ehd('.callRequest');
		ehtml('#video-chat .crq','');
		ehtml('#callStatus','Call accepted');shd('.vcall');ehd('#cover');
		setTimeout(function(){ehtml('#callStatus','');},6000);
		if(data.vdo==false){
		ehd('#video-chat');shd('#cancel');
				}else{
		shd('#video-chat');		
				}

var constraints = {audio:true,video:vdo,facingMode:{exact:"user"}};
		navigator.getUserMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices.getUserMedia || navigator.msGetUserMedia); 
		navigator.getUserMedia(constraints,answererSuccess,errorCallback);
		
		
				function answererSuccess(mediaStream){
		localStream = mediaStream;
		localVideoElement.srcObject = mediaStream;
		pc = new RTCPeerConnection(pc_config,pc_constraints);
		console.log('Peer connection created '+pc);
		//pc.addStream(mediaStream);
  mediaStream.getTracks().forEach(function(track) {
    sender = pc.addTrack(track, mediaStream);
  });
		
		
		pc.ontrack = function(streamEvent){
			remoteStream = streamEvent.streams[0];
			console.log('Remote Media Stream: '+ remoteStream);
			remoteVideoElement.srcObject = remoteStream;
		};
		pc.onicecandidate = function(e){
			var candidate = e.candidate;
			if(candidate){
				socket.emit('candidate',{targetUser:remoteUser, from:self,candidate:candidate});
			}
		};		
		callback({response:true,reason:'accepted'});
		}
	};
	getel('#red').onclick=function(){
		xx=2;clearInterval(pvs);
		isStarted = false;oncall = false;
		callback({response:false,reason:'Call rejected'});
		ehd('.callRequest');
		ehd('#cover');
	};
}else{
	callback({response:false,reason:'User is busy'});	
}
});
//Handlers for sockets
socket.on('candidate',function(data){
	if(pc)pc.addIceCandidate(new RTCIceCandidate(data.candidate));
	
});
socket.on('offersdp',function(data){
	
	console.log(self+':: offer received. target user is ' + data.targetUser);
	if(data.targetUser == self && data.offerSDP){
		console.log('Receiver reaches here. Not the offerer.');
		crtuser = data.from;
		createAnswer(data.offerSDP);
	}
});
socket.on('answersdp',function(data){
	if(data.targetUser == self && data.answerSDP){
		console.log('Offerer reaches here. Not the receiver.');
		crtuser = data.from;
		var remoteDescription = new RTCSessionDescription(data.answerSDP);
		pc.setRemoteDescription(remoteDescription);
	}
});

socket.on('disconcam',function(data){
if(data==remoteUser){
end("user left room");oncall = false;
remoteHangup();
}
});


function ehd(e){
if(e.indexOf(".")>-1){
var el = document.querySelectorAll(e);
for (var i = 0; i < el.length; i++) {
    el[i].style.display="none";
}
}else{
document.querySelector(e).style.display="none";
}
}


function shd(e){
if(e.indexOf(".")>-1){
var el = document.querySelectorAll(e);
for (var i = 0; i < el.length; i++) {
    el[i].style.display="block";
}
}else{
document.querySelector(e).style.display="block";
}
}


function ehtml(e,v){
if(e.indexOf(".")>-1){
var el = document.querySelectorAll(e);
for (var i = 0; i < el.length; i++) {
    el[i].innerHTML=v;
}
}else{
document.querySelector(e).innerHTML=v;
}
}

getel("#userlist").onclick = function(e) {

if (e.target.className.indexOf("wcam")>0){
if(getel('#cancel').style.display=="block")return;
var unm = e.target.getAttribute("title");
var av = e.target.getAttribute("alt");
if(av=="false"){vdo=false;}else{vdo=true;}
if(self==unm){alert('It is you');oncall = false;return;}
remoteUser = unm;
ehtml('#video-chat .crq','');
var c = 20;
ctm = setInterval(function() {
ehtml('#callStatus','');
ehtml('#video-chat .crq','Calling <span class="caller">'+remoteUser+'</span><p>Waiting... <b>'+c+'</b><p>'); 
c--;
if(c < 0){clearInterval(ctm);oncall = false;hangup();}
}, 1000);

	if(!isStarted){
xx=1;k(100,400,1500);pvs=setInterval(function(){setTimeout(function(){ k(100,400,1500)},2000);},3000);
		if(remoteUser != ''&&remoteUser != self){
			console.log('Call request from '+self+' to '+remoteUser);
			shd('#video-chat');
			shd('#cover');ehd('.vcall');
			socket.emit('newVideoChatRequest',{sender:self,receiver:remoteUser,vdo:vdo},function(data){clearInterval(ctm);
				if(data.response){ehtml('#video-chat .crq','');
				xx=2;clearInterval(pvs);
				shd('.vcall');
					console.log('Your call was accepted!');
					ehtml('#callStatus','Call accepted');
					setTimeout(function(){ehtml('#callStatus','');},6000);
				if(vdo==false){	
			ehd('#video-chat');ehd('#cover');shd('#cancel');
			        		}
var constraints = {audio:true,video:vdo,facingMode:{exact:"user"}};
 navigator.getUserMedia = ( navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.mediaDevices.getUserMedia || navigator.msGetUserMedia);
					if(navigator.getUserMedia){
						navigator.getUserMedia(constraints,callerSuccess,errorCallback);
					}else
						ehtml('#callStatus','Your browser does not support getUserMedia. Please update your broswer to use this app.');
					isStarted = true;
				}else{
					console.log('Your call request was either rejected or the user is busy');
					end(data.reason);remoteHangup();oncall = false;
					xx=2;clearInterval(pvs);
				}
				
			});
		}else
			alert('It is you');oncall = false;
	}else{
			ehtml('#callStatus','You are already on a call');
	}
	oncall = true;

}
if(e.target.id=="me" || e.target.id=="you")bmain();


if (e.target.className=="pcm"){

getel("#users").style.zIndex =1;
getel("#chatcon").style.zIndex =3;shd("#chatcon");
var unm = e.target.getAttribute("title");
if(window.innerWidth<678){
var x = umsg.indexOf(unm);
if(x!=-1)umsg.splice(x, 1);
ehtml('#vpc',umsg.length+" unread");
if(umsg.length==0)ehd('#vpc');
}
ehd('.chattext');
var el = crbox(unm);

shd('#'+el);
ehtml('.crbx','PC to '+unm);
curbxc='#'+el;
getel('#'+unm).style.backgroundImage ="url(js/env3.png)";

}
};

function bmain(){
ehd('.chattext');shd('#chattext');
ehtml('.crbx','Main Chat');
getel("#users").style.zIndex =1;
getel("#chatcon").style.zIndex =3;shd("#chatcon");
curbxc='#chattext';getel("#chattext").scrollTop=5000;
}

function crbox(n){
var mpb = [];
mpb.push(n);
mpb.push(self);mpb.sort();
var el = mpb.join().replace(",","");
if(!getel("#"+el)){
var msb = document.createElement("div");
msb.setAttribute("id", el);
msb.setAttribute("class","chattext pmt");
getel("#textchat").appendChild(msb);ehd('#'+el);
}

return el;
}

window.history.pushState({url:"#"},"spg","#");
window.onpopstate = function() {
ehd("#viewemot");ehd("#pvmsg");
getel("#you").click();
window.history.pushState({url:"#"},"spg","#");
};

function strtag(str){
   if ((str===null) || (str===''))
       return false;
  else
   str = str.toString();
  return str.replace(/<[^>]*>/g, '');
  // str.replace(/\<(?!img|br).*?\>/g, "");
}

document.querySelector("#chatcon").onclick = function(event) {
    var el = event.target;
	if(el.className.indexOf("chattext")==0)ehd("#viewemot");
    if(el.className.indexOf("unm")==0) {
var msg = getel("#message");
el = el.innerHTML.split("<span>")[0];
if(el==self || msg.value.indexOf("@"+el)>-1)return;
msg.value="@"+el+" "+msg.value;msg.focus();
}
};

getel("#message").addEventListener('click', autosize);
getel("#message").addEventListener('keydown', autosize);
getel("#message").addEventListener('paste', autosize);             
function autosize(e){
setTimeout(function(){getel(curbxc).scrollTop=5000;},50);
if(!this.value){this.style.height="100%";document.querySelector("#textchat").style.bottom="40px";}
if(window.innerWidth>678){
if(e.keyCode == 13 && e.shiftKey == false) {
    e.preventDefault();
    getel('#send').click();
  }
}
  var el = this;
  setTimeout(function(){
	  var c=4;
	 if(el.scrollHeight<40){shd("#users");return;}
	 if(window.innerWidth<678)ehd("#users");
    el.style.cssText = 'height:auto; padding:0';
    el.style.cssText = 'height:' + el.scrollHeight + 'px';
	document.querySelector("#textchat").style.bottom=(el.scrollHeight+c)+'px';

  },10);
}

window.addEventListener("resize", function(){
	if(window.innerWidth>678)shd("#users");shd('#chatcon');
});

getel("#vpc").addEventListener('click', function(){
shd("#pvmsg");getel("#ulmsg").innerHTML="";
for(var i=0;i<=umsg.length;i++){
if(getel("#el"+i))return;
if(umsg[i]==undefined)continue;
var msb = document.createElement("div");
msb.setAttribute("id","el"+i);
msb.setAttribute("class","lmsg");
msb.innerHTML=umsg[i];
msb.onclick=function(){
var al = this.textContent;
var x = umsg.indexOf(al);
if(x!=-1)umsg.splice(x, 1);
ehtml('#vpc',umsg.length+" unread");
if(umsg.length==0)ehd('#vpc');
getel("#"+al).click();ehd("#pvmsg");
};
getel("#ulmsg").appendChild(msb);	
}

});

function gtmz(t) {
var d = new Date(t);
  var offset = (new Date().getTimezoneOffset() / 60) * -1;
  var n = new Date(d.getTime() + offset);
  var m = n.getMinutes();
  	var x = " AM";
	var j = n.getHours();
	if(n.getHours()>11)x=" PM";
	if(n.getHours()==0)j="00";
	if(n.getHours()<10)j="0"+j;
	  if(m<10)m="0"+m;
    return "<span class='tmz'>"+j+":"+m+"</span>";
}

var bcolor=[];
for(var i=1;i<=44;i++){
bcolor.push("clr"+i);
}
function getcolor() {
clr=bcolor[Math.floor(Math.random() * bcolor.length)];
}



})();
