import "./BlogSection.css";
import SectionHeader from "../SectionHeader/SectionHeader";

const BlogSection = () => {
  return (
    <section className="blogSection">
      <div className="blogSectionContainer">
        <SectionHeader section="Blog" />
        <div className="blogContent">
          <h3>Milestone: 20,000 Pets Treated</h3>
          <div className="divider"></div>
          <p>
            Eget quis mi enim, leo lacinia pharetra, semper. Eget in{" "}
            <u>volutpat mollis</u> at volutpat lectus velit, sed auctor.
            Porttitor fames arcu quis fusce augue enim. Quis at habitant diam
            at. Suscipit <u>tristique risus</u>, at donec. In turpis vel et quam
            imperdiet. Ipsum molestie aliquet sodales id est ac volutpat. Eget
            quis mi enim, leo lacinia pharetra, semper. Eget in{" "}
            <u>volutpat mollis</u> at volutpat lectus velit, sed auctor.
            Porttitor fames arcu quis fusce augue enim. Quis at habitant diam
            at. Suscipit <u>tristique risus</u>, at donec. In turpis vel et quam
            imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.{" "}
          </p>
          <h3>Renewed target</h3>
          <p>
            Pharetra morbi libero id aliquam elit massa integer tellus. Quis
            felis aliquam ullamcorper porttitor. Pulvinar ullamcorper sit
            dictumst ut eget a, elementum eu. Maecenas est morbi mattis id in
            ac.
          </p>
          <button className="blogBtn">Read more</button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
