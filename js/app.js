(function() {
  var app = angular.module('app', []);


  app.controller('galleryController', function($scope){
    this.images = gallery;
	 // Set large image to selected thumbnail
	$scope.mainImageUrl = gallery[6].image;
	  

  $scope.thumbClicked = function () {
     $scope.mainImageUrl = this.image.image;      
           
   };
	  
  });
	
  var gallery = [
	  {image: "./img/img1.jpg",
	   description: "This is image1"
	  },{image: "./img/img2.jpg",
	   description: "This is image2"
	  },{image: "./img/img3.jpg",
	   description: "This is image3"
	  },{image: "./img/img4.jpg",
	   description: "This is image4"
	  },{image: "./img/img5.jpg",
	   description: "This is image5"
	  },{image: "./img/img6.jpg",
	   description: "This is image6"
	  },{image: "./img/img7.jpg",
	   description: "This is image7"
	  },{image: "./img/img8.jpg",
	   description: "This is image8"
	  },{image: "./img/img9.jpg",
	   description: "This is image9"
	  },{image: "./img/img11.jpg",
	   description: "This is image11"	
	  },{image: "./img/img12.jpg",
	   description: "This is image12"
	  },{image: "./img/img13.jpg",
	   description: "This is image13"
	  },{image: "./img/img14.jpg",
	   description: "This is image14"
	  },{image: "./img/img15.jpg",
	   description: "This is image15"		 
	  },{image: "./img/img16.jpg",
	   description: "This is image16"
	  }];	
    
})();
