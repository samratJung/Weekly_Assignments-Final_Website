        var image1 = new Image();
        image1.src = "./img/headphone1.jpg";
  
        var image2 = new Image() ;
        image2.src = "./img/headphone2.jpg";
  
        var image3 = new Image() ;
        image3.src = "./img/headphone3.jpg";
  
        var image4 = new Image();
        image4.src = "./img/headphone4.jpg";
  
        var image5 = new Image();
        image5.src = "./img/headphone5.jpg";      
  
        var image6 = new Image();
        image6.src = "./img/headphone6.jpg";              


        var step=1
        
        function slideit()
        {

        if (!document.images){return;}

        document.images.slide.src=eval("image" + step + ".src");

		document.images.slide.src=eval("image" + step + ".src");
        
        if (step<6){step++;}

        else {step=1;}

                    
        setTimeout("slideit()", 2500);

        }

        slideit();
