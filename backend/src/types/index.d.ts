export interface Word {
  id: number;
  lang: string;
  token: string;
  normalized: string;
  image_url: string;
  phonetic_hint: string | null;
}

export interface ScoreResponse {
  wordId: number;
  target: string;
  transcript: string;
  score: number;
}
