export function hoverFunc(_this){
    _this.forEach(button => {
        ["mouseenter", "mouseout"].forEach(evt => {
          button.addEventListener(evt, e => {
            let _target = e.target.closest('[data-ui="hover"]');
            let parentOffset = _target.getBoundingClientRect(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
            const span = _target.getElementsByClassName("hover");
    
            span[0].style.top = relY + "px";
            span[0].style.left = relX + "px";
          });
        });
      });
}