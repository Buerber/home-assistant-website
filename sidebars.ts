import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  installation: [{
    type: 'category',
    label:'安装',
    link:{type:'doc','id':'started/installation/index'},
    items: [
      'started/installation/raspberrypi',
      'started/installation/odroid',
      'started/installation/generic-x86-64',
      'started/installation/linux',
      'started/installation/macos',
      'started/installation/windows',
      'started/installation/alternative',
      'started/installation/troubleshooting',
    ],
  },
  'started/Onboarding/index',
  'started/Concepts and terminology/index',
  'started/Edit the dashboard/index',
  'started/Adding integrations/index',
  'started/Automating devices/index',
  'started/Presence detection/index',
  'started/Join the Community/index',
  'started/Next steps/index',
  ],
  documentation: ['documentation/overview',{
    type: 'category',
    label:'安装',
    link:{type:'doc','id':'documentation/installation/index'},
    items: [
      'documentation/installation/raspberrypi',
      'documentation/installation/odroid',
      'documentation/installation/generic-x86-64',
      'documentation/installation/linux',
      'documentation/installation/macos',
      'documentation/installation/windows',
      'documentation/installation/alternative',
      'documentation/installation/troubleshooting',
      
    ],
  },
  {
    type: 'category',
    label:'自动化',
    link:{type:'doc','id':'documentation/automation/index'},
    items: [
      {
        type:'category',
        label:'basic automations',
        link:{type:'doc','id':'documentation/automation/basics'},
        items:[
          'documentation/automation/using_blueprints',
          'documentation/automation/editor',
          'documentation/automation/trigger',
          'documentation/automation/condition',
          'documentation/automation/action',
          'documentation/automation/modes',
          'documentation/automation/services',
          'documentation/automation/templating',
          'documentation/automation/yaml',
          'documentation/automation/troubleshooting'
        ]
      },
      {
        type:'category',
        label:'Scenes',
        link:{type:'doc','id':'documentation/scene/scene'},
        items:[
          'documentation/scene/editor',
        ]
      },
      {
        type:'category',
        label:'Blueprints',
        link:{type:'doc','id':'documentation/blueprints/index'},
        items:[
          'documentation/blueprints/tutorial',
          'documentation/blueprints/schema',
          'documentation/blueprints/selectors',
        ]
      },
      {
        type:'category',
        label:'Scripts',
        link:{type:'doc','id':'documentation/scripts/index'},
        items:[
          'documentation/scripts/perform-actions',
          'documentation/scripts/conditions',
        ]
      }
    ],
  },
  {
    type:'category',
    label:"Dashboards",
    link:{type:'doc','id':'documentation/dashboards/index'},
    items:[
      {
      type: 'category',
      label:'Dashboard basics',
      items: [
        {
          type:'doc',
          label:'Introduction',
          id:'documentation/dashboards/index'
        },
        'documentation/dashboards/multiple-dashboard',
        'documentation/dashboards/views',
        'documentation/dashboards/cards',
        'documentation/dashboards/badges',
      ],
      },
      {
        type: 'category',
        label:'View types',
        items: [
          'documentation/dashboards/masonry',
          'documentation/dashboards/panel',
          'documentation/dashboards/sections',
          'documentation/dashboards/sidebar',
        ],
      },
      {
        type: 'category',
        label:'Card types',
        items: [
          'documentation/dashboards/alarm-panel',
          'documentation/dashboards/area',
          'documentation/dashboards/button',
          'documentation/dashboards/calendar',
          'documentation/dashboards/conditional',
          'documentation/dashboards/energy',
          'documentation/dashboards/entities',
          'documentation/dashboards/entity',
          'documentation/dashboards/entity-filter',
          'documentation/dashboards/gauge',
          'documentation/dashboards/glance',
          'documentation/dashboards/grid',
          'documentation/dashboards/heading',
          'documentation/dashboards/history-graph',
          'documentation/dashboards/horizontal-stack',
          'documentation/dashboards/humidifier',
          'documentation/dashboards/light',
          'documentation/dashboards/logbook',
          'documentation/dashboards/map',
          'documentation/dashboards/markdown',
          'documentation/dashboards/media-control',
          'documentation/dashboards/picture',
          'documentation/dashboards/picture-elements',
          'documentation/dashboards/picture-entity',
          'documentation/dashboards/picture-glance',
          'documentation/dashboards/plant-status',
          'documentation/dashboards/sensor',
          'documentation/dashboards/statistic',
          'documentation/dashboards/statistics-graph',
          'documentation/dashboards/thermostat',
          'documentation/dashboards/tile',
          'documentation/dashboards/todo-list',
          'documentation/dashboards/vertical-stack',
          'documentation/dashboards/weather-forecast',
          'documentation/dashboards/iframe',
        ],
      },
      {
        type: 'category',
        label:'Advanced',
        items: [
          'documentation/dashboards/features',
          'documentation/dashboards/header-footer',
          'documentation/dashboards/actions',
          {
            type:'link',
            label: 'Developing custom cards', // 链接标签
            href:'https://developers.home-assistant.io/docs/frontend/custom-ui/custom-card/'
          }
        ],
      },
    ]
  },
  // TODO: NEXT VERSION
  // {
  //   type:'category',
  //   label:'Voice assistants',
  //   items:[
  //     {
  //       type:'category',
  //       label:'Assist up and running',
  //       link:{type:'doc',id:'documentation/voice_control/index'},
  //       items:[
  //         'documentation/voice_control/voice_remote_local_assistant',
  //         'documentation/voice_control/voice_remote_cloud_assistant'
  //       ]
  //     },
  //     {
  //       type:'category',
  //       label:' Best practices',
  //       link:{type:'doc',id:'documentation/voice_control/best_practices'},
  //       items:[
  //         'documentation/voice_control/voice_remote_expose_devices',
  //         'documentation/voice_control/assign_areas_floors',
  //         'documentation/voice_control/aliases',
  //         'documentation/voice_control/builtin_sentences'
  //       ]
  //     },
  //     {
  //       type:'category',
  //       label:'Expanding Assist',
  //       link:{type:'doc',id:'documentation/voice_control/expanding_assist'},
  //       items:[
  //         'documentation/voice_control/assist_create_open_ai_personality',
  //         'documentation/voice_control/custom_sentences',
  //         'documentation/voice_control/android',
  //         'documentation/voice_control/apple',
  //       ]
  //     },
  //     {
  //       type:'category',
  //       label:'Experiment with Assist setups',
  //       // link:{type:'doc',id:'documentation/voice_control/expanding_assist'},
  //       items:[
  //         'documentation/voice_control/about_wake_word',
  //         'documentation/voice_control/create_wake_word',
  //         'documentation/voice_control/s3_box_voice_assistant',
  //         'documentation/voice_control/thirteen-usd-voice-remote',

  //         'documentation/voice_control/worlds-most-private-voice-assistant',
  //         'documentation/voice_control/assist_daily_summary',
  //         'documentation/voice_control/start_assist_from_dashboard',
  //         'documentation/voice_control/contribute-voice',
  //       ]
  //     },
  //     {
  //       type:'category',
  //       label:'Troubleshooting',
  //       // link:{type:'doc',id:'documentation/voice_control/expanding_assist'},
  //       items:[
  //         'documentation/voice_control/troubleshooting',
  //         'documentation/voice_control/troubleshooting_the_s3_box',
  //         'documentation/voice_control/using_tts_in_automation',
  //       ]
  //     },
  //   ]
  // },
  // {
  //   type:'category',
  //   label:'Organization',
  //   link:{type:'doc',id:'documentation/organizing/index'},
  //   items:[
  //     'documentation/organizing/index',
  //     'documentation/organizing/tables',
  //     'documentation/organizing/areas',
  //     'documentation/organizing/floors',
  //     'documentation/organizing/labels',
  //     'documentation/organizing/categories',
  //     {
  //       type:'link',
  //       label:'icons',
  //       href:'https://www.home-assistant.io/docs/frontend/icons/'
  //     }
  //   ]
  // },
  // {
  //   type:'category',
  //   label:'Home energy management',
  //   link:{type:'doc',id:'documentation/energy/index'},
  //   items:[
  //     'documentation/energy/electricity-grid',
  //     'documentation/energy/solar-panels',
  //     'documentation/energy/individual-devices',
  //     'documentation/energy/faq',
  //   ]
  // },
  // {
  //   type:'category',
  //   label:'Common tasks',
  //   link:{type:'doc',id:'documentation/common-tasks/general'},
  //   items:[
  //     'documentation/common-tasks/general',
  //     'documentation/common-tasks/os',
  //     'documentation/common-tasks/container',
  //     'documentation/common-tasks/core',
  //     'documentation/common-tasks/supervised',
  //     'documentation/common-tasks/troubleshooting_general',
  //   ]
  // },
  // {
  //   type:'category',
  //   label:'Advanced configuration',
  //   link:{type:'doc',id:'documentation/configuration/index'},
  //   items:[
  //     'documentation/configuration/yaml',
  //     'documentation/configuration/basic',
  //     'documentation/configuration/customizing-devices',
  //     'documentation/configuration/troubleshooting',
  //     'documentation/configuration/securing',
  //     'documentation/configuration/remote',

  //     'documentation/configuration/splitting_configuration',
  //     'documentation/configuration/packages',
  //     'documentation/configuration/secrets',
  //     'documentation/configuration/events',
  //     'documentation/configuration/state_object',
  //     'documentation/configuration/entities_domains',
  //     'documentation/configuration/templating',
  //     'documentation/configuration/platform_options',
  //   ]
  // },
  // {
  //   type:'category',
  //   label:'Authentication',
  //   link:{type:'doc',id:'documentation/authentication/index'},
  //   items:[
  //     'documentation/authentication/providers',
  //     'documentation/authentication/multi-factor-auth',
  //     'documentation/authentication/locked_out',
  //   ]
  // },
  // {
  //   type:'category',
  //   label:'Backend',
  //   link:{type:'doc',id:'documentation/backend/index'},
  //   items:[
  //     'documentation/backend/frontend',
  //     'documentation/backend/database',
  //   ]
  // },
  // {
  //   type:'category',
  //   label:'Tools and helpers',
  //   link:{type:'doc',id:'documentation/tools/index'},
  //   items:[
  //     'documentation/tools/dev-tools',
  //     'documentation/tools/quick-bar',
  //     'documentation/tools/hass',
  //     'documentation/tools/check_config',
      
  //   ]
  // },
]

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
