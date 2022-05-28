import "./Intro.css";
// import Me from "../../img/sun.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Santhosh R</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Frontend Developer</div>
              <div className="i-title-item">JavaScript Enthusiaist</div>
            </div>
          </div>
          <p className="i-desc">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src={Me} alt="" className="i-img" /> */}
      </div>
    </div>
  );
};

export default Intro;
