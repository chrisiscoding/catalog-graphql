require('graphql');
require('apollo-server');

type Catalog = {
    uri: ID!
    title: [String]!
    description: [String]!
    issued: String
    modified: String
    license: String
    rights: String
    spatial: [String]
    homepage: String
    dataset: [Dataset]
}
type Dataset = {
    uri: ID!
    title: [String]!
    descripiton: [String]!
    issued: String
    modified: String
    identifier: [String]
    keyword: [String]
    contactPoint: [Agent]
    temporal: [String]
    spatial: [String]
    accrualPeriodicity: String
    landingPage: [String]
    publisher: Agent
    distribution: [Distribution]
}
type Distribution = {
    uri: ID!
    title: [String]
    description: [String]
    issued: String
    modified: String
    license: String
    rights: String
    accessURL: [String]!
    downloadURL: [String]
    mediaType: String
    format: String
    mapLayer: String
    ssdi: String
    ssdiXml: String
    maxScale: Int
    minScale: Int
    legend: String
    identityFields: String
    identityFieldsAlias: String
}
type Agent  = {
    uri: ID!
    prefLabel: [String]
    altLabel: [String]
    homepage: String
    logo: String
}
type Concept = {
    uri: ID!
    prefLabel: [String]
    altLabel: [String]
    inscheme: [String]
}