export type PageStatus = 'completed' | 'in_progress' | 'pending';

export interface Page {
    url: string;
    status: PageStatus;
    chunks: string[];
  }

export const DUMMY_PAGES: Page[] = [
    {
      url: '/about',
      status: 'completed',
      chunks: [
        'Beyond Chats is a leading AI solution provider.',
        'Our team consists of experts in machine learning and NLP.',
        'Founded in 2023, we have helped over 1000 businesses.'
      ]
    },
    {
      url: '/services',
      status: 'completed',
      chunks: [
        'We offer AI-powered chatbot solutions.',
        'Custom training for your business needs.',
        '24/7 customer support automation.'
      ]
    },
    { url: '/pricing', status: 'in_progress', chunks: [] },
    { url: '/blog', status: 'pending', chunks: [] },
    { url: '/contact', status: 'pending', chunks: [] }
  ];

export const name = "Beyond Chats"

export const url = "beyondchats"