type WebsiteAnalysisEntity = {
  orgnr: number;
  website: string;

  websitePerformanceScore: number;
  websiteAccessibilityScore: number;
  websiteBestPracticesScore: number;
  websiteSeoScore: number;
  websitePwaScore: number;
  websiteCO2Score: number;
};
