import { ReactNode } from "react";

export interface StepData {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  content: ReactNode;
}

export interface StepProps {
  data: StepData;
}

export enum StorageKeys {
  CURRENT_STEP = 'cascadia_agent_step_v1'
}