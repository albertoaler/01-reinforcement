// To import use the reserved word import and then the route, it's not necessary to use the .ts extension file
import './style.css'
//import './bases/01-const-let'
import './bases/02-template-string'

// What's inside the text is a template literal, we're goint to see it later on
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
     <h1>Hola Mundo!</h1>
  </div>
`
