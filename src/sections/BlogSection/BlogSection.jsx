import "./BlogSection.css";
import { useState } from "react";

import SectionHeader from "../../components/SectionHeader/SectionHeader.jsx";
import SectionWrapper from "../../components/SectionWrapper/SectionWrapper.jsx";

const BlogSection = () => {
  const [readMore, setReadMore] = useState(false);
  function handleReadMore() {
    setReadMore(true);
  }
  return (
    <SectionWrapper colorsComb="white">
      <SectionHeader section="Blog" color="#101828" />
      <div className="blogWrapper">
        <div className="blogContent">
          <h3>Milestone: 20,000 Pets Treated</h3>
          <div className="blogRichText">
            <div className="divider"></div>
            <p>
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in{" "}
              <span>volutpat mollis</span> at volutpat lectus velit, sed auctor.
              Porttitor fames arcu quis fusce augue enim. Quis at habitant diam
              at. Suscipit <span>tristique risus</span>, at donec. In turpis vel
              et quam imperdiet. Ipsum molestie aliquet sodales id est ac
              volutpat. Eget quis mi enim, leo lacinia pharetra, semper. Eget in{" "}
              <span>volutpat mollis</span> at volutpat lectus velit, sed auctor.
              Porttitor fames arcu quis fusce augue enim. Quis at habitant diam
              at. Suscipit <span>tristique risus</span>, at donec. In turpis vel
              et quam imperdiet. Ipsum molestie aliquet sodales id est ac
              volutpat.{" "}
            </p>
            <div className="renewedTarget">
              <h4>Renewed target</h4>
              <p>
                Pharetra morbi libero id aliquam elit massa integer tellus. Quis
                felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
                dictumst ut eget a, elementum eu. Maecenas est morbi mattis id
                in ac.
              </p>
            </div>
          </div>
          <p className={readMore ? "visible" : "hidden"}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
            tenetur accusamus rem reprehenderit saepe sed, placeat illum
            consectetur doloribus? Doloribus culpa voluptas minima esse error
            earum, assumenda perferendis amet sapiente?
          </p>
          <button
            className={`blogBtn ${readMore ? "hidden" : "visible"}`}
            onClick={handleReadMore}
          >
            Read more
          </button>
        </div>
        <iframe
          src="https://www.youtube.com/embed/11H8kQkmVXE"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;fullscreen;"
          allowFullScreen
        ></iframe>
      </div>
    </SectionWrapper>
  );
};

export default BlogSection;
