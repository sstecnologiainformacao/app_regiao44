import {defineField, defineType, Rule } from 'sanity'

export default defineType({
  name: 'store',
  title: 'Loja',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nome',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'short_description',
      title: 'Descrição',
      type: 'string',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      title: 'Imagem principal',
      type: 'image',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'lat',
      title: 'Latitude',
      type: 'number',
    }),
    defineField({
      name: 'long',
      title: 'Longitude',
      type: 'number',
    }),
    defineField({
      name: 'address',
      title: 'Endereço',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField({
      name: 'rating',
      title: 'Classificação',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5).error('Informe um número entre 1 e 5.')
    }),
    defineField({
      name: 'type',
      title: 'Categoria',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{ type: 'category' }],
    }),
    defineField({
      name: 'array',
      title: 'Produtos',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'product' }] }],
    }),
  ],
})
