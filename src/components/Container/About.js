import about from "../../assets/About.jpg";

const About = () => {
  return (
    <div id="about" className="section">
      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="border-[3px] border-solid border-Teal rounded-lg">
          <img src={about} alt="" className="p-4" />
        </div>
        <div>
          <div className="font-bold sm:text-[1.825rem] text-[1.5rem] mb-5">
            We provide the <br /> best{" "}
            <span className="text-Teal">online courses</span>
          </div>
          <p className="text-sm text-gray leading-7 mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            blanditiis architecto facilis nihil alias repellat porro nobis at
            voluptate necessitatibus, eos saepe, voluptatum eligendi doloribus
            maiores culpa reprehenderit temporibus minus.
          </p>
          <button className="py-3 px-6 border border-solid border-gray font-bold rounded-lg text-sm">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
