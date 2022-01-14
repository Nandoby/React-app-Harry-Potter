import Content from "../components/Content";

import { Fragment, useState } from "react";

import Galleries3d from "../components/Galleries3d";

function Gryffondor({ school }) {
  const [display, setDisplay] = useState(true);
  const [avantage, setAvantage] = useState(false);
  const [inconvenient, setInconveniant] = useState(false);

  const show = (state, setState) => {
    let toggle = !state;
    setState(toggle);
  };

  let head = {
    color: school.HeadColor,
    fontFamily: "magic",
    fontSize: "100px",
  };
  let head2 = { color: school.HeadColor, cursor: "pointer" };
  let text = { color: school.textColor };
  let left = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "24px" }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5l7 7-7 7"
      />
    </svg>
  );
  let down = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ width: "24px" }}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );

  return (
    <>
      <Content
        colors={{
          backgroundImage: `linear-gradient(rgba(0,0,0,.8), rgba(0,0,0,.8)), url(${school.coverImg})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          width: "100%",
          minHeight: "calc(100vh - 70px)",
          backgroundPosition: "center center",
          mixBlendMode: "darken",
        }}
        content={
          <>
            <div className="container mt-5 p-4">
              <h1 style={head} className="text-center head">
                {school.school}
              </h1>
              <h3 style={head2} onClick={() => show(avantage, setAvantage)}>
                Avantages {avantage ? down : left}
              </h3>
              {avantage ? (
                <ul>
                  {school.avantages.map((av, key) => (
                    <li key={key} style={text} className="mb-4">
                      {av}
                    </li>
                  ))}
                </ul>
              ) : null}

              <h3
                onClick={() => show(inconvenient, setInconveniant)}
                style={head2}
              >
                Inconvénients {inconvenient ? down : left}
              </h3>
              {inconvenient ? (
                <ul>
                  {school.inconvenients.map((inc, key) => (
                    <Fragment key={key}>
                      <li style={text} className="mb-4">
                        {inc}
                      </li>
                    </Fragment>
                  ))}
                </ul>
              ) : null}
            </div>
            <Galleries3d>
              <img src="https://media.vanityfair.fr/photos/6193811a826173bb2f281886/16:9/w_2560%2Cc_limit/MCDHAPO_EC797.jpg" alt=""/>
              <img src="https://media.warnerbros.fr/images/HermioneGranger.jpg" alt=""/>
              <img src="https://media.melty.fr/article-4329688-facebook-f12/media.jpg" alt=""/>
            </Galleries3d>
          </>
        }
      />
    </>
  );
}

export default Gryffondor;
