import Buttons from "./Button";
import Image from "next/image";

export default function CourseCard({ value, cls }) {
  return (
    <>
      {value.map((item) => (
        <div key={item.title} className={cls}>
          <div className="conentWrap ">
            <div className="cardImg">
              <Image loading="lazy" src={item.image} alt="Gif" />
            </div>
            <div className="cardDet">
              <h3>{item.title}</h3>
              {item.dept && <p className="sm:mt-[-20px]">{item.dept}</p>}
              {item.button && <Buttons value={item.button} />}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
