import test_one from "../assets/testi_one.jpg";
import test_two from "../assets/testi_two.jpg";
import test_three from "../assets/testi_three.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { onMount } from "solid-js";
gsap.registerPlugin(ScrollTrigger);
export default function Testimonial() {
  let testRef;
  onMount(() => {
    const animation = gsap.fromTo(
      testRef,
      {
        opacity: 0,
        x: -200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );

    ScrollTrigger.create({
      trigger: testRef,
      start: "top 80%",
      end: "bottom 20%",
      animation,
      // scrub: 0.5,
    });
  });
  return (
    <div class="testimonial">
      <div className="testimonial_main" ref={testRef}>
        <h1 class="testimonial_title">Testimonials</h1>
        <div class="test_cards">
          <div className="test_card">
            <div class="test_img">
              <img src={test_one} alt="" />
            </div>
            <div class="test_info">
              <h1 class="test_name">Mela Stark</h1>
              <h1 class="test_job">Freelance Architect</h1>
              <p class="test_text">
                Testimonials are short quotes from people who love your brand.
                It's a great way to convince customers to try your services.
              </p>
            </div>
          </div>
          <div className="test_card">
            <div class="test_img">
              <img src={test_two} alt="" />
            </div>
            <div class="test_info">
              <h1 class="test_name">Finn Styles</h1>
              <h1 class="test_job">Software Engineer</h1>
              <p class="test_text">
                Testimonials are short quotes from people who love your brand.
                It's a great way to convince customers to try your services.
              </p>
            </div>
          </div>
          <div className="test_card">
            <div class="test_img">
              <img src={test_three} alt="" />
            </div>
            <div class="test_info">
              <h1 class="test_name">Imani Olowe</h1>
              <h1 class="test_job">Business Owner</h1>
              <p class="test_text">
                Testimonials are short quotes from people who love your brand.
                It's a great way to convince customers to try your services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
