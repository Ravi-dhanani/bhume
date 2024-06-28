import SectionTitle from "../Common/SectionTitle";

const TermsAndConditions = () => {
  return (
    <>
      <section id="career" className="py-16 md:pt-52 lg:pt-52">
        <div className="container">
          <SectionTitle
            title="Terms and condition"
            ctitle="条款和条件"
            paragraph="There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form."
            center
          />
          <div className="mx-auto max-w-screen-md px-4 md:px-8">
            <p className="mb-2 text-gray-500 sm:text-lg md:mb-2">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated. It may be used to
              display a sample of fonts or generate text for testing. Filler
              text is dummy text which has no meaning however looks very similar
              to real text. The important factor when using filler text is that
              the text looks realistic otherwise it will not look very good.
              <br />
              <br />
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is{" "}
              <a
                href="#"
                className="text-indigo-500 underline transition duration-100 hover:text-indigo-600 active:text-indigo-700"
              >
                random
              </a>{" "}
              or otherwise generated. It may be used to display a sample of
              fonts or generate text for testing. Filler text is dummy text
              which has no meaning however looks very similar to real text.
            </p>
            <h2 className="mb-2 text-xl font-semibold text-gray-800 sm:text-2xl md:mb-4">
              About us
            </h2>
            <p className="mb-6 text-gray-500 sm:text-lg md:mb-8">
              This is a section of some simple filler text, also known as
              placeholder text. It shares some characteristics of a real written
              text but is random or otherwise generated. It may be used to
              display a sample of fonts or generate text for testing. Filler
              text is dummy text which has no meaning however looks very similar
              to real text.
            </p>
            <ul className="mb-6 list-inside list-disc text-gray-500 sm:text-lg md:mb-8">
              <li>This is a section of some simple filler text</li>
              <li>Also known as placeholder text</li>
              <li>It shares some characteristics of a real written text</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsAndConditions;
