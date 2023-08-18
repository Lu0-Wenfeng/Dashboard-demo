import { IconType } from "react-icons";

export interface SidebarElementProps {
  icon: IconType;
  title: string;
  backgroundColor?: string;
  textColor?: string;
  active?: boolean;
}

export type PropertiesType = {
  [location: string]: [string, string, string];
};

export interface CardProps {
  location: string;
  details: string[];
}
