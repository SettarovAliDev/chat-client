export interface IChat {
  id: string;
  isRoom: boolean;
  time: number;
  status: string;
  photo: string;
  online: boolean;
  noChecked: number;
  message: string;
  file?: string;
  name: string;
  exitDate: number | false;
}
