import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function Accord() {
  return (
    <div className="px-5">
      <div>
        <h2 className="text-3xl">Modules</h2>
        <p>List of our learning Modules</p>
      </div>
      <Accordion>
        <AccordionItem
          style={{ borderBottom: "1px solid gray", paddingBlock: "20px" }}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                1: Introduction to Audio Production
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>Lesson 1: Introduction to sound and music theory</p>
            <p>Lesson 2: Learn how to use a digital audio workstation (DAW)</p>
            <p>Lesson 3: Recording basics & setting up Studio Equipments</p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          style={{ borderBottom: "1px solid gray", paddingBlock: "20px" }}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                2: Recording and Editing
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>
              Lesson 1: Recording for different instruments and vocal recording
            </p>
            <p>Lesson 2: Audio editing techniques</p>
            <p>Lesson 3: Using editing to create distinctive sounds</p>
            <p>Lesson 4: Introduction to mixing and balancing levels</p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          style={{ borderBottom: "1px solid gray", paddingBlock: "20px" }}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                3: Music Production Techniques
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>Lesson 1: Music arrangement and composition techniques</p>
            <p>Lesson 2: Mixing and mastering techniques</p>
            <p>Lesson 3: Using effects and processors to enhance the mix</p>
            <p>Lesson 4: Putting it all together: creating a final mix</p>
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem
          style={{ borderBottom: "1px solid gray", paddingBlock: "20px" }}
        >
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left">
                4: Music Business and Marketing
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <p>Lesson 1: Copyright and distribution basics</p>
            <p>Lesson 2: Music promotion and social media marketing</p>
            <p>Lesson 3: Networking and building a professional network</p>
            <p>
              Lesson 4: Building a brand and creating a sustainable business
              model
            </p>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default Accord;
