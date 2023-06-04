import city from "../assets/city.webp";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { onMount } from "solid-js";
export default function Contact() {
  let contactRef;
  let contactMainRef;

  onMount(() => {
    const animation = gsap.fromTo(
      contactRef,
      {
        opacity: 0,
      },
      {
        opacity: 1,

        duration: 2,
      }
    );
    const contactAnimation = gsap.fromTo(
      contactMainRef,
      {
        opacity: 0,
        y: 100,
      },
      {
        y: 0,
        opacity: 1,

        duration: 1,
      }
    );

    ScrollTrigger.create({
      trigger: contactRef,
      start: "top 80%",
      end: "bottom 20%",
      animation,
      // scrub: 0.5,
    });
    ScrollTrigger.create({
      trigger: contactMainRef,
      start: "top 80%",
      end: "bottom 20%",
      contactAnimation,
      // scrub: 0.5,
    });
  });
  return (
    <div class="contact">
      <div className="contact_img" ref={contactRef}>
        <img src={city} alt="" />
      </div>
      <div className="contact_info">
        <div className="contact_info_main" ref={contactMainRef}>
          <div className="contact_title">Contact Us</div>
          <div className="contact_cards">
            <div className="contact_card">
              <h1 className="contact_card_title">Mailing Adress</h1>
              <p className="contact_card_text">
                123 Anywhere St., Any City, State, Country 12345
              </p>
            </div>
            <div className="contact_card">
              <h1 className="contact_card_title">Email Adress</h1>
              <p className="contact_card_text">hello@reallygreatsite.com</p>
            </div>
            <div className="contact_card">
              <h1 className="contact_card_title">Phone Number</h1>
              <p className="contact_card_text">(123) 456 7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
