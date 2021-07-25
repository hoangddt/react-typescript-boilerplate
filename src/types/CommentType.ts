export default interface CommentState {
    id: number;
    by: string;
    kids: Array<number>;
    parent: number;
    time: number;
    text: string;
    type: string;
}
