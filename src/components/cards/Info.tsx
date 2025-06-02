import { Paragraph } from "../shared/Paragraph";

interface InfoProps {
    title: string;
    description: string;
    children?: React.ReactNode;

}

export const Info = ({title, description, children}: InfoProps) => {

    return(
        <div>
            <div className="rounded-xl bg-gray dark:bg-gray-950 p-3 text-heading-1 w-max relative">
                {children}</div>
            <h2 className="text-heading-2 w-max relative font-semibold md:text-xl">
                {title}</h2>
            <Paragraph>{description}</Paragraph>
        </div>
    );
};