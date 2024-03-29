import { useState } from 'react'
import { useRef } from 'react'
import './App.css'
import './index.css'
import Pricing from './Pricing.jsx'
import Attribution from './Attribution.jsx'
import Plan from './Plan.jsx'
import jsonData from './plans.json'

function App() {
  const [monthly, setMonthly] = useState(false); 
  const plans = [];
  for(let p of jsonData) { 
    plans.push(<Plan planData={p} key={p.id} monthly={monthly} />);
  }
    
  function clickToggle(event) {
    event.preventDefault();
    setMonthly(!monthly);
  }

  return (
    <div className="page-wrapper">
      <main>
        <h1>Our Pricing</h1>  
        <Pricing onToggle={clickToggle} monthly={monthly} />    
        <article className="plans-wrapper">
          {plans}
        </article>     
      </main>
      <Attribution />
    </div>
  )
}

export default App
