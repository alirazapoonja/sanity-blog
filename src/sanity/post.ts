import { Rule } from "postcss";
import { defineArrayMember, defineField, defineType } from "sanity";

export const post = defineType ({
    name: "postnew",
    type: "document",
    title: "post",
    fields: [
        defineField({
            name: "title",
            type: "string",
            title: "post Title",
            description: "Title of the Post",
            validation: (Rule) => Rule.required(),
       }),

       defineField({
        name: "slug",
        type: "slug",
        title: "slug",
        options: {
            source: "tittle",
            maxLength:96,
        },
               }),

               defineField({
                name: "summary",
                type: "text",
                  title: "Summary",
                  validation: (Rule) => Rule.required(),
                   }),

                   defineField({
                    name: "image",
                    type: "image",
                      title: "image",
                     }),

                     defineField({
                        name: "Content",
                        type: "array",
                          title: "Content",
                          of: [defineArrayMember({
                            type: 'block'
                          })]
                         }),


    ],
}); 
