import React, { useEffect, useState } from "react";
import { useMainContext } from "../../utils/context";
import axios from "axios";
import "./courses.scss";
import LoadnigMain from "../../components/loading/LoadnigMain";
import { Link } from "react-router-dom";
const CoursesAll = () => {
  const { baseURL } = useMainContext();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await axios.get(baseURL + "api/courses/");
        setData(res.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    fetchData();
  }, []);
  const [hover, setHover] = useState(null);
  const [click, setClick] = useState(null);
  const [active, setActive] = useState(true);
  const handleClick = (index) => {
    if (index !== click) {
      setClick(index);
    } else {
      setClick(null);
    }
  };

  return (
    <>
      {loading ? (
        <LoadnigMain />
      ) : (
        <div className="all_c_countainer">
          <h2 className="all_c_title">COURSES</h2>
          <div className="ar_btn_container">
            <button
              onClick={() => setActive(true)}
              className={`${active ? "ar_btn_active" : ""}`}
            >
              ACTIVE
            </button>
            <button
              onClick={() => setActive(false)}
              className={`${!active ? "ar_btn_active" : ""}`}
            >
              ARCHIVED
            </button>
          </div>
          <div className="a_c_contetn">
            {active
              ? data.courses?.map((item, index) => {
                  return (
                    <div
                      className="a_c_item"
                      key={index}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(null)}
                    >
                      <img src={item.c_img} alt="course_imgage" />
                      <div
                        className={`${
                          index == 1
                            ? "courses_item_title_2"
                            : "courses_item_title"
                        }`}
                      >
                        <h3>{item.c_title}</h3>
                      </div>
                      <div
                        className={`course_info ${hover === index && "top_0"}`}
                      >
                        <h4>{item.c_title}</h4>
                        <p>
                          Facilitator:
                          <span> {item.facilitator}</span>
                        </p>
                        <p>
                          Price:
                          {item.cost > 0 ? (
                            <span> {item.cost} $</span>
                          ) : (
                            <span> Free!</span>
                          )}
                        </p>
                        <Link className="learn_more" to={`${item.slug}`}>
                          Learn More!
                        </Link>
                      </div>
                      <div
                        className="course_btn_container"
                        onClick={() => handleClick(index)}
                      >
                        <div
                          className={`circle-plus closed ${
                            click == index && "opened"
                          }`}
                        >
                          <div className="circle">
                            <div className="horizontal"></div>
                            <div className="vertical"></div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`course_info_mobile ${
                          click === index && "top_0"
                        }`}
                      >
                        <h4>{item.c_title}</h4>
                        <p>
                          Facilitator:
                          <span> {item.facilitator}</span>
                        </p>
                        <p>
                          Price:
                          {item.cost > 0 ? (
                            <span> {item.cost} $</span>
                          ) : (
                            <span> Free!</span>
                          )}
                        </p>
                        <Link className="learn_more" to={`${item.slug}`}>
                          Learn More!
                        </Link>
                      </div>
                    </div>
                  );
                })
              : data.archived?.map((item, index) => {
                  return (
                    <div
                      className="a_c_item"
                      key={index}
                      onMouseEnter={() => setHover(index)}
                      onMouseLeave={() => setHover(null)}
                    >
                      <img src={item.c_img} alt="course_imgage" />
                      <div
                        className={`${
                          index == 1
                            ? "courses_item_title_2"
                            : "courses_item_title"
                        }`}
                      >
                        <h3>{item.c_title}</h3>
                      </div>
                      <div
                        className={`course_info ${hover === index && "top_0"}`}
                      >
                        <h4>{item.c_title}</h4>
                        <p>
                          Facilitator:
                          <span> {item.facilitator}</span>
                        </p>
                        <p>
                          Price:
                          {item.cost > 0 ? (
                            <span> {item.cost} $</span>
                          ) : (
                            <span> Free!</span>
                          )}
                        </p>
                        <Link className="learn_more" to={`${item.slug}`}>
                          Learn More!
                        </Link>
                      </div>
                      <div
                        className="course_btn_container"
                        onClick={() => handleClick(index)}
                      >
                        <div
                          className={`circle-plus closed ${
                            click == index && "opened"
                          }`}
                        >
                          <div className="circle">
                            <div className="horizontal"></div>
                            <div className="vertical"></div>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`course_info_mobile ${
                          click === index && "top_0"
                        }`}
                      >
                        <h4>{item.c_title}</h4>
                        <p>
                          Facilitator:
                          <span> {item.facilitator}</span>
                        </p>
                        <p>
                          Price:
                          {item.cost > 0 ? (
                            <span> {item.cost} $</span>
                          ) : (
                            <span> Free!</span>
                          )}
                        </p>
                        <Link className="learn_more" to={`${item.slug}`}>
                          Learn More!
                        </Link>
                      </div>
                    </div>
                  );
                })}
          </div>
        </div>
      )}
    </>
  );
};

export default CoursesAll;

// const { baseURL } = useMainContext();
// const [data, setData] = useState({});
// const [loading, setLoading] = useState(false);
// useEffect(() => {
//   const fetchData = async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(baseURL + "api/courses/");
//       setData(res.data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       console.log(error);
//     }
//   };
//   fetchData();
// }, []);
// console.log(data);
