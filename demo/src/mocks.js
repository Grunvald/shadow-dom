export const initialConfig =  {
  tag: 'div',
  props: {
    class: 'container',
    id: 'root',
    children: [
      { tag: 'h1', props: { class: 'header text-green', children: ['Header 1'] } },
      { tag: 'p', props: { class: 'text', children: ['Text element 1'] } },
      ...Array.from({ length: 70 }, (_, i) => ({
        tag: 'div',
        props: {
          class: `class${i + 1}`,
          children: [
            { tag: 'span', props: { class: `span${i + 1}`, children: [`Element ${i + 1}`] } },
            { tag: 'p', props: { class: `text${i + 1}`, children: [`Text ${i + 1}`] } },
            ...Array.from({ length: Math.floor(Math.random() * 10) + 1 }, (_, j) => ({
              tag: 'div',
              props: {
                class: `nested-class${j + 1}`,
                children: [
                  { tag: 'span', props: { class: `nested-span${j + 1}`, children: [`Nested Element ${j + 1}`] } },
                ],
              },
            })),
          ],
        },
      })),
      ...Array.from({ length: 20 }, (_, i) => ({
        tag: 'p',
        props: { children: [`Text element ${i + 2}`] },
      })),
      { tag: 'footer', props: { class: 'footer', children: ['Footer'] } },
    ],
  },
};
export const updatedConfig = {
  tag: 'div',
  props: {
    class: 'container-modified',
    id: 'root-modified',
    children: [
      { tag: 'h1', props: { class: 'header-modified text-blue', children: ['Header 1'] } },
      { tag: 'p', props: { class: 'text-modified', children: ['Text element 1'] } },
      ...Array.from({ length: 63 }, (_, i) => ({
        tag: 'div',
        props: {
          class: `class-modified${i + 1}`,
          children: [
            { tag: 'span', props: { class: `span-modified${i + 1}`, children: [`Element ${i + 1}`] } },
            { tag: 'p', props: { class: `text-modified${i + 1}`, children: [`Text ${i + 1}`] } },
            ...Array.from({ length: Math.floor(Math.random() * 10) + 1 }, (_, j) => ({
              tag: 'div',
              props: {
                class: `nested-class-modified${j + 1}`,
                children: [
                  { tag: 'span', props: { class: `nested-span-modified${j + 1}`, children: [`Nested Element ${j + 1}`] } },
                ],
              },
            })),
          ],
        },
      })),
      ...Array.from({ length: 27 }, (_, i) => ({
        tag: 'div',
        props: {
          class: `class${i + 71}`,
          children: [
            { tag: 'span', props: { class: `span${i + 71}`, children: [`Element ${i + 71}`] } },
            { tag: 'p', props: { class: `text${i + 71}`, children: [`Text ${i + 71}`] } },
            ...Array.from({ length: Math.floor(Math.random() * 10) + 1 }, (_, j) => ({
              tag: 'div',
              props: {
                class: `nested-class${j + 1}`,
                children: [
                  { tag: 'span', props: { class: `nested-span${j + 1}`, children: [`Nested Element ${j + 1}`] } },
                ],
              },
            })),
          ],
        },
      })),
      ...Array.from({ length: 10 }, (_, i) => ({
        tag: 'p',
        props: { children: [`Text element ${i + 2}`] },
      })),
      { tag: 'footer', props: { class: 'footer-modified', children: ['Footer'] } },
    ],
  },
};
