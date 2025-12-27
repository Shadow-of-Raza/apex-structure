export interface HeroContent {
  id: string;
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

export interface HeroImage {
  id: string;
  imageUrl: string;
  alt: string;
}