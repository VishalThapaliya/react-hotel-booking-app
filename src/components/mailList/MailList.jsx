import './MailList.css'

const MailList = () => {
  return (
    <section className="mail">
      <h2 className="mail-title">Save time, save money!</h2>
      <span className="mail-description">Sign up and we'll send the best deals to you</span>
      <div className="mail-input-container">
        <input type="text" placeholder='Your Email' />
        <button>Subscribe</button>
      </div>
    </section>
  )
}

export default MailList