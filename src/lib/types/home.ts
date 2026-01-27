export interface HeroContent {
  id: number;
  title: string;
  description: string;
  button1: {
    text: string;
    href: string;
  };
  stats: {
    label: string;
    value: string;
    icon: string;
  }[];
}

export interface ServiceState {
  id: number;
  icon: string;
  count: string;
  label: string;
  desc: string;
  color: string;
}
