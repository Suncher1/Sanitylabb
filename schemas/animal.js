export default {
    name: 'animal',
    type: 'document',
      title: 'Animal',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name'
      },
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
            title: 'Caption'
          },
          {
            // Editing this field will be hidden behind an "Edit"-button
            name: 'attribution',
            type: 'string',
            title: 'Attribution',
          },
          
          
        ] 
      },
      {
        name: 'languagename',
        type: 'localeString',
        title: 'language'
      }
    ]
    
  }