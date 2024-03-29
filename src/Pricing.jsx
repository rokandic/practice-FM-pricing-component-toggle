import {useState} from 'react'
import {useRef} from 'react'
import './pricing.css'

function Pricing({toggleId='annualMonthlyCb', onToggle, monthly}) {  

  function toggleWithKey(event) {
      if(event.which==13) {
      onToggle(event);
    }
  }
 
  return (
    <>              
      <section className="annuallyMonthlyToggle">
        <label className="pricingLabel" htmlFor={toggleId}>Annually</label>
        <div className="toggleButtonWrapper">        
          <input id={toggleId} type="checkbox" checked={monthly} readOnly />
          <label tabIndex={1} className="toggleSlider" htmlFor={toggleId} onClick={onToggle} onKeyUp={toggleWithKey} />
        </div>
        <label className="pricingLabel" htmlFor={toggleId}>Monthly</label>
      </section>
    </>
  )
}

export default Pricing