import S from '@sanity/desk-tool/structure-builder'
import MdSettings from 'react-icons/lib/md/settings'
import MdPerson from 'react-icons/lib/md/person'
import MdBeach from 'react-icons/lib/md/beach-access'
import MdStar from 'react-icons/lib/md/star'
import MdCamera from 'react-icons/lib/md/camera'
import MdCollections from 'react-icons/lib/md/collections'

const hiddenDocTypes = listItem =>
  !['category', 'author', 'post', 'siteSettings', 'photographer', 'collection'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Collections')
        .icon(MdCollections)
        .schemaType('collection')
        .child(S.documentTypeList('collection').title('Collections')),
      S.listItem()
        .title('Blog posts')
        .icon(MdBeach)
        .schemaType('post')
        .child(S.documentTypeList('post').title('Blog posts')),
      S.listItem()
        .title('Authors')
        .icon(MdPerson)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),
      S.listItem()
        .title('Photographers')
        .icon(MdCamera)
        .schemaType('photographer')
        .child(S.documentTypeList('photographer').title('Photographers')),
      S.listItem()
        .title('Categories')
        .icon(MdStar)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
