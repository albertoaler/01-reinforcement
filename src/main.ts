import './style.css'

// To import use the reserved word import and then the route
import './bases/01-const-let'

// What's inside the text is a template literal, we're goint to see it later on
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
     <h1>Hola Mundo!</h1>
  </div>
`
