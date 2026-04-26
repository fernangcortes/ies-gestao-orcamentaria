export type VisualType = 'timeline' | 'cycle' | 'balance' | 'hierarchy' | 'alert' | 'metric' | 'process' | 'document' | 'structure';

export interface VisualDataProps {
  label: string;
  subLabel?: string;
  iconType?: string;
  color?: string;
}

export interface GlossaryTerm {
  id: string;
  category: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  visualType: VisualType;
  visualData: VisualDataProps[];
  examples: string[];
}
