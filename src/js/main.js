var paywall = require("./lib/paywall");
setTimeout(() => paywall(12418259), 5000);

require("component-responsive-frame/child");
require("angular");

var app = angular.module("chips-list", []);

app.controller("ChipsController", ["$scope", function($scope) {
  $scope.recruits = chipsData;

  $scope.headers = [{
    title: "Name",
    short: "lastname"
  }, {
    title: "Chip",
    short: "chip"
  }, {
    title: "Position",
    short: "position"
  }, {
    title: "Height",
    short: "height"
  }, {
    title: "Weight",
    short: "weight"
  }, {
    title: "School",
    short: "school"
  }, {
    title: "Commitment",
    short: "commitment"
  }, {
    title: "Commment",
    short: "comment"
  }];

  $scope.selected = $scope.headers[1];
  $scope.sortOrder = -1;

  $scope.sortTable = function(header) {

    if ($scope.selected == header) {
      $scope.sortOrder *= -1;
    } else {
      $scope.selected = header;
      $scope.sortOrder = 1;
    }

    $scope.recruits.sort(function(a, b) {
      a = a[header.short] || (header.short == "rivals" ? 999999999 :
        "ZZZZZZZZZZ");
      b = b[header.short] || (header.short == "rivals" ? 999999999 :
        "ZZZZZZZZZZ");

      if (a > b) {
        return 1 * $scope.sortOrder;
      } else if (a < b) {
        return -1 * $scope.sortOrder;
      } else if (a == b) {
        return 0;
      }
    });
  };
  $scope.sortTable($scope.selected);
}]);

