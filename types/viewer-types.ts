export interface ViewerTypes {
  title?: string;
}

export interface ViewerThemeTypes {
  color: string;
  viewerTheme: string;
  changeThemeHandler: (color: string) => void;
}
