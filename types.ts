
export type ToolCategory = 
  | 'Download' 
  | 'Text' 
  | 'Calculator' 
  | 'Design' 
  | 'Link' 
  | 'Community';

export interface Tool {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: string;
  steps?: string[];
}

export interface CalculationResult {
  label: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
}
