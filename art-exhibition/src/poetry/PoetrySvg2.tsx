import React from 'react';
import { useState, useEffect } from 'react';

const Text = () =>{
  const url = "https://poetrydb.org/title/Ozymandias/lines.json";
  const [contents, setContents] = useState([{lines: [""]}]);

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then((data) => {setContents(data)});
  }, [url]); 

  console.log(contents);

  return(

    <div className="Poems">
    {contents[0].lines.map((line) => <h1>{line}</h1>)}
    </div>
  );

}
export default Text;