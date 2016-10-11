angular.module('Resume', ['ngMaterial'])

.component('resume', {
  transclude: true,
  template: `<div class="resume">
    <section class="main" ng-transclude></section>
  </div>`
})

.component('resumeHeading', {
  controllerAs: 'r',
  bindings: {
    firstName: '@',
    lastName: '@',
    website: '@',
    phone: '@',
    email: '@',
    github: '@',
    linkedin: '@'
  },
  template: `<div class="header">
    <div class="page-title-container">
      <h1 class="page-title page-title-first">{{r.firstName}}</h1>
      <h1 class="page-title page-title-last">{{r.lastName}}</h1>
    </div>
    <div class="header-icons">
      <span ng-if="r.website" class="md-subhead page-subhead"><i class="fa fa-lg fa-code"></i>{{r.website}}</span>
      <span ng-if="r.phone" class="md-subhead page-subhead"><i class="fa fa-lg fa-phone"></i>{{r.phone}}</span>
      <span ng-if="r.email" class="md-subhead page-subhead"><i class="fa fa-lg fa-envelope"></i>{{r.email}}</span>
      <span ng-if="r.github" class="md-subhead page-subhead"><i class="fa fa-lg fa-github"></i>{{r.github}}</span>
      <span ng-if="r.linkedin" class="md-subhead page-subhead"><i class="fa fa-lg fa-linkedin-square"></i>{{r.linkedin}}</span>
    </div>
  </div>`
})

.component('resumeBody', {
  transclude: true,
  template: `<div layout="row" ng-transclude></div>`
})

.component('resumeColumn', {
  transclude: true,
  template: `<div ng-transclude></div>`
})

.component('sidebarCategory', {
  controllerAs: 'r',
  bindings: {
    name: '@'
  },
  transclude: true,
  template: `<div flex="" class="category-row">
    <div class="category">
      <h5 class="category-row-title">{{r.name}}</h5>
      <ng-transclude></ng-transclude>
    </div>
  </div>`
})

.component('category', {
  controllerAs: 'r',
  bindings: {
    name: '@'
  },
  transclude: true,
  template: `<div flex="" class="category-row">
    <h4 class="category-row-title">{{r.name}}</h4>
    <ng-transclude></ng-transclude>
  </div>`
})

.component('categoryItem', {
  controllerAs: 'r',
  bindings: {
    title: '@',
    subtitle: '@'
  },
  transclude: true,
  template: `<div class="category">
      <h5 class="category-title md-body-2">{{r.title}}</h5>&nbsp;
      <h5 class="category-subtitle md-caption">{{r.subtitle}}</h5>
      <ul class="category-bullets" ng-transclude></ul>
  </div>`
})
