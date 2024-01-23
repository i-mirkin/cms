import { Block, CollectionConfig } from "payload/types";


export const Tests: CollectionConfig = {
  slug: "tests",
  labels: {
    singular: "Тестовые задания",
    plural: "Тестовое задание",
  },
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      label: "Название",
      type: "text",
      required: true,
    },  
    /* {
      name: 'question', // required
      label: "Вопрос",
      type: 'blocks', // required
      
      minRows: 1,
      maxRows: 20,
      blocks: [
        QuestionBlock,
      ],
    }, */
    {
      name: 'questions', 
      label: 'Вопросы',
      type: 'array', 
      minRows: 2,
      maxRows: 5,
      labels: {
        singular: 'Вопрос',
        plural: 'Вопросы',
      },
      fields: [
        // required
        {
          name: 'questionItem',
          label: 'Содержание вопроса',
          type: 'text',
        },
        
       
        {
          name: "answer",
          label: 'Ответы',
          labels: {
            singular: 'Ответ',
            plural: 'Ответы',
          },
          type: "array",
          minRows: 2,
          maxRows: 5,
          required: true,
          
          fields: [
            {
              type: 'row', // required
              fields: [
                {
                  name: 'answerText',
                  label: "Вариант ответа",
                  type: 'text',
                  admin: { width: '70%' },
                },  
                {
                  name: 'answerWeight',
                  label: "Вес ответа",
                  type: 'text',
                  admin: { width: '30%' },
                }, 
              ]
            }
          ]
       
        }

      ],
    },

  ],
};
