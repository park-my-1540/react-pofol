import React,{useEffect,useCallback,useRef,useState} from "react";

export default function  AnimatedCursor({cursorOuterRef,cursorInnerRef}){

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);
    }, [])
   /*
    cursorOuterRef : 마우스 포인터
    cursorInnerRef : 따라가는 포인터
    requestRef : animateOuterCursor의 변화 감지
    endX, endY : 포인트 끝 도착한곳
  */
  const requestRef = useRef();
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  let endX=0,
      endY=0;

  const onMouseMove = useCallback(({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
    if(cursorInnerRef.current !== undefined){
      cursorInnerRef.current.style.top = clientY + 'px';
      cursorInnerRef.current.style.left = clientX + 'px';
      endX = clientX;
      endY = clientY;
    }
  }, [])
  /*
   * requestAnimationFrame : requestAnimationFrame(반복할 함수) , 스스로를 호출하지 않음.
   */
  let previousTime;
  const animateOuterCursor = useCallback(
    (timestamp) => {
      if (previousTime !== undefined) {
        coords.x += (endX - coords.x) / 8;
        coords.y += (endY - coords.y) / 8;
        cursorOuterRef.current.style.top = coords.y + 'px';
        cursorOuterRef.current.style.left = coords.x + 'px';
      }
      previousTime = timestamp;
      requestRef.current = requestAnimationFrame(animateOuterCursor); //다시 호출
    },
    [requestRef]
  )
  useEffect(() => {
      requestRef.current = requestAnimationFrame(animateOuterCursor); //호출 반복
    }, [animateOuterCursor])

  return (
    <>
      <div ref={cursorOuterRef} className="cursor cursorOuter"/>
      <div ref={cursorInnerRef} className="cursor cursorInner"/>
    </>
  )
}
