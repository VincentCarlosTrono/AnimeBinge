export interface HeaderListInterface {
  name: string;
  link: string;
}
export type HeaderList = Array<HeaderListInterface>;

export interface ThrowbackInterface {
  image: string;
  name: string;
}
export type ThrowbackType = Array<ThrowbackInterface>;

export interface WeeklyTrendInterface {
  image: string;
  title: string;
  category: string;
  path: string;
}
export type WeeklyTrend = Array<WeeklyTrendInterface>;

export interface AotEpisodeInterface {
  image: string;
  name: string;
  details: string;
}
export type AotEpisode = Array<AotEpisodeInterface>;

export interface IsOpenInterface {
  setIsOpen?: React.SetStateAction<boolean>;
  isOpen: boolean;
}
