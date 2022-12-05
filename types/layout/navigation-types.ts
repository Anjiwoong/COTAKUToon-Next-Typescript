export interface NavigationTypes {
  category: string;
  menu: { title: string; path: string[] }[];
}

export interface MenuTypes {
  title: string;
  path: string[];
}

export interface CashNavTypes {
  title: string;
  path: string;
}
