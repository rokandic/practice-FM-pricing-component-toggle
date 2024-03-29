import './plan.css'


function Plan({planData, monthly}) {
  const price = monthly ? planData.priceMonthly : planData.priceAnnually;
  const planClass = planData.highlighted ? "plan highlighted" : "plan";

  return(
    <article className={planClass}>
      <h3 className="planName">{planData.name}</h3>
      <h2 className="priceInfo"><span>$</span>{price}</h2>
      <ul>
        <li className="planItem">{planData.storage} Storage</li>
        <li className="planItem">{planData.users} Users Allowed</li>
        <li className="planItem">Send up to {planData.send}</li>
      </ul>
      <a tabIndex={2} className="learnMore" href="#"> learn more</a>
    </article>
  )
}

export default Plan