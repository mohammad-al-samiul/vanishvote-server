export interface TPoll {
  question: string;
  options: string[];
  expiresAt: Date;
  private: boolean;
}
