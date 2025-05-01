export type TemplateType = 'email' | 'linkedin';
export type EmailTemplateSubtype = 'recruiter' | 'engineer';
export type LinkedInTemplateSubtype = 'referral' | 'networking' | 'job';

export interface TemplateRequest {
  type: TemplateType;
  subtype: EmailTemplateSubtype | LinkedInTemplateSubtype;
  recipientName: string;
  companyName: string;
  position: string;
  experience: string;
  skills: string;
  connectionType?: 'existing' | 'new';
}

export interface TemplateResponse {
  content: string;
  error?: string;
} 