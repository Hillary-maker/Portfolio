function Projects() {
  const projectList = [
    {
      id: 1,
      name: "Project 1",
      description: "This is project 1.",
      image: "Screenshot (31).png",
      link: "https://credit-card-teal-seven.vercel.app/",
    },
    {
      id: 2,
      name: "Project 2",
      description:
        "At OGB Fitness, we believe that fitness is more than just a routine.",
        image: "Screenshot (32).png",
      link: "https://hillary-maker.github.io/ogb-fitness/",
    },
    {
      id: 3,
      name: "Project 3",
      description: "This is project 3.",
      link: "https://credit-card-teal-seven.vercel.app/",
    },
    {
      id: 4,
      name: "Project 4",
      description: "This is project 4.",
      link: "https://credit-card-teal-seven.vercel.app/",
    },
  ];

  return (
    <section className="section">
      <div className="container3">
        <h1 className="h3">Projects</h1>
        <div className="grid-box">
          {projectList.map((project) => (
            <div className="glow-box">
              <div className="img-box">
                {" "}
                <img src={project.image} className="img" />
              </div>
              <h1 className="h">{project.name}</h1>
              <div className="small-box"></div>
              <p className="para">{project.description}</p>
              <a href={project.link} target="_blank">
                {" "}
                <button className="bt">Look it up</button>
              </a>{" "}
            </div>
          ))}
        </div>
        {/* <div className="big-box">
          <div className="img-box2">
            {" "}
            <img src="images/Screenshot (26).png" alt="" className="img" />
          </div>
          <h1 className="h100">Project 2</h1>
          <div className="small-box2"></div>
          <p className="para2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit
            ut in illo eaque non aliquam? Aut dolore labore soluta.
          </p>
          <button className="bt2">Look it up</button>
        </div> */}
      </div>
      {/* <div className="container4">
        <div className="glow-box2">
          <div className="img-box4">
            {" "}
            <img src="images/Screenshot (26).png" alt="" className="img" />
          </div>
          <h1 className="h200">A bit longer title</h1>
          <div className="small-box4"></div>
          <p className="para4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit
            ut in illo eaque non aliquam? Aut dolore labore soluta.
          </p>
          <button className="bt4">Look it up</button>
        </div>
        <div className="big-box2">
          <div className="img-box3">
            {" "}
            <img src="images/Screenshot (26).png" className="img" />
          </div>
          <h1 className="h300">Project 4</h1>
          <div className="small-box3"></div>
          <p className="para3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit
            ut in illo eaque non aliquam? Aut dolore labore soluta.
          </p>
          <button className="bt3">Look it up</button>
        </div>
      </div> */}
    </section>
  );
}

export default Projects;
