export type TSlug = string;

export interface ITag {
  slug: TSlug;
  name: string;
  url: string;
}

export interface ITagsState {
  tag: TSlug | null;
}
