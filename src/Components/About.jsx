import por from "../assets/por.jpg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { onMount } from "solid-js";
gsap.registerPlugin(ScrollTrigger);
export default function About() {
  let aboutRef;
  onMount(() => {
    const animation = gsap.fromTo(
      aboutRef,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
      }
    );

    ScrollTrigger.create({
      trigger: aboutRef,
      start: "top 80%",
      end: "bottom 20%",
      animation,
      // scrub: 0.5,
    });
  });
  return (
    <div class="about">
      <div className="about_main flex" ref={aboutRef}>
        <div className="about_info">
          <h1 className="about_title">
            About our <br /> Company
          </h1>

          <h1 className="about_text">
            A team comprised of board certified accountants, Manreka Accounting
            helps you handle accounting problems in the most accessible and
            convenient way.
          </h1>
        </div>
        <div className="about_image">
          <img src={por} alt="" />
        </div>
      </div>
    </div>
  );
}
