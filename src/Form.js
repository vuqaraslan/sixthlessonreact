import React, { useState } from "react";

export default function Form() {

  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");
  const [style, setStyle] = useState({ border: "2px solid black" });

  if(status==="success"){
    return <h1>That's right</h1>
  }

  function handleTextChange(e){
    setAnswer(e.target.value);
  }

  async function handleSubmit(e){
    e.preventDefault();
    setStatus("submitting");

    try {
        await submitFormAsync(answer);
        setStatus("success");
    } 
    catch (error) {
        setStyle({border:'2px solid red'});
        setStatus("typing");
        setError(error);
    }
  }

  function submitFormAsync(answer){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let shouldError=answer.trim().toLowerCase()!=="baku";
            if(shouldError){
                reject(new Error("Good guess but a wrong answer, Try again !"));
            }
            resolve();
        }, 3000);
    });
  }

  return (
    <>
      <h2>City Quiz</h2>
      <p>Which city calls as windy place ?</p>
      <form style={style} onSubmit={handleSubmit}>
        <textarea value={answer} onChange={handleTextChange} disabled={status==="submitting"}></textarea>
        <br />
        <button type="submit" disabled={answer.length===0 || status==="submitting"}>Submit</button>

      </form>

      {
        error!=null && <p style={{color:'red'}}>{error.message}</p>
      }
    </>
  );
}
