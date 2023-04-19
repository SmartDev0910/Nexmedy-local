export default function HeadWrap({ value }) {
  return (
    <div className="headWrap">
      <h1 className="mb-20">{value.title}</h1>
      {value.desc && <p className="t-2 ">{value.desc}</p>}
    </div>
  );
}
