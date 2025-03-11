export interface TPollOption {
  text: string;
  votes: number;
}

export interface IPoll {
  question: string;
  options: TPollOption[];
  expiresAt: Date;
  private: boolean;
  createdAt: Date;
}

export interface ICreatePollDTO {
  question: string;
  options: string[];
  expiresIn: number;
  privatePoll: boolean;
}
