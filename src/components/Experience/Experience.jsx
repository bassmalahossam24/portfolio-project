function Experience() {
  const experienceData = [
    {
      title: "Full Stack Developer",
      date: "2017 - 2018",
      iconBg: "bg-info",
      description:
        "Developed full-stack applications with a focus on performance. Collaborated with UI/UX and backend teams to ship scalable products.",
    },
    {
      title: "Front-End Developer at Google",
      date: "2018 - 2019",
      iconBg: "bg-danger",
      description:
        "Created responsive UIs using React. Optimized app performance and accessibility for millions of users.",
    },
    {
      title: "System Analyst",
      date: "2019 - 2020",
      iconBg: "bg-warning",
      description:
        "Analyzed business requirements and designed system architectures. Improved workflows through automation and documentation.",
    },
  ];

  return (
    <section className="experience-content d-flex flex-column align-items-center">
      <div className="w-75 mt-4 playfair-font">
        <p className="text-secondary mt-3">EXPERIENCE</p>
        <h5 className="fw-bold mb-5">WORK EXPERIENCE</h5>

        <div className="position-relative ms-5">
          {/* Vertical line */}
          <div
            className="position-absolute top-0 start-0 translate-middle-x bg-secondary"
            style={{ width: "1px", height: "100%"  }}
          ></div>

          {/* Stepper items */}
          {experienceData.map((item, index) => (
            <div key={index} className="d-flex mb-5">
              {/* Step Icon */}
              <div className="position-relative align-content-center translate-middle-x ">
                <div
                  className={`rounded-circle text-white ${item.iconBg} d-flex justify-content-center align-items-center`}
                  style={{ width: "40px", height: "40px", zIndex: 1 }}
                >
                  <i className="fa-solid fa-pencil fs-6"></i>
                </div>
              </div>

              {/* Step Content */}
              <div className="ms-4 bg-light p-4 rounded shadow w-100">
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h6 className="mb-0 fw-semibold">{item.title}</h6>
                  <span className="text-secondary small">{item.date}</span>
                </div>
                <p className="text-secondary mb-0">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
