import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { onMount } from "solid-js";
gsap.registerPlugin(ScrollTrigger);
export default function Service() {
  let serviceRef;
  onMount(() => {
    const animation = gsap.fromTo(
      serviceRef,
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
      trigger: serviceRef,
      start: "top 80%",
      end: "bottom 20%",
      animation,

      // scrub: 0.5,
    });
  });
  return (
    <div div class="service">
      <div className="service_main" ref={serviceRef}>
        <h1 class="service_title">Our Services</h1>
        <div className="cards">
          <div className="card">
            <div className="card_icon">
              <svg
                fill="currentColor"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"></path>
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path>
                <path d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path>
              </svg>
            </div>

            <div className="card_title">For Freelancers</div>
            <div className="card_info">
              Have a tax-paying freelance career with our help
            </div>
          </div>
          <div className="card">
            <div className="card_icon">
              <svg
                fill="currentColor"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 576 512"
                height="1em"
                width="1em"
              >
                <path d="M0 112.5v309.8c0 18 10.1 35 27 41.3 87 32.5 174 10.3 261-11.9 79.8-20.3 159.6-40.7 239.3-18.9 23 6.3 48.7-9.5 48.7-33.4V89.7c0-18-10.1-35-27-41.3-87-32.5-174-10.3-261 11.9-79.8 20.3-159.6 40.6-239.3 18.8C25.6 72.8 0 88.6 0 112.5zM128 416H64v-64c35.3 0 64 28.7 64 64zM64 224v-64h64c0 35.3-28.7 64-64 64zm384 128c0-35.3 28.7-64 64-64v64h-64zm64-192c-35.3 0-64-28.7-64-64h64v64zm-128 96c0 61.9-43 112-96 112s-96-50.1-96-112 43-112 96-112 96 50.1 96 112zm-132-48c0 9.7 6.9 17.7 16 19.6V276h-4c-11 0-20 9-20 20s9 20 20 20h48c11 0 20-9 20-20s-9-20-20-20h-4v-68c0-11-9-20-20-20h-16c-11 0-20 9-20 20z"></path>
              </svg>
            </div>
            <div className="card_title">For Professionals</div>
            <div className="card_info">
              Be a law-abiding individual by filing your taxes properly with us
            </div>
          </div>
          <div className="card">
            <div className="card_icon">
              <svg
                fill="currentColor"
                strokeWidth="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
              >
                <path d="M1 11a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-3zm5-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V2z"></path>
              </svg>
            </div>
            <div className="card_title">For Businesses</div>
            <div className="card_info">
              Get rid of your business' accounting headaches with us
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
