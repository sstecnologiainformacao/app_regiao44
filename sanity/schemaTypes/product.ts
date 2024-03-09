import {defineField, defineType, Rule} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Produto',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      title: 'Descrição',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'price',
      title: 'Preço',
      type: 'number',
    }),
    defineField({
      name: 'image',
      title: 'Imagem do Produto',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
  ],
});

