export default {
    name: 'framework',
    type: 'document',
      title: 'Framework',
    fields: [ 
      //String
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
      {
        title: 'Top Menu Entries',
        name: 'topMenu',
        type: 'array',
        of: [
          {
            type: 'reference',
            to: [
              {type: 'animal'},
              {type: 'collection'},
            ]
          }
        ]
      },
      {
        title: 'Footer',
        name: 'footer',
        type: 'object',
        fields: [
          {name: 'topContent', type: 'string', title: 'Top field'},
          {name: 'middleContent', type: 'string', title: 'Middle field'},
          {name: 'bottomContent', type: 'string', title: 'Bottom field'}
        ]
      }
    ]
  }