
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

export function Faq() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          How long will it take for a team member to contact me?
        </AccordionTrigger>
        <AccordionContent>
        If you booked a regular appointment, we will contact you within 3 days, though we strive to reach out to you as soon as possible. 
        <br/>If you ordered our express service, you will be contacted within 24 hours. 
        <br/>For urgent appointments, we respond within 6 hours, and in most cases, we attend to you immediately

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Do I have to provide my information to your team?</AccordionTrigger>
        <AccordionContent>
          Yes, we gather as much information as possible to fully understand your issue. Rest assured, your information remains strictly confidential between you and us.

        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>Is there any additional fees?</AccordionTrigger>
        <AccordionContent>
        Absolutely! Time is money. The appointment fee paid during your initial booking covers only the preliminary investigation of your issue. There will be a separate fee for the resolution itself, which we will confirm with you before proceeding.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>How safe is my information?</AccordionTrigger>
        <AccordionContent>
        We only retain the information from your appointment request for our records and do not store any other details. All information you provide, including any credentials, will be deleted once your appointment is completed. However, for added peace of mind, we always recommend changing any credentials you've shared after the appointment.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>Can I get a refund for my appointment fee?{" "}</AccordionTrigger>
        <AccordionContent>
        Refunds for the appointment fee are generally not possible, as each investigation requires significant time and effort. Unless your appointment was not attended to or was rejected by us, we do not issue refunds if we've invested effort, even if we’re unable to resolve the issue. The time our team dedicates to each case deserves fair compensation. 
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>Is the payment Secure in this website?</AccordionTrigger>
        <AccordionContent>
        Yes, your payment is secure on our website. We use the CyberSource payment gateway, which is a trusted and secure platform for processing online transactions. CyberSource ensures that your payment information is protected with advanced encryption and security measures, providing you with a safe and reliable payment experience
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
