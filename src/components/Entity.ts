export type Entity = {
  // from api response
  description: string;
  domain: string;
  entId: number;
  entity: string;
  entity_match: boolean;
  entity_type: EntityType;
  image_url: string;
  image_lic: string;
  kbId: string;
  license: string;
  page_url: string;
  score: number;

  // additional info

  // True if the entity should be highlighted
  checked?: boolean;
  // The language of the entity
  lang?: string;
  // True if this is a key fact
  keyFact?: boolean;
  // True if this was deleted by the user
  deleted?: boolean;
  // True if user is editing the entity name/description/etc. right now
  editable?: boolean;

  // CSS classes
  classNames?: string;

  // feedback

  // True if feedback should be shown for this entity
  showFeedback?: boolean;

  // feedback regarding the quality of the microfact

  // True if the user gave basic feedback if the entity was helpful or not
  feedbackIsHelpful?: boolean;
  // True if the user thinks that this is a key fact
  feedbackIsKeyFact?: boolean;
  // True if the user thinks that the description matches the entity
  feedbackIsDescriptionCorrect?: boolean;
  // True if the user thinks that the description helps with the understanding of the entity
  feedbackIsDescriptionUseful?: boolean;
  // True after the user has given feedback on an entity
  hasGivenFeedback?: boolean;

  // feedback after deleting an entity

  // False if the user thinks that this is no entity
  feedbackIsEntity?: boolean;
  // False if the user thinks that this entity is not relevant for the text
  feedbackIsRelevant?: boolean;
  // True after the user has given feedback after they deleted an entity
  hasGivenFeedbackAfterDeleted?: boolean;
};

// entity types from https://github.com/ltgoslo/norne
export enum EntityType {
  PER = 'Person',
  ORG = 'Organization',
  LOC = 'Location',
  GPE = 'Geo-political entity',
  GPE_LOC = 'Geo-political entity',
  GPE_ORG = 'Geo-political entity',
  PROD = 'Product',
  EVT = 'Event',
  MISC = 'Miscellaneous',
  DRV = 'Derived',
  CARDINAL = 'Cardinal',
  DATE = 'Date',
  EVENT = 'Event',
  FAC = 'Facility',
  LANGUAGE = 'Language',
  LAW = 'Law',
  MONEY = 'Money',
  NORP = 'Nationality or religious or political group',
  ORDINAL = 'Ordinal',
  PERCENT = 'Percent',
  PERSON = 'Person',
  PRODUCT = 'Product',
  QUANTITY = 'Quantity',
  TIME = 'Duration',
  WORK_OF_ART = 'Work of art',
}
