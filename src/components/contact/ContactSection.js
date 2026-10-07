"use client"; // the form remembers what the visitor types, so it runs in the browser

import { useState } from "react";
import { content } from "../../data/content";
import FadeIn from "../FadeIn";
import "./ContactSection.css";

// true only if a value is filled in (not empty, not a "TODO" placeholder)
const has = (value) => value && !value.startsWith("TODO");

export default function ContactSection() {
  const { phone, whatsappNumber, footer, contact } = content;
  const { form, steps } = contact;

  // what the visitor has typed so far
  const [values, setValues] = useState({
    name: "",
    phone: "",
    topic: form.topics[0],
    message: "",
  });

  // runs on every keystroke: saves the new value under the field's name
  const change = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  // runs when "Send on WhatsApp" is clicked: builds the message and opens WhatsApp
  const submit = (event) => {
    event.preventDefault(); // stops the page from reloading

    const text = [
      "Hello Arun, I would like to book a consultation.",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      `Interested in: ${values.topic}`,
      values.message ? `Message: ${values.message}` : "",
    ]
      .filter(Boolean) // drops the empty line if there is no message
      .join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello Arun, I have a question about insurance."
  )}`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(footer.address)}`;

  return (
    <>
      {/* =============== 1. Details on the left, form on the right =============== */}
      <section className="ct section">
        <div className="container ct-grid">
          {/* ---------- Left: ways to reach Arun ---------- */}
          <FadeIn>
            <h2 className="ct-title">{contact.detailsTitle}</h2>

            <div className="ct-list">
              {has(phone) && (
                <a href={`tel:${phone.replace(/[^\d+]/g, "")}`} className="ct-item">
                  <span className="ct-item-label">{contact.callLabel}</span>
                  <span className="ct-item-value">{phone}</span>
                </a>
              )}

              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="ct-item">
                <span className="ct-item-label">{contact.whatsappLabel}</span>
                <span className="ct-item-value">{contact.whatsappText}</span>
              </a>

              {has(footer.email) && (
                <a href={`mailto:${footer.email}`} className="ct-item">
                  <span className="ct-item-label">{contact.emailLabel}</span>
                  <span className="ct-item-value">{footer.email}</span>
                </a>
              )}

              {has(footer.address) && (
                <div className="ct-item">
                  <span className="ct-item-label">{contact.visitLabel}</span>
                  <span className="ct-item-value">{footer.address}</span>
                  {has(contact.hours) && <span className="ct-hours">{contact.hours}</span>}
                  <a
                    href={mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn ct-directions"
                  >
                    {contact.directionsButton}
                  </a>
                </div>
              )}
            </div>
          </FadeIn>

          {/* ---------- Right: consultation form ---------- */}
          <FadeIn delay={0.15}>
            <form className="ct-form" onSubmit={submit}>
              <h2>{form.title}</h2>
              <p className="ct-intro">{form.intro}</p>

              <label className="ct-field">
                <span>{form.nameLabel}</span>
                <input
                  type="text"
                  name="name"
                  value={values.name}
                  onChange={change}
                  required
                  autoComplete="name"
                />
              </label>

              <label className="ct-field">
                <span>{form.phoneLabel}</span>
                <input
                  type="tel"
                  name="phone"
                  value={values.phone}
                  onChange={change}
                  required
                  autoComplete="tel"
                  inputMode="tel"
                />
              </label>

              <label className="ct-field">
                <span>{form.topicLabel}</span>
                <select name="topic" value={values.topic} onChange={change}>
                  {form.topics.map((topic) => (
                    <option key={topic}>{topic}</option>
                  ))}
                </select>
              </label>

              <label className="ct-field">
                <span>{form.messageLabel}</span>
                <textarea name="message" rows="4" value={values.message} onChange={change} />
              </label>

              <button type="submit" className="btn btn-gold ct-submit">
                {form.button}
              </button>
              <p className="ct-note">{form.note}</p>
            </form>
          </FadeIn>
        </div>
      </section>

      {/* =============== 2. How a consultation works =============== */}
      <section className="ct-steps section">
        <div className="container">
          <FadeIn>
            <p className="ct-label">{steps.label}</p>
            <h2 className="ct-steps-title">
              {steps.heading} <span className="accent-dark">{steps.accent}</span>
            </h2>
          </FadeIn>

          <div className="ct-steps-grid">
            {steps.items.map((step, index) => (
              <FadeIn key={step.title} delay={index * 0.15} className="ct-step-cell">
                <div className="ct-step">
                  <p className="ct-step-num">0{index + 1}</p>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}