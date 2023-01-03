import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            label: 'Click to see hidden content!',
            content: 'Hi there! , how are you?'
        },
        {
            label: 'Click to see hidden content!',
            content: 'Hi there! , how are you?'
        },
        {
            label: 'Click to see hidden content!',
            content: 'Hi there! , how are you?'
        },
    ]

  return <Accordion items={items}/>;
}

export default AccordionPage;
