import type { Schema, Attribute } from '@strapi/strapi';

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

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'projects.sub-project': ProjectsSubProject;
      'projects.objectives': ProjectsObjectives;
      'projects.member': ProjectsMember;
      'projects.key-features': ProjectsKeyFeatures;
      'projects.impact': ProjectsImpact;
      'projects.impact-metrics': ProjectsImpactMetrics;
      'projects.image-slide': ProjectsImageSlide;
      'general.testimonial': GeneralTestimonial;
    }
  }
}
