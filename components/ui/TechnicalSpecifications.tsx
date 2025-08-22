import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion-product";

interface TechnicalSpecificationsProps {
  specs: string[];
  values: {
    type: string;
    content: string | { label: string; value: string }[] | string[];
  }[];
}

const TechnicalSpecifications: React.FC<TechnicalSpecificationsProps> = ({ specs, values }) => {
return (
    <div className="bg-white text-black text-center w-full flex justify-center rounded-3xl">
    <div className="w-full max-w-4xl">
        <div className="mt-10">
        <a href="#backup" className="m-10 px-10 text-center text-3xl font-light text-gray-500 my-10 border-x-4 border-blue-700 w-80 rounded-3xl">Back To Top</a>
        </div>
        <h1 className="pt-20 pb-10 font-bold text-4xl">Technical Specifications</h1>
        <div className="w-full px-4">
        <Accordion type="multiple" className="w-full text-xl lg:text-2xl mb-20">
            {specs.map((spec, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{spec}</AccordionTrigger>
                <AccordionContent className="text-left">
                {values[index].type === 'text' ? (
                    <div dangerouslySetInnerHTML={{ __html: values[index].content as string }} />
                ) : values[index].type === 'table' ? (
                    <table className="w-full table-fixed">
                    <tbody>
                        {(values[index].content as { label: string; value: string }[]).map((item, i) => (
                        <tr key={i}>
                            <td className="font-semibold pr-4 border border-gray-300 w-1/2 p-3 text-right">{item.label}:</td>
                            <td className="border border-gray-300 w-1/2 p-3">{item.value}</td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                ) : values[index].type === 'list' ? (
                    <ul className="list-disc pl-5">
                    {(values[index].content as string[]).map((item, i) => (
                        <li key={i} className="mb-2">{item}</li>
                    ))}
                    </ul>
                ) : null}
                </AccordionContent>
            </AccordionItem>
            ))}
        </Accordion>
        </div>
    </div>
    </div>
);
};

export default TechnicalSpecifications;