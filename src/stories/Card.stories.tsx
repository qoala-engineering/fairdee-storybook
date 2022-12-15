import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from '../components/common/Card';
import CardReadme from './descriptions/Card.md'

export default {
  title: 'Fairdee UI/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component: CardReadme,
      },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args}/>;

export const Default = Template.bind({});

Default.args = {
  children: <section>Put your content here</section>,
  title: 'This is Header'
}

export const opened_accordion = Template.bind({});

opened_accordion.args = {
  children: <section>Put your content here</section>,
  title: 'This is Header',
  accordion: true
}

export const closed_accordion = Template.bind({});

closed_accordion.args = {
  children: <section>Put your content here</section>,
  title: 'This is Header',
  accordion: true,
  isOpenAccordion: false
}

export const without_header = Template.bind({})

without_header.args = {
  children: <section>Put your content here</section>,
  hideHeader: true
}