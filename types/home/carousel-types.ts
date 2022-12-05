export interface CarouselTypes {
  id: number;
  title: string;
  subTitle: string;
  cover: string;
  up: boolean;
  only: boolean;
  free: boolean;
}

export interface CarouselItemTypes {
  carousel: CarouselTypes;
  total: number;
  carouselNum: number;
  duration: number;
  endPoint: string;
}

export interface CarouselListPropsTypes {
  carouselNum: number;
  moveWidth: number;
  endPoint: string;
}

export interface CarouselItemPropsTypes {
  current: boolean;
  next: boolean;
  duration?: number;
  endPoint?: string;
}
