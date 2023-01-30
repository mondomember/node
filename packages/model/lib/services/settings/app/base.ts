export interface NameProperty {
  name: string;
}

export interface AppProperty {
  app?: { uiVersion?: string };
}

interface Integration {
  label: string;
  urls?: {
    [key: string]: string;
  };
}

export interface IntegrationsProperty {
  integrations: { [key: string]: Integration };
}

export interface BrandingProperty {
  branding: { [key: string]: string };
}
