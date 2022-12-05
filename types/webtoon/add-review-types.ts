export interface SetStarRateTypes {
  starRate: number;
  setStarRateHandler: (star: number) => void;
  starHovered: number;
  setStarHovered: (id: number) => void;
}

export interface SetCommentTypes {
  comment: string;
  setCommentHandler: (comment: string) => void;
  starRate: number;
}
