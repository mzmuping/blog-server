export interface IArticle {
  id?: number;
  title?: string;
  desc?: string;
  priority?: number;
  content?: string;
  head_img?: string;
  is_comment?: number;
  status?: number;
  click?: number;
  tags?: number[];
  types?: number[];
  users?: number[];
  keyWord?: string;
  created_at?: string;
  updated_at?: string;
  deleted_at?: string;
}
