export enum Pages {
  HOME = '/',
  ABOUT = '/about/',
  RESUME = '/resume/',
  PORTFILIO = '/portfilio/'
}

type Routers = {
  [key in Pages]: {
    prev: string,
    next: string,
  }
}

export const routers: Routers = {
  [Pages.HOME]: {
    prev: Pages.PORTFILIO,
    next: Pages.ABOUT,
  },
  [Pages.ABOUT]: {
    prev: Pages.HOME,
    next: Pages.RESUME,
  },
  [Pages.RESUME]: {
    prev: Pages.ABOUT,
    next: Pages.PORTFILIO,
  },
  [Pages.PORTFILIO]: {
    prev: Pages.RESUME,
    next: Pages.HOME,
  },
};