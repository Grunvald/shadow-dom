export type TConfigChildrenItem = TConfig | string;

export type TConfigProps = {
    class?: string;
    id?: string;
    children?: TConfigChildrenItem[];
}

export type TConfig = {
    tag: string;
    props: TConfigProps;
}