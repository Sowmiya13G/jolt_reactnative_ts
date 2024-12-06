import { SvgProps } from "react-native-svg";

export interface TabData {
  id: number;
  title: string;
  count: number | null;
  countColor: string;
}

export interface BottomTabsSheet{
  id: number;
  name: string;
  component: React.ComponentType;
  title: string;
  icon?: React.ElementType<SvgProps>;
}

export interface PoliciesData {
  id: number;
  title: string;
  points: string[];
}