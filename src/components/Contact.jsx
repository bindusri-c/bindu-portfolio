import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_xikew37",
      "template_kr6bbqr",
      form.current,
      "NMChAjE5whY2PGtNF"
    ).then(
      () => {
        alert("Message sent successfully! 🎉");
        form.current.reset();
      },
      () => {
        alert("Oops! Something went wrong. 😓");
      }
    );
  };

  return (
    <section id="contact" className="py-10 px-6 bg-white text-center">
      <h2 className="text-4xl font-extrabold text-pink-400 mb-8 tracking-wide">
        Get in Touch
      </h2>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto bg-pink-70 p-8 rounded-2xl shadow-lg text-left space-y-6"
      >
        <div>
          <label className="block text-pink-400 font-semibold mb-1">Name</label>
          <input
            type="text"
            name="user_name"
            required
            className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-pink-400 font-semibold mb-1">Email</label>
          <input
            type="email"
            name="user_email"
            required
            className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>
        <div>
          <label className="block text-pink-400 font-semibold mb-1">Message</label>
          <textarea
            name="message"
            rows="5"
            required
            className="w-full p-3 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-3 px-6 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition duration-300"
        >
          Send Message ✉️
        </button>
      </form>
    </section>
  );
};

export default Contact;
