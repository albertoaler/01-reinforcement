import './style.css'

// Lo que está dentro del texto es un template literal
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
     <h1>Hola Mundo!</h1>
  </div>
`
