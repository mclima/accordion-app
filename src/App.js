import { useState } from 'react'
import './styles.css'

const faqs = [
  {
    title: 'What are the different data types present in javascript?',
    text: '"Primitive types": String, Number, BigInt, Boolean, Undefined, Null, Symbol. "Non-primitive types": Object. Primitive data types can store only a single value Non-primitive data types can store multiple and complex values.',
  },
  {
    title: 'What is Hoisting in JavaScript?',
    text: 'Hoisting is the default behaviour of JavaScript where all the variable and function declarations are moved to the top of the scope. The scope can be both local and global.',
  },
  {
    title: 'What is the difference between var and let keyword in javascript?',
    text: 'The keyword "var" has a function scope. Anywhere in the function, the variable specified using var is accessible but in "let" the scope of a variable declared with the "let" keyword is limited to the block in which it is declared. "let" is hoisted but not initialized. Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.',
  },
  {
    title: 'Is JavaScript a statically typed or a dynamically typed language?',
    text: 'JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to a statically typed language, where the type of a variable is checked during compile-time.',
  },
  {
    title: 'What is an Immediately Invoked Function in JavaScript(IIFE)?',
    text: 'An Immediately Invoked Function ( known as IIFE and pronounced as IIFY) is a function that runs as soon as it is defined.<code>(function(){ // Do something;})();</code>',
  },
  {
    title: 'Explain Higher Order Functions in JavaScript.',
    text: 'Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.',
  },
  {
    title: 'Explain Closures in JavaScript.',
    text: 'Closures are an ability of a function to remember the variables and functions that are declared in its outer scope.',
  },
  {
    title: 'What are callbacks?',
    text: 'A callback is a function that will be executed after another function gets executed. In javascript, functions are treated as first-class citizens, they can be used as an argument of another function, can be returned by another function, and can be used as a property of an object.',
  },
  {
    title: 'What is memoization?',
    text: 'Memoization is a form of caching where the return value of a function is cached based on its parameters. If the parameter of that function is not changed, the cached version of the function is returned.',
  },
  {
    title: 'What is recursion in a programming language?',
    text: 'Recursion is a technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result.',
  },
]

export default function App() {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  )
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null)
  return (
    <div className="accordion">
      <h1>JavaScript Q&As</h1>
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          key={el.title}
          title={el.title}
          num={i}
        >
          {el.text}
        </AccordionItem>
      ))}
    </div>
  )
}

function AccordionItem({ num, title, curOpen, onOpen, children }) {
  const isOpen = num === curOpen
  function handleToggle() {
    onOpen(isOpen ? null : num)
  }

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? '-' : '+'}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  )
}
