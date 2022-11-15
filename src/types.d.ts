// A textual assertion given by the user.
type Claim = {
  // A unique id
  id: string;
  /**
   * The claim text.
   *
   * @example
   * The earth is flat.
   */
  claim: string;
  // The language of the claim
  language?: string;
  // The position within the text.
  indexInText?: number;
  // True if claim should be hidden from results.
  hide?: boolean;
  // The assessment by the Factiverse AI. An Integer which ranges between 0 (false) and 100 (true).
  score?: number;
  // The list of sources relevant to this claim, supporting or rejecting it.
  evidence?: Array<Source>;
  // True if this claim has been fact checked before.
  hasBeenChecked?: boolean;
  // True if this claim is currently being fact checked and waiting for a response.
  isBeingChecked?: boolean;
  // True if the user has submitted positive feedback on the credibility assessment. Undefined if no feedback was given yet
  userAgrees?: boolean;
};

/**
 * A single source found to support/reject a claim.
 *
 * @example
 * A news article writing about the claim.
 */
type Source = {
  // A unique id
  id: string;
  // The title of the source, typically the headline.
  title?: string;
  // True if source should be hidden from results
  hide: boolean;
  // A short part of the text, ideally the most relevant part to the claim.
  snippet?: string;
  // The date on which the source was published.
  publishDate?: string;
  // The link linking to the source.
  url?: string;
  // The link displayed to the user, typically not the full link.
  domain?: string;
  searchEngine?: string;
  /*
   * The assessment by the Factiverse AI.
   * An Integer which ranges between 0 (doesn't support the claim)
   * and 100 (supports the claim).
   */
  softmaxScore?: number[];
  // True if the user has submitted positive feedback on the relevance. Undefined if no feedback was given yet
  userAgreesRelevance?: boolean;
  // True if the user has submitted positive feedback on the support assessment. Undefined if no feedback was given yet
  userAgreesSupport?: boolean;
};

type OnFeedbackSourceRelevance = (
  claim: Claim,
  source: Source,
  userAgrees: boolean
) => void;
type OnFeedbackSourceSupport = (
  claim: Claim,
  source: Source,
  userAgrees: boolean
) => void;

type Filter = {
  supporting: boolean;
  neutral: boolean;
  disputing: boolean;
};

type OnFeedbackCredibility = (claim: Claim, userAgrees: boolean) => void;
type OnDeleteClaim = (selectedClaim: ClaimItem) => void;
type OnCheckClaim = (claimId: string) => void;

type Entity = {
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
  text: string;

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
enum EntityType {
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
