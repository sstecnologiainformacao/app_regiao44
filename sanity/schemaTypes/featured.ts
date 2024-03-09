import {defineField, defineType, Rule} from 'sanity'

export default defineType({
  name: 'featured',
  title: 'Menu de Categorias',
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
      name: 'stores',
      title: 'Lojas',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'store' }]}],
    }),
  ],
});

