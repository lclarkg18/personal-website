export interface LanguageObject {
  activeLanguage: string, // Denotes the language received from the url.
  languageOptions: string[] // Denotes the supported languages in 'en' format
  flagCodes: Map<string, string> // Maps language code like 'en' to flag code like 'GB'
}
