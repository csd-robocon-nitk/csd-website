import type { Schema, Attribute } from '@strapi/strapi';

export interface TestingFacilitiesTestingFacilities extends Schema.Component {
  collectionName: 'components_testing_facilities_testing_facilities_s';
  info: {
    displayName: 'Testing Facilities ';
  };
  attributes: {
    facilityName: Attribute.String;
    facilityDesc: Attribute.Text;
  };
}

export interface TechnicalTechnical extends Schema.Component {
  collectionName: 'components_technical_technicals';
  info: {
    displayName: 'Technical';
    description: '';
  };
  attributes: {
    techSpecs: Attribute.Component<'tech-specs.tech-specs'>;
    devWorkflowPanel: Attribute.Component<'dev-workflow-panel.dev-workflow-panel'>;
    longTermGoalsPanel: Attribute.Component<'longterm-goals-panel.long-term-goals-panel'>;
  };
}

export interface TechSpecsTechSpecs extends Schema.Component {
  collectionName: 'components_tech_specs_tech_specs';
  info: {
    displayName: 'techSpecs';
  };
  attributes: {
    focusArea: Attribute.Text;
    keyEquipment: Attribute.Text;
    devWorkflow: Attribute.Text;
    fundingSources: Attribute.Text;
  };
}

export interface TeamTeam extends Schema.Component {
  collectionName: 'components_team_teams';
  info: {
    displayName: 'team';
  };
  attributes: {
    personName: Attribute.String;
    personLinkedin: Attribute.String;
    personEmail: Attribute.String;
    personTwitter: Attribute.String;
  };
}

export interface SrmMainSrmMain extends Schema.Component {
  collectionName: 'components_srm_main_srm_mains';
  info: {
    displayName: 'SRM Main';
  };
  attributes: {
    srmMainDesc: Attribute.Text;
    srmMainImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface SrmDesignPrototypingSrmDesignPrototyping
  extends Schema.Component {
  collectionName: 'components_srm_design_prototyping_srm_design_prototypings';
  info: {
    displayName: 'srmDesignPrototyping';
  };
  attributes: {
    name: Attribute.String;
    desc: Attribute.Text;
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios', true>;
  };
}

export interface SrmControllerDesignSrmControllerDesign
  extends Schema.Component {
  collectionName: 'components_srm_controller_design_srm_controller_designs';
  info: {
    displayName: 'srmControllerDesign';
  };
  attributes: {
    controllerDesignDesc: Attribute.Text;
    ControllerDesignPoints: Attribute.RichText;
  };
}

export interface ProjectsSubProject extends Schema.Component {
  collectionName: 'components_projects_sub_projects';
  info: {
    displayName: 'Sub-Project';
    icon: 'layer';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ProjectsObjectives extends Schema.Component {
  collectionName: 'components_projects_objectives';
  info: {
    displayName: 'Objectives';
    icon: 'check';
  };
  attributes: {
    text: Attribute.String & Attribute.Required;
  };
}

export interface ProjectsMember extends Schema.Component {
  collectionName: 'components_projects_members';
  info: {
    displayName: 'Member';
    icon: 'shield';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    name: Attribute.String & Attribute.Required;
    designation: Attribute.String;
  };
}

export interface ProjectsKeyFeatures extends Schema.Component {
  collectionName: 'components_projects_key_features';
  info: {
    displayName: 'Key Features';
    icon: 'grid';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
  };
}

export interface ProjectsImpact extends Schema.Component {
  collectionName: 'components_projects_impacts';
  info: {
    displayName: 'Impact';
    icon: 'plus';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text;
    metrics: Attribute.Component<'projects.impact-metrics', true>;
  };
}

export interface ProjectsImpactMetrics extends Schema.Component {
  collectionName: 'components_projects_impact_metrics';
  info: {
    displayName: 'Impact Metrics';
    icon: 'chartPie';
  };
  attributes: {
    metric: Attribute.String & Attribute.Required;
    description: Attribute.String & Attribute.Required;
  };
}

export interface ProjectsImageSlide extends Schema.Component {
  collectionName: 'components_projects_image_slides';
  info: {
    displayName: 'Image Slide';
    icon: 'slideshow';
  };
  attributes: {
    image: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface ProjectDetailsProjectDetails extends Schema.Component {
  collectionName: 'components_project_details_project_details';
  info: {
    displayName: 'Project Details';
  };
  attributes: {
    projectOverview: Attribute.Text;
    projectLeftPanel: Attribute.Text;
    projectRightPanel: Attribute.Text;
    projectFutureScope: Attribute.Text;
  };
}

export interface OverviewOverview extends Schema.Component {
  collectionName: 'components_overview_overviews';
  info: {
    displayName: 'Overview';
  };
  attributes: {
    overviewDescription: Attribute.Text;
    overviewImage: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface LongtermGoalsPanelLongTermGoalsPanel extends Schema.Component {
  collectionName: 'components_longterm_goals_panel_long_term_goals_panels';
  info: {
    displayName: 'longTermGoalsPanel';
  };
  attributes: {
    longTermGoalsDesc: Attribute.RichText;
  };
}

export interface InitiativesPanelInitiativesPanel extends Schema.Component {
  collectionName: 'components_initiatives_panel_initiatives_panels';
  info: {
    displayName: 'InitiativesPanel';
  };
  attributes: {
    initiativeName: Attribute.String;
    initiativeDesc: Attribute.Text;
    initiativeKeyFeatures: Attribute.RichText;
    initiativeVariants: Attribute.RichText;
    initiativeMedia: Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface GeneralTestimonial extends Schema.Component {
  collectionName: 'components_general_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    comment: Attribute.Text;
  };
}

export interface FeaturesFeatures extends Schema.Component {
  collectionName: 'components_features_features';
  info: {
    displayName: 'Features';
  };
  attributes: {
    featureName: Attribute.String;
    featureShortDescription: Attribute.String;
    featureLongDescription: Attribute.Text;
  };
}

export interface DevWorkflowPanelDevWorkflowPanel extends Schema.Component {
  collectionName: 'components_dev_workflow_panel_dev_workflow_panels';
  info: {
    displayName: 'devWorkflowPanel';
  };
  attributes: {
    devWorkflowDesc: Attribute.RichText;
  };
}

export interface ControlAlgoSensorInterControlAlgorithmsAndSensorIntegration
  extends Schema.Component {
  collectionName: 'components_control_algo_sensor_inter_control_algorithms_and_sensor_integrations';
  info: {
    displayName: 'Control Algorithms and Sensor Integration';
  };
  attributes: {
    typeName: Attribute.String;
    typeDetails: Attribute.RichText;
    typeKeyFeatures: Attribute.RichText;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'testing-facilities.testing-facilities': TestingFacilitiesTestingFacilities;
      'technical.technical': TechnicalTechnical;
      'tech-specs.tech-specs': TechSpecsTechSpecs;
      'team.team': TeamTeam;
      'srm-main.srm-main': SrmMainSrmMain;
      'srm-design-prototyping.srm-design-prototyping': SrmDesignPrototypingSrmDesignPrototyping;
      'srm-controller-design.srm-controller-design': SrmControllerDesignSrmControllerDesign;
      'projects.sub-project': ProjectsSubProject;
      'projects.objectives': ProjectsObjectives;
      'projects.member': ProjectsMember;
      'projects.key-features': ProjectsKeyFeatures;
      'projects.impact': ProjectsImpact;
      'projects.impact-metrics': ProjectsImpactMetrics;
      'projects.image-slide': ProjectsImageSlide;
      'project-details.project-details': ProjectDetailsProjectDetails;
      'overview.overview': OverviewOverview;
      'longterm-goals-panel.long-term-goals-panel': LongtermGoalsPanelLongTermGoalsPanel;
      'initiatives-panel.initiatives-panel': InitiativesPanelInitiativesPanel;
      'general.testimonial': GeneralTestimonial;
      'features.features': FeaturesFeatures;
      'dev-workflow-panel.dev-workflow-panel': DevWorkflowPanelDevWorkflowPanel;
      'control-algo-sensor-inter.control-algorithms-and-sensor-integration': ControlAlgoSensorInterControlAlgorithmsAndSensorIntegration;
    }
  }
}
