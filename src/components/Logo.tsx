import { ReactElement } from "react";
import logoImg from "../../src/public/assets/eventx.svg";

export const Logo = (): ReactElement => {
  return <img src={logoImg} alt="" width={144} />;
};
