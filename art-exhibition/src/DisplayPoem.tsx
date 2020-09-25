import React, { useEffect, useState } from 'react'

export interface PoemProps {
  poemTheme: string
}

const DisplayPoem: React.FC<PoemProps> = ({ poemTheme }) => {
  const [poem, setPoem] = useState([{ lines: [''] }])

  useEffect(() => {
    fetch(poemTheme)
      .then(res => res.json())
      .then(result => setPoem(result))
      .catch(err => console.error(err))
  }, [poemTheme])

  return (
    <div>
      {poem[0].lines.map(line => (line === '' ? <br /> : <div>{line}</div>))}
    </div>
  )
}

export default DisplayPoem
