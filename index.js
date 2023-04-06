    <!-- DevTool Detect -->
   
      !function() {
        function detectDevTool(allow) {
          if(isNaN(+allow)) allow = 100;
          var start = +new Date(); // Validation of built-in Object tamper prevention.
          debugger;
          var end = +new Date(); // Validates too.
          if(isNaN(start) || isNaN(end) || end - start > allow) {
            // input your code here when devtools detected.
            alert('Leave Us Alone, man ! 😒');
          }
        }
        if(window.attachEvent) {
          if (document.readyState === "complete" || document.readyState === "interactive") {
              detectDevTool();
            window.attachEvent('onresize', detectDevTool);
            window.attachEvent('onmousemove', detectDevTool);
            window.attachEvent('onfocus', detectDevTool);
            window.attachEvent('onblur', detectDevTool);
          } else {
              setTimeout(argument.callee, 0);
          }
        } else {
          window.addEventListener('load', detectDevTool);
          window.addEventListener('resize', detectDevTool);
          window.addEventListener('mousemove', detectDevTool);
          window.addEventListener('focus', detectDevTool);
          window.addEventListener('blur', detectDevTool);
          console.log("%cStop!", "color: red; font-size: 60px; -webkit-text-stroke: 1px black; font-weight: bold");
          console.log("%cYou Shouldn't Be Looking At Here...Mind Your Own Business. 😎😎😎", "color: black; font-size: 38px;");
        }
      }();
