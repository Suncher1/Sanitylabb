export default {
    name: 'collection',
    type: 'document',
      title: 'Collection',
    fields: [
      //String
      {
        name: 'propertystring',
        type: 'string',
        title: 'Property(string)'
      },
      //Number
      {
        title: 'Property(number)',
        name: 'propertynumber',
        type: 'number',
        hidden: false,
        description: 'This is a number',
        initialValue: 100,
        options: {
            list: [1,2,3,4,5,15]
        },
        validation: Rule => Rule.required().min(10)
      },
      //Image
      {
        title: 'Poster',
        name: 'poster',
        type: 'image',
        options: {
          hotspot: true // <-- Defaults to false
        },
        fields: [
          {
            name: 'caption',
            type: 'string',
            title: 'Caption',
            options: {
              isHighlighted: true // <-- make this field easily accessible
            }
          },
          {
            // Editing this field will be hidden behind an "Edit"-button
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
          }
        ]
      },
      //Array of animal
      {
        title: 'Array Of Animals',
        name: 'arrayOfAnimals',
        type: 'array',
        of: [{type: 'animal'}]
      },
      //Array string
      {
        title: 'Array Of Strings',
        name: 'arrayOfStrings',
        type: 'array',
        of: [{type: 'string'}],
        options: {
          layout: 'tags'
        }
      },
      //Array number
      {
        title: 'Array Of Numbers',
        name: 'arrayOfNumbers',
        type: 'array',
        of: [{type: 'number'}],
        options: {
          layout: 'grid'
        }
      },
      //Block
      {
        title: 'Text In Block',
        name: 'textInBlock',
        type: 'array',
        of: [{type: 'block'},
        {type: 'animal'}]
      },
      //Boolean
      {
        title: 'Is this true?',
        name: 'booleanProperty',
        type: 'boolean'
      },
      //Date
      {
        title: 'Date property',
        name: 'dateProperty',
        type: 'date'
      },
      //Datetime
      {
        title: 'Datetime property',
        name: 'datetimeProperty',
        type: 'datetime'
      },
      //File
      {
        title: 'File Property',
        name: 'fileProperty',
        type: 'file',
        fields: [
          {
            name: 'description',
            type: 'string',
            title: 'Description'
          },
          {
            name: 'animalReferance',
            type: 'reference',
            title: 'Animal',
            to: {type: 'animal'}
          }
        ]
      },
      //Geopoint
      {
        title: 'Geopoint Property',
        name: 'location',
        type: 'geopoint'
      },
      //Object
      {
        title: 'Address Object',
        name: 'addressObject',
        type: 'object',
        fields: [
          {name: 'street', type: 'string', title: 'Street name'},
          {name: 'streetNo', type: 'string', title: 'Street number'},
          {name: 'city', type: 'string', title: 'City'}
        ]
      },
      //Referance
      {
        name: 'ReferanceProperty',
        type: 'object',
        fields: [
          {
            title: 'Refarance To Animal',
            name: 'referanceToAnimal',
            type: 'reference',
            to: [{type: 'animal'}]
          }
        ]
      },
      //Slug
      {
        title: 'Slug Property',
        name: 'slugProperty',
        type: 'slug',
        options: {
          source: 'propertystring',
          maxLength: 200, // will be ignored if slugify is set
          slugify: input => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 300)
        }
      },
      //Url
      {
        title: 'URL Property',
        name: 'urlProperty',
        type: 'url'
      }
    ]
  }