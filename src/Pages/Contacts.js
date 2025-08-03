import facebook from "../assets/Images/facebook_logo.png";
import github from "../assets/Images/github_logo.png";
import linkedin from "../assets/Images/LinkedIn_Logo.png";

function Contacts() {
  return (
    <div className="ContactsDiv">
      <h1>Contacts</h1>
      <div className="InfoContainer">
        <div className="ContactsLeft">
          <h2>Contact Info:</h2>
          <ul>
            <li>Email: avlokhashvili.saba@gmail.com</li>
            <li>Phone: 592 18 24 42</li>
            <li>Address: Vake Bagebi</li>
          </ul>
          <div className="Socials">
            <a
              href="https://www.facebook.com/saba.avlokhashvili.2025"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="facebook" />
            </a>
            <a
              href="https://github.com/Sabaav"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="github" />
            </a>
            <a
              href="https://www.linkedin.com/in/saba-avlokhashvili-777aa9254"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
          </div>
        </div>
        <div className="ContactsRight">
          <h2>Contact Form</h2>
          <form
            action="https://formsubmit.co/avlokhashvili.saba@gmail.com"
            method="POST"
            className="ContactForm"
          >
            {/* Защита от спама */}
            <input type="hidden" name="_captcha" value="false" />

            <label>Name</label>
            <input type="text" name="name" required placeholder="Your Name" />

            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              placeholder="Example@email.com"
            />

            <label>Message</label>
            <textarea name="message" required placeholder="Your Message" />

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
