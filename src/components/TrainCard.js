import { Icon } from "@mui/material";
export default function TrainCard({ value, cls }) {
  return (
    <>
      {value.map((i) => (
        <div key={i.title} className={cls}>
          <div className="iconWrap">
            <Icon />
          </div>
          <h3 className="t-2">{i.title}</h3>
          <p>{i.desc}</p>
          <div className={`abstract ${i.hover}`}></div>
        </div>
      ))}
    </>
  );
}
