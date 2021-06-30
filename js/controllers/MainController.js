app.controller('MainController', ['$scope', function($scope) {
    $scope.today = new Date();
  
    $scope.appetizers = [
      {
        name: 'Caprese',
        description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
        price: 4.95
      },
      {
        name: 'Mozzarella Sticks',
        description: 'Served with marinara sauce.',
        price: 3.95
      }, 
      {
        name: 'Bruschetta',
        description: 'Grilled bread garlic, tomatoes, olive oil.',
        price: 4.95
      }
    ];
  
    $scope.mains = [
      {
        name:"Bacon cheeseburger",
        description:"Ooey gooey cheeseburger with sweetpotatoe fries.",
        price: 12.49
      },
      {
        name:"Five cheese Mac n' Cheese",
        description:"Pick five of your favorite cheeses to eat with this main dish.",
        price: 10.95
      },
      {
        name:"Chicken Pot Pie",
        description:"Chicken Pot Pie with carrots, celery, onions, and potatoes.",
        price: 11.59
      }
    ];
    
    $scope.extras = [
      {
        name:"Fries",
        description:"Choose between sweet potatoe fries, curly fries, or french fries.",
        price: 4.95
      },
      {
        name:"Mashed potatoes",
      description:"Creamy mashed potatoes with garlic.",
      price: 3.94
      },
      {
        name:"Asparagus",
      description:"Steamed or grilled asparagus with olive oil.",
      price: 5.95
      }
    ];
  }]);