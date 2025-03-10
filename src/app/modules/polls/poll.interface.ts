export type TPollOption = { text: string; votes: number };

export type TPoll = {
  question: string;
  options: TPollOption[];
  expiresAt: Date;
  showResultsAfterExpiry?: boolean;
  reactions?: { like: number; trending: number };
};

export type PollFilterParams = {
  search?: string;
  page?: number;
  limit?: number;
};
