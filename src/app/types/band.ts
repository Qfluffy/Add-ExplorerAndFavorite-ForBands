export type Member = {
  name: string;
  image: string;
};

export type Band = {
  id: number;
  name: string;
  logo: string;
  genre: string;
  members: Member[];
  songs: string[];
};