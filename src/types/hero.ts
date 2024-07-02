type ILangauege = {
  title: string;
  _id: string;
};

export type IHero = {
  _id: string;
  language_id: ILangauege;
  title: string;
  description: string;
};
