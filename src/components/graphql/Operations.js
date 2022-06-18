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
      content_2
      image_url_2
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
  mutation create_page(
    $title: String
    $content: String
    $image_url: String
    $image_url_2: String
    $content_2: String
  ) {
    insert_pages(
      objects: {
        title: $title
        content: $content
        image_url: $image_url
        image_url_2: $image_url_2
        content_2: $content_2
      }
    ) {
      returning {
        id
        title
        content
        image_url
        image_url_2
        content_2
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
      _set: {
        title: $title
        content: $content
        image_url: $image_url
        image_url_2: $image_url_2
        content_2: $content_2
      }
    ) {
      id
    }
  }
`;

export const FETCH_PAGE_BY_ID = gql`
  query viewPage($id: Int!) {
    pages_by_pk(id: $id) {
      content_2
      image_url_2
      image_url
      published
      slug
      title
      content
      id
    }
  }
`;
