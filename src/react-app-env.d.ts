/// <reference types="react-scripts" />

interface AppStorage {
  app_data: AppUserData;
}

interface AppUserData {
  user_id: string;
  session_timestamp: number;
  session_referrer: string;
  enable_contact_popup: boolean;
  theme: AppTheme;
}

