import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MicrofactsArticle from './MicrofactsArticle';
import { EntityType } from '..//Entity';

const entities = [
  {
    description:
      'Nele Neuhaus, født Cornelia Löwenberg, er en svært populær tysk kriminalforfatter, særlig kjent for serien om politietterforskerne Oliver von Bodenstein og Pia Kirchhoff som utspiller seg i Taunus. Liv og virke Nele Neuhaus har studert jus, germanistikk og historie samt.',
    entity: 'Nels',
    page_url: 'https://snl.no/Nele_Neuhaus',
    entity_type: EntityType.PER,
    checked: true,
    keyFact: true,
    domain: 'snl',
    entId: 0,
    score: 1,
    entity_match: false,
    image_url: 'https://media.snl.no/media/35435/Nele_Neuhaus_2016.jpg',
    image_lic: 'CC BY NC SA 3.0',
    kbId: 'Nele_Neuhaus',
    license: 'begrenset',
  },
  {
    description:
      'Ovako Steel og Imatra Steel for å danne konsernet Ovako. Selskapet ble senere restrukturert, og hadde flere eiere, før det japanske stålkonsernet Nippon Steel i 2018 kjøpte opp selskapet. Fundia sin virksomhet i Norge I Norge hadde Fundia et stålverk.',
    entity: 'Ovakos',
    page_url: 'https://snl.no/Nele_Neuhaus',
    entity_type: EntityType.PER,
    checked: true,
    keyFact: true,
    domain: 'snl',
    entId: 1,
    score: 1,
    entity_match: false,
    image_url: '"https://media.snl.no/media/35435/Nele_Neuhaus_2016.jpg"',
    image_lic: 'CC BY NC SA 3.0',
    kbId: 'Nele_Neuhaus',
    license: 'begrenset',
  },
];

export default {
  title: 'Components/MicrofactsArticle',
  component: MicrofactsArticle,
} as ComponentMeta<typeof MicrofactsArticle>;

const Template: ComponentStory<typeof MicrofactsArticle> = (args) => (
  <MicrofactsArticle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  headline:
    'Her snakker vi enten monstermarginer eller vekstpotensial Harry Potter-style',
  image: 'https://microfactbox.netlify.app/img/harry-potter.jpg',
  inputText:
    'Hydrogenaksjen Nel stiger hele ti prosent på Oslo Børs etter at selskapet torsdag meldte om en ordre på levering av elektrolyserør for 11 millioner euro (110 millioner kroner). Markedsverdien av Nel steg dermed med cirka 2,5 milliarder kroner til over 27 milliarder kroner. Når markedsverdien av selskapet stiger med 2,5 milliarder på bakgrunn av en ordre på 110 millioner kroner prises det åpenbart inn et eller annet som er meget bullish. Det vil trenges ytterligere 22 slike ordrer bare for at kontraktsverdien skal matche økningen i Nels markedsverdi. Vi vet ikke hva ordren på 110 millioner kroner gir av inntjening, men umiddelbart skulle man tro investorene priser inn monstermarginer. Det er neppe tilfellet. Elektrolyserørene skal leveres til Ovako, en europeisk produsent av stål. Selskapet er eid av Nippon Steel. Utstyret skal installeres i Ovakos anlegg i Sverige, og skal bli den første fabrikken i verden til å bruke hydrogen til å varme stålet før det formes videre. Karbonfri hydrogen skal erstatte propangass som i dag benyttes til oppvarmingen. Konverteringen til hydrogen ventes å redusere Ovakos CO₂-utslipp fra stålproduksjonen med 50 prosent fra allerede lave nivåer.',
  entities: entities,
};
