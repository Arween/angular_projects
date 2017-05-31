/**
 * Created by user on 30.05.17.
 */

angular.module('APP',[]).
    directive('x',function () {
        return {
            scope:{},
            restrict: 'E',
            template: '<h1>I am X</h1>',
            link: function (scope, element, attrs) {
                element.addClass('box');
                element.bind('click', function (e) {
                    element.toggleClass('box');
                })
                element.prepend('this is prepend<hr/>')
                element.append('<hr>this is append');
                var h1 = angular.element(element.children()[1]);
                h1.text('I am an X');
                h1.css({"color":"darkslategrey"});
                h1.attr("id", "theX");
            }
        }
    })
