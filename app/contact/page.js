'use client';

export default function ContactPage() {
  return (
    <main className="contact-container">
      <h2 className="contact-heading">Contact Us</h2>

      <p className="contact-text">
        We'd love to hear from you! Whether you have questions, feedback, or need support, feel free to reach out.
      </p>

      <div className="contact-details">
        <p><strong> Email:</strong> abc@gmail.com</p>
        <p><strong> Address:</strong> 123 Content Street,India</p>
        <p><strong> Phone:</strong> +91 98765 43210</p>
      </div>

      <h3 className="contact-subheading">Or message us directly:</h3>
      <form
        className="contact-form"
        onSubmit={(e) => {
          e.preventDefault();
          alert('Message sent!');
        }}
      >
        <input type="text" className="input" placeholder="Your Name" required />
        <input type="email" className="input" placeholder="Your Email" required />
        <textarea className="input" rows={5} placeholder="Your Message" required></textarea>
        <button type="submit" className="button">Send Message</button>
      </form>
    </main>
  );
}
