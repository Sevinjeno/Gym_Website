import React from 'react'
import "./Contact.css"
import whatsapp from "/public/whataspp.png"
import insta from "/public/insta.png"

const Contact_Gym = () => {
  return (
    <>
    <div className='Contact' id="Contact">
      <h1>Contact Us</h1>
        <div className="firstphase">
            <span style={{fontSize:"1.9rem"}}>Address : </span>D Fitness Ambernath Loknagri, Play on Turf Near Hp Petrol Pump, Ambernath East
        </div>
        <div className="secondphase">
            <p>Mail Us : <a href="mailto:info@dfitnessambernath.com">info@dfitnessambernath.com</a></p>
            <p>Give us a ring for a direct line to our team :<a href="tel:+7058186339">7058186339</a></p>
            <p>WhatsApp us your queries - we're just a message away! <a href="https://wa.me/+919665236339"><img src={whatsapp}/></a></p>
            <p>Connect with us on Instagram for a visual conversation experience<a href="https://instagram.com/dfitnessambernath.biz?utm_source=qr&igshid=OGIxMTE0OTdkZA=="><img src={insta} /></a></p>
            {/* <p>Facebook</p>  */}
        </div>
    </div>
    </>
    
  )
}

export default Contact_Gym