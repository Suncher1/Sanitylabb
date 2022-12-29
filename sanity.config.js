// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk'
import schemas from './schemas/schema'

const supportedLanguages = [
    { id: 'en', title: 'English', isDefault: true },
    { id: 'se', title: 'Swedish' },
  ]

const baseLanguage = supportedLanguages.find(l => l.isDefault)

const localeString = {
    title: 'Localized string',
    name: 'localeString',
    type: 'object',
    // Fieldsets can be used to group object fields.
    // Here we omit a fieldset for the "default language",
    // making it stand out as the main field.
    fieldsets: [
      {
        title: 'Translations',
        name: 'translations',
        options: { collapsible: true }
      }
    ],
    // Dynamically define one field per language
    fields: supportedLanguages.map(lang => ({
      title: lang.title,
      name: lang.id,
      type: 'string',
      fieldset: lang.isDefault ? null : 'translations'
    }))
  }

export default defineConfig({
  title: "Sanity Project",
  projectId: "kyr3v8os",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schemas
  },
});