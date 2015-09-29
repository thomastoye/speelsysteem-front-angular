/*global require, requirejs */

requirejs.config({
    //enforceDefine: true,
    paths: {
        'angular': ['/app/bower_components/angular/angular'],
        'angular-ui-router': ['/app/bower_components/angular-ui-router/release/angular-ui-router'],
        'angular-material': ['/app/bower_components/angular-material/angular-material'],
        'angular-resource': ['/app/bower_components/angular-resource/angular-resource'],
        'angular-animate': ['/app/bower_components/angular-animate/angular-animate'],
        'angular-aria': ['/app/bower_components/angular-aria/angular-aria'],
        'angular-material-icons': ['/app/bower_components/angular-material-icons/angular-material-icons'],
        'angular-messages': ['/app/bower_components/angular-messages/angular-messages'],
        'angular-i18n-nl': ['/app/bower_components/angular-i18n/angular-locale_nl-be']
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular'],
            exports: 'angular'
        },
        'angular-material': {
            deps: ['angular', 'angular-animate', 'angular-messages']
        },
        'angular-resource': {
            deps: ['angular']
        },
        'angular-animate': {
            deps: ['angular', 'angular-aria']
        },
        'angular-aria': {
            deps: ['angular']
        },
        'angular-material-icons': {
            deps: ['angular-material']
        },
        'angular-messages': {
            deps: ['angular']
        },
        'angular-i18n-nl': {
            deps: ['angular']
        }
    }
});

require(['angular', './controllers', './filters', './services', 'angular-ui-router', 'angular-material', 'angular-resource', 'angular-material-icons', 'angular-i18n-nl'],
    function (angular, controllers) {

        angular.module('speelApp', ['speelApp.filters', 'speelApp.services', 'ui.router', 'ngResource', 'ngMaterial', 'ngMdIcons', 'ngMessages', 'ngAnimate'])
            .config(function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/');

                $stateProvider
                    .state('home', {
                        url: '/',
                        templateUrl: '/app/to_refactor/templates/home.html',
                        controller: controllers.HomeCtrl
                    })
                    // Child routes
                    .state('child', {
                        url: '/kind',
                        templateUrl: '/app/to_refactor/templates/child/list.html',
                        controller: controllers.ChildListCtrl
                    })
                    .state('child.details', {
                        url: '/details/:id',
                        templateUrl: '/app/to_refactor/templates/child/details.html',
                        controller: controllers.ChildDetailsCtrl
                    })
                    .state('child.edit', {
                        url: '/bewerken/:id',
                        templateUrl: '/app/to_refactor/templates/child/form.html',
                        controller: controllers.ChildDetailsCtrl
                    })
                    .state('child.new', {
                        url: '/nieuw',
                        templateUrl: '/app/to_refactor/templates/child/form.html',
                        controller: controllers.NewChildCtrl
                    })
                    .state('child.attendances', {
                        url: '/aanwezigheden/:id',
                        templateUrl: '/app/to_refactor/templates/child/attendances.html',
                        controller: controllers.attendances.child.AttendancesSelectionCtrl
                    })
                    // Volunteer routes
                    .state('volunteer', {
                        url: '/animator',
                        templateUrl: '/app/to_refactor/templates/volunteer/list.html',
                        controller: controllers.VolunteerListCtrl
                    })
                    .state('volunteer.details', {
                        url: '/details/:id',
                        templateUrl: '/app/to_refactor/templates/volunteer/details.html',
                        controller: controllers.VolunteerDetailsCtrl
                    })
                    .state('volunteer.edit', {
                        url: '/bewerken/:id',
                        templateUrl: '/app/to_refactor/templates/volunteer/form.html',
                        controller: controllers.VolunteerDetailsCtrl
                    })
                    .state('volunteer.new', {
                        url: '/nieuw',
                        templateUrl: '/app/to_refactor/templates/volunteer/form.html',
                        controller: controllers.NewVolunteerCtrl
                    })
                    // Attendance routes
                    .state('attendance', {
                        url: '/aanwezigheden',
                        templateUrl: '/app/to_refactor/templates/attendance/home.html',
                        controller: controllers.attendances.HomeCtrl
                    })
                    .state('attendance.child', {
                        url: '/kind',
                        templateUrl: '/app/to_refactor/templates/attendance/child/daySelection.html',
                        controller: controllers.attendances.child.DaySelectionCtrl
                    })
                    .state('attendance.child.dayDetails', {
                        url: '/dag/:date',
                        templateUrl: '/app/to_refactor/templates/attendance/child/dayDetails.html',
                        controller: controllers.attendances.child.DayDetailsCtrl
                    })
                    .state('attendance.volunteer', {
                        url: '/vrijwilliger',
                        templateUrl: '/app/to_refactor/templates/attendance/volunteer/daySelection.html',
                        controller: controllers.attendances.volunteer.DaySelectionCtrl
                    })
                    .state('attendance.volunteer.dayDetails', {
                        url: '/dag/:date',
                        templateUrl: '/app/to_refactor/templates/attendance/volunteer/dayDetails.html',
                        controller: controllers.attendances.volunteer.DayDetailsCtrl
                    })
                    .state('reports', {
                        url: '/rapporten',
                        templateUrl: '/app/to_refactor/templates/reports/home.html',
                        controller: controllers.ReportsCtrl
                    });
            });

        angular.bootstrap(document, ['speelApp']);

    });
