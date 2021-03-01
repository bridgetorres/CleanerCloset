var columnCount=0;
var list = ["79.png","78.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","90.jpg","91.jpg","14.jpg","18.jpg","19.jpg"];
function display(src) {
  console.log("hi");
  document.getElementById("display").innerHTML="<img id='large' src="+src+">";
}
//upload pics
var multipleWidget = uploadcare.MultipleWidget("[role=uploadcare-uploader]");
$ = uploadcare.jQuery; // skip this if you already have jQuery on the page
multipleWidget.onChange(function(group) {
 if (group) {
	group; // group object
	group.files(); // array of file objects
	$.when.apply(null, group.files()).then(function() {
			arguments; // array of individual file infos
			$.each(arguments, function() {
			        //console.log(this.cdnUrl); // URL of uploaded file
              //console.log(this.uuid);   // UUID of uploaded file
              list.push(this.cdnUrl);
		 });
     //document.write(list);
     for (i=0;i<list.length;i++){
    console.log(list[i])
     };
     //display pics

     for (i=0; i<list.length; i++){
       document.getElementById("container");
       if(columnCount==0){

         var previous = document.getElementById("column1").innerHTML;
         previous += "<div><img class='border' onclick='display(this.src)'src='"+list[i]+"'</div>";
         document.getElementById("column1").innerHTML = previous;
         columnCount=columnCount+1;

       }
       else if (columnCount==1) {
         var previous = document.getElementById("column2").innerHTML;
         previous += "<div><img class='border' onclick='display(this.src)'src='"+list[i]+"'</div>";
         document.getElementById("column2").innerHTML = previous;
         columnCount=columnCount+1;

       }
       else{
         var previous = document.getElementById("column3").innerHTML;
         previous += "<div><img class='border' onclick='display(this.src)'src='"+list[i]+"'</div>";
         document.getElementById("column3").innerHTML = previous;
         columnCount=0;
       }
     }

	 });
} });
