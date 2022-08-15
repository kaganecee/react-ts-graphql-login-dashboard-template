import { FunctionComponent, MouseEventHandler } from 'react';
type buttonProps = {
    title: string;
    color: string;
    event: MouseEventHandler<HTMLButtonElement>;
};
export const Button: FunctionComponent<buttonProps> = ({ title, color, event }) => (
    <button
        className="tableButtons"
        style={{ backgroundColor: color, borderColor: color }}
        onClick={event}
    >
        {title}
    </button>
);
