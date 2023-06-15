import React from "react";
import { FiMail } from "react-icons/fi";
import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lyytnpd",
        "template_wx72xui",
        e.target,
        "cfFCnfnZ246s2yN-m"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Let's Have a Party</h5>
      <h2>Contact Me</h2>
      <div className="container flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-col gap-4 justify-center items-center md:flex-row lg:flex-col">
          <motion.div
            className="contact  "
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <FiMail /> <h3>Email</h3>
            <small>davidkerkez@gmail.com</small>
            <a
              href="mailto:davidkerkez@gmail.com"
              rel="noreferrer"
              target="_blank"
              className="block"
            >
              Send a message
            </a>
          </motion.div>

          <motion.div
            className="contact  "
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <RiMessengerLine /> <h3>Messenger</h3>
            <small>David Kerkez</small>
            <a
              href="https://m.me/djdavidkerkez"
              rel="noreferrer"
              target="_blank"
              className="block"
            >
              Send a message
            </a>
          </motion.div>

          <motion.div
            className="contact  "
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <FaWhatsapp /> <h3>WhatsApp</h3>
            <small>+381649074184</small>
            <a
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=+381649074184"
              target="_blank"
              className="block"
            >
              Send a message
            </a>
          </motion.div>
        </div>
        <form
          onSubmit={sendEmail}
          className="flex flex-col gap-4 w-full justify-between  "
        >
          <input
            type="text"
            placeholder="Your Full Name"
            required
            name="name"
            className="p-4 bg-[#2e0b3590] border-[#951033]  border-solid border-2 rounded-lg text-white"
          />
          <input
            type="text"
            placeholder="Your Email"
            required
            name="email"
            className="p-4 bg-[#2e0b3590] border-[#951033]  border-solid border-2 rounded-lg text-white"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
            className="p-4 bg-[#2e0b3590] border-[#951033]  border-solid border-2 rounded-lg resize-none text-white"
          ></textarea>
          <input className="btn " type="submit" value="Send Message" />
        </form>
      </div>
    </section>
  );
}

export default Contact;
