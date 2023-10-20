import { ReactNode } from "react";

export default function SearchLayout(props: {
  children: ReactNode;
  city_search: ReactNode;
}) {
  return (
    <>
      {props.children}
      {props.city_search}
    </>
  );
}
