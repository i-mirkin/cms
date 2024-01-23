import { CollectionConfig } from "payload/types";

export const Vacancies: CollectionConfig = {
  slug: "vacancies",
  labels: {
    singular: "Вакансия",
    plural: "Вакансии",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      label: "Название вакансии",
      required: true,
    },
    {
      name: "number",
      label: "Номер вакансии в ATS",
      type: "text",
      required: true,
    },
    {
      name: "comment",
      label: "Комментарий",
      type: "textarea"
    },
    {
        name: 'tests',
        label: "Тесты",
        hasMany: false,
        relationTo: 'tests',
        type: 'relationship',
    },
    {
        name: 'archived', // required
        type: 'checkbox', // required
        label: 'В архиве',
        defaultValue: false,
      }, 
    
    
  ],
};
