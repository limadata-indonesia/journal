import { FAQ_ITEMS } from "@/lib/data";
import { Accordion } from "./ui/Accordion";

export function FAQ() {
  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary lg:text-4xl">Pertanyaan yang sering diajukan</h2>
        </div>
        <div className="mt-12">
          <Accordion items={FAQ_ITEMS} />
        </div>
      </div>
    </section>
  );
}
