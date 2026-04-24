import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  modulosSidebar: [
    {
      type: 'doc',
      id: 'modulos/index',
      label: 'Visão geral',
    },
    {
      type: 'category',
      label: 'Módulos',
      collapsed: false,
      items: [
        'modulos/cashback',
        'modulos/desconto',
        'modulos/gas',
        'modulos/academia',
        'modulos/carteira',
        'modulos/internet',
        'modulos/telefonia',
        {
          type: 'category',
          label: 'Cinema',
          link: {type: 'doc', id: 'modulos/cinema/cinema-overview'},
          items: [
            'modulos/cinema/selecao-cadeiras',
            'modulos/cinema/compra-por-codigo',
          ],
        },
        'modulos/gift-card',
        'modulos/postos',
      ],
    },
    {
      type: 'doc',
      id: 'changelog/index',
      label: 'Changelog',
    },
  ],
};

export default sidebars;
