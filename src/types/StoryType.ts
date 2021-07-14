export interface StoryState {
  id: number;
  by: string;
  descendants: number;
  kids: Array<number>;
  score: number;
  time: number;
  title: string;
  type: string;
  url?: string;
}
