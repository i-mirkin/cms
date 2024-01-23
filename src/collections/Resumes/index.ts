import { CollectionConfig } from "payload/types";
import RenderHTML from "../../components/RenderHTML";

export const Resumes: CollectionConfig = {
  slug: "resumes",
  labels: {
    singular: "Резюме",
    plural: "Резюме",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
        name: "name",
        type: "text",
        label: "Имя",
        admin: {
        placeholder: "Введите имя кандидата",
      },
      required: true,
    },
    {
        name: "phone",
        label: "Телефон",
        type: "text",
        unique: true,
        admin: {
        placeholder: "Введите номер телефона",
        },
        required: true,
    },
    {
      name: "status",
      label: "Статус резюме",
      type: "radio",
      options: [
        {value: "new", label: "Новое"}, 
        {value: "at_work", label: "В работе"}, 
      ],
    },
    {
        name: "status_test",
        label: "Статус прохождения теста",
        type: "radio",
        options: [
          {value: "complete", label: "Пройден"}, 
          {value: "refused", label: "Отказался"}, 
          {value: "failed", label: "Не пройден"},
        ],
    },
    {
        name: "content",
        label: "Текст резюме",
        type: "textarea",
    },
    {
      name: "contentView",
      label: "Превью резюме",
      type: "textarea",
      admin: {
          components: {
              Field: RenderHTML,
          }
      },

    },

    {
        name: 'vacancy',
        label: "Вакансия",
        hasMany: false,
        relationTo: 'vacancies',
        type: 'relationship',
    }, 
  ],
};
