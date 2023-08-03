const blogSchema = {
    name: "blog",
    title: "Blogs",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "creationId",
            title: "ID",
            type: "number"
        },
        {
            name: "slug",
            title: "Slug",
            type: "slug",
            options: { source: "name"}
        },
        {
            name: "image",
            title: "Image",
            type: "image",
            option: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
                
            ]
        },
        {
            name: "secundaryImage",
            title: "Secundary Image",
            type: "image",
            option: { hotspot: true },
            fields: [
                {
                    name: "alt",
                    title: "Alt",
                    type: "string"
                }
                
            ]
        },
        {
            name: "url",
            title: "URL",
            type: "url"
        },
        {
            name: "author",
            title: "Author",
            type: "string"
        },
        {
            name: "date",
            title: "Date",
            type: "string"
        },
        {
            name: 'content',
            title: 'Content', 
            type: 'array', 
            of: [{type: 'block'}]
          }
    ]
}

export default blogSchema;