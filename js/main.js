function getTimeRemaining(e){var t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/1e3%60),a=Math.floor(t/1e3/60%60),i=Math.floor(t/36e5%24);return{total:t,days:Math.floor(t/864e5),hours:i,minutes:a,seconds:n}}function initializeClock(e,t){var n=document.getElementById(e),a=setInterval(function(){var e=getTimeRemaining(t);n.innerHTML=e.days+" : "+e.hours+" : "+e.minutes,e.total<=0&&clearInterval(a)},1e3)}!function(e,t,n,a,i,r,s){e.GoogleAnalyticsObject=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date,r=t.createElement(n),s=t.getElementsByTagName(n)[0],r.async=1,r.src="https://www.google-analytics.com/analytics.js",s.parentNode.insertBefore(r,s)}(window,document,"script",0,"ga"),ga("create","UA-97184804-2","auto"),ga("send","pageview");var valid_email=function(e){var t=/^\s*[\w\-\+_]+(\.[\w\-\+_]+)*\@[\w\-\+_]+\.[\w\-\+_]+(\.[\w\-\+_]+)*\s*$/;return-1!=String(e).search(t)},contact_submit=function(e){$(e).find("input[type=submit]").attr("disabled","disabled");var t={name:$(e).find("input[name=name]").val(),email:$(e).find("input[name=email]").val(),phone:$(e).find("input[name=phone]").val(),best_time:$(e).find("input[name=best-time]").val(),current_member:$(e).find("input[name=current-member]").val(),message:$(e).find("textarea").val()},n=$.param(t),a=[],i=$(e).find(".error");return i.html(""),t.name.length<2&&a.push("Please provide a name."),valid_email(t.email)||a.push("Please provide a valid email address."),0==a.length?$.post("/send.php",n,function(e){"success"===e?location.href="/thanks.html":i.html("There was a problem submitting the form. Please call us for further assistance.").slideDown(400)}):(i.html(""),$.each(a,function(e,t){0===e?i.append(t):i.append("<br>"+t)}),i.is(":hidden")&&i.slideDown(400)),!1};$(document).ready(function(){$("form#contact").submit(function(e){e.preventDefault(),contact_submit(this)})}),initializeClock("clock","December 31 2017 23:59:59 GMT-0500");