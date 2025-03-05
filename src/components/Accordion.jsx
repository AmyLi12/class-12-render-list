// source: https://react.dev/learn/sharing-state-between-components
import { useState } from 'react';

import AccordionPanel from './AccordionPanel'

export default function Accordion() {
  const [expandedPanel, setExpandedPanel] = useState(1);

  const accordionItems = [
    {
      title: "About",
      content: <p>With a population of about 2 million, Almaty is Kazakhstan&apos;s largest city. From 1929 to 1997, it was its capital city.</p>
    },
    {
      title: "Etymology",
      content: <p>The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for &ldquo;apple&rdquo; and is often translated as &ldquo;full of apples&rdquo;. In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.</p>
    }
  ]

  return (
    <div>
      {
        accordionItems.map((item, index) => (
          <AccordionPanel
            key={index}
            title={item.title}
            isExpanded={expandedPanel === index}
            onExpand={() => setExpandedPanel(index)}
          >
            {item.content}
          </AccordionPanel>))
      }

      <AccordionPanel
        title="About"
        isExpanded={expandedPanel === 1}
        onExpand={() => setExpandedPanel(1)}
      >
      </AccordionPanel>

      <AccordionPanel
        title="Etymology"
        isExpanded={expandedPanel === 2}
        onExpand={() => setExpandedPanel(2)}
      >
      </AccordionPanel>
    </div>
  );
}
