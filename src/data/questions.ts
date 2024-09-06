import { Question } from '../types';

export const questions: Question[] = [
  {
    id: '1',
    text: 'Where does your business operate?',
    options: ['NY', 'CA', 'Other'],
    next: {
      NY: '2',
      CA: '2',
      Other: 'END',
    },
  },
  {
    id: '2',
    text: 'How many employees do you have?',
    options: ['More than 100', '100 or less'],
    next: {
      'More than 100': 'END',
      '100 or less': '3',
    },
  },
  {
    id: '3',
    text: 'Do you serve food?',
    options: ['Yes', 'No'],
    next: {
      Yes: '4',
      No: '6',
    },
  },
  {
    id: '4',
    text: 'Do you serve hot food?',
    options: ['Yes', 'No'],
    state: 'CA',
    next: {
      Yes: '5',
      No: '6',
    },
  },
  {
    id: '5',
    text: 'Are you open past midnight?',
    options: ['Yes', 'No'],
    state: 'NY',
    next: {
      Yes: 'END',
      No: 'END',
    },
  },
  {
    id: '6',
    text: 'Do you host live music?',
    options: ['Yes', 'No'],
    state: 'CA',
    next: {
      Yes: 'END',
      No: 'END',
    },
  },
];
