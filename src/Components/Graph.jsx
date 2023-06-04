import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
import { onMount } from "solid-js";
gsap.registerPlugin(ScrollTrigger);
export default function Graph() {
  let graphRef;
  onMount(() => {
    const animation = gsap.fromTo(
      graphRef,
      {
        opacity: 0,
        x: 200,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
      }
    );

    ScrollTrigger.create({
      trigger: graphRef,
      start: "top 80%",
      end: "bottom 20%",
      animation,
      // scrub: 0.5,
    });
  });
  return (
    <div class="graph">
      <div className="graph_main" ref={graphRef}>
        <div className="graph_icon">
          <svg
            fill="currentColor"
            strokeWidth="0"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
          >
            <path
              fill-rule="evenodd"
              d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
            ></path>
          </svg>
        </div>
        <div className="graph_text">
          Leave your account worries to us, so you can focus on growing your
          business.
        </div>
      </div>
    </div>
  );
}
