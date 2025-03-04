import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = () => {
  return (
    <div
      className=" mt-4 md:py-10 bg-black w-full
        rounded-3xl
        
        "
    >
      <div className=" p-10 md:p-4 md:px-20">
        <div className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-[#f6f5f4] text-[1.4rem]">
          Have questions ?
        </div>
        <div className="  font-semibold text-lg sm:text-xl md:text-3xl text-green-500">
          Get answers.
        </div>
        <Accordion type="single" collapsible className="text-[#f6f5f4] text-xl">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is Bird?</AccordionTrigger>
            <AccordionContent>
              Bird is a full fledge marketing agency that specializes in
              branding, web design, and digital marketing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>How to start ?</AccordionTrigger>
            <AccordionContent>
              You can start by contacting us. We will get back to you within 24
              hours.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Pricing ?</AccordionTrigger>
            <AccordionContent>
              We offer custom tailored solutions for your business. Contact us
              to get a quote.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Support ?</AccordionTrigger>
            <AccordionContent>
              We offer Monday-Friday support for all our clients.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default FAQS;
