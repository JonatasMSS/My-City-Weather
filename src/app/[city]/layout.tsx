import { ReactNode } from "react";

export default function CityConditionLayout(props: {
  children: ReactNode;
  oneHourCond: ReactNode;
}) {
  return (
    <>
      {props.children} {props.oneHourCond}
    </>
  );
}
