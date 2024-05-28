import { MutatingDots } from "react-loader-spinner";

import css from "./Loader.module.css"

function Loader() {
  return (
    <MutatingDots
  visible={true}
  height="100"
  width="100"
  color="#dc143c"
  secondaryColor="#dc143c"
  radius="12.5"
  ariaLabel="mutating-dots-loading"
  wrapperClass={css.loader}
  />
  );
}

export default Loader;