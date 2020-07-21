import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          MonCompte: {
            screens: {
              TabOneScreen: 'Mon Compte',
            },
          },
          CarteFidelite: {
            screens: {
              CarteFideliteScreen: 'Carte Fidelite',
            },
          },
          FaireDon: {
            screens: {
              FaireDonScreen: 'Faire don',
            },
          },
          CartePartenaire: {
            screens: {
              CartePartenaireScreen: 'Carte Partenaire',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
