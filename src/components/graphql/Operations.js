import { gql } from "graphql-tag";

export const FETCH_PAGES = gql`
  query fetch_all_pages {
    pages {
      id
      title
      slug
      image_url
      published
      content
    }
  }
`;
export const DELETE_PAGE_BY_ID = gql`
  mutation deletePage($id: Int!) {
    delete_pages_by_pk(id: $id) {
      id
    }
  }
`;
export const INSERT_PAGE = gql`
  mutation create_page($title: String, $content: String, $image_url: String) {
    insert_pages(
      objects: { title: $title, content: $content, image_url: $image_url }
    ) {
      returning {
        id
        title
        content
        image_url
      }
    }
  }
`;
export const EDIT_PAGE = gql`
  mutation editPage(
    $id: Int!
    $content: String
    $image_url: String
    $title: String
  ) {
    update_pages_by_pk(
      pk_columns: { id: $id }
      _set: { title: $title, content: $content, image_url: $image_url }
    ) {
      id
    }
  }
`;

export const FETCH_PAGE_BY_ID = gql`
  query viewPage($id: Int!) {
    pages_by_pk(id: $id) {
      image_url
      published
      slug
      title
      content
      id
    }
  }
`;
