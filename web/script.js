//@Author Valerie Reiss
var csv_data;
d3.csv("1.csv", function(data) {
       data.forEach(function(d) {
                    csv_data = data;
                    });
       }
       );
var csv_data_category_nums = [];
//this section keeps track of the number of entreis in a category


//load page so elements are available
window.onload = function() {
    sortData();
    //set the current focus of the page to none - that is, top level view. This will determine what will render.
    window.currentFocus = "none";
	window.subFocus = "none";
    //save the content element so we can update it as we go.
    var content = document.getElementById("content");
    //what we will update it with
    updateContent();
    
}

function updateContent() {
    //This will fire if we are at the top level. This will show an overview of each element based on what % of total data it is.
    var listingsHTML = "";
    var sideHTML = "";
    //if (window.currentFocus == "none") {
        var totalNum = 0;
        var colors = d3.scale.category10();
        for (var i=0; i< csv_data_category_nums.length; i++) {
            totalNum = totalNum + csv_data_category_nums[i][1];
        }
        for (var i=0; i < csv_data_category_nums.length; i++) {
            listingsHTML= listingsHTML + "<div id = '" + csv_data_category_nums[i][0] + "' onclick = 'updateFocus(&apos;"+csv_data_category_nums[i][0] +"&apos;)' title='Number of entries: "+ csv_data_category_nums[i][1] +"' style ='position: relative; background-color:"+ colors(i) +"; width:1100px; ' >" + csv_data_category_nums[i][0] + "</div>";
            
        }
    document.getElementById("content").innerHTML = listingsHTML;
    var e = document.getElementById("content").childNodes;
    for (var i=0; i< e.length; i++) {
        e[i].style.height = Math.floor(csv_data_category_nums[i][1]/totalNum * 670)+"px";
    }
    //if there is a focus now we need to update the window
    if (window.currentFocus != "none") {
        var elements = document.getElementById("content").childNodes;
		document.getElementById("content").onclick = null;
        for (var i=0; i< elements.length; i++) {
            if(elements[i].getAttribute('id') == window.currentFocus)
            {
                elements[i].style.height = (670-20*elements.length)+'px';
                //all all inner element subcategories to it:
                //first, get all the categories
                var subCategories = [];
				var subcatnum = 0;
                for (var j=0; j< csv_data.length;j++) {
                    if(csv_data[j].Category == window.currentFocus) {
                        var isNew = true;
                        for (var k=0; k< subCategories.length;k++) {
                            if (csv_data[j]["Sub-Category"] == subCategories[k][0]) {
                                isNew = false;
                                subCategories[k][1] = subCategories[k][1] + 1;
                            }
                        }
                        if (isNew) {
                            subCategories.push([csv_data[j]["Sub-Category"], 1]);
                        }
						subcatnum = subcatnum + 1;
                    }
                }
                //now display each one similarily to before
                var innerListings = "<div class='info' onclick=removeSub() style='float: left; width: 50px; height: 30px; bottom: 100px; position: absolute; font-size: 26px;'>"+elements[i].getAttribute('id')+"</div>";
				
					var innerColors = d3.scale.category20b();
                for (var z=0; z < subCategories.length;z++) {
                    innerListings = innerListings + "<div id= '"+ subCategories[z][0] +"' onclick = 'updateSubFocus(&apos;"+subCategories[z][0] +"&apos;)' style='width: 1050px; background-color:"+innerColors(z) +"; float: right; font-size: 12px; overflow: auto;'>"+subCategories[z][0]+"</div>";
                }
				elements[i].innerHTML = innerListings;
				//now fix sizing of each element:
				if (window.subFocus == "none") {
				
				var selectedChild = elements[i].childNodes;
				for (var j=1; j< selectedChild.length; j++) {
					selectedChild[j].style.height = subCategories[j-1][1]/subcatnum*(670-20*elements.length) + 'px';
				}
				} else {//Now we have to check if there is a subfocus and adjust all of the elements accordingly if so
				var selectedChild = elements[i].childNodes;
				for (var j=1; j< selectedChild.length; j++) {
					if(selectedChild[j].getAttribute('id') == window.subFocus) {
					selectedChild[j].style.height = (670-20*elements.length)-5*(selectedChild.length-2) + 'px';
					//Add in the items that are a part of this category now
					var numOfElements = 0;
					var text = "<div id='timeline'>TIMELINE</div>";
					for(var k=0;k<csv_data.length;k++) {
						if(csv_data[k]["Sub-Category"] == window.subFocus) {
							text = text + "<div id='"+k+"' class='article'    style='width: 1048px; '><p>"+csv_data[k]["Title"]+"</p></div>";
							/*$("#"+csv_data[k]["Title"]).hover(function() {
							$("#"+csv_data[k]["Title"]).innerHTML = "hi";	
							}, function() {
							$("#"+csv_data[k]["Title"]).innerHTML = "";
							});*/
							numOfElements = numOfElements + 1;
						}
					}
					selectedChild[j].innerHTML = text;
					//Now make it so each element will display stuff when it is hovered over.
					selectedChild[j].onclick = null;
					var newElements = selectedChild[j].childNodes;
					for(var z=1;z<newElements.length;z++) {
							window.selected = newElements[z];
							newElements[z].onclick=function() {
							document.getElementById("details").innerHTML=this.getAttribute("ID");
							this.className = "article selected";
							};
					}
					} else {
					selectedChild[j].style.height = '5px';
					selectedChild[j].innerHTML = '';
				}
				}
				
            }}
			 else {
                elements[i].style.height = '20px';
                elements[i].innerHTML = elements[i].getAttribute('id');
            }
        }
        document.getElementById("headers").innerHTML = "<h3  onclick = 'removeAll()'>Home</h3><h3  onclick = updateFocus(&apos;"+ window.currentFocus +"&apos;)'></h3>";
    } else {
        document.getElementById("headers").innerHTML = "";
    }
    
    //if there is a subfocus we now need to update that
    
    //}
    
    
}

function sortData() {
    for (var i = 0; i < csv_data.length; i++) {
        var Noexists = true;
        for (var j=0; j < csv_data_category_nums.length; j++) {
            if (csv_data[i].Category == csv_data_category_nums[j][0]) {
                Noexists = false;
                csv_data_category_nums[j][1] = csv_data_category_nums[j][1] + 1;
            }
        }
        if (Noexists) {
            csv_data_category_nums.push([csv_data[i].Category, 1]);
        }
    }
}
function changeContent(id, update) {
	var e = document.getElementById(id);
	if(id) {
		e.innerHTML = update;
	}
}

function updateFocus(newFocus) {
    window.currentFocus = newFocus;
	//window.subFocus = "none";
    updateContent();
}
function updateSubFocus(newFocus) {
	window.subFocus = newFocus;
	updateContent();}
function removeSub() {
	window.subFocus = "none";
	updateContent();
}
function removeAll() {
	window.subFocus = "none";
	window.currentFocus = "none";
	updateContent();
}
