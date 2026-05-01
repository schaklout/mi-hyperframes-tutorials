export interface TutorialStep {
  line: number;
  explanation: string;
  duration: number;
}

export interface TutorialConfig {
  title: string;
  language: string;
  theme: string;
}

export interface TutorialData {
  config: TutorialConfig;
  code: string;
  steps: TutorialStep[];
}
