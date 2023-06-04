import { gsap } from "gsap";
import { onMount } from "solid-js";

export default function Header() {
  let headerRef;
  onMount(() => {
    gsap.from(headerRef, { opacity: 0 });
    gsap.fromTo(
      ".title",
      { y: 200, opacity: 0 },
      { y: 0, opacity: 1, duration: 1 }
    );
  });
  return (
    <div class="header" ref={headerRef}>
      <div className="header_main">
        <h1 className="logo">Manreka Accounting</h1>
        <div
          className="title_wrap"
          style={{
            overflow: "hidden",
          }}
        >
          <h1 className="title">
            Accounting <br /> made accessible
          </h1>
        </div>
        <button class="book">Book a consultation</button>
      </div>
    </div>
  );
}
