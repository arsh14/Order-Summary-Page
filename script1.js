var j;
var i;
var temp=0 ,k=0;
function addMore(){};
var da="",t="";
$.ajax({
        url: "blob/master/assignment.json",//on local host "https://indapi.kumba.io/webdev/assignment"
        type: 'GET',
        dataType: 'json', // added data type
        success: function(res) {
            console.log(res);
            //alert(res);
		document.querySelector("#resname").textContent=res.restaurant.name;
		document.querySelector("#address").textContent=res.restaurant.street + ", " + res.restaurant.city + ", " + res.restaurant.state + ", " + res.restaurant.zipcode;
		document.querySelector("#uname").textContent=res.user.name;
		document.querySelector("#iname").textContent=res.user.id;
		j=0;

		for(i=0; (i<3 && i<res.items.length);i++)
		{	j++;   
			if(i==0){
				document.querySelector("#ia").textContent=res.items[i].name;
				document.querySelector("#ca").textContent=res.items[i].category;
				document.querySelector("#pa").textContent=res.items[i].price;
				document.querySelector("#cua").textContent=res.items[i].currency;
				document.querySelector("#ta").textContent=res.items[i].tax;

			}
			else if(i==1){
				document.querySelector("#ib").textContent=res.items[i].name;
				document.querySelector("#cb").textContent=res.items[i].category;
				document.querySelector("#pb").textContent=res.items[i].price;
				document.querySelector("#cub").textContent=res.items[i].currency;
				document.querySelector("#tb").textContent=res.items[i].tax;

			}
			else if(i==2){
				document.querySelector("#ic").textContent=res.items[i].name;
				document.querySelector("#cc").textContent=res.items[i].category;
				document.querySelector("#pc").textContent=res.items[i].price;
				document.querySelector("#cuc").textContent=res.items[i].currency;
				document.querySelector("#tc").textContent=res.items[i].tax;

			}
			function addMore(){
				for(i=0; (i<3 && i<res.items.length);i++)
		{	j++;   
			if(i==0){
				document.querySelector("#ia").textContent=res.items[i].name;
				document.querySelector("#ca").textContent=res.items[i].category;
				document.querySelector("#pa").textContent=res.items[i].price;
				document.querySelector("#cua").textContent=res.items[i].currency;
				document.querySelector("#ta").textContent=res.items[i].tax;

			}
			else if(i==1){
				document.querySelector("#ib").textContent=res.items[i].name;
				document.querySelector("#cb").textContent=res.items[i].category;
				document.querySelector("#pb").textContent=res.items[i].price;
				document.querySelector("#cub").textContent=res.items[i].currency;
				document.querySelector("#tb").textContent=res.items[i].tax;

			}
			else if(i==2){
				document.querySelector("#ic").textContent=res.items[i].name;
				document.querySelector("#cc").textContent=res.items[i].category;
				document.querySelector("#pc").textContent=res.items[i].price;
				document.querySelector("#cuc").textContent=res.items[i].currency;
				document.querySelector("#tc").textContent=res.items[i].tax;

			}


			}
		}



			
		};
		for(i=0;i<res.items.length; i++){
        	temp+=res.items[i].price+res.items[i].tax;
        }
        for(i=0;i<res.createdAt.length;i++)
        {
        	
        	if (res.createdAt[i]=="T")
        		break;
        	else{
        		da+=res.createdAt[i];
        	}
        	k++;
        }
        for(i=k+1;i<(res.createdAt.length-5);i++)
        {
        	t+=res.createdAt[i];
        }
        console.log(da);
        document.querySelector("#od").textContent=res.restaurant.order_id;
        
        document.querySelector("#Total").textContent=temp;

        document.querySelector("#date").textContent=da;
        document.querySelector("#time").textContent=t;
		
		

        }
        
        
    });



