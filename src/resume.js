angular.module('Resume', ['ngMaterial'])

.component('resume', {
    transclude: true,
    template: `<div class="resume">
      <section class="main" ng-transclude></section>
    </div>`
})

.component('resumeHeading', {
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
        <h1 class="page-title page-title-first">{{firstName}}</h1>
        <h1 class="page-title page-title-last">{{lastName}}</h1>
      </div>
      <div class="header-icons">
        <span ng-if="website" class="md-subhead page-subhead"><i class="fa fa-lg fa-code"></i>{{website}}</span>
        <span ng-if="phone" class="md-subhead page-subhead"><i class="fa fa-lg fa-phone"></i>{{phone}}</span>
        <span ng-if="email" class="md-subhead page-subhead"><i class="fa fa-lg fa-envelope"></i>{{email}}</span>
        <span ng-if="github" class="md-subhead page-subhead"><i class="fa fa-lg fa-github"></i>{{github}}</span>
        <span ng-if="linkedin" class="md-subhead page-subhead"><i class="fa fa-lg fa-linkedin-square"></i>{{linkedin}}</span>
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
    bindings: {
      name: '@'
    },
    transclude: true,
    template: `<div flex="" class="category-row">
      <div class="category">
        <h5 class="category-row-title">{{name}}</h5>
        <ng-transclude></ng-transclude>
      </div>
    </div>`
})

.component('category', {
    bindings: {
      name: '@'
    },
    transclude: true,
    template: `<div flex="" class="category-row">
      <h4 class="category-row-title">{{name}}</h4>
      <ng-transclude></ng-transclude>
    </div>`
})

.component('categoryItem', {
    bindings: {
      title: '@',
      subtitle: '@'
    },
    transclude: true,
    template: `<div class="category">
        <h5 class="category-title md-body-2">{{title}}</h5>&nbsp;
        <h5 class="category-subtitle md-caption">{{subtitle}}</h5>
        <ul class="category-bullets" ng-transclude></ul>
    </div>`
})
