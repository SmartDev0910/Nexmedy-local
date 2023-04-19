import { Button } from "@mui/material";

export default function Buttons({ value }) {
  const clsName = getClass(value.type);
  return (
    <>
      <Button className={clsName}>{value.val}</Button>
    </>
  );
}

function getClass(type) {
  switch (type) {
    case 1:
      return "btn-t-1";
    case 2:
      return "btn-t-2";
    default:
      break;
  }
}
