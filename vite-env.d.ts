interface ImportMetaEnv {
  readonly VITE_GA_ID: string;
  readonly VITE_SUFFIX_TITLE: string;
 
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
