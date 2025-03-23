import { ReactNode } from "react";

export enum DIRECTION {
  LEFT = "left",
  RIGHT = "right",
  UP = "up",
  DOWN = "down",
}
export interface MARQUEE_TYPES {
  items: ReactNode;
  speed: number;
  direction: DIRECTION;
  pauseOnHover: boolean;
}
export interface Props {
  children: ReactNode;
}
