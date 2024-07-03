import React, { useCallback, useState } from "react";

export default function Paint() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const [draw,setDraw]=useState([{x:0,y:0}]);


  function handleClearClick(){

  }

  return (
  <>

    <button onClick={handleClearClick}>Clear Draw</button>
    <div
        id="area"
        style={{
            position: "relative",
            width: "800px",
            height: "70vh",
            margin: "auto",
            marginTop: "100px",
            border:'10px solid deepskyblue',
            // backgroundColor:'yellow'
        }}
        onPointerMove={(e)=>{
            console.log('X >> '+e.clientX);
            console.log('Y >> '+e.clientY);
            let differX=(window.innerWidth-800)/2;
            // let differY=((window.innerHeight-(window.innerHeight*0.7))/2);
            setPosition({x:e.clientX-differX,y:e.clientY-100});
            // setPosition({x:e.clientX-differX,y:e.clientY-differY-50});

            setDraw([
                ...draw,
                {
                    x:position.x,
                    y:position.y
                }
            ])
            console.log('draw objects counts >> '+draw.length);
        }}
    >

        {
            draw.map((d)=>(
                    <div style={{
                        position:'absolute',
                        backgroundColor:'red',
                            borderRadius:'50%',
                            transform:`translate(${d.x}px,${d.y}px)`,
                            left:0,
                            top:0,
                            width:"25px",
                            height:"25px"
                        }}>
                    </div>
                )
            )
        }

    </div>

    </>
  );
}
