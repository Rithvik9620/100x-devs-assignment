import React, { useEffect, useRef, useState } from 'react'

const ProjectTwo = () => {
    const [wordCount,setWordCount] = useState(0);
    const [words,setWords] = useState("");
    const inputRef = useRef();

    useEffect(()=>{
        async function fetchData(){
        const data = await fetch("https://random-word-api.herokuapp.com/word?number=" + wordCount);
        const res = await data.json();
        setWords(res.join(" "));
        }
        fetchData();
    },[wordCount])

  return (
    <div>
        <input type='number' ref={inputRef}/>
        <button onClick={()=>{
            console.log("button " + inputRef.current.value);
            console.log(typeof parseInt(inputRef.current.value));
            setWordCount(parseInt(inputRef.current.value))}}>
        Generate</button>
        <div>{words}</div>
    </div>
  )
}

export default ProjectTwo