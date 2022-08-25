import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MicrofactsArticle from './MicrofactsArticle';
import { EntityType } from '..//Entity';

const entities = [
  {
    description:
      "St Paul's Cathedral is an Anglican cathedral in London and is the seat of the Bishop of London. The cathedral serves as the mother church of the Diocese.",
    domain: 'wikipedia',
    entId: 2,
    entity: "St Paul's Cathedral",
    checked: true,
    keyFact: true,
    entity_match: false,
    entity_type: EntityType.FAC,
    image_lic: '',
    image_url: '',
    kbId: '102198',
    license: '',
    page_url: 'https://en.wikipedia.org/?curid=102198',
    score: 1,
  },
  {
    description:
      "Buckingham Palace (UK: ) is a London royal residence and the administrative headquarters of the monarch of the United Kingdom. Located in the City of Westminster, the palace is often at the centre of state occasions and royal hospitality. It has been a focal point for the British people at times of national rejoicing and mourning.\nOriginally known as Buckingham House, the building at the core of today's palace was a large townhouse built for the Duke of Buckingham in 1703 on a site that had been in private ownership for at least 150 years. It was acquired by King George III in 1761 as a private residence for Queen Charlotte and became known as The Queen's House.",
    domain: 'wikipedia',
    entId: 3,
    entity: 'Buckingham Palace',
    checked: true,
    keyFact: true,
    entity_match: true,
    entity_type: EntityType.ORG,
    image_lic: '',
    image_url: '',
    kbId: '3969',
    license: '',
    page_url: 'https://en.wikipedia.org/?curid=3969',
    score: 1,
  },
  {
    description:
      'Charles, Prince of Wales (Charles Philip Arthur George; born 14 November 1948), is the heir apparent to the British throne as the eldest son of Queen.',
    domain: 'wikipedia',
    entId: 6,
    entity: 'Prince Charles',
    checked: true,
    keyFact: true,
    entity_match: false,
    entity_type: 'PERSON',
    image_lic: '',
    image_url: '',
    kbId: '125248',
    license: '',
    page_url: 'https://en.wikipedia.org/?curid=125248',
    score: 1,
  },
];

const queen =
  "A service of Thanksgiving for the Queen's 70 years on the throne is being held at St Paul's Cathedral in London\n" +
  'The Queen herself is not there after experiencing “discomfort” following celebrations on Thursday to kick off the four-day Jubilee weekend\n' +
  'Buckingham Palace said the decision was made with great reluctance and that the Queen appreciated and enjoyed a “memorable” first day of festivities\n' +
  "Prince Charles, Prince William, Prince Harry and Meghan are all at the Jubilee service at St Paul's Cathedral\n" +
  'It is the first public appearance in the UK for Harry and Meghan in two years - they kept a low-profile a the events\n' +
  'Senior politicians including PM Boris Johnson, along with leaders of world faiths and others, are at the service.';

export default {
  title: 'Microfacts/Article',
  component: MicrofactsArticle,
} as ComponentMeta<typeof MicrofactsArticle>;

const Template: ComponentStory<typeof MicrofactsArticle> = (args) => (
  <MicrofactsArticle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  headline: 'Celebrating the Queen’s 70 years on the throne',
  image:
    'https://www.royal.uk/sites/default/files/styles/featured_image_hero/public/images/feature-chapters/pa-67245101.jpg?itok=zMuyL9gu&anti-cache=eafe7583c8e5f',
  inputText: queen,
  entities: entities,
};
