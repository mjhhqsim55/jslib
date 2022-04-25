 var  runner = function(t ,  banner){
	 var x = 0 ;  var count = 0 ;  var t7 = t ;  var stringt = "" ;  const width = banner.clientWidth ;  var is = 0 ;   
	 var container = banner.getElementsByClassName("container")[0] ;  
     var divs = container.getElementsByTagName("div") ; 
     var divst ;      
     for(var i = 0 ; i< divs.length ; i++){ 
	           divs[i].style.width =  width+"px"  ; }      
      divs = copy(divs) ;  
     var runner = setInterval(function() {
		 if(is>1000) { 
		  container.style.left = x + "px" ; 
		  if( x<-width  ){ 
	      container.style.left = -width + "px" ; 
           count++ ; 
           if(count>=1000){
	          moveR(divs) ; 
              stringt = "" ;   
              for(var i = 0 ; i< divs.length ; i++){
	            stringt +=  divs[i]   ; } 
              container.innerHTML = stringt ; 
              divst = container.getElementsByTagName("div") ; 
              for(var i = 0 ; i< divst.length ; i++){ 
	           divst[i].style.width =  width+"px"  ; }      
              x = 0 ;  t7 = t ; 
              count = 0 ; 
              container.style.left = x + "px" ; 
             } }else{ t7 *=  (1+0.001)  ;  
            x -= t7 ; } }else{ is++ ;
        } } , 5 ) ; } 
 var banner$runner = function(t){
	var banner = document.getElementsByClassName("banner")  ;   
	for(var i = 0 ; i< banner.length ; i++){
	     runner(t , banner[i]) ;        
    } 
}
var moveR = function(t){ 
  var e0 = t[0] ;	
   for(var i = 0 ; i < t.length ; i++ ) {
	 if( i==t.length-1 ) { 
		t[i] = e0 ;  }else{
		t[i] = t[i+1] ;  } } }

var copy = function(t){
	var t7 = new Array(t.length) ; 
	for(var i = 0 ; i < t.length ; i++ ) {
		t7[i] =  "<div>"+ t[i].innerHTML+"</div>"  ; 
    } return t7 ;   }
 

